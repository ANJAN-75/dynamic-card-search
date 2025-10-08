let email=document.querySelector("#email");
let password=document.querySelector("#password");

let form =document.querySelector("form")

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const reEmailStrict = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const rePasswordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

   let emailans=reEmailStrict.test(email.value);
   let passwordans=rePasswordStrong.test(password.value)
    
   document.querySelector("#Error-box").textContent=" ";
   document.querySelector("#Error-box1").textContent=" ";
   document.querySelector("#resultBox").textContent=" ";
   let isValidate=true;
   

   if(!emailans){
      document.querySelector("#Error-box").textContent="email is unvalid"
      document.querySelector("#Error-box").style.visibility="visible"
       isValidate=false;
   }
   if (!passwordans) {
      document.querySelector("#Error-box1").textContent="password is unvalid"
      document.querySelector("#Error-box1").style.visibility="visible"
      isValidate=false;
   }

   if(isValidate){
      document.querySelector("#resultBox").textContent="Form Submited"
      document.querySelector("#resultBox").style.visibility="visible"
   }

})