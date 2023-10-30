import { useEffect } from "react"
import { useState } from "react"


function App() {
  const [data,setData]=useState({})

  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setData(data.results[0]))
  },[])
console.log(data)
  return (
    <>
       {/* <h1>Random Data :{data.picture?.large}</h1> */}
       <h1>Random Data :{data.picture && data.picture.large}</h1>
    </>
  )
}

export default App
