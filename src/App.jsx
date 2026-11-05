import React from 'react'
import SelfIntroduction from './SelfIntroduction'
import Child from './Child';

export default function App() {
  let users=[
    {name:"Sushma",
    age:23,
    city:"bengaluru",
    Email:"Sushmithaka@thestackly.com",
    Phoneno:8660452295},

    {name:"Deepthi",
    age:22,
    city:"Ramanagara",
    Email:"Deepthi@gmail.com",
    Phoneno:8964214557},
    
    {name:"varshitha",
    age:21,
    city:"Chennai",
    Email:"Varshitha@gmail.com",
    Phoneno:6367564856},

    {name:"Theju",
    age:22,
    city:"mandya",
    Email:"theju@gmail.com",
    Phoneno:8754961246},

    {name:"priya",
    age:20,
    city:"Mysuru",
    Email:"Priya@gmail.com",
    Phoneno:6367564856}
  ]

  
  return (
    <div>
    <h1>User Management System</h1>
    {users.map((user,ind)=>(
      <Child
        key={ind}
        name={user.name}
        age={user.age}
        city={user.city}
        Email={user.Email}
        Phoneno={user.Phoneno}

      />
    ))}
    
    
    <SelfIntroduction/>
    
    
    </div>
  );
}