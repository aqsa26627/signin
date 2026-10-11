//  ya function use hota ha time khud lagany kyliye//
// it is use for set time//
// setTimeout(() => {
//  console.log("hi");   
// } ,5000);
 //other example//
//  const hi = () => {
//     console.log("hi");
//  };
    
// setTimeout(hi,4000);
/// callback hell//?
//nesting//
// let age = 19;
// if(age >= 18){
//     if(age >= 60){
//     console.log("senoir");
//     } else {
// console.log("middle");
// }  
// } else {
//         console.log("jonior");
//     };

// nested loop//

// for (let a=1; a<6; a++){
// for(let b=1; b<8; b++){
//     console.log(a&b);
// }
// }

// other example//
// for(let i=3; i<6; i++){
//     let str = "";
//     for(let j=1; j<6; j++){
        
//         str = str + j;
       
//     }
//      console.log(  i,str);
// }

// //example of callback hell//
//  function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId);
//     },5000);
//  }


// complexsity  in callbackhell//

// function getData(dataId,getNextData){
//     setTimeout(() => { 
//  console.log("data",dataId);
//  if(getNextData){
//  getNextData();
//  }
 
//     },4000);
// }
// getData(1, () => {
//     getData(2,()=>{
//  getData(3,() =>{
// getData(4,() => {
//  getData(5,() => {
//  });
// });
//  });
//     });
// });


/// promisses//
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) => {
// setTimeout(() => {
//      console.log("data",dataId);
//      resolve("success");
//     if(getNextData){
//  getNextData();
//     }
   
// },4000)
//     });
// }


// promise.then and.ctach exapmle//
// const getpromise = () =>{
//      return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//    resolve("success");
// // reject("error");
// });
// }
// let promise = getpromise();
// promise.then((res) =>{
//     console.log("promise fullfilled");
//  });
//  promise.catch((err) => {
//     console.log("error");
// });

//chaining function//
// function asyncfun1() {
//    return new Promise((resolve,reject) => {
//       setTimeout(() =>{
//          console.log("data1");
//          resolve("success");
//             }, 3000);
//    });
// }
// console.log("fetcing data1");
// function asyncfun2() {
//    return new Promise((resolve,reject) => {
//       setTimeout(() =>{
//          console.log("data2");
//          resolve("success");
//             }, 3000);
//    });
// }
// console.log("fetcing data1");
// asyncfun1().then((res) =>{
//    console.log("fetcing data2");
//    asyncfun2().then((res) =>{
//    });
// });


// deleting data example//
// function asyncfuncdelete1() {
//    return new Promise((resolve, reject) => {
//       setTimeout(() =>{
//           resolve("success");
//       } ,5000);
//    });
// }
// function asyncfuncdelete2() {
//    return new Promise((resolve, reject) => {
//       setTimeout(() =>{
//           resolve("success");
//       } ,5000);
//    });
// }
//   console.log("delecting history1");
//   asyncfuncdelete1().then((res) =>{
//     console.log("delecting history2");
//     asyncfuncdelete1().then((res) =>{
//   }) ;
//   });
/// same kam callbackhell ko promise chain kesy kiya jata ha//
// function getData(dataId,getNextData){
//     setTimeout(() => { 
//  console.log("data",dataId);
//  if(getNextData){
//  getNextData();
//  }
 
//     },4000);
// }
// getData(1, () => {
//     getData(2,()=>{
//  getData(3,() =>{
// getData(4,() => {
//  getData(5,() => {
//  });
// });
//  });
//     });
// });
// function getData(dataId){
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          console.log("data",dataId);
//          resolve("success");
//       },5000);
//    });
// }
// let p1 = getData(1);
// p1.then((res) =>{
//    console.log(res);
//    let p2 = getData(2);
// p2.then((res) =>{
//    console.log(res);
// });
// });
  

/// async await function//
// function api(){
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          console.log("weather data");
//          resolve("success");
//       },3000);
//    });
// }
// async function getweatherData() {
//    await api();
//    // we can also call 2nd time weatherdata//
//     await api();
// }
//  how async await function is usng in getdata// 
function getData(dataId){
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         console.log("data",dataId);
         resolve("success");
      },5000);
   });
}
async function getAllDatA() {
   await getData(1);
     await getData(2);
       await getData(3);
}