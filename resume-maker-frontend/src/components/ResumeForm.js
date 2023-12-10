// ResumeForm.js
import React, { useState } from 'react';
import SectionAccordion from './SectionsAccordion';

const initialSectionOrder = ['PersonalContact', 'Education', 'Experience', 'Projects', 'Skills', 'Interests'];

const ResumeForm = () => {
    const [sectionOrder, setSectionOrder] = useState(initialSectionOrder);
    const [formData, setFormData] = useState({});

    const handleDragStart = (e, section) => {
        e.dataTransfer.setData('text/plain', section);
    };

    const handleDragOver = (e, section) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetSection) => {
        e.preventDefault();

        const draggedSection = e.dataTransfer.getData('text/plain');
        if (draggedSection !== targetSection) {
            const newOrder = [...sectionOrder];
            const draggedIndex = newOrder.indexOf(draggedSection);
            const dropIndex = newOrder.indexOf(targetSection);

            newOrder.splice(draggedIndex, 1);
            newOrder.splice(dropIndex, 0, draggedSection);

            setSectionOrder(newOrder);

            const updatedFormData = {};
            newOrder.forEach((section) => {
                updatedFormData[section] = formData[section] || {};
            });
            setFormData(updatedFormData);
        }
    };

    const handleUpdate = (section, data) => {
        setFormData((prevData) => {
            if (prevData[section]) {
                return { ...prevData, [section]: { ...prevData[section], ...data } };
            } else {
                return { ...prevData, [section]: data };
            }
        });
    };

    const renderAccordions = () => {
        return sectionOrder.map((section) => (
            <div
                key={section}
                draggable
                onDragStart={(e) => handleDragStart(e, section)}
                onDragOver={(e) => handleDragOver(e, section)}
                onDrop={(e) => handleDrop(e, section)}
            >
                <SectionAccordion section={section} formData={formData} onUpdate={handleUpdate} />
            </div>
        ));
    };

    const handleFormSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3004/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formData }),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'resume.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                console.error('PDF generation failed');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            {renderAccordions()}
            <button onClick={handleFormSubmit}>Submit</button>
        </div>
    );
};

export default ResumeForm;