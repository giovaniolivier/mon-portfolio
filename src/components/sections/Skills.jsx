import React from 'react';
import { Monitor, Database, Code, Cloud } from 'lucide-react';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  const skills = [
    { 
      icon: Monitor, 
      title: "Frontend", 
      desc: "React, Vue, Angular, CSS",
      technologies: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "Angular", level: 70 },
        { name: "CSS/SCSS", level: 85 }
      ]
    },
    { 
      icon: Database, 
      title: "Backend", 
      desc: "Node.js, Laravel",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MySQL", level: 90 }
      ]
    },
    { 
      icon: Code, 
      title: "Languages", 
      desc: "JavaScript, TypeScript, PHP",
      technologies: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "PHP", level: 85 },
        { name: "Python", level: 70 }
      ]
    },
    { 
      icon: Cloud, 
      title: "Cloud", 
      desc: "AWS, Firebase",
      technologies: [
        { name: "AWS", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e1b4b,transparent_70%)]" />
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;