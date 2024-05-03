import React, { useState } from 'react';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

function UploadPage() {
    const [pdfFile, setPdfFile] = useState(null)
    const [pdfError, setPdfError] = useState('')
    const [loading, setLoading] = useState(false)
    const [summary, setSummary] = useState('')

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

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        if (pdfFile) {
            const formData = new FormData();
            console.log(pdfFile)
            formData.append('pdfFile', pdfFile); //backend middleware upload.single('{x}'), x gotta match with 'pdfFile'; otherwise, multer will bitch about "unexpeacted field" smh
            console.log('formData: ', formData)
            try {
                const response = await axios.post('/ai/strataSummary', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Uploaded and got something back:', response.data);
                setSummary(response.data)
                setLoading(false)

            } catch (error) {
                console.error('Error uploading file:', error);
                // Handle error response
            }
        } else {
            setPdfError('Please upload a PDF file.');
            setLoading(false)
        }
    };

    return (
        <>
            <div style={{ textAlign: 'center', border: 'solid orange 3px', borderRadius: '25px' }}>
                <p style={{ color: 'orange', fontSize: '30px' }}>Note: To try this feature, do it locally. Remove 'disabled' away from the Form.Control</p>
                <p>Our backend cloud provider, Render, do not provide disk on free tier. Chris is currently working on another solution.</p>
                <p>however, it surely works like a charm on your local machine. 😌</p>
            </div>

            <Container style={{ textAlign: 'center' }}>
                <h1>Upload PDF</h1>
                <Form className='mb-4' onSubmit={handleSubmit}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Choose a PDF file to upload:</Form.Label>
                        <Form.Control type="file" accept=".pdf" onChange={handleFileChange} disabled />
                        {pdfError && <Alert variant="danger">{pdfError}</Alert>}
                    </Form.Group>
                    <Button type="submit">Upload</Button>
                </Form>


            </Container>

            <Container>
                {
                    loading ?
                        <Spinner className='mb-10' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        summary ?
                            <div className='p-3 py-7' style={{ border: "solid black 2px", borderRadius: '20px' }}>
                                <ReactMarkdown>{summary}</ReactMarkdown>
                            </div> : <div style={{ height: "30rem" }}></div>
                }
            </Container>
        </>
    );
}

export default UploadPage;
