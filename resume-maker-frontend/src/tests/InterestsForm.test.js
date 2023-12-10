import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import InterestsForm from '../components/sections/InterestsForm';

// Mock the onUpdate function
const mockOnUpdate = jest.fn();

// Render the InterestsForm component
beforeEach(() => {
    render(<InterestsForm onUpdate={mockOnUpdate} />);
});

test('renders InterestsForm component', () => {
    // Check if the necessary labels and textarea elements are present
    expect(screen.getByLabelText(/Hobbies/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Professional Memberships/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Conferences Attended/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Volunteering Experience/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Relevant Certifications/i)).toBeInTheDocument();

    // Check if the "Update" button is present
    expect(screen.getByText(/Update/i)).toBeInTheDocument();
});

test('calls onUpdate with correct data when "Update" button is clicked', () => {
    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Hobbies/i), { target: { value: 'Example Hobbies' } });
    fireEvent.change(screen.getByLabelText(/Professional Memberships/i), { target: { value: 'Example Memberships' } });
    fireEvent.change(screen.getByLabelText(/Conferences Attended/i), { target: { value: 'Example Conferences' } });
    fireEvent.change(screen.getByLabelText(/Volunteering Experience/i), { target: { value: 'Example Volunteering' } });
    fireEvent.change(screen.getByLabelText(/Relevant Certifications/i), { target: { value: 'Example Certifications' } });

    // Click the "Update" button
    fireEvent.click(screen.getByText(/Update/i));

    // Check if onUpdate is called with the correct data
    expect(mockOnUpdate).toHaveBeenCalledWith({
        hobbies: 'Example Hobbies',
        memberships: 'Example Memberships',
        conferences: 'Example Conferences',
        volunteering: 'Example Volunteering',
        certifications: 'Example Certifications',
    });
});