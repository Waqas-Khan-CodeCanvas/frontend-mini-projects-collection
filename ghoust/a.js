


// let marks = {
//     waqas: 90,
//     ali: 98,
//     ahsan: 80,
//     zaryab: 70,
//     khan: 30
// }
// for (let i =0; i<Object.keys(marks).length; i++){
//     document.write(Object.keys(marks)[i],"is very high marks")
// }
// for (let i=0; i<Object.keys(marks).length; i++){
//     document.write("The marks of ", + Object.keys(marks)[i] ,+ "are ", + marks[Object.keys(marks)[i]])
// }
// for ( let key in marks){
//     document.write("the marks of  "+ key + " are " ,marks[key])
// }
// let correctnumber=4
// let i
// while (i != correctnumber){
//     i=prompt("Enter the correct number here:")
//     i = Number.parseInt(i)
//     document.write("tey again2")
// }
// const mean = (a, b, c, d) => {
//     return a+b+c+d
// }
// document.write(mean(1,2,3,4))

// let nme = "waqas"
// document.write(nme.length)
// let name="hello how are you "
// document.write(name[0])

// for (let i in name){
//     document.write(i)
// }
// let me="waqas"
// let you="ahsan"
// let love=`${me} and ${you}`
// document.write(love)


// escape sequence characters
// let sentece="it' me "
// document.write(sentece)
//  some more metheds of String

// let name =" ali Khan"
//  document.write(name.toUpperCase())
//  document.write(name.toLowerCase())
//  document.write(name.slice(2,5))

//  let anther_name="ahsan khan"
//  document.write(anther_name.replace("khan","love"))

//  let me="zaryab"
//  let you="ahsan"
//   document.write(me.concat(you,"both are my freinds"))



//   let hello="                                       s                 u               r           e"
//   document.write(hello.trim())


//   let a = [1,2,3,4,45]
//   let b= [3,5,6,7,53,2]
//   document.write(a.concat(b))

// let hey = "what is your name "
// for (let i=0; i < hey.length; i++){
//     document.write(hey[i])
// }

// practice set of chapetr 
// document.write("hello \"".length)
// const introductio="my name is waqas khan and I'm from chargulli"
// document.write(introductio.includes('waqas'))


// problem no 3


// let name=prompt("what is your name :")
// document.write(name.toUpperCase())


// problem no 4

// let string="please give me Rs :1000"
// document.write(string.slice("please give me ".length))


// problem no 5
// string are imutable


// introduction to arry 
// chaptera five


// let marks=[1,2,3,4,5,6,,7,8,9,null, false,"hello",undefined]
// document.write(marks)
// document.write(marks[19])
// document.write("the lenght of marks is ",marks.length)

// marks[0]=["hello"]
// document.write(marks)
// document.write(typeof (marks))
// for (let i=0; i< marks.length;i++){
//     document.write(marks[i])
// }

// let num = [11, 2, 53, 43, 5, 6, 1]
// let num2=num.toString()
// document.write(num2)
// document.write(typeof num2)
// document.write(num.join("_"))
// document.write(num.pop())
// document.write(num.push(89))
// document.write(num)
// document.write(num.shift())
// document.write(num)
// document.write(num.unshift(78))
// delete num[0]
// document.write(num)
// document.write(num.length)
// const compare = (a,b) => {
//     return a - b;
// }
// num.sort(compare)
// document.write(num)
// num.reverse()
// document.write(num)

// num.splice(2,0,20,30,40)
// document.write(num)
// for (let i=0; i<num.length; i++){
//     document.write(i)

// }
// num.forEach((element)=>{
//     document.write(element * element)
// // })
// let hello = "what is your name can you tell me your name would you like to tell me your name"
// let arr= Array.from(hello)
// document.write(arr)

// for ( let i of num){
//     document.write(i)

// }
// for ( let i in num){
//     document.write(num[i])
// }

// let num=[22,33,44,55]
// let new_num=num.map((value,index,arry)=>{
//     return value+ index+ arry

// })
// document.write(new_num)

// let num2=[22,33,44,55,2,3,4,5,6,7,8,9]

// let filtter=num2.filter((a)=>{
//     return a < 20
// })
// document.write(filtter)
// let num=[1,2,3,4,5,6,7,8,9]
// let new_num=num.reduce((h1,h2)=>{
//     return h1 + h2

