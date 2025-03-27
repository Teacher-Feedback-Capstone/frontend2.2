import React, { useState, useCallback, useRef } from 'react';
import styles from './UploadBox.module.css';
import uploadFile from '../../../api/file-upload';
import socketService from '../../../api/socket';

const UploadBox = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [progressText, setProgressText] = useState("Uploading..");
  const fileInputRef = useRef(null);

  const setUploadStatus = (status) => {
    console.log(status);
  };

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
    setIsLoading(true); // start loading
    setProgressText("Uploading..");

    const formData = new FormData();
    formData.append('audio', selectedFile);

    // flag to indicate if we want to keep the loader active after upload
    let continueLoading = false;

    try {
      const response = await uploadFile(formData, setUploadStatus);
      const jobId = response.sessionId;

      if (jobId) {
        continueLoading = true;
        console.log('Job ID:', jobId);
        socketService.emit('joinRoom', jobId);
        // swap progress text after upload completes
        setProgressText("Incoming socket.io job updates");

        socketService.on('progressUpdate', (data) => {
          console.log('Job progress:', data);
          const progress = data.progress;
          // update progress text with live progress details
          setProgressText(`Processing.. ${progress}%`);
          if (progress === 100) {
            // turn off loader when job is done
            setIsLoading(false);
          }
        });
      }

      setSelectedFile(null);
    } catch (err) {
      console.error('Upload failed', err);
    } finally {
      // if no jobId came back, turn off the loader; otherwise, keep it visible
      if (!continueLoading) {
        setIsLoading(false);
      }
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
        {isLoading ? (
          <>
            <div className={styles.loader}></div>
            <code className={styles.progressText}>{progressText}</code>
          </>
        ) : selectedFile ? (
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
          <div className={styles.instructionText}>
            <p>Drag an audio file here to get started</p>
            <p>or click to select a file.</p>
          </div>
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