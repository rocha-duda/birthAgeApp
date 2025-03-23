import React, { useState } from 'react';
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";
import { differenceInYears, differenceInMonths, differenceInDays } from "date-fns";
import './components/style.css';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12; // Restante dos meses após subtrair os anos
    const ageDays = differenceInDays(today, new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())); // Dias restantes

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  return (
    <div className="container">
      <h1>Calculadora de Idade!</h1>
      <AgeCalculatorForm calculateAge={calculateAge} />
      {age && <AgeResult age={age} />}
    </div>
  );
}

export default App;