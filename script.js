// callback Function

function fetchDataWithCallback(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

const urlApi = "https://v2.jokeapi.dev/joke/Any";
fetch(urlApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error("This is an Error");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    fetchDataWithCallback(null, data);
  })
  .catch((error) => {
    throw new Error("Invalid URL");
  });

// PROMISE

function fetchDataFromApi(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("This is an Error");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(new Error("Invalid URL"));
      });
  });
}

const urlAPI = "https://v2.jokeapi.dev/joke/Any";

fetchDataFromApi(urlAPI)
  .then((data) => {
    console.log(data); // Handle data from the API
  })
  .catch((error) => {
    console.error(error); // Handle errors
  });
