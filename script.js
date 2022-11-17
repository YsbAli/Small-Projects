let btn = document.getElementById('btn')
btn.addEventListener('click' , Btnclick)
let img = document.getElementById('img')
let H1 = document.getElementById('h1')


function Btnclick(){
     // alert('Button Clicked')

    if (btn.textContent.includes('On')){
        img.src ='Assests/image/light-on.jpg'
        btn.innerText = 'Light Off'
        H1.innerText ='Light On'
    }
    else{
        img.src ='Assests/image/lightoff.jpg'
        btn.innerText = 'Light On'
        H1.innerText ='Light Off'
    }

}