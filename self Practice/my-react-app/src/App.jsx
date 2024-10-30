import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'
import Actor from './Actor'
import Singer from './Signer'

function App() {
  const [count, setCount] = useState(0)
  const actors=['sakib ','akib','rakib','gakib','hello','gello']
  const singers=[
    {name: 'Dr. Mahfuzur', age: 36},
    {name: 'Eva Rahman', age: 30},
    {name: 'Hero Alam', age: 26},
    {name: 'Pritam', age: 46}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Actor name="Bapparaj"></Actor> */}
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {
        singers.map(singer=><Singer name={singer.name} age={singer.age}></Singer>)
      }
      {/* <Task todo="hello" isDone={false}></Task> */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person> */}
    </>
  )
}
function Person(){
  const age =34;
  return (
    <div className='student'>
      <h3>I am a Person with age {age}</h3>
    </div>
  )
}

export default App
