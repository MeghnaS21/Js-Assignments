const contactform=document.querySelector(".add-contact")
const ufname=document.getElementById('uname')
const uemail=document.getElementById('email')
const uphone=document.getElementById('phone')
const msgcont=document.getElementById("msg")
contactform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const data={
        id:Date.now(),
        fname:ufname.value,
        email:uemail.value,
        phone: uphone.value
    } 
    //creating the object of values we have entered ?
fetch("http://localhost:3001/empDetails",{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
}).then((res)=>{
    return res.json()
}).then((res)=>{
    msgcont.innerHTML="Task Completed";
    alert("Added Contact Successfully")
}).catch((err)=>{
    msgcont.innerHTML="Sorry ! Try Again o"
})
})
