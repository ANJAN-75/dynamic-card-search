let frm=document.querySelector("#main");
let inputs=document.querySelectorAll("input");
let outer=document.querySelector(".outer");

frm.addEventListener("submit",(event)=>{
    event.preventDefault()
   
    let card=document.createElement("div");
    card.classList.add("card");

    let profile=document.createElement("div");
    profile.classList.add("prf")

    let img=document.createElement("img");
    img.setAttribute("src",inputs[0].value)

    let h3=document.createElement("h3")
    h3.textContent=inputs[1].value

    let h5=document.createElement("h5");
    h5.textContent=inputs[2].value

    let p=document.createElement("p");
    p.textContent=inputs[3].value

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    outer.appendChild(card)

    inputs.forEach((elem)=>{
        if(elem.type !== "submit"){
             elem.value=""
        }
       
    })
    
    
})
