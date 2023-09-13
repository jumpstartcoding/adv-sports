import React, { useState } from "react";

function ImageUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const selectedFilesArray = Array.from(fileList);
      setSelectedFiles(selectedFilesArray);
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    fetch("http://your-upload-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((_response) => {
        // Handle the response from the server
      })
      .catch((_error) => {
        // Handle any errors
      });
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div className="mb-3">
        <label form="formFile" className="form-label">
          Default file input example
          <input
            className="form-control"
            type="file"
            id="formFile"
            multiple
            onChange={handleFileChange}
          />
        </label>
      </div>
      <button className="btn btn-primary form-control" onClick={handleUpload}>
        Upload
      </button>
      <h3>Selected Files:</h3>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ImageUpload;
