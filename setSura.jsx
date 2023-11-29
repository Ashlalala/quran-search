import React from "react"
import quranHTML from "../quran/quranHTML"
import RenderingAyahs from "./RenderingAyahs"
import suraBtnsAPI from "./suraBtnsAPI"



function MakeSuraBtns(props, pOnClick){
  return(<button 
    key={props.key} 
    id={props.id} 
    data-suranmr={props.suranmr}
    className='sura-nmr-btn'
    onClick={(e)=>pOnClick.apply(this, [e])}
  >{props.suranmr+1}</button>)
}


function SetSura(){
  const [suraNmr, setSuraNmr]= React.useState(0)

  const suraBtns=suraBtnsAPI.map(function(obj){
    return MakeSuraBtns(obj, suraBtnHandleClick)
  })

  function suraBtnHandleClick(e){
    let newSuraNmr=e.target.dataset.suranmr

    setSuraNmr(newSuraNmr)
  }
  
  return (
    <div>
      {suraBtns}
      <h6>{parseInt(suraNmr)+1}</h6>
      {RenderingAyahs(quranHTML, suraNmr)}
    </div>
  ) 
}

export default SetSura