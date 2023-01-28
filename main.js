// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldReject) {
//           reject(`error from server: ${msg}`)
//         }
//         resolve(`from server: ${msg}`)
//       }, 3000)
//     })
//   }

// fakeFetch("yo").then(data => console.log(data));

// const successHandler = (data) => console.log(data);
// const errorHandler = (err) => console.error(err);

// fakeFetch("yo", true).then(successHandler).catch(errorHandler);


const getServerResponseLength = (msg) => fakeFetch(msg).then(data => console.log(data.length));