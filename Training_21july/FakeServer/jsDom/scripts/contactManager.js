let contact = document.querySelector('.contact-container')
fetch('http://localhost:3001/empDetails').then((res) => {
    return res.json()
}).then((res) => {
    console.log(res)
    printUI(res)
}).catch((Err) => console.log(Err))


//------------------------------ADD & DISPLAY-------------

function printUI(data) {
    let output = ''
    data.map((item) => {
        output += `<div class="col-sm-4 sides ">
  <div class="card">
    <div class="card-body textStyle">
      <h3 class="headStyle actionBox">${item.fname}</h3>
      <p>${item.email}</p>
      <p>${item.phone}</p>
      <button class="btnStyle" id=${item.id} onClick="deleteUser(this.id)">DELETE</button>
      <button class="btnStyle id=${item.id} onClick="editData(this.id)">EDIT</button>
   
    </div>
  </div>
  </div>`
    })
    contact.innerHTML = output
}

//------------------------------------------ FOR DELETE-------------------------

contact.addEventListener('click', (e) => {
    e.preventDefault()
    const parentElement = e.target.parentElement
    const uid = parentElement.id
    console.log(e)
    if (e.target.id === 'delete-btn') {
        fetch(`http://localhost:3001/empDetails/${uid}`, {
            method: 'DELETE'
        }).then((res) => { 
            return res.json
         }).then((res) => location.reload()).catch((err) => console.log(err))
    }
    
})





function deleteUser(userid) {
    fetch(`http://localhost:3001/empDetails/${userid}`, {
        method: 'DELETE'
    }).then((res) => { 
        return res.json
     }).then((res) => location.reload()).catch((err) => console.log(err))
}



function editData(id) {
    getVal(id);
    const url = `http://localhost:3001/empDetails/${id}`;
    fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        document.getElementById("fname").value = res.fname;
        document.getElementById("email").value = res.email;
        document.getElementById("phone").value = res.phone;
    })
}
function updateData(id) {
    const url = `http://localhost:3001/empDetails/${id}`;
    let data = {
        fname: uname.value,
        email: uemail.value,
        phone: uphone.value
    }
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        location.reload();
        console.log(res);
    });
}