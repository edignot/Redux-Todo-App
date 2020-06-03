// ACTION CREATOR . NEEDS A TYPE AND A PAYLOAD. RETURN ACTION OBJECT
export const addToDo = (todo, name) => ({
    type: 'ADD_TODO',
    todo,
    name
})

export const deleteAllTodos = () => ({
    type: 'DELETE_ALL_TODOS'
})