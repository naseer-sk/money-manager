import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="card">
      <div className="my-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="card-image"
        />
        <div>
          <p className="card-heading">Your Balance</p>
          <p className="card-text" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="my-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="card-image"
        />
        <div>
          <p className="card-heading">Your Income</p>
          <p className="card-text" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="my-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="card-image"
        />
        <div>
          <p className="card-heading">Your Expenses</p>
          <p className="card-text" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
