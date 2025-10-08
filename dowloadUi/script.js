let count=0
let secs=5
let progress= document.querySelector(".progress")
let percent=document.querySelector(".percent")
let card=document.querySelector(".card")
let inrv=setInterval(()=>{
  if(count<100){
    count++;
    progress.style.width=`${count}%`
    percent.textContent=`${count}%`
  }
  else{
    document.querySelector(".title").textContent="Downloaded."
    clearInterval(inrv);
  }
},(secs*1000)/100)

setTimeout(()=>{
  card.style.display="none"
},(secs+2)*1000)