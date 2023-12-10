import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionAccordion from '../components/SectionsAccordion';

test('renders SectionAccordion component', () => {
    render(<SectionAccordion section="PersonalContact" formData={{}} onUpdate={() => { }} />);

    // Check if the section title is present
    expect(screen.getByText(/PersonalContact/i)).toBeInTheDocument();
});

test('toggles accordion when clicked', () => {
    render(<SectionAccordion section="PersonalContact" formData={{}} onUpdate={() => { }} />);

    // Check if the accordion header is visible
    expect(screen.getByText(/PersonalContact/i)).toBeInTheDocument();

    // Optionally, you can check if the form content is visible when the accordion is open
    fireEvent.click(screen.getByText(/PersonalContact/i));
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    // Add similar expectations for other form fields...

    // Close the accordion
    fireEvent.click(screen.getByText(/PersonalContact/i));
    // Optionally, check if the form content is not visible when the accordion is closed
    expect(screen.queryByLabelText(/Name/i)).toBeNull();
    expect(screen.queryByLabelText(/Address/i)).toBeNull();
    // Add similar expectations for other form fields...
});