const request = require('native-request');

console.log('fetching data - started');

const getTodos = () => {
    request.get('https://jsonplaceholder.typicode.com/todos/1',
     (err, data) => {
         console.log(data);
         console.log('fetching data - completed');
    
    });
}

getTodos();
