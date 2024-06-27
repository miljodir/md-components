import { useState, useCallback, useEffect } from 'react';
import type { DragEvent, ChangeEvent } from 'react';

type useFileUploadHook = {
  files: File[];
  fileNames: string[];
  fileTypes: string[];
  totalSize: string;
  totalSizeInBytes: number;
  clearAllFiles: () => void;
  createFormData: () => FormData;
  handleDragDropEvent: (_e: DragEvent<HTMLDivElement>) => void;
  removeFile: (_file: string) => void;
  setFiles: (
    _e: ChangeEvent<HTMLElement> | DragEvent<HTMLDivElement>,
    _mode?: 'a' | 'w',
    _imagesOnly?: boolean,
  ) => void;
};

const formatBytes = (bytes: number, decimals = 2): string => {
  if (typeof bytes !== 'number') return 'n/a';
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const getTotalSizeInBytes = (files: File[]): number => {
  return files.reduce((acc, file: File) => {
    return (acc += file.size);
  }, 0);
};

const handleDragDropEvent = (e: DragEvent<HTMLDivElement>) => {
  e.stopPropagation();
  e.preventDefault();
};

export const useFileUpload = (): useFileUploadHook => {
  const [files, setFilesState] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileTypes, setFileTypes] = useState<string[]>([]);
  const [totalSize, setTotalSize] = useState('');
  const [totalSizeInBytes, setTotalSizeInBytes] = useState(0);

  useEffect(() => {
    setFileNames(
      files.map((file: File) => {
        return file.name;
      }),
    );
    setFileTypes(
      files.map((file: File) => {
        return file.type;
      }),
    );
    handleSizes(files);
  }, [files]);

  const setFiles = useCallback(
    (e: ChangeEvent<HTMLElement> | DragEvent<HTMLDivElement>, mode = 'w', imagesOnly = false): void => {
      let filesArr: File[] = [];

      const dataTransfer = (e as React.DragEvent<HTMLDivElement>).dataTransfer;
      const currentTarget = (e as ChangeEvent<HTMLInputElement>).currentTarget;

      if (currentTarget?.files) {
        filesArr = Array.from(currentTarget.files);
      } else if (dataTransfer.files) {
        filesArr = Array.from(dataTransfer.files);
      } else {
        // eslint-disable-next-line no-console
        console.error('Argument not recognized. Are you sure your passing setFiles an event object?');
      }

      let newFiles: File[] = [];
      if (imagesOnly) {
        newFiles = filesArr.filter((file: File) => {
          return file && file['type'].split('/')[0] === 'image';
        });
      } else {
        newFiles = filesArr;
      }

      if (mode === 'w') {
        setFilesState(newFiles);
      } else if (mode === 'a') {
        setFilesState([...files, ...newFiles]);
      }
    },
    [files],
  );

  const handleSizes = useCallback((files: File[]): void => {
    const sizeInBytes = getTotalSizeInBytes(files);
    const prettySize = formatBytes(sizeInBytes);
    setTotalSizeInBytes(sizeInBytes);
    setTotalSize(prettySize);
  }, []);

  const removeFile = useCallback(
    (file: string): void => {
      if (typeof file !== 'number' && typeof file !== 'string') {
        // eslint-disable-next-line no-console
        console.error('argument supplied to removeFile must be of type number or string.');
        return;
      }

      if (typeof file === 'string') {
        setFilesState(
          files.filter((_file: File) => {
            return _file.name !== file;
          }),
        );
      } else {
        setFilesState(
          files.filter((_file: File, i) => {
            return i !== file;
          }),
        );
      }
    },
    [files],
  );

  const clearAllFiles = useCallback((): void => {
    setFilesState([]);
  }, []);

  const createFormData = useCallback((): FormData => {
    const formData = new FormData();

    files.map((file: File) => {
      return formData.append(file.name, file);
    });

    return formData;
  }, [files]);

  return {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    clearAllFiles,
    createFormData,
    handleDragDropEvent,
    removeFile,
    setFiles,
  };
};
