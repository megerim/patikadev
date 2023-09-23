const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const posts = [
    { author: "User 1", content: "Lorem ipsum." },
    { author: "User 2", content: "Lorem ipsum dolor." },
    { author: "User 3", content: "Lorem ipsum dolor sit." },
    { author: "User 4", content: "Lorem ipsum dolor sit amet." }
];

const displayPosts = () => {
    posts.forEach((post) => {
        console.log(post.author + ": " + post.content);
    });
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
    });
};

rl.question('Yazar giriniz: ', (author) => {
    rl.question('İçerik giriniz: ', (content) => {
        addPost({ author, content })
            .then(displayPosts)
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                rl.close();
            });
    });
});
