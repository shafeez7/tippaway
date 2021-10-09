const profileForm = document.querySelector('#editProfile')

const userFullNameContainer = document.querySelector('#userFullName')
const userUsername = document.querySelector('#username')
const userBioContainer = document.querySelector('#userBio')
const profileImg = document.querySelector('#profileImg')
profileForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const usernameInput = profileForm.elements.username.value
    const userFirstInput = profileForm.elements.userFirstName.value 
    const userLastInput = profileForm.elements.userLastName.value 
    const userAgeInput = profileForm.elements.userAge.value
    const userBioInput = profileForm.elements.userBio.value
    const userImgInput = profileForm.elements.profilePic.value
    userFullNameContainer.innerText= `${userFirstInput}  ${userLastInput},  ${userAgeInput}`
    userUsername.innerText = `Welcome @${usernameInput}!`
    userBioContainer.innerText = userBioInput
})
const tipRequestForm = document.querySelector('#requestForm')
const requestContainer = document.querySelector('h5#requestAppend')
const tipAmountContainer = document.querySelector('small#amount')
tipRequestForm.addEventListener('click', (e)=>{
    e.preventDefault()
    const categoryInput = tipRequestForm.elements.tipperCategory.value
    const radiusInput = tipRequestForm.elements.radius.value
    requestContainer.innerText = `Tip Request: ${categoryInput} within ${radiusInput}miles`
    const tipAmountInput= tipRequestForm.elements.tipAmount.value
    tipAmountContainer.innerText = `-$${tipAmountInput}`


})