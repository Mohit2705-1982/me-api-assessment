import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  // Load profile once
  useEffect(() => {
    fetch("http://127.0.0.1:8000/profile")
      .then(res => res.json())
      .then(data => {
        console.log("PROFILE:", data);
        setProfile(data);
      })
      .catch(err => {
        console.error("PROFILE ERROR:", err);
        setError("Backend not reachable");
      });
  }, []);

  // Search
  const search = () => {
    fetch(`http://127.0.0.1:8000/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        console.log("SEARCH:", data);
        setResults(data);
      })
      .catch(err => {
        console.error("SEARCH ERROR:", err);
        setError("Search failed");
      });
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>My Profile App</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.education}</p>
          <p>
            <a href={profile.github} target="_blank">GitHub</a> |{" "}
            <a href={profile.linkedin} target="_blank">LinkedIn</a>
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      <hr />

      <h3>Search</h3>
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
