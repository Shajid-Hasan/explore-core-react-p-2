import Bowler from './Bowler'
import Batsman from './Batsman'
import './App.css'
import Users from './User'
import Friends from './Friends'
import { Suspense } from 'react'

// USERS
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

// FRIENDS
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json()
}

function App() {

  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('Clicked')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }
  return (
    <>

      <h1>Vite + React</h1>


      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers= {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are comming for treat...</h3>}>
        <Friends fetchFriends={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick3}>Click2</button>
      <Bowler></Bowler>
    </>
  )
}

export default App
