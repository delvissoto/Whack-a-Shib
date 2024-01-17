const cursor = document.querySelector('.cursor')// used to style the clicker
const holes = [...document.querySelectorAll('.hole')]
const sound = new Audio('dead.mp3')
const soundEnd = new Audio('pup4.mp3')// used to upload audio to the game.
const countdown= document.querySelector('#timeleft')
let  timer;
const scoreEl = document.querySelector('#score')
let score = 0// score 1st value
let currentTime =60 // setting up th etime for timer

 //set the math.random for my diferent hole clases
function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]

    let timer = null

    let img = document.createElement('img')
   
    img.classList.add('dodge')
    img.src = "rocket.jpg"
// most of the executions go here
// this area performs the sound for attacking the dog, 
// increasess the score
// changes the image to boom when clicked on the right hole
// and manipulates how fast it transittion when pressed to go to the other destination.
    img.addEventListener('click',() => {
        score++
        sound.play()
        scoreEl.textContent = score
        img.src= 'boom.jpg'
        clearTimeout(timer)
        setTimeout(()=> {
            hole.removeChild(img)
            run()
            }, 500)
            
            
    })
//how fast the image is going to move
    hole.appendChild(img)
    timer= setTimeout(()=> {
    hole.removeChild(img)
    run()
    }, 700)//the number 700 menas 700/1000 1000= 1second
}
run()
//do my countdown to finish the game, and create a alert with score.
 function countDown(){
        currentTime--
        countdown.textContent=currentTime
    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timer)
        soundEnd.play()

    alert(`'GAME OVER! Your final Score is ${score}'`)
  

    
 }
 }
 let countDownTimerId= setInterval(countDown,1000)
// The mousemove event is fired at an element when a pointing 
// device (in this case the mouse) is moved while the cursor's 
// hotspot is inside it.
// page X returns the horizontal cordinate at wich the pixel is clicked. 
// and the Y returns the vertical one

document.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
document.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
document.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})
// is document an window the same thing? i saw many examples with window. 