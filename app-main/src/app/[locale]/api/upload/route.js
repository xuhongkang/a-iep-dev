import axios from 'axios';
import FormData from 'form-data';
import { NextResponse } from 'next/server';
import cookie from 'cookie';

export async function POST(req) {
  try {
    // Parse cookies from the request
    const cookies = cookie.parse(req.headers.get('cookie') || '');
    const token = cookies['payload-token'];

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const form = new FormData();

    // Parse the incoming form data
    const buffers = [];
    for await (const chunk of req.body) {
      buffers.push(chunk);
    }
    const buffer = Buffer.concat(buffers);
    form.append('file', buffer, { filename: 'upload' });

    // Create the job entry
    const jobResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/cms/api/jobs`,
      { uploadedBy: 'userId', targetLocale: 'en' },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log('Job response:', jobResponse.data);

    const job = jobResponse.data;

    // Upload each file and associate it with the job
    const uploadResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/media`,
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Upload response:', uploadResponse.data);

    const uploadedFile = uploadResponse.data;

    await axios.patch(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/cms/api/jobs/${job.id}`,
      {
        files: [{ file: uploadedFile.id }],
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return NextResponse.json({ message: 'Job created successfully', job }, { status: 200 });
  } catch (error) {
    console.error('Error creating job:', error.response ? error.response.data : error.message);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