// })
// document.write(new_num)


// practice set 5
// take input from the user and add to that an arry

// let a = [1,2,3,4,5,6,7,8,9]
// let num=parseInt(prompt("Enter a number to add to the arry :"))
// a.push(num)
// document.write(a)
// while (num!=0);
// document.write("hello")

// guss_number=parseInt(prompt("Gusse the number :"))
// number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30]
// gussed_number=Math.round(Math.random(100))
// document.write(gussed_number)
// if () {

// } else {

// }
// console.time()
// let abj={
//     waqas: 920389,
//     ali:348905,
//     khan:829058,
//     ahsan:3490
// }
// for ( let i in abj){
//     console.log("for loop of obj")
// }

// console.timeEnd()


// console.time()
// // console.table(abj)
// for (let i =0; i< 20 ; i++){
//     document.write(i)
//     console.log("for loop")
// }
// console.timeEnd()

// document.body.style.background ="yellow"
// let runAgain = true
// while (runAgain) {
//     let age = parseInt(prompt("Enter your age here:"))
//     if (age<=0){
//         console.error("please enter a valid age !")
//         break;
//     }
//     if (age >= 18) {
//         alert("you can drive ")
//     } else {
//         alert("you can't drive ")

//     }
//     runAgain=confirm("Do you want to play again 12")
// }

// let number=parseInt(prompt("Enter a number here : "))
// if (number>4) {
//     location.href = "https://google.com"
// } else {
//     document.write("your number is ",number)
// }

// let color= prompt("Enter your color name")
// document.body.style.background=color

// if (condition) {

// } else {

// }while()
// console.log('hello owrld')
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// let arr = Array.from(document.body.childNodes)
// console.log(arr)
// console.log()
// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.firstChild.next.Sibling)
//  let b= document.body
//  console.log("the frist child of b is ",b.firstChild)
//  console.log("the frist child of b is ",b.firstElementChild)

// let arr = Array.from(document.body.childNodes)
// console.log(arr)

// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows)
// console.log(t.caption)
// console.log(t.tHead)
// console.log(t.tHead.firstElementChild)
// console.log(t.tFoot)
// console.log(t.tBodies)
// console.log()
// let a = document.getElementById("frist")
// let b = document.getElementById("second")
// let c = document.getElementById("third")
// let d = document.getElementById("fourth")
// a.style.color="red"
// b.style.color="yellow"
// c.style.color="blue"
// d.style.color="green"


// let c = document.querySelectorAll(".title")
// console.log(c)
// c[0].style.color="red"
// c[1].style.color="yellow"
// c[2].style.color="blue"
// c[3].style.color="green"

// let a = document.getElementById("id1")
// let b = document.getElementById("id2")
// let sp1=document.getElementById("sp1")
// console.log(a)
// console.log(b)
// console.log(a.matches(".box"))
// console.log(a.matches(".class"))
// console.log(sp1.closest("#sp1"))

// console.log(sp1.closest("#sp1"))
// console.log(sp1.contains("#sp1"))
// console.log(id1.contains("sp1"))
// console.log(sp1.contains(sp1))
// console.log(id1.contains(sp1))
// console.log(sp1.contains(id1))



// let arr=Array.from(document.body.childNodes)
// console.log(arr)
// arr[1].style.color="red"
// $0.style.color ="red"



// document.getElementsByTagName("li")[0].style.color="cyan""Unlock Your Potential" Inspiring Quotes to Ignite Your Fire 🔥,






