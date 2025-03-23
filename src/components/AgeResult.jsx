import React from "react";

const AgeResult = ({ age }) => {
  return (
      <h4>
      Você tem {age.years} anos, {age.month} meses e {age.days} dias de idade! 
      </h4>
  );
};

export default AgeResult;