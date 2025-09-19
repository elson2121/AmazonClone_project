import React from 'react';
import numeral from 'numeral';

// Corrected the spelling of the component name to CurrencyFormat
const CurrencyFormat = ({ amount }) => {
  // We can do the formatting directly in the return statement.
  // The numeral function takes the 'amount' variable directly.
  const formattedAmount = numeral(amount).format('$0,0.00');

  // The component returns a single JSX element (a <span> in this case).
  // The curly braces {} are used to embed the JavaScript variable.
  return (
    <span>
      {formattedAmount}
    </span>
  );
};

export default CurrencyFormat;