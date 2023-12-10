// PersonalContactForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PersonalContactForm from '../components/sections/PersonalContactForm';

// Mock the onUpdate function
const onUpdateMock = jest.fn();

test('PersonalContactForm renders correctly and handles updates', () => {
    render(<PersonalContactForm onUpdate={onUpdateMock} />);

    // Check if the component renders without crashing
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn:')).toBeInTheDocument();
    expect(screen.getByLabelText('Website:')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub:')).toBeInTheDocument();

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Name:'), { target: { name: 'name', value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Address:'), { target: { name: 'address', value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText('Phone:'), { target: { name: 'phone', value: '123456789' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { name: 'email', value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('LinkedIn:'), { target: { name: 'linkedin', value: 'linkedin.com/in/john' } });
    fireEvent.change(screen.getByLabelText('Website:'), { target: { name: 'website', value: 'johndoe.com' } });
    fireEvent.change(screen.getByLabelText('GitHub:'), { target: { name: 'github', value: 'github.com/johndoe' } });

    // Simulate button click
    fireEvent.click(screen.getByText('Update'));

    // Check if onUpdate function is called with the correct data
    expect(onUpdateMock).toHaveBeenCalledWith('PersonalContact', {
        name: 'John Doe',
        address: '123 Main St',
        phone: '123456789',
        email: 'john@example.com',
        linkedin: 'linkedin.com/in/john',
        website: 'johndoe.com',
        github: 'github.com/johndoe',
    });
});