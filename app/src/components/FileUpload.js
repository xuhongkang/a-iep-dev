'use client'
import { useState } from 'react';
import {uploadFile} from './API'

export function FileUpload({userId}) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        console.log(userId)
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (file) {
            const sessionId = await upload(file, userId, 'es')
            console.log(sessionId)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
        </form>
    );
} 