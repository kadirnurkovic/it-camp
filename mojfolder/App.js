
import Greeting from './components/Greeting/Greeting';
import { useState } from 'react'
import React from 'react'
import TeamCard from './components/TeamItem/TeamCard';

const favoriteTeams = [
   { id:0, name:"Arsenal", points: 6 },
   { id:1, name:"Man.City", points: 8 },
   { id:2, name:"Man.United", points: 3 },
   { id:3, name:"Liverpool", points: 2 },
   { id:4, name:"Arsenal", points: 1 },
   { id:4, name:"Pazar", points: 0 },
   { id:4, name:"Partizan", points: 3 },
]


function App() {
   const [teams ,setTeams] = useState(favoriteTeams)

   const deleteTeam = (id) => {
      const newTeams = teams.filter((team) => team.id !== id)
      setTeams(newTeams)
   }
   // const [array, setArray] = useState(DATA);
   // const generateNewWord = () => Math.random().toString(36).slice(2 ,7)
   // const reverseArray = () => {
   //    const _array = [...array];
   //    const reversed = _array.reverse();
   //    setArray(reversed);

   // }
   // return ( 
   //    <div>
   //       <button onClick={() => setArray((prev) => [generateNewWord(), ...prev])}>Dodaj random recenicu</button>

   //       <ul>
   //          {array.map((el) => (
   //              <li key={el}>{el}</li>
   //          ))}
   //       </ul>

   //       <button onClick={reverseArray}>REVERSE RECENICA</button>
   //    </div>
   // )
   return (
      <div className="card-container">
         {teams.map((team) => (
            <div key={team.id}>
            <TeamCard name={team.name} points={team.points} onDeleteTeam={() => deleteTeam(team.id)}/>
      </div>
         ))}
      </div>
   )
};

export default App;
