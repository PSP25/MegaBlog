
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_NEW_ENV); 
  console.log(import.meta.env.VITE_NEW_ENV);
  return (
    <>
     <h1>blog app</h1>
    </>
  )
}

export default App
