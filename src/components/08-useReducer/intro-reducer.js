
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    // Agregar nuevo todo (El signo " ? " es para evitar un error en el primer llamado de "todoReducer()")
    if(action?.type==='agregar'){
        return[...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}
const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos);