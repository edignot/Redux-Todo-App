
// REDUCERS ARE FIRED WHEN THE APP FIRST STARTS UP TO GIVE DEFAULT VALUES TO THE STORE. SO REDUCERS NEED INITIAL/DEFAULT VALUE
// WHEN ONE REDUCE FIRES - ALL REDUCER FIRE, SO ALWAYS HAVE DEFAULT VALUE!

// INITIAL TODOS STATE SET TO EMPTY ARRAY

// CASE TYPE ADD_TODO MATCHED CREATED ACTION / SWOTCH IS BASED ON THE TYPE OF THE ACTION


export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            return [...state, {
                id: Date.now(), 
                todo: action.todo,
                completed: false
            }]
        case 'DELETE_ALL_TODOS':
            return []
        // ALWAYS RETURN DEFAULT AT THE END
        default:
            return state
    }
}