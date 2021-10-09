
const body = document.querySelector(' #body');
const p = document.querySelectorAll('#body p')
const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', function() {
   document.body.style.backgroundColor=' rgba(95, 134, 134, 0.508)'
})




// setTimeout(()=>{
// document.body.style.backgroundColor='rgb(75, 116, 113)';
// setTimeout(()=>{
//     document.body.style.backgroundColor=' rgb(73, 82, 81)';
//     setTimeout(()=>{
//         document.body.style.backgroundColor='rgba(13, 102, 102, 0.555);';
//         setTimeout(()=>{
//             document.body.style.backgroundColor=' rgb(82, 109, 105)';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor='white'
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//creating promise
const delayedColorChange = (color, delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve()
        }, delay)
     })
}

delayedColorChange('teal', 500)
//since its on one line no need to add 'return' and return next color bc it fits on one line and is a implicit return
.then(()=> delayedColorChange('rgba(13, 102, 102, 0.555)', 500))
.then(()=> delayedColorChange('rgb(82, 109, 105)', 500))
.then(()=> delayedColorChange('teal', 500))
.then(()=> delayedColorChange('white', 500))



const title = document.querySelector('p#what')
const titleColorChange = function(newColor, delay,doNext ){
    setTimeout(()=>{
        title.style.color=newColor;

        doNext && doNext(); 

},delay)

}


async function colorMe(){
  await titleColorChange('yellow', 1000)
  await titleColorChange('white', 1000)
  await titleColorChange('green', 1000)
  await titleColorChange('blue', 1000)
  await titleColorChange('black', 1000)
  
}

colorMe()
// delayedColorChange('yellow', 1000, ()=>{
//     delayedColorChange('white', 2000, ()=>{
//         delayedColorChange('black', 1000, ()=>{

//         })

//     })

// });



const ul = document.querySelector('#discoverList')
const myForm = document.querySelector('#discoverForm')

myForm.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const userInput = myForm.elements.query.value
    const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${userInput}`)
    
    const newImg = document.createElement('img')
    newImg.src = res.data.image.medium
    const li = document.createElement('li')
    li.appendChild(newImg)
    ul.append(li)
})


