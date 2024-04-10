import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function UploadPage() {
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfError, setPdfError] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
            setPdfError('');
        } else {
            setPdfFile(null);
            setPdfError('Please upload a PDF file.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pdfFile) {
            // Do something with the uploaded PDF file (e.g., send it to the server)
            console.log('Uploaded PDF:', pdfFile);
        } else {
            setPdfError('Please upload a PDF file.');
        }
    };

    return (
        <Container>
            <h1>Upload PDF</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose a PDF file to upload:</Form.Label>
                    <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
                    {pdfError && <Alert variant="danger">{pdfError}</Alert>}
                </Form.Group>
                <Button type="submit">Upload</Button>
            </Form>
        </Container>
    );
}

export default UploadPage;
