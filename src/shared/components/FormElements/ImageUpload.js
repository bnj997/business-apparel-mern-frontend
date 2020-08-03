import React, { useRef, useState, useEffect } from 'react';
import {useField } from 'formik';
import { Button } from "@material-ui/core";
import './ImageUpload.css';

const ImageUpload = ({placeholder, ...props}) => {
  const [field] = useField(props);
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload= () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  function pickedHandler(event) {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    } 
  };

  function pickImageHandler() {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        {...field}
        id={props.id}
        label={props.label}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button variant="contained" type="button" onClick={pickImageHandler}>
          Upload Image
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
