const showUserInitialState={}

const showUserReducer = (state= showUserInitialState, action)=>{
    switch (action.type) {
        case "SHOW_USER":{
            return [...action.payload.users].find(user=> user.id == action.payload.userId)
        }
        default:{
            return {...state}
        }
    }
}

export default showUserReducer