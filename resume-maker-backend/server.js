const express = require('express');
const cors = require('cors');
const PDFDocument = require('pdfkit');

const app = express();
const port = 3004; // Choose any port you prefer

app.use(cors());
app.use(express.json());

app.post('/generate-pdf', (req, res) => {
    const { data } = req.body;

    // Create a new PDF document
    const doc = new PDFDocument();

    // Set the content disposition to force the browser to download the PDF
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    // Pipe the PDF document to the response
    doc.pipe(res);

    // Add content to the PDF using the data received from the client
    doc.fontSize(16).text('Resume', { align: 'center' });

    Object.entries(data).forEach(([section, fields]) => {
        doc.addPage().fontSize(14).text(section, { underline: true });

        Object.entries(fields).forEach(([field, value]) => {
            doc.text(`${field}: ${value}`);
        });
    });

    // End the document
    doc.end();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
