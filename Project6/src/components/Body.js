
import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="pdf-container">
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        id="upload-button"
        onClick={() => document.getElementById("fileInput").click()}
      >
        Click here to convert a PDF!
      </button>
      <p>
        Selected File: {selectedFile ? selectedFile.name : "No file selected"}
      </p>
    </div>
  );
}

const Content=()=>{
  return (
  <div className="body-content">
        <h1>
          Extract text based pdf tables into exportable formats cvs & excel
        </h1>
      </div>
  )
}

const Body = () => {
  return (
    <div className="main-body">
      <Content/>
      <FileUpload/>
    </div>
  );
}

export default Body;
