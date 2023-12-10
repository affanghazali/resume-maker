// SectionAccordion.js
import React, { useState } from 'react';
import SectionForm from '../components/SectionForm';

const SectionAccordion = ({ section, formData, onUpdate }) => {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setAccordionOpen(!isAccordionOpen);
    };

    const renderForm = () => {
        return (
            <SectionForm section={section} formData={formData[section] || {}} onUpdate={onUpdate} />
        );
    };

    return (
        <div>
            <div onClick={toggleAccordion}>
                <h3>{section}</h3>
            </div>
            {isAccordionOpen && renderForm()}
        </div>
    );
};

export default SectionAccordion;