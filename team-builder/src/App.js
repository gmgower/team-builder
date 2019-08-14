import React, { useState } from 'react';

import TeamCard from './components/TeamCard.component.jsx';
import TeamList from './components/TeamList.component.jsx';
import Form from './components/Form.component.jsx';

import './App.css';

function App() {
  const [people, setPeople] = useState([
    {
      id: '01', name: 'John', email: 'john@mail.com', role: 'frontend engineer'},
    { id: '02', name: 'Jane', email: 'jane@mail.com', role: 'backend engineer' }
  ]);

  return (
    <div className='App'>
      <Form />
      <TeamCard />
      {people.map((person, index) => (
        <TeamList person={person} key={index} />
      ))}
    </div>
  );
}

export default App;
