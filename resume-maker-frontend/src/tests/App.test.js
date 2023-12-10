import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders submit button', () => {
    render(<App />);
    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeInTheDocument();
});