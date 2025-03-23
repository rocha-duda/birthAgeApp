import { useState } from 'react';
import React from 'react';

const AgeCalculatorForm = ({ calculateAge }) => {
    const [birthDate, setBirthDate] = useState('');
    

    const handleChangeDate = (e) => {
        setBirthDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateAge(birthDate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={birthDate} type='date' onChange={handleChangeDate} />
            <button disabled={!birthDate} type='submit'>Calcular Idade</button>
        </form>
    );
};



export default AgeCalculatorForm;