const usersInitialState=[]

const usersReducer = (state= usersInitialState, action)=>{
    switch (action.type) {
        case 'SET_USERS':{
            return [...action.payload]
        }
        case 'ASC':{
            return [...action.payload].sort(function(a, b){
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                if (nameA < nameB){return -1} 
                else if (nameA > nameB){return 1}
                else{return 0}
            })
        }
        case 'DESC':{
            return [...action.payload].sort(function(a, b){
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                if (nameA < nameB){return 1} 
                else if (nameA > nameB){return -1}
                else{return 0}
            })
        }
        case 'DEFAULT':{
            return [...action.payload].sort(function(a, b){
                return a.id - b.id
            })
        }
        default:{
            return [...state]
        }
    }
}

export default usersReducer