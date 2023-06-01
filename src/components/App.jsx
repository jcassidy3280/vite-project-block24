import { useState } from 'react'
import '../App.css'
import {puppyList} from '../data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
   <div className="App">
    {
      puppies.map((puppy) => {
      return (
      <p onClick={()=>{setFeatPupId(puppy.id)}}  key={puppy.id}>
      {puppy.name}</p>)
   })
    }
    { featPupId && <div className="Featured">
      <h2>{featuredPup.name}</h2>
          <p>
            <p>Age: {featuredPup.age}</p>
            <p>Email: {featuredPup.email}</p>
          </p>
      </div> } 
   </div>
  )
}

export default App


