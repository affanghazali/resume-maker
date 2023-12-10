import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import ProjectsForm from '../components/sections/ProjectsForm';

// Mock the onUpdate function
const mockOnUpdate = jest.fn();

// Render the ProjectsForm component
beforeEach(() => {
    render(<ProjectsForm onUpdate={mockOnUpdate} />);
});

test('renders ProjectsForm component', () => {
    // Check if the necessary labels and input elements are present
    expect(screen.getByLabelText(/Project Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Duration/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Role and Contributions/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Technologies Used/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Outcome or Results/i)).toBeInTheDocument();

    // Check if the "Update" button is present
    expect(screen.getByText(/Update/i)).toBeInTheDocument();
});

test('calls onUpdate with correct data when "Update" button is clicked', () => {
    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Project Name/i), { target: { value: 'Example Project' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Example Description' } });
    fireEvent.change(screen.getByLabelText(/Duration/i), { target: { value: 'Example Duration' } });
    fireEvent.change(screen.getByLabelText(/Your Role and Contributions/i), { target: { value: 'Example Role' } });
    fireEvent.change(screen.getByLabelText(/Technologies Used/i), { target: { value: 'Example Technologies' } });
    fireEvent.change(screen.getByLabelText(/Outcome or Results/i), { target: { value: 'Example Outcome' } });

    // Click the "Update" button
    fireEvent.click(screen.getByText(/Update/i));

    // Check if onUpdate is called with the correct data
    expect(mockOnUpdate).toHaveBeenCalledWith('Projects', {
        projectName: 'Example Project',
        description: 'Example Description',
        duration: 'Example Duration',
        role: 'Example Role',
        technologiesUsed: 'Example Technologies',
        outcome: 'Example Outcome',
    });
});