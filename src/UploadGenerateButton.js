// UploadGenerateButton.js
import React, { useState } from "react";

function UploadGenerateButton({ onUpload, onGenerateChart }) {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    onUpload(uploadedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {/* <button onClick={onGenerateChart}></button> */}
    </div>
  );
}

export default UploadGenerateButton;
