import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function MediaUploader() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const mapped = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        typeLabel: file.type.includes("video") ? "Video" : "Image",
      })
    );
    setFiles((prev) => [...prev, ...mapped]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
      "video/*": [],
    },
    onDrop,
    multiple: true,
  });

  const removeFile = (index) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-5xl mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-8 text-center cursor-pointer rounded ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">Drag and drop media files here, or click to browse</p>
      </div>

      {files.length > 0 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {files.map((file, idx) => (
            <div key={idx} className="relative border rounded overflow-hidden shadow-sm">
              {file.type.startsWith("image") ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <video controls className="w-full h-48 object-cover">
                  <source src={file.preview} />
                </video>
              )}
              <div className="p-2 text-sm">
                <p className="font-semibold truncate">{file.name}</p>
                <p>{file.formattedSize}</p>
                <p>{file.typeLabel}</p>
              </div>
              <button
                onClick={() => removeFile(idx)}
                className="absolute top-2 right-2 text-white bg-red-600 p-1 rounded-full text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
