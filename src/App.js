import React from 'react';
import ProfileCard from "./components/ProfileCard";
import './components/ProfileCard.css';

function App() {
  
  return (
    <div>
      <ProfileCard
      name="Muhammad Anas" 
      age={19} 
      occupation="Student" 
      location="Karachi, Pakistan"
      />
    </div>
  );
}

export default App;