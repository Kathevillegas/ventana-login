const boton = document.getElementById('ingresar')
boton.addEventListener('click',e=>{
    e.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if(username === '' || password ==='')
    alert('No se ha indicado un usuario o contraseña')

    if(username === 'kathe' && password ===  'kathe11'){
        alert('BIENVENIDO')
    } else {
        document.querySelector('#mensaje').style.display='block'
        setTimeout(()=>{
            document.querySelector('#mensaje').style.display='none'
        },3000)
    }

})

document.getElementById('pasword')
addEventListener('mouseenter',mostrar)

function mostrar(){
    console.log('aja')
    document.getElementById('password')
    
}