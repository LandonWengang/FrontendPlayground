import { useState } from 'react';

export default function ProjectList({ projects }) {
  const [framework, setFramework] = useState('');
  const frameworks = [...new Set(projects.map((project) => project.framework))];
  const visibleProjects = framework
    ? projects.filter((project) => project.framework === framework)
    : projects;

  return (
    <section>
      <h2>项目与练习</h2>
      <label>
        按框架筛选{' '}
        <select value={framework} onChange={(event) => setFramework(event.target.value)}>
          <option value="">全部</option>
          {frameworks.map((name) => <option key={name}>{name}</option>)}
        </select>
      </label>
      {visibleProjects.length === 0 ? (
        <p>暂无项目。</p>
      ) : (
        <ul className="projects">
          {visibleProjects.map((project) => (
            <li key={project.id}>
              <p className="eyebrow">{project.framework}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
