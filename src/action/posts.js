import axios from 'axios'
export const getPosts =(posts)=>{
    return{
        type: 'GET_POSTS',
        payload: posts
    }
}

export const startGetPosts =()=>{
    return(dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts= response.data
            dispatch(getPosts(posts))
        })
        
    }
}