// qoutes=["Words of Wisdom Embrace Life with These Powerful Quotes 💫",
// "Motivation Station Fuel Your Dreams with Inspirational Quotes 🚀",
// "Rise and Shine Let These Quotes Brighten Your Day ☀️",
// "Dream Big, Achieve Big Unleash Your Inner Champion 🏆",
// "Words That Move Mountains Empowering Quotes for",
// "Unlock the Power of Inspiration Life-Changing Quotes Inside! 🔥",
// "Wisdom that Transforms Lives Join the Quote Revolution 🌟",
// "Your Daily Dose of Motivation Subscribe for Quote Bliss 💫",
// "Ignite Your Passion with Inspirational Quotes Hit Subscribe 🔥",
// "Quotes that Empower Join Our Community of Dreamers 💪",
// "Elevate Your Mind Click to Discover Lifes Greatest Quotes ✨",
// "Inspiring Quotes for Success Don't Miss a Single Upload! 🚀",
// "Be Inspired, Be Subscribed Motivational Quotes Awaits You 😊",
// "Change Your Life with the Power of Words Subscribe Now! 💼",
// "Positive Vibes Only Join Our Quote Family Today! 😄",
// "Quotes that Spark Joy Be Part of Our Inspirational Journey 🌈",
// "Daily Motivation Delivered Hit Subscribe for Quote Goodness! 📲",
// "Empowering Quotes for a Fulfilling Life Click to Stay Inspired! 💫",
// "Subscribe for Success Life-Changing Quotes Await You 🏅",
// "Join the Quote Revolution Click to Transform Your Mindset 🌟",
// "Quotes to Uplift Your Spirit Subscribe and Soar High 🦅",
// "Inspiration Guaranteed Subscribe for a Better Tomorrow! 🌅",
// "Your Source of Positivity Hit Subscribe for Quote Magic! ✨",
// "Unlock Your Potential Join Our Motivated Community Today 🔓",
// "Daily Quotes for Success Click to Unleash Your Inner Champion 🚀",
// "Unlock the Power of Inspiration Life-Changing Quotes Inside! 🔥",
// "Wisdom that Transforms Lives Join the Quote Revolution 🌟",
// "Your Daily Dose of Motivation Subscribe for Quote Bliss 💫",
// "Ignite Your Passion with Inspirational Quotes Hit Subscribe 🔥",
// "Quotes that Empower Join Our Community of Dreamers 💪",
// "Elevate Your Mind Click to Discover Life's Greatest Quotes ✨",
// "Inspiring Quotes for Success Don't Miss a Single Upload! 🚀",
// "Be Inspired, Be Subscribed Motivational Quotes Awaits You 😊",
// "Change Your Life with the Power of Words Subscribe Now! 💼",
// "Positive Vibes Only Join Our Quote Family Today! 😄",
// "Quotes that Spark Joy Be Part of Our Inspirational Journey 🌈",
// "Daily Motivation Delivered Hit Subscribe for Quote Goodness! 📲",
// "Empowering Quotes for a Fulfilling Life Click to Stay Inspired! 💫",
// "Join the Quote Revolution Click to Transform Your Mindset 🌟",
// "Quotes to Uplift Your Spirit Subscribe and Soar High 🦅",
// "Inspiration Guaranteed Subscribe for a Better Tomorrow! 🌅",
// "Your Source of Positivity Hit Subscribe for Quote Magic! ✨",
// "Unlock Your Potential Join Our Motivated Community Today 🔓",
// "Daily Quotes for Success Click to Unleash Your Inner Champion 🚀"]












