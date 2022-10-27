const clock = document.getElementById('clock-container')
const range = document.getElementById('range')



function arcLength(angle,radius) {
    return Math.sqrt(radius*radius+radius*radius-2*radius*radius*Math.cos((angle/180)*Math.PI))
}


function calcY(arcLen,radius){
    return (arcLen*arcLen)/(2*radius)
}
function calcX(arcLen,y){
    return Math.sqrt(arcLen*arcLen-y*y)
}


function theClock(ratio) {

   
    clock.innerHTML =''
    const length = Math.min(innerHeight,innerWidth) * 0.8
    let DIM = Math.round(length*ratio)

    let radius = DIM/2

    if(radius >10) radius -=10

    clock.style.height=DIM+'px'
    clock.style.width=DIM+'px'
    for (let i = 1; i <= 12; i++) {
        const arc = arcLength(i*30, radius)
        const y = Math.round(calcY(arc, radius))
        const x = radius-Math.round(calcX(arc,y))
        const span = document.createElement('span')
        span.textContent = i
        span.style.top=y+'px'
        span.style.right=x+'px'

        if(6<i && i<=12) {
            span.style.left=x+'px'
        }

        clock.appendChild(span)
    }

    
}

theClock(0.5)
range.addEventListener('input',(event)=> {
    const parcent = event.target.value
    theClock(Number(parcent)/100)
})

const span = document.createElement('div')
span.setAttribute('id','o')

clock.appendChild(span)

let angle = 0

setInterval(()=>{
    // span.style.transform = `rotate(${angle}deg)`
    // span.style.top = '0'
    // span.style.left = '150px'
    const arc = arcLength(angle, 300)
    // console.log(arc)
    const y = Math.round(calcY(arc, 300))
    // const x = 300-Math.round(calcX(arc,y))
    // // console.log(y,x)
    span.style.top = y+'px'
    // span.style.right = x+'px'
    // // span.style.bottom = y+'px'
    // span.style.left = x+'px'
    angle+= 6
},1000)