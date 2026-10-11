// // // getting data from broswer//
//  const URL = "https://dummyjson.com/products";
//  const btn = document.querySelector("#btn");
//  const factpara = document.querySelector("#fact");


//  const getFacts = async () => {  
//      try{
//      console.log("getting data...");
//  let response =  await fetch(URL);
//  let data = await response.json();
//         factpara.innerText = "Post Title:", data[0].title; // Yeh post ka title print karega
//     factpara.innerText = "Post Body:", data[0].body;
//      }
//      catch{
//      }
//         }
// getFacts();


//same work in then function//
//  function getFacts()  {
//     fetch(URL)
//     .then ((response) => {
// return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factpara.innerText = data[3];
//     });
//  }
//  btn.addEventListener("click", getFacts);