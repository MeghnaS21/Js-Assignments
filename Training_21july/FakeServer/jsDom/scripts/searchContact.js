const fname=document.getElementById("uname")
const addContact=document.querySelector('.user-form')
const contact=document.querySelector('.contact-container')
addContact.addEventListener('submit',(event)=>{
    event.preventDefault()
    let search=fname.value
    fetch(`http://localhost:3001/empDetails?fname=${search}`).then((res)=>{
        return res.json()
    }).then((res)=>
    printUI(res)).catch((err)=>console.log(err))
})
function printUI(data){
    let output=''
  data.map((item)=>{
   output+=`<div class="col-sm-4 sides">
    <div class="card">
      <div class="card-body textStyle">
        <h3 class="headStyle actionBox">${item.fname}</h3>
        <p>${item.email}</p>
        <p>${item.phone}</p>
      </div>
    </div>
    </div>`
  })
  contact.innerHTML=output
  }