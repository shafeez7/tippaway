const myForm = document.querySelector('#form')
const ulist = document.querySelector('#profile')




myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit!')
    const firstInput = myForm.elements.firstName.value
    const lastInput = myForm.elements.lastName.value
    const ageInput = myForm.elements.age.value
    const li1 = document.createElement('li')
    ulist.appendChild(li1)

    li1.append(`Hello ${firstInput}, Thank you for joining Tipaway! Interesting to see you are ${ageInput} Hope to see you soon ${lastInput.toUpperCase()} `)

});


const greetUserContainer = document.querySelector('.greetUser')
const h1Welcome = document.querySelector('#inputEvent')
firstName.addEventListener('input', function (e) {
    if (firstName.value.length > 0) {
        h1Welcome.innerText = `Welcome, ${firstName.value}`
    }
    else {
        h1Welcome.innerText = 'Sign in'
    }
    greetUserContainer.innerText = `WELCOME ${firstName.value}`
})


const tipUser = document.querySelector('.tipUser')

myForm.addEventListener('submit', (e) => {
    userFirstName = myForm.elements.firstName.value
    tipUser.innerText = (`Welcome ${userFirstName}!`)

})



