export default function callApi(){

    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items';
        // console.log(url);

        fetch(url, {
            method: 'GET'
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
