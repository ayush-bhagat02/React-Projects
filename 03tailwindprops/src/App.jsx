import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import ab from './assets/1.jpg'
import sp from './assets/2.jpg'
import rv from './assets/3.jpg'
import aa from './assets/4.jpg'
import ra from './assets/5.jpg'
import uk from './assets/6.jpg'
import abd from './assets/7.jpg'

function App() {
  const [count, setCount] = useState(0)

  let user =[
    {name : 'ayush', image : ab},
    {name : 'shivam', image : sp},
    {name : 'ravi', image : rv},
    {name : 'aadi', image : aa},
    {name : 'rahul', image : ra},
    {name : 'utkarsh', image : uk},
    {name : 'abdu', image : abd}
  ]

  return (
    <>
    <div className=" flex justify-evenly w-dvw mb-10">
    {user.map((person , index)=>(
      <Card
        key = {index}
        uname = {person.name}
        uimage = {person.image}
      />
    ))}
    </div>
    <div className=" flex justify-evenly w-dvw mb-10 ">
    {user.map((person , index)=>(
      <Card
        key = {index}
        uname = {person.name}
        uimage = {person.image}
      />
    ))}
    </div>
    <div className=" flex justify-evenly w-dvw mb-10">
    {user.map((person , index)=>(
      <Card
        key = {index}
        uname = {person.name}
        uimage = {person.image}
      />
    ))}
    </div>
    </>
  )
}

export default App
