let current = document.getElementById("current")
let img1 = document.getElementById("MM-01")
let img2 = document.getElementById("MM-11")
let img3 = document.getElementById("MM-05")
let img4 = document.getElementById("MM-17")
let img5 = document.getElementById("MM-03")
let img6 = document.getElementById("MM-07")
let img7 = document.getElementById("MM-14")
let img8 = document.getElementById("MM-16")
let img9 = document.getElementById("MM-15")
let img10 = document.getElementById("MM-06")
let img11 = document.getElementById("MM-02")
let img12 = document.getElementById("MM-04")
let img13 = document.getElementById("MM-13")
let img14 = document.getElementById("MM-12")

let allImg = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14]

for(let i=0;i<allImg.length;i++){
    allImg[i].addEventListener("mouseenter",function(){
        current.innerText = allImg[i].getAttribute('title');
    })
}