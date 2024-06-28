import axios from 'axios';

export const upload = async (formData) => {
  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true, // Ensure cookies are sent with the request
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading files:', error);
    throw error;
  }
};
