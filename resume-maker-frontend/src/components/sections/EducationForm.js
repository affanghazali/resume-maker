// EducationForm.js
import React, { useState } from 'react';

const EducationForm = ({ onUpdate }) => {
    const [formData, setFormData] = useState({
        university: '',
        location: '',
        degree: '',
        major: '',
        graduationDate: '',
        gpa: '',
        coursework: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate('Education', formData);
    };

    return (
        <div>
            <label>
                University/Institution:
                <input type="text" name="university" value={formData.university} onChange={handleChange} />
            </label>
            <br />
            <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <br />
            <label>
                Degree:
                <input type="text" name="degree" value={formData.degree} onChange={handleChange} />
            </label>
            <br />
            <label>
                Major/Field of Study:
                <input type="text" name="major" value={formData.major} onChange={handleChange} />
            </label>
            <br />
            <label>
                Graduation Date:
                <input type="text" name="graduationDate" value={formData.graduationDate} onChange={handleChange} />
            </label>
            <br />
            <label>
                GPA:
                <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} />
            </label>
            <br />
            <label>
                Relevant Coursework:
                <textarea name="coursework" value={formData.coursework} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default EducationForm;