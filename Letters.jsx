import React from "react"
import quranHTML from "../quran/quranHTML"
import CountLetter from "./CountLetter.jsx"
import LetterBtns from "./LetterBtns"

const alphabetArr=('ۥۦىابجدهوزحطيكلمنصعفضقرستثخذظغشء').split('')

export default function Letters(){
  const [currLetter, setCurrLetter]=React.useState(undefined)
  
  function letterBtnsHandleClick(e){
    setCurrLetter(e.target.id)
  }
  
  return(<>
    <LetterBtns alphaArr={alphabetArr} pOnClick={letterBtnsHandleClick} />
    <CountLetter quran={quranHTML} searchFor={currLetter} />
  </>)
}