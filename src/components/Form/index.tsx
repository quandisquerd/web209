import { useState } from 'react';
import Input from '../Input/index';
import Button from '../button/index';
import React from 'react';






const Form = ({ onAdd }: any) => {
    const [valueInput, setValueInput] = useState("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
            onAdd({
                id: Math.floor(Math.random() * 1000),
                name: valueInput,
            });
           
            setValueInput("");
        }
    };
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };
    return (
     
        <form onSubmit={onSubmit} className="border-b mb-3 p-3 flex justify-between items-center" >
            <Input onChange={onHandleChange}/>
            <Button primary>Add</Button>
        </form>
      
    );
};

export default Form;