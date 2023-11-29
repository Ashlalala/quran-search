function countLetter(quranAPI, match){
  let count=0
  if(match=='ا'){
    for(let i=0; i<quranAPI['surahs'].length; i++){
      for(let j=0; j<quranAPI['surahs'][i].ayahs.length; j++){
        let ayatArr=quranAPI['surahs'][i].ayahs[j].text.split('')
        count += ayatArr.filter((x) => x=='ا').length
        count += ayatArr.filter((x) => x=='ٱ').length
        count += ayatArr.filter((x) => x=='أ').length
        count += ayatArr.filter((x) => x=='إِ').length

      }   
    }
  } else{
    for(let i=0; i<quranAPI['surahs'].length; i++){
      for(let j=0; j<quranAPI['surahs'][i].ayahs.length; j++){
        let ayatArr=quranAPI['surahs'][i].ayahs[j].text.split('')
        count += ayatArr.filter((x) => x==match).length
      }   
    }
  }
    return count
  
}


export default function CountLetter(props){
  return countLetter(props.quran ,props.searchFor)
}