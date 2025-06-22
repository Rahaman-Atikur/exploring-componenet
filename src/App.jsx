import './App.css'
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
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
export default App
