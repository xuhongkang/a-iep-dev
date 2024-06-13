'use client'
import { useState, useCallback } from 'react';
import {upload} from '@/api/JobProcessing'
import { useDropzone } from 'react-dropzone';

const CreateJob = () => {
  const [files, setFiles] = useState([]);
  const [targetLocale, setTargetLocale] = useState('en');

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const handleFileChange = (e) => {
    setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files)]);
  };

  const handleDelete = (fileToDelete) => {
    setFiles((prevFiles) => prevFiles.filter(file => file !== fileToDelete));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Add files to the form data
    files.forEach(file => {
      formData.append('files.file', file);
    });

    // Add other job fields
    formData.append('targetLocale', targetLocale);

    try {
      await upload(formData);
      console.log('Job created successfully:', response.data);
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Target Locale</label>
        <select
          value={targetLocale}
          onChange={(e) => setTargetLocale(e.target.value)}
          className="mt-1 block w-full"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="tl">Tagalog</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Upload Files</label>
        <DropzoneArea onDrop={onDrop} handleFileChange={handleFileChange} />
      </div>
      <div className="mt-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Create Job
        </button>
      </div>
      <div className="mt-4">
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index} className="mb-2 flex items-center justify-between">
                <span>{file.name}</span>
                <button
                  type="button"
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md"
                  onClick={() => handleDelete(file)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

const DropzoneArea = ({ onDrop, handleFileChange }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
    >
      <input {...getInputProps()} className="sr-only" onChange={handleFileChange} />
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8a8 8 0 11-16 0 8 8 0 0116 0zm2 0v24M4 20h40M4 28h40M4 36h40"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
        <div className="flex text-sm text-gray-600">
          <p className="pl-1">Drag & drop files here, or click to select files</p>
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF, PDF up to 10MB</p>
      </div>
    </div>
  );
};

export default CreateJob;
