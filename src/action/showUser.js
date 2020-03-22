
export const showUser=(id, users)=>{
    return{
        type: 'SHOW_USER',
        payload: {
            userId : id,
            users
        }
    }
}