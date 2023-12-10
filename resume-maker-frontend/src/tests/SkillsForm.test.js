import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import SkillsForm from '../components/sections/SkillsForm';

// Mock the onUpdate function
const mockOnUpdate = jest.fn();

// Render the SkillsForm component
beforeEach(() => {
    render(<SkillsForm onUpdate={mockOnUpdate} />);
});

test('renders SkillsForm component', () => {
    // Check if the necessary labels and textarea elements are present
    expect(screen.getByLabelText(/Technical Skills/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Soft Skills/i)).toBeInTheDocument();

    // Check if the "Update" button is present
    expect(screen.getByText(/Update/i)).toBeInTheDocument();
});

test('calls onUpdate with correct data when "Update" button is clicked', () => {
    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Technical Skills/i), { target: { value: 'Example Technical Skills' } });
    fireEvent.change(screen.getByLabelText(/Soft Skills/i), { target: { value: 'Example Soft Skills' } });

    // Click the "Update" button
    fireEvent.click(screen.getByText(/Update/i));

    // Check if onUpdate is called with the correct data
    expect(mockOnUpdate).toHaveBeenCalledWith('Skills', {
        technicalSkills: 'Example Technical Skills',
        softSkills: 'Example Soft Skills',
    });
});