'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Food Ordering Application',
    description: 'Project 2 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Food Ordering Application',
    description: 'Project 3 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
];
const tagData = ['All', 'Web'];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const handleTag = (newTag) => {
    setTag(newTag);
  };
  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {tagData.map((tagItem) => (
          <ProjectTag
            key={tagItem}
            name={tagItem}
            onClick={() => handleTag(tagItem)}
            isSelected={tag === tagItem}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((item) => (
          <ProjectCard
            key={item.id}
            imgUrl={item.image}
            title={item.title}
            description={item.description}
            gitUrl={item.gitUrl}
            previewUrl={item.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;

