export const getAllPosts = () => {
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json());
}
