import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    balance: 0,
    expenses: 0,
    amount: '',
    title: '',
    type: 'INCOME',
    history: [],
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onSubmit = () => {
    const {title, amount, type} = this.state
    let {income, balance, expenses} = this.state

    const amt = parseInt(amount)

    if (type === 'INCOME') {
      income += amt
    } else {
      expenses += amt
    }

    balance = income - expenses

    this.setState(prevState => ({
      title: '',
      amount: '',
      balance,
      expenses,
      income,
      history: [
        ...prevState.history,
        {
          id: uuidv4(),
          title,
          amount,
          type: type === 'INCOME' ? 'Income' : 'Expenses',
        },
      ],
      type: 'INCOME',
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  onClickDelete = id => {
    const {history} = this.state
    let {income, balance, expenses} = this.state

    history.map(eachItem => {
      if (eachItem.id === id) {
        const amt = parseInt(eachItem.amount)
        if (eachItem.type === 'Expenses') {
          expenses -= amt
        } else {
          income -= amt
        }
      }
      return null
    })

    balance = income - expenses

    const filtered = history.filter(eachItem => eachItem.id !== id)

    this.setState({history: filtered, income, expenses, balance})
  }

  render() {
    const {balance, title, amount, type, expenses, income, history} = this.state

    return (
      <div className="container">
        <div className="details-card">
          <h1 className="details-heading">Hi, Richard</h1>
          <p className="details-text">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="sections">
          <div className="form">
            <h1 className="heading">Add Transaction</h1>
            <form onSubmit={this.handleSubmit}>
              <label className="label-text" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                className="input-style"
                value={title}
                onChange={this.onChangeTitle}
              />
              <br />
              <label className="label-text" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                className="input-style"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <br />
              <label className="label-text" htmlFor="type">
                TYPE
              </label>
              <br />
              <select
                value={type}
                className="input-style"
                id="type"
                name="type"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="button" type="submit" onClick={this.onSubmit}>
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1 className="heading">History</h1>
            <ul className="history-card">
              <li className="titles-card">
                <p className="history-card-heading">Title</p>
                <p className="history-card-heading">Amount</p>
                <p className="history-card-heading">Type</p>
              </li>
              {history.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  itemDetails={eachItem}
                  onDelete={this.onClickDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
