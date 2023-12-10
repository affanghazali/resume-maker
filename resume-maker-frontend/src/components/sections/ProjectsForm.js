// ProjectsForm.js
import React, { useState } from 'react';

const ProjectsForm = ({ onUpdate }) => {
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        duration: '',
        role: '',
        technologiesUsed: '',
        outcome: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate('Projects', formData);
    };

    return (
        <div>
            <label>
                Project Name:
                <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange} />
            </label>
            <br />
            <label>
                Duration:
                <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
            </label>
            <br />
            <label>
                Your Role and Contributions:
                <textarea name="role" value={formData.role} onChange={handleChange} />
            </label>
            <br />
            <label>
                Technologies Used:
                <input type="text" name="technologiesUsed" value={formData.technologiesUsed} onChange={handleChange} />
            </label>
            <br />
            <label>
                Outcome or Results:
                <textarea name="outcome" value={formData.outcome} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default ProjectsForm;