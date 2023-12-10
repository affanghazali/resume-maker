import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import ExperienceForm from '../components/sections/ExperienceForm';

// Mock the onUpdate function
const mockOnUpdate = jest.fn();

// Render the ExperienceForm component
beforeEach(() => {
    render(<ExperienceForm onUpdate={mockOnUpdate} />);
});

test('renders ExperienceForm component', () => {
    // Check if the necessary labels and input elements are present
    expect(screen.getByLabelText(/Job Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Dates of Employment/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Responsibilities and Achievements/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Relevant Projects/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Technologies\/Tools Used/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Accomplishments/i)).toBeInTheDocument();

    // Check if the "Update" button is present
    expect(screen.getByText(/Update/i)).toBeInTheDocument();
});

test('calls onUpdate with correct data when "Update" button is clicked', () => {
    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Job Title/i), { target: { value: 'Example Job Title' } });
    fireEvent.change(screen.getByLabelText(/Company/i), { target: { value: 'Example Company' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'Example Location' } });
    fireEvent.change(screen.getByLabelText(/Dates of Employment/i), { target: { value: 'Example Dates' } });
    fireEvent.change(screen.getByLabelText(/Responsibilities and Achievements/i), { target: { value: 'Example Responsibilities' } });
    fireEvent.change(screen.getByLabelText(/Relevant Projects/i), { target: { value: 'Example Projects' } });
    fireEvent.change(screen.getByLabelText(/Technologies\/Tools Used/i), { target: { value: 'Example Technologies' } });
    fireEvent.change(screen.getByLabelText(/Accomplishments/i), { target: { value: 'Example Accomplishments' } });

    // Click the "Update" button
    fireEvent.click(screen.getByText(/Update/i));

    // Check if onUpdate is called with the correct data
    expect(mockOnUpdate).toHaveBeenCalledWith('Experience', {
        jobTitle: 'Example Job Title',
        company: 'Example Company',
        location: 'Example Location',
        dates: 'Example Dates',
        responsibilities: 'Example Responsibilities',
        projects: 'Example Projects',
        technologies: 'Example Technologies',
        accomplishments: 'Example Accomplishments',
    });
});