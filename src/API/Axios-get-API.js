import axios from "axios"

let axiosInstents = axios.create(
    {
        baseURL:'https://jsonplaceholder.typicode.com/'
    }
);
const getPosts = () => axiosInstents.get('posts/');
const getUsers = () => axiosInstents.get('users/');
const getComponents = () => axiosInstents.get('comments/');
const getPost = (id) => axiosInstents.get('posts/'+ id )
const getUserPosts = (id) => axiosInstents.get('users/' + id + '/posts' );
const getUserComments = (id) => axiosInstents.get('users/' + id + '/comments' );

export { getUsers, getPosts, getUserComments,getComponents, getUserPosts, }