// motivational_qoutes=["Unlock Your Potential Inspiring Quotes to Ignite Your Fire 🔥", 
// "Words of Wisdom Embrace Life with These Powerful Quotes 💫", 
// "Motivation Station Fuel Your Dreams with Inspirational Quotes 🚀", 
// "Rise and Shine Let These Quotes Brighten Your Day ☀️", 
// "Dream Big, Achieve Big Unleash Your Inner Champion 🏆", 
// "Wisdom that Transforms Lives Join the Quote Revolution 🌟", 
// "Your Daily Dose of Motivation Subscribe for Quote Bliss 💫", 
// "Ignite Your Passion with Inspirational Quotes Hit Subscribe 🔥", 
// "Quotes that Empower Join Our Community of Dreamers 💪", 
// "Elevate Your Mind Click to Discover Life's Greatest Quotes ✨", 
// "Inspiring Quotes for Success Don't Miss a Single Upload! 🚀", 
// "Be Inspired, Be Subscribed Motivational Quotes Awaits You 😊", 
// "Change Your Life with the Power of Words Subscribe Now! 💼", 
// "Positive Vibes Only Join Our Quote Family Today! 😄", 
// "Quotes that Spark Joy Be Part of Our Inspirational Journey 🌈", 
// "Daily Motivation Delivered Hit Subscribe for Quote Goodness! 📲", 
// "Empowering Quotes for a Fulfilling Life Click to Stay Inspired! 💫", 
// "Subscribe for Success Life-Changing Quotes Await You 🏅", 
// "Join the Quote Revolution Click to Transform Your Mindset 🌟", 
// "Quotes to Uplift Your Spirit Subscribe and Soar High 🦅", 
// "Inspiration Guaranteed Subscribe for a Better Tomorrow! 🌅", 
// "Your Source of Positivity Hit Subscribe for Quote Magic! ✨", 
// "Unlock Your Potential Join Our Motivated Community Today 🔓", 
// "Daily Quotes for Success Click to Unleash Your Inner Champion 🚀", 
// "Unlock the Power of Inspiration Life-Changing Quotes Inside! 🔥", 
// "Wisdom that Transforms Lives Join the Quote Revolution 🌟", 
// "Your Daily Dose of Motivation Subscribe for Quote Bliss 💫", 
// "Ignite Your Passion with Inspirational Quotes Hit Subscribe 🔥", 
// "Quotes that Empower Join Our Community of Dreamers 💪", 
// "Elevate Your Mind Click to Discover Life's Greatest Quotes ✨", 
// "Inspiring Quotes for Success Don't Miss a Single Upload! 🚀", 
// "Be Inspired, Be Subscribed Motivational Quotes Awaits You 😊", 
// "Change Your Life with the Power of Words Subscribe Now! 💼", 
// "Positive Vibes Only Join Our Quote Family Today! 😄", 
// "Quotes that Spark Joy Be Part of Our Inspirational Journey 🌈", 
// "Daily Motivation Delivered Hit Subscribe for Quote Goodness! 📲", 
// "Empowering Quotes for a Fulfilling Life Click to Stay Inspired! 💫", 
// "Subscribe for Success Life-Changing Quotes Await You 🏅", 
// "Join the Quote Revolution Click to Transform Your Mindset 🌟", 
// "Quotes to Uplift Your Spirit Subscribe and Soar High 🦅", 
// "Inspiration Guaranteed Subscribe for a Better Tomorrow! 🌅", 
// "Your Source of Positivity Hit Subscribe for Quote Magic! ✨", 
// "Unlock Your Potentia  Join Our Motivated Community Today 🔓", 
// "Daily Quotes for Success Click to Unleash Your Inner Champion 🚀",] 





// document.getElementById("name").style.color="red"

// let arer=Array.from(document.body.firstChild)
// arr[1].style.color="yellow"


// console.time()

// for (let a=0; a<10; a++){
//     document.write(a)
// }
// console.timeEnd()


// console.log(document.getElementsByTagName("span")[0])
// console.dir(document.getElementsByTagName("span")[0])
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)

// let af =document.getElementsByTagName("span")[0]
// console.log(a)
// let bd =document.getElementsByTagName("span")[0]
// console.dir(b)
// console.log("first.innerHTML")
// console.log(first.innerHTML)
// console.log(first.outerHTML)
// let as = first.innerHTML= "<i> this is and italic text</i>"
// console.log(a)
// let ba = first.outerHTML = "<div>this is a div in outerHTML</div>"

// console.log(b)
// let dd =document.body.childNodes.values
// console.log(d)
// let cd =document.body.firstChild.data
// console.log(c)
// let cs =document.body.firstChild.nodeValue
// console.log(c)

// console.log(document.body.textContent)
// console.log(document.body.firstChild.data)


// $0hidden=false
// false
// $0.hidden=false
// false

// let v = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute("hidden","true")
// first.setAttribute("class","hello zaryab")
// first.removeAttribute("class")
// console.log(first.attributes)

// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)



// let z =document.getElementsByTagName("div")[0]
// a.innerHTML=a.innerHTML+"<h1>HELLO WORLD</h1>"

// let div=document.createElement("div");
// div.innerHTML="<h1>hello what is your name</h1>"

// a.appendChild(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)



// let a =document.getElementById("first")
// console.log(a)
// a.insertAdjacentHTML("beforebegin","<div>this is a dive which is inserted before begin </div>")
// a.insertAdjacentHTML("beforeend","<div>this is a dive which is inserted beforeend  </div>")
// a.insertAdjacentHTML("afterbegin","<div>this is a dive which is inserted afterbegin </div>")
// a.insertAdjacentHTML("afterend","<div>this is a dive which is inserted afterend  </div>")

