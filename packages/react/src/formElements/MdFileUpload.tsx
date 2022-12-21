import React, { useRef, ChangeEvent, DragEvent, MouseEvent } from 'react';
import classnames from 'classnames';
import { useFileUpload } from '../hooks/useFileUpload';
import MdFileList from '../fileList/MdFileList';
import MdButton from '../button/MdButton';

import UploadIcon from '../icons/UploadIcon';

interface MdFileUploadProps {
  onUpload?(files: File[] | FormData): void;
  onCancel?(e: MouseEvent): void;
  useFormData?: boolean;
  uploadButtonText?: string;
  cancelButtonText?: string;
  hideFileListIcons?: boolean;
};

const MdFileUpload: React.FunctionComponent<MdFileUploadProps> = ({
  onUpload,
  onCancel,
  useFormData = false,
  uploadButtonText = 'Last opp',
  cancelButtonText = 'Avbryt',
  hideFileListIcons = false
}: MdFileUploadProps) => {
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if (onUpload) {
      if (useFormData) {
        const formData = createFormData();
        onUpload(formData);
      } else {
        onUpload(files);
      }
    }
  };

  const handleCancel = (e: MouseEvent) => {
    e.preventDefault();
    clearAllFiles();
    if (onCancel) {
      onCancel(e);
    }
  }

  const outerClassnames = classnames('md-fileupload');
  const dropAreaClassnames = classnames('md-fileupload__droparea');

  const onDragEnterEvent = (e: DragEvent<HTMLDivElement>) => {
    handleDragDropEvent(e);
    // @ts-ignore
    e.target?.classList?.add('md-fileupload__droparea--active');
  }

  const onDragLeaveEvent = (e: DragEvent<HTMLDivElement>) => {
    handleDragDropEvent(e);
    // @ts-ignore
    e.target?.classList?.remove('md-fileupload__droparea--active');
  }

  const onRemoveFile = ((file: File) => {
    removeFile(file.name);
  })

  return (
    <div className={outerClassnames}>
      <div
        className={dropAreaClassnames}
        onDragEnter={onDragEnterEvent}
        onDragLeave={onDragLeaveEvent}
        onDragEnd={onDragLeaveEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e: DragEvent<HTMLDivElement>) => {
          handleDragDropEvent(e);
          onDragLeaveEvent(e);
          setFiles(e, 'a');
        }}
      >
        <div className="md-fileupload__droparea-icon">
          <UploadIcon />
        </div>

        <div className="md-fileupload__droparea-content">
          Dropp en fil eller <button onClick={() => inputRef.current?.click()}>velg fra denne maskinen</button>
        </div>

        <input
          ref={inputRef}
          type="file"
          multiple
          className="md-fileupload__input"
          onChange={(e: ChangeEvent<HTMLElement> | DragEvent<HTMLDivElement>) => {
            setFiles(e, 'a');
            if (inputRef && inputRef.current) {
              inputRef.current.value = '';
            }
          }}
        />

        {files && files.length > 0 &&
          <div className="md-fileupload__files-wrapper">
            <MdFileList
              files={files}
              hideDownload={true}
              allowDelete={true}
              hideIcons={hideFileListIcons}
              onRemoveFile={(file: File) => onRemoveFile(file)}
            />
          </div>
        }
      </div>

      <div className="md-fileupload__actions">
        <MdButton
          theme="secondary"
          onClick={handleCancel}
        >
          {cancelButtonText}
        </MdButton>
        <MdButton
          onClick={handleSubmit}
        >
          {uploadButtonText}
        </MdButton>
      </div>
    </div>
  );
}

export default MdFileUpload;