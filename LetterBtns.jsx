export default function LetterBtns(props){
  const ans=[]
  for(let l of props.alphaArr){
    ans.push(<MakeLetterBtnJsx letter={l} pOnclick={props.pOnClick}/>)
  }
  return ans
}

function MakeLetterBtnJsx(props){
  return (<button 
    onClick={(e)=>props.pOnclick.apply(this, [e])}

    key={`${props.letter}-button`} 
    id={props.letter} 
    className="letterBtn" 
    data-value={props.letter}>
      {props.letter}
    </button>)
}