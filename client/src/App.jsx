import React, { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
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

const DraggableComponent = ({ componentName, Component, onAdd, onEdit, onDelete }) => {
  return (
    <Reorder.Item
      value={componentName}
      className="p-4 rounded-lg mb-4"
    >
      <Component onAdd={() => onAdd(componentName)} onEdit={() => onEdit(componentName)} onDelete={() => onDelete(componentName)} />
    </Reorder.Item>
  );
};

export default function App() {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [editDeleteVisible, setEditDeleteVisible] = useState({});

  useEffect(() => {
    const savedComponents = JSON.parse(localStorage.getItem('selectedComponents'));
    const savedVisibility = JSON.parse(localStorage.getItem('editDeleteVisible'));
    if (savedComponents) {
      setSelectedComponents(savedComponents);
    }
    if (savedVisibility) {
      setEditDeleteVisible(savedVisibility);
    }
  }, []);

  const handleMenuClick = (componentName) => {
    if (!selectedComponents.includes(componentName)) {
      const newSelectedComponents = [...selectedComponents, componentName];
      setSelectedComponents(newSelectedComponents);
      localStorage.setItem('selectedComponents', JSON.stringify(newSelectedComponents));
    }
    setEditDeleteVisible(prevState => {
      const newState = {
        ...prevState,
        [componentName]: true
      };
      localStorage.setItem('editDeleteVisible', JSON.stringify(newState));
      return newState;
    });
  };

  const handleEdit = (componentName) => {
    console.log(`Editing ${componentName}`);
    localStorage.setItem('edit', componentName);
    window.location.reload();
    // Add your edit logic here
  };

  const handleDelete = (componentName) => {
    const newSelectedComponents = selectedComponents.filter(comp => comp !== componentName);
    setSelectedComponents(newSelectedComponents);
    localStorage.setItem('selectedComponents', JSON.stringify(newSelectedComponents));

    setEditDeleteVisible(prevState => {
      const newState = {
        ...prevState,
        [componentName]: false
      };
      localStorage.setItem('editDeleteVisible', JSON.stringify(newState));
      return newState;
    });
  };

  const handleReorder = (newOrder) => {
    setSelectedComponents(newOrder);
    localStorage.setItem('selectedComponents', JSON.stringify(newOrder));
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/8">
        <LeftNavbar onMenuClick={handleMenuClick} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <div className="w-7/8">
        <RightResume>
          <Reorder.Group
            axis="y"
            values={selectedComponents}
            onReorder={handleReorder}
            className="space-y-4 rounded-lg w-full"
          >
            {selectedComponents.map((componentName, index) => {
              const Component = componentMap[componentName];
              return (
                <DraggableComponent
                  key={componentName}
                  componentName={componentName}
                  Component={Component}
                  onAdd={handleMenuClick}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              );
            })}
          </Reorder.Group>
        </RightResume>
      </div>
    </div>
  );
}
