export default function RenderingAyahs(quranHTML, suraNmr){
  let ans=[]
  let CurrSuraAhays=quranHTML.surahs[suraNmr].ayahs
  for(let i=0; i<CurrSuraAhays.length; i++){
    ans.push(<div className="ayah">{CurrSuraAhays[i].textHTML}{CurrSuraAhays[i].ayahNmrJsx}</div>)

  }

  return (ans)
}