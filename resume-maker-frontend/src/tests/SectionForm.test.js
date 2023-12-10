import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SectionsForm from '../components/SectionsForm';

test('updates form data on input change', async () => {
    // Mock the onUpdate function
    const mockUpdate = jest.fn();

    render(<SectionsForm section="PersonalContact" formData={{}} onUpdate={mockUpdate} />);

    // Simulate input change
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });

    // Wait for the update to be processed (you might need to adjust the waiting time)
    await waitFor(() => {
        // Check if the onUpdate function is called with the correct data
        console.log('Calls:', mockUpdate.mock.calls);
        expect(mockUpdate).toHaveBeenCalledWith('PersonalContact', { name: 'John Doe' });
    });
});