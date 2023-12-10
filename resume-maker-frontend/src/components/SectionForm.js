// SectionForm.js
import React from 'react';
import PersonalContactForm from './sections/PersonalContactForm';
import EducationForm from './sections/EducationForm';
import ExperienceForm from './sections/ExperienceForm';
import ProjectsForm from './sections/ProjectsForm';
import SkillsForm from './sections/SkillsForm';
import InterestsForm from './sections/InterestsForm';

const SectionForm = ({ section, formData, onUpdate }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate(section, { ...formData, [name]: value });
    };

    const renderFields = () => {
        switch (section) {
            case 'PersonalContact':
                return (
                    <PersonalContactForm onUpdate={onUpdate} />
                );
            case 'Education':
                return (
                    <EducationForm onUpdate={onUpdate} />
                );
            case 'Experience':
                return (
                    <ExperienceForm onUpdate={onUpdate} />
                );
            case 'Projects':
                return (
                    <ProjectsForm onUpdate={onUpdate} />
                );
            case 'Skills':
                return (
                    <SkillsForm onUpdate={onUpdate} />
                );
            case 'Interests':
                return (
                    <InterestsForm onUpdate={onUpdate} />
                );
            default:
                return null;
        }
    };

    return <div>{renderFields()}</div>;
};

export default SectionForm;