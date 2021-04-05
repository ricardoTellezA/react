import React, { useState } from 'react'
import Proptypes from 'prop-types';


export const AddCategories = ({setcategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputCahnge = (e) => {

        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setcategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
        

      

    }
    return (
        <form onSubmit={handleSubmit}>
            <input

                type="text"
                value={inputValue}
                onChange={handleInputCahnge}

            />
        </form>
    )


}


AddCategories.propTypes = {
    setcategories:Proptypes.func.isRequired 
}