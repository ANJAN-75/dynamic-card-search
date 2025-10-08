//its check device theam
let switchDarkLight = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
};



//its check localstore theam
if(localStorage.getItem("theam")){
    document.body.classList.add(localStorage.getItem("theam"))
}else{
    switchDarkLight();
}


window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
  switchDarkLight();
});


let btn =document.querySelector("button");

//toggle theam using button
btn.addEventListener("click",()=>{
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        localStorage.setItem("theam","light")
    }
    else{
        document.body.classList.remove("light")
        document.body.classList.add("dark")
        localStorage.setItem("theam","dark")
    }
})
