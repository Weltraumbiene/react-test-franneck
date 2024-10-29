import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  // Zähler startet bei dem Wert aus localStorage oder 0
  const [likeCount, setLikeCount] = useState(() => {
    return parseInt(localStorage.getItem('likeCount')) || 0;
  });


  // To-Do-Liste lädt die gespeicherten Aufgaben oder startet als leere Liste
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });


  // Eingabefeld
  const [taskInput, setTaskInput] = useState("");

  // Funktion, die den Zähler um eins erhöht
  const handleLikeClick = () => {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    localStorage.setItem('likeCount', newLikeCount); // Speichern in localStorage
  };

  // speichert die Eingabe in `taskInput`
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  // Fügt eine neue Aufgabe hinzu
  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      const newTasks = [...tasks, taskInput]; // Neue Aufgabe zur Liste hinzufügen
      setTasks(newTasks);                     // `tasks` aktualisieren
      setTaskInput("");                       // Eingabefeld leeren
      localStorage.setItem('tasks', JSON.stringify(newTasks)); // Liste in localStorage speichern
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        
        {/* Logo */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Willkommensnachricht */}
        <p>Das ist ja verrückt!</p>

        {/* Gefällt-Mir Button */}
        <button onClick={handleLikeClick} className="like-button">
          Gefällt mir! ( {likeCount} )
        </button>

        {/* To-Do-Liste mit Eingabefeld und Hinzufügen-Button */}
        <h2>ToDo-Liste</h2>

        {/* Eingabefeld */}
        <input 
          type="text" 
          value={taskInput} 
          onChange={handleInputChange} 
          placeholder="Neue Aufgabe eingeben"
        />

        {/* Hinzufügen Button */}
        <button onClick={handleAddTask}>Hinzufügen</button>



        {/* To Do Liste Anzeigen */}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
