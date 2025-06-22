import './App.css'
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mazumder" tech="JavaScript"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Rajon" tech="Java"></Developer>
    </>
  )
}
function Student() {
  return (
    <div className='student'>
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}
function Person() {
  let name = "Jack";
  let age = 35;
  const personStyle ={
    color:"red",
    textAlign:"center"
  }
  return (
    <div>
      <p style={personStyle}>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}
function Developer(props){
  console.log(props);
  return (
    <div style={{
      border:'2px solid green',
      borderRadius:'20px'
    }}>
      <p>Name:{props.name}</p>
      <p>TechStack:{props.tech}</p>
    </div>
  )
}
export default App
