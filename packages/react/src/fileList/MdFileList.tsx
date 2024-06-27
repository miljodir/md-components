import classnames from 'classnames';
import React from 'react';

import MdDeleteIcon from '../icons/MdDeleteIcon';
import MdDocIcon from '../icons/MdDocIcon';
import MdDownloadIcon from '../icons/MdDownloadIcon';
import MdEditIcon from '../icons/MdEditIcon';
import MdPrintIcon from '../icons/MdPrintIcon';

interface FileType {
  name: string;
  id?: string | number;
  url?: string;
  size?: number;
  type?: string;
}

export interface MdFileListProps {
  files?: File[] | FileType[];
  hideDownload?: boolean;
  hidePrint?: boolean;
  allowDelete?: boolean;
  allowEdit?: boolean;
  hideIcons?: boolean;
  printableFileTypes?: string[];
  onRemoveFile?(_file: File | FileType): void;
  onDownloadFile?(_file: File | FileType): void;
  onEditFile?(_file: File | FileType): void;
  onPrintFile?(_file: File | FileType): void;
}

const formatBytes = (bytes: number, decimals = 2): string => {
  if (typeof bytes !== 'number') return 'n/a';
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const MdFileList: React.FunctionComponent<MdFileListProps> = ({
  files,
  hideDownload = false,
  hidePrint = true,
  allowDelete = false,
  allowEdit = true,
  hideIcons = false,
  printableFileTypes = ['pdf', 'docx'],
  onRemoveFile,
  onDownloadFile,
  onEditFile,
  onPrintFile,
}: MdFileListProps) => {
  const outerClass = classnames('md-filelist');
  const fileClass = classnames('md-filelist__file');

  return (
    <div className={outerClass}>
      {files &&
        files.length > 0 &&
        files.map((file: FileType | File, index: number) => {
          const fileEnding = file.name.split('.').pop();

          return (
            <div key={`md-filelist-file-${file.name}-${index}`} className={fileClass}>
              <div className="md-filelist__file-label">
                {!hideIcons && (
                  <div className="md-filelist__file-icon">
                    <MdDocIcon aria-hidden="true" />
                  </div>
                )}
                <div>
                  <div>{file.name}</div>
                  {file.size && <div className="md-filelist__file-size">{formatBytes(file.size)}</div>}
                </div>
              </div>

              <div className="md-filelist__file-actions">
                {!hideDownload && onDownloadFile && 'url' in file && (
                  <button
                    type="button"
                    aria-label="Last ned fil"
                    className="md-filelist__file-actions-button"
                    onClick={() => {
                      onDownloadFile(file);
                    }}
                  >
                    <MdDownloadIcon aria-hidden="true" className="md-filelist__file-action-icon" />
                  </button>
                )}

                {allowDelete && onRemoveFile && (
                  <button
                    type="button"
                    aria-label="Slett fil"
                    className="md-filelist__file-actions-button"
                    onClick={() => {
                      onRemoveFile(file);
                    }}
                  >
                    <MdDeleteIcon aria-hidden="true" className="md-filelist__file-action-icon" />
                  </button>
                )}

                {allowEdit && onEditFile && (
                  <button
                    type="button"
                    aria-label="Rediger fil"
                    className="md-filelist__file-actions-button"
                    onClick={() => {
                      onEditFile(file);
                    }}
                  >
                    <MdEditIcon aria-hidden="true" className="md-filelist__file-action-icon" />
                  </button>
                )}

                {!hidePrint && onPrintFile && fileEnding && printableFileTypes.includes(fileEnding) && (
                  <button
                    type="button"
                    aria-label="Skriv ut fil"
                    className="md-filelist__file-actions-button"
                    onClick={() => {
                      onPrintFile(file);
                    }}
                  >
                    <MdPrintIcon aria-hidden="true" className="md-filelist__file-action-icon" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MdFileList;
