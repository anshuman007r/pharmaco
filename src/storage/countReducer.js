const initialState ={
    count : 0
}

const countReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'UPDATE_COUNT':
            return {
                ...state,
                count : action.count,
            }
        default :
            return state
    }
}

export default countReducer