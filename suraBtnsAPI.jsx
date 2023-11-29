function MakeSuraBtnsAPI(amount, pId){//add pKey
  let arr=[]
  for(let i=0; i<amount; i++){
    arr[i]={}
    arr[i].key=i
    arr[i].id=(pId+''+i)
    arr[i].suranmr=i

  }
  return arr
}

let suraBtnsAPI=MakeSuraBtnsAPI(114, 'sura')

export default suraBtnsAPI