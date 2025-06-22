import './App.css'
function App() {
 
 
  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>

     
    </>
  )
}

function Person(){
   let age = 45;
  return(
    <p>I am a person -{age}</p>
  )
}

export default App
