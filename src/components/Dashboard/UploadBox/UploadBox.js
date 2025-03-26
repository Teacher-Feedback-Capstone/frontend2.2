import React, { useState, useCallback, useRef } from 'react';
import styles from './UploadBox.module.css';
import uploadFile from '../../../api/file-upload';

const UploadBox = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const setUploadStatus = (status) => {
    console.log(status);
  }

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  }, []);

  const handleFileSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  }, []);

  const handleClick = () => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    // key 'audio' as per your backend requirement
    formData.append('audio', selectedFile);

    try {
      await uploadFile(formData, setUploadStatus);
      console.log('Upload successful');
      // Optionally clear selected file after upload
      setSelectedFile(null);
    } catch (err) {
      console.error('Upload failed', err);
    }
  };

  return (
    <div className={styles.uploadBox}>
      <h1>Upload</h1>
      <div
        className={`${styles.uploadZone} ${isDragging ? styles.dragging : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {selectedFile ? (
          <>
            <p>Selected file: {selectedFile.name}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleUpload();
              }}
            >
              <div className={styles.buttonContent}>Upload & Grade</div>
              </button>
          </>
        ) : (
          <>
            <p>Drag an audio file here to get started</p>
            <p>or click to select a file.</p>
          </>
        )}
      </div>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
    </div>
  );
};

export default UploadBox;