// a.remove()

// first.className = "text_dark yellow"
// first.className = "text_dark yellow"
// first.className = "text_dark red"
// first.classList
// first.classList.remove("yellow")


// ﻿
// first.classList.add("yellow")
// undefined
// first.classList.add("red")
// undefined
// first.classList.add("text_dark")
// undefined
// first.classList.add("yellow")
// undefined
// first.classList.remove("red")
// undefined

// first.classList.toggle("yellow")
// true
// first.classList.toggle("yellow")
// false
// first.classList.toggle("yellow")
// true
// first.classList.toggle("yellow")
// false
// first.classList.toggle("yellow")
// true
// first.classList.toggle("yellow")
// false
// first.classList.toggle("yellow")
// true
// first.classList.toggle("yellow")
// false
// first.classList.toggle("yellow")
// true
// first.classList.toggle("yellow")
// false
// first.classList.toggle("yellow")
// true
// first.classList.toggle("yellow")
// false
// first.classList.toggle("yellow")
// true
// first.classList.toggle("yellow")
// false
// first.classList.remove("red")
// undefined
// first.classList.remove("red")
// undefined
// first.classList.remove("red")

// irst.classList.add("red")
// undefined
// first.classList.contains("red")
// true
// first.classList.contains("yellow")

// document.write("hello wrold this nothing but hello world")

// let i =setTimeout(function () {
//     alert("hey what is your name ?")
// },2000)
// let ui = prompt("Do you want to cleare timeout ?(yes/no)")
// if (b == "yes") {
//     clearTimeout(a)

// } else {

// }
// console.log(a)

// const sum = (a,b)=>{
//     console.log("yes I am raning ... ", a+b)
//     a+b
// }
// setTimeout(sum,3000, 3,3)


// setInterval(function(){
//     alert("setInterval")
// },2000)

// let sumoperator=(a,b,c)=>{
//     console.log("this is runing and the sum is ",a+b+c)
//     a+b+c
//     alert(`your sum is ${a+b+c}`)
// }
// clearInterval(sum)
// setInterval(sum,3000,3,3,3)

// let r = prompt("Enter your favrit color here:")
// let e = document.body.style.background = a

// const color1=(a,b)=>{
//     document.body.style.background =a
//     document.body.style.color= b
//     console.log("runing .........")
// }
// setInterval(color,2000,prompt("Enter your favrit colr here:"),prompt("Enter your favrit colr here:"))
// setInterval(function(){
//     a =prompt("Enter your favrit color here :")
//     b =prompt("Enter your favrit color here :")
//     document.body.style.background=a
//     document.body.style.color=b
//     console.log("it's runing.... please wait....")
// },9000)

// let w = document.getElementsByClassName('hello')[0]
// a.onclick = ()=>{
//     let b=document.getElementsByClassName('hello')[0]
//     b.innerHTML+="hello world"
// }

// let q= document.getElementById("btn")
// let x=function(e){
// alert("hello wrold1")
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
//     console.log(e.clientX)
//     console.log(e.clientY)
// }
// let y=function(e){
//     alert("hello wrold2")
// }
// a.addEventListener('click',x)
// a.addEventListener('click',y)
// let o=prompt("Enter your favorite number here:")
// if (b=="2") {
//     a.removeEventListener('click',y)
// } else {

// }
// let list=["google","WhatsApp","facebook","youtube","Instagram"]
// for(let i in list){
//     document.write(`https://${list[i]}.com`)
//     let google=document.getElementById(list[i]).addEventListener('click',function(){
//         window.location =`https://${list[i]}.com`
//         window.focus()
//     })
// }
// setInterval(async function(){
//     document.getElementById("bulbdiv").classList.toggle("onbulb")
// },300)

// // Asyncronous programming 
// setTimeout(function(){
//     alert("hello world")
// },3000)

// // syncronous programming
// let j = prompt("what is your name ?")
// let k = prompt("what is your age ?")
// let l = prompt("what color your like ?")
// let m = prompt("what is your moive ?")

