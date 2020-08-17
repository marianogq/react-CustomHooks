import {useState} from 'react';

export const useCounter = ( initialState=10 ) => {

    const [counter, setCounter] = useState(initialState); // Valor inicial=10
    
    const reset = () => {
        setCounter( initialState );
    }
    
    const increment = ( ) => {
        setCounter( counter + 1 );
    }

    const decrement = ( ) => {
        setCounter( counter - 1 );
    }
    // EN CASO DE USAR UN "factor"="un valor x" PARA INCREMENTAR O DECREMENTAR
    // const increment = ( factor=1 ) => {
    //     setstate( state + factor );
    // }
    // const decrement = ( factor=1 ) => {
    //     setstate( state - factor );
    // }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
