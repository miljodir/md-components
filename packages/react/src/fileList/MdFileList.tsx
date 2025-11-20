'use client';

import classnames from 'classnames';
import React from 'react';
import MdIconButton from '../iconButton/MdIconButton';
import MdIconDelete from '../icons-material/MdIconDelete';
import MdIconDescription from '../icons-material/MdIconDescription';
import MdIconDownload from '../icons-material/MdIconDownload';
import MdIconEdit from '../icons-material/MdIconEdit';
import MdIconPrint from '../icons-material/MdIconPrint';

interface FileType {
  name: string;
  id?: string;
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
  labels?: {
    delete?: string;
    download?: string;
    edit?: string;
    print?: string;
  };
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

export const MdFileList: React.FunctionComponent<MdFileListProps> = ({
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
  labels = {}
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
                    <MdIconDescription aria-hidden="true" />
                  </div>
                )}
                <div>
                  <div>{file.name}</div>
                  {file.size && <div className="md-filelist__file-size">{formatBytes(file.size)}</div>}
                </div>
              </div>

              <div className="md-filelist__file-actions">
                {!hideDownload && onDownloadFile && 'url' in file && (
                  <MdIconButton
                    theme="plain"
                    type="button"
                    showTooltip
                    aria-label={labels?.download || 'Last ned fil'}
                    onClick={() => {
                      onDownloadFile(file);
                    }}
                  >
                    <MdIconDownload />
                  </MdIconButton>
                )}

                {allowDelete && onRemoveFile && (
                  <MdIconButton
                    theme="plain"
                    showTooltip
                    type="button"
                    aria-label={labels?.delete || 'Slett fil'}
                    onClick={() => {
                      onRemoveFile(file);
                    }}
                  >
                    <MdIconDelete />
                  </MdIconButton>
                )}

                {allowEdit && onEditFile && (
                  <MdIconButton
                    type="button"
                    showTooltip
                    theme="plain"
                    aria-label={labels?.edit || 'Rediger fil'}
                    onClick={() => {
                      onEditFile(file);
                    }}
                  >
                    <MdIconEdit />
                  </MdIconButton>
                )}

                {!hidePrint && onPrintFile && fileEnding && printableFileTypes.includes(fileEnding) && (
                  <MdIconButton
                    type="button"
                    theme="plain"
                    showTooltip
                    aria-label={labels?.print || 'Skriv ut fil'}
                    onClick={() => {
                      onPrintFile(file);
                    }}
                  >
                    <MdIconPrint />
                  </MdIconButton>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MdFileList;
