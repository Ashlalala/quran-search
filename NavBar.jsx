export default function NavBar(props){
  return (<header>
    <ul>
      <li id="navMain" onClick={(e)=>props.pOnClick.apply(this, [e])}>Main</li>
      <li id="navSearch" onClick={(e)=>props.pOnClick.apply(this, [e])}>Search</li>
      <li id="navLetters" onClick={(e)=>props.pOnClick.apply(this, [e])}>Letters</li>
    </ul>
  </header>)
}