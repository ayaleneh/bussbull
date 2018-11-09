'use strict'
let funny_image = []
let public_counter=0
let container = document.getElementById('first_div')
let access_fun = document.getElementsByClassName('funny-image')

function images (title, filepath, id, alt) {
  this.title = title
  this.filepath = filepath
  this.clicked = 0
  this.shown = 0
  this.id = id
  this.alt = alt
}

if(localStorage.local){
  let parsePlaces = localStorage.getItem('local')
  funny_image = JSON.parse(parsePlaces)
}
else{
  let im1 = new images('firstimage','./img/bag.jpg', 'i1', 'image of bug')
  let im2 = new images('secondimage','./img/banana.jpg', 'i2', 'image of banana')
  let im3 = new images('thirdimage', './img/bathroom.jpg', 'i3', 'image of bathroom')
  let im4 = new images('fourthimage', './img/boots.jpg', 'i4', 'image of breakfast')
  let im5 = new images('fifthimage', './img/bubblegum.jpg', 'i5', 'image of bubbegum')
  let im6 = new images('sixthimage', './img/chair.jpg', 'i6', 'image of bubbegum')
  let im7 = new images('seventhimage', './img/cthulhu.jpg', 'i7', 'image of bubbegum')
  let im8 = new images('eightimage', './img/dog-duck.jpg', 'i8', 'image of bubbegum')
  let im9 = new images('ninthimage', './img/dragon.jpg', 'i9', 'image of bubbegum')
  let im10 = new images('tenthimage', './img/pen.jpg', 'i10', 'image of bubbegum')
  let im11= new images('eleventhimage', './img/pet-sweep.jpg', 'i11', 'image of bubbegum')
  let im12 = new images('tweleveimage', './img/scissors.jpg', 'i12', 'image of bubbegum')
  let im13 = new images('13mage', './img/shark.jpg', 'i13', 'image of bubbegum')
  let im14 = new images('14image', './img/sweep.png', 'i14', 'image of bubbegum')
  let im15 = new images('15image', './img/tauntaun.jpg', 'i15', 'image of bubbegum')
  let im16 = new images('16image', './img/unicorn.jpg', 'i16', 'image of bubbegum')
  let im17 = new images('17image', './img/usb.gif', 'i17', 'image of bubbegum')
  let im18= new images('18image', './img/water-can.jpg', 'i18', 'image of bubbegum')
  let im19 = new images('19image', './img/wine-glass.jpg', 'i19', 'image of bubbegum')
  let im20 = new images('20image', './img/wireframe.png', 'i20', 'image of bubbegum')
  let im21 = new images('21image', './img/breakfast.jpg', 'i21', 'image of bubbegum')

  funny_image.push(im1, im2, im3, im4, im5,im6,im7,im8,im9,im10,im11,im12,im13,im14,
    im15,im16,im17,im18,im19,im20,im21)
}
let randomNumber = function() {
  return Math.floor(Math.random() * funny_image.length)
}


let FirstImage
let SecondImage
let ThirdImage

let clickHandler = function(event) {

  if(FirstImage.id === event.target.id) {
    FirstImage.clicked++
  } else if(SecondImage._id === event.target.id) {
    SecondImage.clicked++
  } else {
    ThirdImage.clicked++
    
  }
  localStorage.setItem('local', JSON.stringify(funny_image))
  displayImages()
  public_counter++
  if(public_counter===10){
    displayChart()
  }
  console.log('public counter is'+public_counter)
 
}
let counter
let stored_value=[]

let displayImages = function() {
  for(let i = 0; i < access_fun.length; i++) {
    let html_image = access_fun[i]
  //  let counter=randomNumber()
    //stored_value.push(counter)
    let number=randomNumber()
    let randomimage = funny_image[number]
    if(i === 0) {
      FirstImage = randomimage
     
    }
    else if(i === 1) {
      if(FirstImage.id!==funny_image[number].id)
      {
        //console.log(cities[number])
        SecondImage=randomimage
      }
      else if(FirstImage.id===funny_image[number].id)
      {
        console.log("hello")
        //console.log(cities[number])
 
        console.log("number is",number)
        let num=randomNumber()
        console.log("num is",num)
        if(number===num){
          console.log("debuger")
          if(num===0){
            num=num+1
            randomimage===funny_image[num]
            console.log("funny image id is"+funny_image[num].id)
            SecondImage=randomimage
          }
          if(num===images.length-1){
            num=num-1
            randomimage=funny_image[num]
            console.log("funny image id is"+funny_image[num].id)
            SecondImage=randomimage
          }
          if(num<4){
            num=num+1
            randomimage=funny_image[num]
            console.log("funny image id is"+funny_image[num].id)
            SecondImage=randomimage
          }
        }else{
          randomimage=funny_image[num]
          SecondImage=randomimage
        }
 
      }
    }
      
    else if(i===2){
      if((FirstImage.id!==funny_image[number].id)){
        console.log("first image id is"+FirstImage.id)
        console.log("third image id is"+funny_image[number].id)
          ThirdImage=randomimage
      }
      else{
        console.log("hello")
        //console.log(cities[number])
 
        console.log("number is",number)
        let num=randomNumber()
        console.log("num is",num)
        if(number===num){
          console.log("debuger")
          if(num===0){
            num=num+1
            randomimage===funny_image[num]
            console.log("funny image id is"+funny_image[num].id)
            ThirdImage=randomimage
          }
          if(num===funny_image.length-1){
            num=num-1
            randomimage=funny_image[num]
            console.log("funny image id is"+funny_image[num].id)
            ThirdImage=randomimage
          }
          if(num<funny_image.length-1){
            num=num+1
            randomimage=funny_image[num]
            console.log("funny image id is"+funny_image[num].id)
            ThirdImage=randomimage
          }
        }else{
          randomimage=funny_image[num]
          ThirdImage=randomimage
        }
 
        console.log("right here1")
      }
      if(SecondImage.id!==funny_image[number].id)
      {
        console.log("second image id is"+SecondImage.id)
        console.log("third image id is"+funny_image[number].id)
        ThirdImage=randomimage
      }
      else{
        console.log("hello")
        //console.log(cities[number])
 
        console.log("number is",number)
        let numm=randomNumber()
        console.log("num is",numm)
        if(number===numm){
          console.log("debuger")
          if(numm===0){
            numm=numm+1
            randomimage===funny_image[numm]
            console.log("funny image id is"+funny_image[numm].id)
            ThirdImage=randomimage
          }
          if(numm===funny_image.length-1){
            numm=numm-1
            randomimage=funny_image[numm]
            console.log("funny image id is"+funny_image[numm].id)
            ThirdImage=randomimage
          }
          if(numm<funny_image.length-1){
            numm=numm+1
            randomimage=funny_image[numm]
            console.log("funny image id is"+funny_image[numm].id)
            ThirdImage=randomimage
          }
        }else{
          randomimage=funny_image[numm]
          ThirdImage=randomimage
        }
        console.log("right here2")
      }
    }
    html_image.src = randomimage.filepath
    html_image.setAttribute('id', randomimage.id)
    randomimage.shown++
    console.log(randomimage.id, html_image.id)
    html_image.addEventListener('click', clickHandler)
  }
}
displayImages()

function myfunction(){
  displayImages()
}

