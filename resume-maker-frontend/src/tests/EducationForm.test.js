import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import EducationForm from '../components/sections/EducationForm';

// Mock the onUpdate function
const mockOnUpdate = jest.fn();

// Render the EducationForm component
beforeEach(() => {
    render(<EducationForm onUpdate={mockOnUpdate} />);
});

test('renders EducationForm component', () => {
    // Check if the necessary labels and input elements are present
    expect(screen.getByLabelText(/University\/Institution/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Degree/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Major\/Field of Study/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Graduation Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GPA/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Relevant Coursework/i)).toBeInTheDocument();

    // Check if the "Update" button is present
    expect(screen.getByText(/Update/i)).toBeInTheDocument();
});

test('calls onUpdate with correct data when "Update" button is clicked', () => {
    // Simulate user input
    fireEvent.change(screen.getByLabelText(/University\/Institution/i), { target: { value: 'Example University' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'Example Location' } });
    fireEvent.change(screen.getByLabelText(/Degree/i), { target: { value: 'Example Degree' } });
    fireEvent.change(screen.getByLabelText(/Major\/Field of Study/i), { target: { value: 'Example Major' } });
    fireEvent.change(screen.getByLabelText(/Graduation Date/i), { target: { value: 'Example Date' } });
    fireEvent.change(screen.getByLabelText(/GPA/i), { target: { value: '3.5' } });
    fireEvent.change(screen.getByLabelText(/Relevant Coursework/i), { target: { value: 'Example Coursework' } });

    // Click the "Update" button
    fireEvent.click(screen.getByText(/Update/i));

    // Check if onUpdate is called with the correct data
    expect(mockOnUpdate).toHaveBeenCalledWith('Education', {
        university: 'Example University',
        location: 'Example Location',
        degree: 'Example Degree',
        major: 'Example Major',
        graduationDate: 'Example Date',
        gpa: '3.5',
        coursework: 'Example Coursework',
    });
});