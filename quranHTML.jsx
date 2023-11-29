import quranAPI from "./quranAPI"
function addTextHTML(quranAPI, addKey=true){
  for(let i=0; i<quranAPI['surahs'].length; i++){
    for(let j=0; j<quranAPI['surahs'][i].ayahs.length; j++){
      if(addKey==true){
        quranAPI['surahs'][i].ayahs[j].textHTML=<p className="ayahText" key={`sura${i+1},ayah${j}`}>{quranAPI['surahs'][i].ayahs[j].text}</p>
        quranAPI['surahs'][i].ayahs[j].ayahNmrJsx=<div className="ayahNmr" key={`suranNmr${i+1},ayahNmr${j}`}>{quranAPI['surahs'][i].ayahs[j].numberInSurah}</div>
      }
      else{quranAPI['surahs'][i].ayahs[j].textHTML=<p key={`sura${i+1},ayah${j}`}>{quranAPI['surahs'][i].ayahs[j].text}</p>}
    }
  }
  return quranAPI
}

let quranHTML=addTextHTML(quranAPI)



export default quranHTML