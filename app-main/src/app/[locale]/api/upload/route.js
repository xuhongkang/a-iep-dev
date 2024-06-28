import axios from 'axios';

export async function POST(req) {
  try {
    const { files } = req.body;
    
    // Ensure the user is authenticated
    const token = req.cookies['payload-token'];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Create the job entry
    const jobResponse = await axios.post(
      `${process.env.PAYLOAD_API_URL}/jobs`,
      { uploadedBy: 'userId', targetLocale: 'en' }, // Adjust as needed
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const job = jobResponse.data;

    // Upload each file and associate it with the job
    const filePromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      
      const uploadResponse = await axios.post(
        `${process.env.PAYLOAD_API_URL}/media`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const uploadedFile = uploadResponse.data;

      return axios.patch(
        `${process.env.PAYLOAD_API_URL}/jobs/${job.id}`,
        {
          files: [{ file: uploadedFile.id }],
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    });

    await Promise.all(filePromises);

    res.status(200).json({ message: 'Job created successfully', job });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};
