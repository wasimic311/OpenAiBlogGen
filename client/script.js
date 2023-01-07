const input = '10 Tips for a Successful Morning Routine';
const api = 'http://localhost:5000/';
const api2 = 'http://127.0.0.1:3000/posts'

let content = '';
async function fetchData() 
{


//Insert prompt - Method: POST to OPENAI API backend
  let response = await fetch(api, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        prompt: input
    })
});
  const data = await response.json()
  const parsedData = data.bot.trim()
  

//Insert new post - Method: POST to FRONTEND Blogging website
 fetch(api2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: input,
      description: parsedData

    })
  })


//return parsedData; //------For TEST-------//
}







// ---------------------TEST--------------------- //
// document.getElementById("title").innerHTML = input;
// async function main() {
//     let readyData = await fetchData();
//     // console.log(readyData);
//     document.getElementById("content").innerHTML = readyData;
//     return readyData;
//   }

// main().then(data => { console.log(data) })
// ---------------------End TEST----------------- //


  // Create - Insert new post - Method: POST to FRONTEND Blogging website
    // fetch(api2, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title: input,
    //     description: 'Hi there'//main().then(data => { data })
  
    //   })
    // })













// fetch(api, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             prompt: input
//         })
//     })
//     .then(res => res.json())
//     .then(data => data.bot.trim())
//     .then(data => console.log(data))


