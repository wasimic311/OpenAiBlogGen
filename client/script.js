const input = 'Crypto';
const api = 'http://localhost:5000/';


async function fetchData() 
{
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
  return parsedData;
}

async function main() {
    let readyData = await fetchData();
    console.log(readyData);
  }
  
main();












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


