import axios from 'axios';    
    async function getUser(id) {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            console.log(response.data);
        }).then(() => {
             axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                console.log(response.data);
            })
        })
    }
    getUser(1);