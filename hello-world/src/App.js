import './App.css';

const listItems = [1, 2, 3, 4, 5]

const task = (array) => {
  return (
    array.map((item) => {
      return <li>Item: {item}</li>
    })
  )
}

function App() {
  return task(listItems)
}

export default App;
