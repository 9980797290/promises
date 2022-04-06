// Create 2 objects - parent and child. Attach methods to parent and use those methods
//  in child object using parents prototype

// let parents={
//     tall:'true',
//     mother:'true',
//     father:'true',
//     children:function(){
//         console.log("Responsibility")
//     }
// }
// let child={
//     crying:'true',
//     food:'cereal',
// }
// child.__proto__=parents
// console.log('child',child)
// console.log(child.father)//true
// child.children()

// Write a JavaScript function to retrieve all
//  the names of object's own and inherited properties.

// let mammals={
//     eats:'true',
//     moves:'true',
// }
// let rabbit={
//     jumps:'true',
// }
// let mouse={
//     hasTail:'yes'
// }
// rabbit.__proto__=mammals;
// mouse.__proto__=mammals;
// console.log(rabbit.hasOwnProperty("moves"))
// console.log(mouse.hasOwnProperty('hasTail'))

// Write code to explain prototype chaining
// let mother={
//     responsibility:"true",
//     care:"more",
//     guides:function(){
//         console.log("More")
//     }
// }
// let child={
//     food:"cereal",
//     walks:"true",
// }
// let children={
//     food:"junk food",
//     walks:"true",

// }

// child.__proto__=mother
// children.__proto__=child
// child.guides()// More
// children.guides()//the output is More

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

// let array=[100,110,120,130,140,150,160,170,180,190,200]
// let output=array.reduce((acc,cur)=>acc+cur,0)
// console.log(output)



// Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
//6
// 7
// function printNumbers(){
//     setTimeout(()=>{
//         console.log('1')
//         setTimeout(()=>{
//             console.log('2')
//             setTimeout(()=>{
//                 console.log('3')
//                 setTimeout(() => {
//                     console.log('4')
//                     setTimeout(()=>{
//                         console.log('5')
//                         setTimeout(()=>{
//                             console.log('6')
//                             setTimeout(()=>{
//                                 console.log('7')
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }

// printNumbers()//the triangle shaped doom is called call back hell.


// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

// function Numbers(numbers){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(numbers)
//             resolve('done')
//         },1000)
//     })
// }
// Numbers("1").then(()=>Numbers("2")).then(()=>Numbers("3")).then(()=>Numbers("4"))
// .then(()=>Numbers("5")).then(()=>Numbers("6")).then(()=>Numbers("7"))


// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved
// , and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
// function printing(num){
//     return new Promise((resolve,reject)=>{
//     if(num%2!==0){
//      resolve("Condition resolved")
//     }
//     else{
//         reject("Condition rejected")
//     }
// })
// }
// printing(11).then((result)=>{
//     console.log(result)
// }).catch((result)=>{
//     console.log(result)
// // })

// Condition resolved


// printing(24).then((result)=>{
//         console.log(result)
//     }).catch((result)=>{
//         console.log(result)
//     })


// Condition reject

// Create examples to explain callback hell function
// function printNumbers(){
    //     setTimeout(()=>{
    //         console.log('1')
    //         setTimeout(()=>{
    //             console.log('2')
    //             setTimeout(()=>{
    //                 console.log('3')
    //                 setTimeout(() => {
    //                     console.log('4')
    //                     setTimeout(()=>{
    //                         console.log('5')
    //                         setTimeout(()=>{
    //                             console.log('6')
    //                             setTimeout(()=>{
    //                                 console.log('7')
    //                             },1000)
    //                         },1000)
    //                     },1000)
    //                 },1000)
    //             },1000)
    //         },1000)
    //     },1000)
// }
// This is called the callback hell 

// Create examples to explain async await function



// function PrintLetter(letters){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
            
//             console.log(letters)
//             resolve(letters)

//         },1000)
//     })

// }
// async function PrintLetters(){
//     await PrintLetter("A")
//     await PrintLetter("B")
//     await PrintLetter("C")
//     await PrintLetter("D")
//     await PrintLetter("E")
//     await PrintLetter("F") 
// }

// PrintLetters()









































