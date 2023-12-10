// PersonalContactForm.js
import React, { useState } from 'react';

const PersonalContactForm = ({ onUpdate }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        linkedin: '',
        website: '',
        github: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        // Convert each field value to a string to ensure that numeric values are not treated as array indices
        // const formattedData = Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, String(value)]));
        onUpdate('PersonalContact', formData);
    };

    return (
        <div>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                LinkedIn:
                <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} />
            </label>
            <br />
            <label>
                Website:
                <input type="text" name="website" value={formData.website} onChange={handleChange} />
            </label>
            <br />
            <label>
                GitHub:
                <input type="text" name="github" value={formData.github} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default PersonalContactForm;