function registerUser(){
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    try{
    name == '' || email == "" || password == "",
    !validateEmail(email)
    return
        
}catch(e){
    console.log(e)
}finally{
    console.log('Executado')
}
let user = {
    name: name, 
    email: email, 
    password: password
}
fetch('api/registerUser',{
    method: 'POST',
    body: JSON.stringify(user),
    HEADERS: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
.then(data => {
    console.log('success:',data)
    alert('Usuário cadastrado com sucesso!')
})
.catch((error)=>{
    console.log('Error',error)
})
}
function validateEmail(email){
    let regExpObj = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExpObj.test(email.toLowerCase());
}
