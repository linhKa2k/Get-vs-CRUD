// export default function callApi(){

//     return new Promise((resolve, reject) => {
//         const url = 'http://localhost:3001/items';
//         // console.log(url);

//         fetch(url, {
//             method: 'GET'
//         })

//           .then((response) => response.json())
//           .then((res) => {
//             resolve(res);

            
         
//         })
//         .catch((error) => {
//             reject(error);
//         });
//     });
//  }


// export  function callApi() {
//     return new Promise((resolve, reject) => {
//         const url = 'http://localhost:3001/items'

//         fetch(url, {
//             method: 'GET'
//         })

//         .then((response) => response.json())
//         .then((res) => {
//             resolve(res);
//         })
//         .catch((error) => {
//             reject(error);
//         })
        
//     });
// }

// export  function addAPI(data) {
//     return new Promise((resolve, reject) => {
//         const url = 'http://localhost:3001/items'

//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//            },
//            body: JSON.stringify(data)
//         })

//         .then((response) => response.json())
//         .then((res) => {
//             resolve(res);
//         })
//         .catch((error) => {
//             reject(error);
//         })
        
//     });
// }


export function callApi() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items'

        fetch(url, {
            method: 'GET',
        })

        .then((response) => response.json())
        .then ((res) => {
            resolve(res);
        })
        .catch((error) => {reject(error);})
    });
}


export function addApi(data) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items'

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })

        .then((response) => response.json())
        .then ((res) => {
            resolve(res);
        })
        .catch((error) => {reject(error);})
    });
}

export function deleteApi(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/${data}`

        fetch(url, {
            method: 'DELETE'
        })

        .then((response) => response.json())
        .then ((res) => {
            resolve(res);
        })
        .catch((error) => {reject(error);})
    });
}
