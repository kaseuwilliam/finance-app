import React from 'react'


/*
M is your monthly mortgage payment.
P is the principal loan amount (the initial amount borrowed).
r is the monthly interest rate (annual rate divided by 12 months).
n is the number of payments (loan term in years multiplied by 12 months).

Assume you have a loan amount (P) of $300,000, an annual interest rate of 4%, and a loan term of 30 years. 

Give you P,r,n, find the monthly mortgage amount....

*/
const Finance = () => {

function calculatePaymentAmount(principal, interest_rate, numOfPayments) {
    const monthlyInterestRate = (interest_rate / 100) / 12;
    const paymentAmount = principal * (monthlyInterestRate * (1 + monthlyInterestRate) ** numOfPayments)/((1 + monthlyInterestRate) ** numOfPayments - 1) 
    return paymentAmount

  // console.log(calculatePaymentAmount(425000, 7.71, 360))
// let monthlyPaymentAmount = calculatePaymentAmount(principal, interest_rate, numOfPayments)
  return (
    <div>
      <h2>Mortgage Calculator</h2>
      {/* <form>
        <div>
          <label>Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={principal}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input
            type="number"
            name="interestRate"
            value={interest_rate}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Loan Term (years):</label>
          <input
            type="number"
            name="loanTerm"
            value={numOfPayments}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="button" onClick={this.calculatePaymentAmount}>
          Calculate
        </button>
      </form> */}
      {/* <div>
        <h3>Monthly Payment:</h3>
        <p>${calculatePaymentAmount.toFixed(2)}</p>
      </div> */}
    </div>
  );
}

export default Finance