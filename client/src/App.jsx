import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, Reorder } from 'framer-motion';
import LeftNavbar from './components/leftNavbar';
import RightResume from './components/rightResume';
import AboutUs from './components/subcomponents/aboutUs';
import Certification from './components/subcomponents/certifications';
import Education from './components/subcomponents/education';
import Experience from './components/subcomponents/experience';
import Projects from './components/subcomponents/projects';
import Skills from './components/subcomponents/skills';

const componentMap = {
  'About Me': AboutUs,
  'Experience': Experience,
  'Education': Education,
  'Skills': Skills,
  'Projects': Projects,
  'Certifications': Certification,
};

const DraggableComponent = ({ componentName, index, Component, handleEdit, handleDelete }) => {
  return (
    <Reorder.Item
      value={componentName}
      className="p-4 rounded-lg mb-4"
    >
      <Component
        onEdit={() => handleEdit(componentName)}
        onDelete={() => handleDelete(componentName)}
      />
    </Reorder.Item>
  );
};

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

  const handleReorder = (newOrder) => {
    setSelectedComponents(newOrder);
    localStorage.setItem('selectedComponents', JSON.stringify(newOrder));
  };

  return (
    <div className="flex">
      <LeftNavbar onMenuClick={handleMenuClick} />
      <RightResume>
        <Reorder.Group
          axis="y"
          values={selectedComponents}
          onReorder={handleReorder}
          className="space-y-4 p-4 bg-gray-100 rounded-lg"
        >
          {selectedComponents.map((componentName, index) => {
            const Component = componentMap[componentName];
            return (
              <DraggableComponent
                key={componentName}
                componentName={componentName}
                index={index}
                Component={Component}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </Reorder.Group>
      </RightResume>
    </div>
  );
}