// function loadScript(src,callback){
//     let script= document.createElement("script");
//     script.src=src;
//     script.onload=function(){
//         console.log("script is on loading...");
//         callback(null,src)
//     }
//     script.onerror=function(){
//         console.log("script has some error so that's why it's not working now...")
//         callback(new console.error("src got some error"))
//     }
//     document.body.innerHTML+=(script);
// }
// function hello(error,src){
//     if(error){
//         console.log(error,src)
//         return
//     }
//     console.log("hello wrold")
// }

// loadScript("<h1> I love Javascript</h1>",hello)

// function ab(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,abCallback){
//     abCallback(a,b)
// }
// calculator(2,2,ab)


// const hello=()=>{
//     console.log("hello ")
// }
// setTimeout(hello,3000)
// let age=17;
// if (age>=60) {
//     console.log("senior")
// } else {
//     console.log("jonior")

// }
// for (let i=0; i<5; i++){
//     str=""
//     for (let j=0; j<5; j++){
//         str+=j
//     }


// function plus(a,b){
//     c=a+b
//     return c
// }

// plus(2,2)
// document.write(a)
// let name=prompt("what is your name ? ")
// console.log(i,str)
// }
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("dataId",dataId)
//     },2000)
// }
// getData(1)
// getData(2)
// // getData(3)

// function getData(dataId , getNextData){
//     setTimeout(()=>{
//         console.log("dataId",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);

// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// });
// getData(2);
// // getData(3);

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if (getNextData) {
//             getNextData()
//         }
//     },2000)
// }
// getData(1,()=>{
//     console.log("Please wait for getting data2..")
//     console.log("getting data2....")
//     getData(2,()=>{
//         console.log("Please wait for getting data3..")
//         console.log("getting data3....")
//         getData(3,()=>{
//             console.log("Please wait for getting data4..")
//             console.log("getting data4....")
//             getData(4,()=>{
//                 console.log("Please wait for getting data5..")
//                 console.log("getting data5....")
//                 getData(5)
//             })
//         })
//     })
// })

// function start(src, hello) {
//     setTimeout(() => {
//         console.log("loding....");
//         console.log(src);
//         if(hello){
//             hello();
//         }
//     }, 2000)
// }
// function hello(){
//     console.log("hello....logdig...")
// }
// start(1124354657,hello,()=>{
//     start("hello ...logdig 2")
// })
// start(1, () => {
//     start(2, () => {
//         start(3, () => {
//             start(4)
//         })
//     })
// })
// let promise= new Promise(function(resolve,reject){
//     console.log("I am alert in the promise")
//     // resolve(23)
//     // reject("error")
// })
// console.log(promise)
// console.log("loding... to print your favorite number ")
// setTimeout(()=>{
//     console.log("hey this is your number 623")
// },4000)

// let promise1 = new Promise((resolve, reject) => {
//     console.log("loding.......")
//     setTimeout(() => {
//         console.log("I am a promise and I am fullfild .")
//         resolve("success")
//         // reject("network error..")
//     }, 5000)
// })

// let promise2 = new Promise((resolve, reject) => {
//     console.log("loding.......")
//     setTimeout(() => {
//         console.log("I am a promise2 and I am rejected .")
//         // resolve("success")
//         reject("network error..")
//     }, 5000)
// })

// let p1 = promise.then((value) => {
//     console.log(value)
// })

// let p2 = promise2.catch((error) => {
//     console.log("some error ocurred in promise2 and that is ", error)
// })


// async function hello(){
//     let mardanweather=new Promise((resolve,reject)=>{
//         console.log("loading....1")
//         setTimeout(()=>{
//             resolve("success1")
//         },2000)
//     })
//     let peshawareweather=new Promise((resolve,reject)=>{
//         console.log("loading....2")
//         setTimeout(()=>{
//             reject("error occured")
//         },4000)
//     })
//     mardanweather.then((result)=>{
//         console.log(result)
//     })
//     peshawareweather.then((result)=>{
//         console.log(result)
//      })
//     let mardanw=await mardanweather
//     // console.log(mardanw)
//     let peshawarw=await peshawareweather
//     // console.log(peshawarw)
//     return [mardanw,peshawarw]
// }
// let data=hello()
// console.log(data)
// console.log(data)
// data.then((res)=>{
//     console.log(res)
// })
// data.catch((err)=>{
//     console.log(err)
// })

// function hello(dataId ,nextData){
//     console.log("loding.....")
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             console.log(dataId)
//             if (nextData) {
//                 nextData();

//             } else {

//             }
//             resolve("success..1")
//         },2000)
//     })
// }

// hello(1,()=>{
//     hello(2,()=>{
//         hello(3,()=>{
//             hello(4)
//         })
//     })
// })

// function getData(dataId ,nextData){
//     return new Promise((resolve,reject)=>{
//         console.log("loding data ....",dataId)
//         setTimeout(()=>{
//             console.log("data ..",dataId)
//             resolve("success...")
//             if (nextData) {
//                 nextData();
//             }
//         },2000)
//     })
// }
// (async ()=>{
//    await getData(1)
//    await getData(2)
//    await getData(3)
//    await getData(4)
//    await getData(5)
// })();



// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         console.log("loding data ....",dataId)
//         setTimeout(()=>{
//             // console.log("done..",dataId)
//             resolve("success...")
//         },5000)
//     })
// }
// (async ()=>{
//    await getData("intializing...system.. hacking... ")
//    await getData("injection to ..the ..network....")
//    await getData("fetching... username..... and id..passowrd..")
//    await getData("cracking ..ID ..IP......wps..adaress")
//    await getData("geting controle... action ... now ...")
//    await getData("action... is about to ...done ...")
//    await getData("you successfully hacked the system network..")
// })();

// setTimeout(()=>{
//     console.log("loading.....data 1")
// },2000)

// try{
//     setTimeout(()=>{
//         try{
//             console.log(hello)
//         }
//         catch(err){
//             console.log(err)
//         }
//     },1000)

// }
// catch(err){
//     console.log(err)
// }
// setTimeout(()=>{
//     console.log("loading.....data 2")
// },4000)

// setTimeout(()=>{
//     console.log("loading.....data 3")
// },6000)

// try{
//     console.log(hello)
// }
// catch(err){
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }
// function getData(dataId){
//     return (function hey(){
//         console.log(dataId)

