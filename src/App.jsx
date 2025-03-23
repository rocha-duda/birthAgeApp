import { useState } from "react";
import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";
import './components/style.css';


function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj);
    const ageDays = differenceInDays(today, birthDateObj);

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
