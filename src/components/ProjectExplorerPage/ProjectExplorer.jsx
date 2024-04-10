import React from "react";
import { useState, useEffect, useRef } from "react";

import ProjectForm from "../ProjectFormPage/ProjectForm";
import AboutSection from "../AboutSection/AboutSection";
import TitleBar from "../TitleBar/TitleBar";
import ProjectAreaFilter from "../ProjectAreaFilter/ProjectAreaFilter";
import LicenseFilter from "../LicenseFilter/LicenseFilter";
import ProjectTable from "../ProjectTable/ProjectTable";

function ProjectExplorer() {
    const [showForm, setShowForm] = useState(false);
    const [selectedProjectAreas, setSelectedProjectAreas] = useState([]);
    const [selectedLicenses, setSelectedLicenses] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const projectFormRef = useRef(null);

    // Handles input text to search bar
    const handleSearchBarChange = (e) => {
        const value = e.target.value
        setColumnFilters(old => [
            ...old.filter(filter => filter.id !== "projectName"),
            { id: "projectName", value: value},
        ]);
    };
    
    // Handles project area filter boxes interactions
    const handleProjectAreaChange = (e) => {
        const value = e.target.value;
        setSelectedProjectAreas(prev => 
            e.target.checked ? [...prev, value] : prev.filter(v => v !== value)
        );
    };
    useEffect(() => {
        setColumnFilters(old => [
            ...old.filter(filter => filter.id !== "projectAreas"),
            { id: "projectAreas", value: selectedProjectAreas }
        ])
    }, [selectedProjectAreas]);
    
    // Handles project license filter boxes interactions
    const handleLicenseChange = (e) => {
        const value = e.target.value;
        setSelectedLicenses(prev => 
            e.target.checked ? [...prev, value] : prev.filter(v => v !== value)
        );
    };
    useEffect(() => {
        setColumnFilters(old => [
            ...old.filter(filter => filter.id !== "licenses"),
            { id: "licenses", value: selectedLicenses }
        ])
    }, [selectedLicenses]);

    const handleShowForm = () => {
        setShowForm(!showForm)

        if (!showForm) {
            // Use a timeout to allow for the component to render
            setTimeout(() => {
                // Scroll the ProjectForm into view
                projectFormRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    return (
        <div className="isolate bg-white">
            <TitleBar onSearchChange={handleSearchBarChange}/>
            <AboutSection/>

            <div className="flex">
                {/* Filter and Button Column */}
                <div className="flex-col p-4 bg-whites">
                    <ProjectAreaFilter onProjectAreaFilterChange={handleProjectAreaChange}/>
                    <LicenseFilter onLicenseFilterChange={handleLicenseChange}/>
                </div>

                {/* Table and Nav Bar */}
                <div className="flex-grow">
                    <ProjectTable columnFilters={columnFilters} showForm={showForm} onShowForm={handleShowForm}/>
                </div>
            </div>
            
            {/* Section where Project Submission form is rendered */}
            {showForm && <ProjectForm ref={projectFormRef}/>}
        </div>
    );
};

export default ProjectExplorer;