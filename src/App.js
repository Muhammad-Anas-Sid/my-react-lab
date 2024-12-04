import React from 'react';
import Head from './components/Head';
import Userinfo from './components/Userinfo';
import Stats from './components/Stats';
import Messages from './components/Messages';

function App() {
  const user1 = {
    name: "Muhammad Umair Siddiqui",
    email: "umaircaa2@gmail.com",
    role: "Deputy Director",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg",
  };

  const statistics = {
    totalUsers: 56 ,
    activeUsers: 21 ,
    newSignups: 30 ,
    activePercentage: ( 21 / 56 )*100,
  };

  const messages = [
    {sender1: "Taha", message1: "Team meeting at 3 o'clock, be ready!"},
    {sender2: "Ayesha", message2: "There are new signups, review them plzz.."},
  ];
  
  return (
    <div>
      <Head/>
      <div className='top-section'>
        <Userinfo user={user1}/>
        <Stats stats={statistics}/>
      </div>
     <Messages messages={messages}/>
    </div>
  );
}

export default App;