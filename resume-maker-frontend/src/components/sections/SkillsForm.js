// SkillsForm.js
import React, { useState } from 'react';

const SkillsForm = ({ onUpdate }) => {
    const [formData, setFormData] = useState({
        technicalSkills: '',
        softSkills: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate('Skills', formData);
    };

    return (
        <div>
            <label>
                Technical Skills:
                <textarea name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} />
            </label>
            <br />
            <label>
                Soft Skills:
                <textarea name="softSkills" value={formData.softSkills} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default SkillsForm;