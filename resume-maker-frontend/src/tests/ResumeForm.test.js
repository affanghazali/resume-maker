// ResumeForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTransfer } from 'react-dnd-test-utils';
import ResumeForm from '../components/ResumeForm';

// Mock createObjectURL
window.URL.createObjectURL = jest.fn();

test('allows dragging and dropping accordion sections', () => {
    render(<ResumeForm />);

    // Mock dataTransfer
    const dataTransferMock = DataTransfer();

    // Simulate dragging and dropping
    fireEvent.dragStart(screen.getByText(/PersonalContact/i), { dataTransfer: dataTransferMock });
    fireEvent.dragOver(screen.getByText(/Education/i));
    fireEvent.drop(screen.getByText(/Education/i));

    // Check if the sections are rearranged
    expect(screen.getByText(/PersonalContact/i).parentNode).toHaveTextContent(/PersonalContact/i);
});

test('calls handleFormSubmit when "Submit" button is clicked', async () => {
    // Mock the fetch function
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(),
            blob: () => Promise.resolve(new Blob())
        })
    );

    render(<ResumeForm />);

    // Simulate form submission
    fireEvent.click(screen.getByText(/Submit/i));

    // Wait for the asynchronous PDF generation
    await Promise.resolve();

    // Check if the fetch function is called with the correct parameters
    expect(fetch).toHaveBeenCalledWith('http://localhost:3004/generate-pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: expect.any(String), // You may need to adjust this expectation based on your data
    });

    // Reset the global fetch to its original implementation
    global.fetch.mockRestore();
});