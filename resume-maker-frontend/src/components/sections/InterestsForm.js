// InterestsForm.js
import React, { useState } from 'react';

const InterestsForm = ({ onUpdate }) => {
    const [formData, setFormData] = useState({
        hobbies: '',
        memberships: '',
        conferences: '',
        volunteering: '',
        certifications: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate(formData);
    };

    return (
        <div>
            <label>
                Hobbies:
                <textarea name="hobbies" value={formData.hobbies} onChange={handleChange} />
            </label>
            <br />
            <label>
                Professional Memberships:
                <textarea name="memberships" value={formData.memberships} onChange={handleChange} />
            </label>
            <br />
            <label>
                Conferences Attended:
                <textarea name="conferences" value={formData.conferences} onChange={handleChange} />
            </label>
            <br />
            <label>
                Volunteering Experience:
                <textarea name="volunteering" value={formData.volunteering} onChange={handleChange} />
            </label>
            <br />
            <label>
                Relevant Certifications:
                <textarea name="certifications" value={formData.certifications} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default InterestsForm;