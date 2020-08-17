import { useState } from "react";

export const useForm = ( initialState = {} ) => {
   
    const [values, setvalues] = useState(initialState);

    const reset = () => {
        setvalues(initialState);
    }

    const handleInputChange = ({target}) => { // desestructuramos el evento (e) para no poner "e.algo"
        
        setvalues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];

}
