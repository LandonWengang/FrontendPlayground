import { createRoot } from 'react-dom/client';
import ProjectList from '../src/components/ProjectList.jsx';
import { profile, projects, notes } from '../src/content.js';
import '../src/styles.css';

function App() {
  return (
    <main>
      <header>
        <p className="eyebrow">Frontend Playground / React</p>
        <h1>{profile.name}</h1>
        <p>{profile.intro}</p>
        <a href={profile.github}>GitHub</a>
      </header>
      <ProjectList projects={projects} />
      <section>
        <h2>学习日志</h2>
        <ol>
          {notes.map((note) => <li key={note.id}>{note.text}</li>)}
        </ol>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
