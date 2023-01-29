function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`)
        }
        resolve(`from server: ${msg}`)
      }, 3000)
    })
  }

fakeFetch("bro").then(data => console.log(data));

const successHandler = (data) => console.log(data);
const errorHandler = (err) => console.error(err);

fakeFetch("yo", true).then(successHandler).catch(errorHandler);


const getServerResponseLength = (msg) => fakeFetch(msg).then(data => console.log(data.length));

getServerResponseLength("tushar");


const loadPokemon = (id, cb) => {
    fetch(` https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then(res => res.json())
    .then(data => {
        cb(data)
    })
}

loadPokemon(27, (pokemon) => {
    console.log(pokemon);
})


const syncCallsToServer = (msg1, msg2) => fakeFetch(msg1).then(dataForMsg1 => fakeFetch(msg2).then((dataForMsg2) => console.log({dataForMsg1, dataForMsg2})))

syncCallsToServer("mo", "ko0")


const getData = async() => {
    const data = await fakeFetch("something");
    console.log(data);
}

getData()

const syncCallsToServer2 = async (msg1, msg2) => {
    const dataMsg1 = await fakeFetch(msg1);
    const dataMsg2 = await fakeFetch(msg2);

    console.log({ dataMsg1, dataMsg2});
}

syncCallsToServer2(" momo", "kha");