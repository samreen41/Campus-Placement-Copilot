import { useState } from "react";
import { uploadResume } from "../../services/resumeService";
function UploadBox() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="w-full border rounded-lg p-3"
      />

      {file && (
        <div className="mt-4 p-3 bg-green-100 rounded-lg">
          <p className="font-semibold text-green-700">
            ✅ Resume Uploaded Successfully
          </p>

          <p className="text-gray-700 mt-1">
            {file.name}
          </p>
          {file && (

  <div className="mt-6 bg-green-100 p-4 rounded-xl">

    <p className="font-bold text-green-700">

      ✅ Resume Uploaded Successfully

    </p>

    <p>{file.name}</p>

  </div>

)}
        </div>

      )}

    </div>
  );
}

export default UploadBox;