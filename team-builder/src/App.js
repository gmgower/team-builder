import React, {useState} from 'react';

import TeamCard from './components/TeamCard.component.jsx'
// import TeamList from './components/TeamList.component.jsx'

import './App.css';

function App() {

const [people, setPeople] = useState([
  {name: 'John', email: 'john@mail.com', role: 'frontend engineer'},
  {name: 'Jane', email: 'jane@mail.com', role: 'backend engineer'},
])


return (
    <div className="App">
      {people.map(person => <TeamCard person={person} />)}
    </div>
  );
}

export default App;
