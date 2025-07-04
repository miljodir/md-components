'use client';

import classnames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';
import MdButton from '../button/MdButton';
import MdFileList from '../fileList/MdFileList';
import { useFileUpload } from '../hooks/useFileUpload';
import MdIconUpload from '../icons-material/MdIconUpload';
import type { ChangeEvent, DragEvent, MouseEvent } from 'react';

export interface MdFileUploadProps {
  onUpload?(_files: File[] | FormData): void;
  onCancel?(_e: MouseEvent): void;
  useFormData?: boolean;
  uploadButtonText?: string;
  cancelButtonText?: string;
  uploadTexts?: [string, string];
  hideFileListIcons?: boolean;
  multiple?: boolean;
  imagesOnly?: boolean;
  automaticTrigger?: boolean;
  hideButtons?: boolean;
}

export const MdFileUpload: React.FunctionComponent<MdFileUploadProps> = ({
  onUpload,
  onCancel,
  useFormData = false,
  uploadButtonText = 'Last opp',
  cancelButtonText = 'Avbryt',
  uploadTexts,
  hideFileListIcons = false,
  multiple = true,
  imagesOnly = false,
  automaticTrigger = false,
  hideButtons = false,
}: MdFileUploadProps) => {
  const { files, handleDragDropEvent, clearAllFiles, createFormData, setFiles, removeFile } = useFileUpload();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    async (e?: MouseEvent) => {
      if (e) {
        e.preventDefault();
      }
      if (onUpload) {
        if (useFormData) {
          const formData = createFormData();
          onUpload(formData);
        } else {
          onUpload(files);
        }
      }
    },
    [onUpload, useFormData, createFormData, files],
  );

  useEffect(() => {
    if (automaticTrigger && files.length !== 0) {
      handleSubmit();
    }
  }, [automaticTrigger, files, handleSubmit]);

  const handleCancel = (e: MouseEvent) => {
    e.preventDefault();
    clearAllFiles();
    if (onCancel) {
      onCancel(e);
    }
  };

  const outerClassnames = classnames('md-fileupload');
  const dropAreaClassnames = classnames('md-fileupload__droparea');

  const onDragEnterEvent = (e: DragEvent<HTMLDivElement>) => {
    handleDragDropEvent(e);

    if (!multiple && files.length > 0) {
      (e.target as Element)?.classList?.add('md-fileupload__droparea--not-allowed');
    } else {
      (e.target as Element)?.classList?.add('md-fileupload__droparea--active');
    }
  };

  const onDragLeaveEvent = (e: DragEvent<HTMLDivElement>) => {
    handleDragDropEvent(e);
    (e.target as Element)?.classList?.remove('md-fileupload__droparea--active');
    (e.target as Element)?.classList?.remove('md-fileupload__droparea--not-allowed');
  };

  const onRemoveFile = (file: File) => {
    removeFile(file.name);
  };

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
          if (multiple || (!multiple && files.length < 1)) {
            setFiles(e, 'a', imagesOnly);
          }
        }}
      >
        <div aria-hidden="true" className="md-fileupload__droparea-icon">
          <MdIconUpload />
        </div>

        <div className="md-fileupload__droparea-content">
          {uploadTexts && uploadTexts[0] ? uploadTexts[0] : `Dropp ${imagesOnly ? 'et bilde' : 'en fil'} her eller`}
          <button
            className="md-fileupload__button"
            type="button"
            onClick={() => {
              return inputRef.current?.click();
            }}
          >
            {uploadTexts && uploadTexts[1] ? uploadTexts[1] : 'velg fra denne maskinen'}
          </button>
          <div className="md-fileupload__droparea-content--count">
            Antall {imagesOnly ? 'bilder' : 'filer'}: {files.length} {!multiple ? '/ 1' : ''}
          </div>
        </div>

        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          className="md-fileupload__input"
          accept={imagesOnly ? 'image/*' : '*'}
          onChange={(e: ChangeEvent<HTMLElement> | DragEvent<HTMLDivElement>) => {
            if (multiple || (!multiple && files.length < 1)) {
              setFiles(e, 'a', imagesOnly);
              if (inputRef && inputRef.current) {
                inputRef.current.value = '';
              }
            }
          }}
        />

        {files && files.length > 0 && (
          <div className="md-fileupload__files-wrapper">
            <MdFileList
              files={files}
              hideDownload={true}
              allowDelete={true}
              hideIcons={hideFileListIcons}
              onRemoveFile={(file: File) => {
                return onRemoveFile(file);
              }}
            />
          </div>
        )}
      </div>
      {!hideButtons && (
        <div className="md-fileupload__actions">
          <MdButton theme="secondary" onClick={handleCancel}>
            {cancelButtonText}
          </MdButton>
          <MdButton onClick={handleSubmit} disabled={!files || files.length === 0}>
            {uploadButtonText}
          </MdButton>
        </div>
      )}
    </div>
  );
};

export default MdFileUpload;
