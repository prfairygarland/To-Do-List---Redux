const initialState = {
    tasks : []
}

const toDo = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case "ADD" :
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "REMOVE" :
            return {
                ...state,
                tasks :state.tasks.filter(item => {
                    return item !== action.payload
                })
            }
        default :
            return state;
    }
}

export default toDo;