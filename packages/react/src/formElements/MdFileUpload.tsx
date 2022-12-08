import React, { useRef, ChangeEvent, DragEvent } from 'react';
import classnames from 'classnames';
import { useFileUpload } from '../hooks/useFileUpload';
import MdButton from '../button/MdButton';

import UploadIcon from '../icons/UploadIcon';

interface MdFileUploadProps {};

const MdFileUpload: React.FunctionComponent<MdFileUploadProps> = ({
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

  console.log(files);

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files);
  };

  const outerClassnames = classnames('md-fileupload');

  const dropAreaClassnames = classnames('md-fileupload__droparea')

  return (
    <div className={outerClassnames}>
      <div
        className={dropAreaClassnames}
        onDragEnter={handleDragDropEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e: DragEvent<HTMLDivElement>) => {
          handleDragDropEvent(e);
          setFiles(e, 'a');
        }}
      >
        <div className="md-fileupload__droparea-icon">
          <UploadIcon />
        </div>

        <div className="md-fileupload__droparea-content">
          Dropp en fil eller <button onClick={() => inputRef.current.click()}>velg fra denne maskinen</button>
        </div>

        <input
          ref={inputRef}
          type="file"
          multiple
          className="md-fileupload__input"
          onChange={(e: ChangeEvent<HTMLElement> | DragEvent<HTMLDivElement>) => {
            setFiles(e, 'a');
            inputRef.current.value = null;
          }}
        />
      </div>

      <div className="md-fileupload__actions">
        <MdButton theme="secondary">Avbryt</MdButton>
        <MdButton>Last opp</MdButton>
      </div>
    </div>
  );
}

export default MdFileUpload;
