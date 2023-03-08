import React from 'react';
import classnames from 'classnames';

import MdDocIcon from '../icons/MdDocIcon';
import MdDeleteIcon from '../icons/MdDeleteIcon';
import MdDownloadIcon from '../icons/MdDownloadIcon';
import MdEditIcon from '../icons/MdEditIcon';

interface FileType {
  name: string;
  id?: string | number;
  url?: string;
  size?: number;
  type?: string
};

interface MdFileListProps {
  files?: File[] | FileType[];
  hideDownload?: boolean;
  allowDelete?: boolean;
  allowEdit?: boolean;
  hideIcons?: boolean;
  onRemoveFile?(file: File | FileType): void;
  onDownloadFile?(file: File | FileType): void;
  onEditFile?(file: File | FileType): void;
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

const MdFileList: React.FunctionComponent<MdFileListProps> = ({
  files,
  hideDownload = false,
  allowDelete = false,
  allowEdit = true,
  hideIcons = false,
  onRemoveFile,
  onDownloadFile,
  onEditFile
}: MdFileListProps) => {
  const outerClass = classnames('md-filelist');
  const fileClass = classnames('md-filelist__file');

  return (
    <div className={outerClass}>
      {files && files.length > 0 && files.map((file: FileType | File, index: number) => (
        <div
          key={`md-filelist-file-${file.name}-${index}`}
          className={fileClass}
        >
          <div className="md-filelist__file-label">
            {!hideIcons &&
              <div className="md-filelist__file-icon">
                <MdDocIcon />
              </div>
            }
            <div>
              <div>{file.name}</div>
              {file.size &&
                <div className="md-filelist__file-size">{formatBytes(file.size)}</div>
              }
            </div>
          </div>

          <div className="md-filelist__file-actions">
            {!hideDownload && onDownloadFile && ('url' in file) &&
              <button
                className="md-filelist__file-actions-button md-filelist__file-download"
                onClick={() => {onDownloadFile(file)}}
              >
                <MdDownloadIcon className="md-filelist__file-download-icon" />
              </button>
            }

            {allowDelete && onRemoveFile &&
              <button
                className="md-filelist__file-actions-button md-filelist__file-delete"
                onClick={() => {onRemoveFile(file)}}
              >
                <MdDeleteIcon className="md-filelist__file-delete-icon" />
              </button>
            }

            {allowEdit && onEditFile &&
              <button
                className="md-filelist__file-actions-button md-filelist__file-edit"
                onClick={() => {onEditFile(file)}}
              >
                <MdEditIcon className="md-filelist__file-delete-icon" />
              </button>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default MdFileList;
