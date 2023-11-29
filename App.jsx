import { useState } from 'react'
import './App.css'
import SetSura from './setSura/setSura'
import NavBar from './navBar/NavBar'
import Letters from './letters/Letters'

function App() {
  const [currNav, setCurrNav] = useState('navMain')
  function NavBarHandleClick(e){
    setCurrNav(e.target.id)
  }
  if(currNav=='navMain'){
    return (
      <>
      <NavBar pOnClick={NavBarHandleClick} />
      <SetSura />
      </>
    )
  } else if(currNav=='navSearch'){
    return (
      <>
      <NavBar pOnClick={NavBarHandleClick} />
      Search
      </>
    )
  } else if(currNav=='navLetters'){
    return (
      <>
      <NavBar pOnClick={NavBarHandleClick} />
      <Letters />
      </>
    )
  }
}
export default App
