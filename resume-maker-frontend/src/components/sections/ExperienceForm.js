// ExperienceForm.js
import React, { useState } from 'react';

const ExperienceForm = ({ onUpdate }) => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        company: '',
        location: '',
        dates: '',
        responsibilities: '',
        projects: '',
        technologies: '',
        accomplishments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate('Experience', formData);
    };

    return (
        <div>
            <label>
                Job Title:
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
            </label>
            <br />
            <label>
                Company:
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </label>
            <br />
            <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <br />
            <label>
                Dates of Employment:
                <input type="text" name="dates" value={formData.dates} onChange={handleChange} />
            </label>
            <br />
            <label>
                Responsibilities and Achievements:
                <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} />
            </label>
            <br />
            <label>
                Relevant Projects:
                <textarea name="projects" value={formData.projects} onChange={handleChange} />
            </label>
            <br />
            <label>
                Technologies/Tools Used:
                <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} />
            </label>
            <br />
            <label>
                Accomplishments:
                <textarea name="accomplishments" value={formData.accomplishments} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default ExperienceForm;