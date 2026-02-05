import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  // Load profile (static demo data)
  useEffect(() => {
    setProfile({
      name: "Mohit Kumar",
      education: "B.Tech Engineering Physics, IIT Mandi",
      github: "https://github.com/Mohit2705-1982",
      linkedin: "https://linkedin.com/in/mohit-kumar-309906285"
    });
  }, []);

  // Demo search
  const search = () => {
    setResults({
      profiles: [{ id: 1, name: "Mohit Kumar" }],
      projects: [
        { id: 1, title: "ONLYUS Chat App" },
        { id: 2, title: "Gym Management Platform" }
      ],
      skills: [
        { id: 1, name: "React" },
        { id: 2, name: "FastAPI" },
        { id: 3, name: "MySQL" }
      ]
    });
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>My Profile App</h1>

      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.education}</p>

          <p>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            |{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      <hr />

      <h3>Search Demo</h3>

      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search anything..."
      />

      <button onClick={search}>Search</button>

      {results && (
        <div style={{ marginTop: 20 }}>
          <h4>Profiles</h4>
          {results.profiles.map(p => (
            <div key={p.id}>{p.name}</div>
          ))}

          <h4>Projects</h4>
          {results.projects.map(p => (
            <div key={p.id}>{p.title}</div>
          ))}

          <h4>Skills</h4>
          {results.skills.map(s => (
            <div key={s.id}>{s.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
