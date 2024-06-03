import React, { useEffect, useState } from 'react';
import LeftNavbar from './components/leftNavbar';
import RightResume from './components/rightResume';
import AboutUs from './components/subcomponents/aboutUs';
import Certification from './components/subcomponents/certifications';
import Education from './components/subcomponents/education';
import Experience from './components/subcomponents/experience';
import Projects from './components/subcomponents/projects';
import Skills from './components/subcomponents/skills';

export default function App() {
  const [selectedComponents, setSelectedComponents] = useState([]);

  useEffect(() => {
    const savedComponents = JSON.parse(localStorage.getItem('selectedComponents'));
    if (savedComponents) {
      setSelectedComponents(savedComponents);
    }
  }, []);

  const handleMenuClick = (componentName) => {
    if (!selectedComponents.includes(componentName)) {
      const newSelectedComponents = [...selectedComponents, componentName];
      setSelectedComponents(newSelectedComponents);
      localStorage.setItem('selectedComponents', JSON.stringify(newSelectedComponents));
    }
  };

  const handleEdit = (componentName) => {
    console.log(`Editing ${componentName}`);
    // Add your edit logic here
  };

  const handleDelete = (componentName) => {
    const newSelectedComponents = selectedComponents.filter(comp => comp !== componentName);
    setSelectedComponents(newSelectedComponents);
    localStorage.setItem('selectedComponents', JSON.stringify(newSelectedComponents));
  };

  const renderComponent = (componentName, index) => {
    switch (componentName) {
      case 'About Me':
        return <AboutUs key={index} onEdit={() => handleEdit(componentName)} onDelete={() => handleDelete(componentName)} />;
      case 'Experience':
        return <Experience key={index} onEdit={() => handleEdit(componentName)} onDelete={() => handleDelete(componentName)} />;
      case 'Education':
        return <Education key={index} onEdit={() => handleEdit(componentName)} onDelete={() => handleDelete(componentName)} />;
      case 'Skills':
        return <Skills key={index} onEdit={() => handleEdit(componentName)} onDelete={() => handleDelete(componentName)} />;
      case 'Projects':
        return <Projects key={index} onEdit={() => handleEdit(componentName)} onDelete={() => handleDelete(componentName)} />;
      case 'Certifications':
        return <Certification key={index} onEdit={() => handleEdit(componentName)} onDelete={() => handleDelete(componentName)} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <LeftNavbar onMenuClick={handleMenuClick} />
      <RightResume>
        {selectedComponents.map((component, index) => renderComponent(component, index))}
      </RightResume>
    </div>
  );
}
