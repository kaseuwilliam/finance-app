import React, {useState} from 'react'


/*
M is your monthly mortgage payment.
P is the principal loan amount (the initial amount borrowed).
r is the monthly interest rate (annual rate divided by 12 months).
n is the number of payments (loan term in years multiplied by 12 months).

Assume you have a loan amount (P) of $300,000, an annual interest rate of 4%, and a loan term of 30 years. 

Give you P,r,n, find the monthly mortgage amount....

*/
const Finance = () => {

let [principal, setPrincipal] = useState(0);
let [interestRate, setInterestRate] = useState(0);
let [numOfPayments, setNumOfPayments] = useState(0);
let [monthlyPaymentAmount, setMonthlyPaymentAmount] = useState(0);

function calculatePaymentAmount(principal, interestRate, numOfPayments) {
    const pmts = numOfPayments * 12;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const paymentAmount = principal * (monthlyInterestRate * (1 + monthlyInterestRate) ** pmts)/((1 + monthlyInterestRate) ** pmts - 1) 
    console.log(principal, interestRate, pmts)
    return paymentAmount
  }

  // console.log(calculatePaymentAmount(425000, 7.71, 360))
// let monthlyPaymentAmount = calculatePaymentAmount(principal, interest_rate, numOfPayments)
  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <form onSubmit={e => {
        e.preventDefault()
        let p = calculatePaymentAmount(principal, interestRate, numOfPayments)
        setMonthlyPaymentAmount(p)
        }}>
        <div>
          <label>Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={principal}
            onChange={e => {setPrincipal(e.target.value)}}
          />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input
            type="number"
            name="interestRate"
            value={interestRate}
            onChange={e => {setInterestRate(e.target.value)}}
          />
        </div>
        <div>
          <label>Loan Term (years):</label>
          <input
            type="number"
            name="loanTerm"
            value={numOfPayments}
            onChange={e => {setNumOfPayments(e.target.value)}}
            />
        </div>
        <button>
          Calculate
        </button>
      </form>
      <div>
        <h3>Monthly Payment:</h3>
        <p>${monthlyPaymentAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Finance