//     })();
//     try{
//         console.log("hello")
//     }
//     catch(err){
//         console.log(err)

//     }
//     finally{
//         console.log("done")
//     }

// }
// let data=getData(1)
// console.log(data)

// function getData(dataId){
//     try{
//         console.log(dataId)
//         console.log(hello)
//         return;
//     }
//     catch(err){
//         console.log(err)

//     }
//     finally{
//         console.log("this is done")
//     }
//     return;
// }
// let data=getData(1)
// console.log(data)


// function webData(dataId){
//     setTimeout(()=>{
//         window.location=`https://${dataId}.com`
//     },1000)
// }
// async function weballData(){
//     await webData("fb")
//     await webData("google")
//     await webData("youtube")
// }
// weballData()





// let promise=fetch("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// promise.then((value)=>{
//     // console.log(value)
//     return value.json()
//     // console.log(value.status)
//     // console.log(value.ok)
//     // console.log(value.headers)
// }).then((value)=>{
//     // console.log(value)
//     console.log(value)

// })

// const URL = "https://cat-fact.herokuapp.com/facts";
// const getpara=document.querySelector("#para")
// const btn=document.querySelector("#btn")


// const getFacts =async ()=>{
//     console.log("getting......data..");
//     let response= await fetch(URL);
//     console.log(response);
//     let data=await response.json();
//     // console.log(data[0].text)
//     let number=Math.round(Math.random()*6)
//     console.log(number)
//     getpara.innerText=data[number].text;
// }

// btn.addEventListener('click',getFacts)





// let number=Math.random()
// console.log(Math.round(number))
// console.log(number*10)
const option={
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        title:"hello",
        body:"sweet",
        userId:1200,
    }),

}
// fetch("https://jsonplaceholder.typicode.com/posts",option)
//     .then((response)=>{return response.json()})
//     .then((json)=>{console.log(json)})


// console.log(document.cookie)
let key=prompt("Enter your key you wnat to set ")
let value=prompt("Enter your value you wnat to set ")

localStorage.setItem(key,value)

console.log(`your value at ${key} is ${localStorage.getItem(key)}`)


