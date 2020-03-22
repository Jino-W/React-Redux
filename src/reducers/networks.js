
const networksInitialState = [
    {id:1, name: 'JIO', message: 'selected network is Jio...'},
    {id:2, name: 'AIRTEL', message: 'selected network is Airtel...'},
    {id:3, name: 'VODAFONE', message: 'selected network is Vodafone...'}
]

const networksReducer = (state=networksInitialState, action)=>{
    switch (action.type) {
        case 'NETWORKS':{
            return [...state]
        }
        default:{
            return [...state]
        }
    }
}

export default networksReducer