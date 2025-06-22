import './App.css'
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Academic></Academic>
      <Academic></Academic>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}
function Person() {
  let age = 45;
  let name = 'Jack'
  return (
    <p>I am a person:{name} -{age}</p>
  )
}
function Sports() {
  return (
    <>
      <h2>Cricket</h2>
      <p>Playing and loosing</p>
    </>
  )
}
function Academic(){
  return(
    <div>
      <h1>MS Degree Holder</h1>
      <p>Software Engineering Career is Opened and this is <br />
      how can not be a good Software Engineer</p>
    </div>
  )
}
export default App
