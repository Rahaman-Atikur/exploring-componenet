import './App.css'
import ToDo from './todo';
import Actor from './actor';
import Singer from './singer';
import Books from './books';
function App() {
  const actors = ["Bappa Raj","Alamgir","Manna"];
  const singers=[
    {id:1,name:"Mahfuz",age:35},
    {id:2,name:"Robiul",age:45},
    {id:3,name:"Reza",age:55}
  ]
  const books=[
    {bookName:"JavaScript",bookWriter:"Elon Mask"},
    {bookName:"TypeScript",bookWriter:"Donald Trump"},
    {bookName:"Java",bookWriter:"King Charls"},
    {bookName:"Python",bookWriter:"Queen Elizabeth"}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      {
        books.map(book=> <Books book={book}></Books>)
      }
      {/* {
        singers.map(singer=> <Singer key={singer.id} singer={singer} ></Singer>)
      } */}
      {/* {
        actors.map(actor=><Actor actor={actor}></Actor>)
      } */}

      {/* <ToDo task="Learn React" isDone={true} ></ToDo>
      <ToDo task="Learn React" isDone={false} ></ToDo>
      <ToDo task="Learn React" isDone={true}></ToDo> */}
      {/* <Student></Student>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mazumder" tech="JavaScript"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Rajon" tech="Java"></Developer>
      <Student name="Mushfiqur" runs="56"></Student>
      <Player playername="Sakib al Hasan" runs="87"></Player>
      <Shopping isShoppingDone="Yes" negetive="20"></Shopping>
      <MoneyGift given="50"></MoneyGift> */}
    </>
  )
}
function MoneyGift({ given }) {
  return (
    <div className='student'>
      <h1>Gifted:{given = 0}</h1>
      <p>Not Gifted:{given = 0}</p>
    </div>
  )
}
function Shopping({ isShoppingDone, negetive = 0 }) {
  return (
    <div className='student'>
      <h1>Done:{isShoppingDone}</h1>
      <p>Pending:{negetive}</p>
    </div>
  )
}
function Player({ playername, runs }) {
  //   {
  //     "name": "Sakib al Hasan",
  //     "runs": "87"
  // }
  console.log({ playername, runs });
  return (

    <div className='student'>
      <h2>Runs:{playername}</h2>
      <p>Average:{runs}</p>
    </div>

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
  const personStyle = {
    color: "red",
    textAlign: "center"
  }
  return (
    <div>
      <p style={personStyle}>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}
function Developer(props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <p>Name:{props.name}</p>
      <p>TechStack:{props.tech}</p>
    </div>
  )
}
export default App
