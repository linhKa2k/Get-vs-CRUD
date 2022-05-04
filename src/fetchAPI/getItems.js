import * as types from "../constant";
export function callApi() {
  return new Promise((resolve, reject) => {
    const url = "http://localhost:3001/items";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function addApi(data) {
  // console.log( data,"data in fetch");
  return new Promise((resolve, reject) => {
    const url = "http://localhost:3001/items";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // thong bao server day la json
      body: JSON.stringify(data), // chuyen doi tu doi tuong javaScript sang chuoi json
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function deleteApi(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3001/items/${data}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function updateApi(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3001/items/${data.id}`;

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function searchApi(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3001/items/?q=${data}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function paginationApi(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3001/items?_page=${data.activePage}&_limit=${types.limit}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function searchPaginationApi(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3001/items?_page=${data.activePage}&_limit=${types.limit}&q=u`;
    console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
