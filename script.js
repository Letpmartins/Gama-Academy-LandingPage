let email = document.getElementById('email')
let btn = document.getElementById('btn')
let list = []

btn.addEventListener("click", ()=>{
    list.push(email.value)
    localStorage.setItem('list', list)

    alert("Obrigada por se inscrever!")
})