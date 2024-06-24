import './index.css'

const TransactionItem = props => {
  const {itemDetails, onDelete} = props
  const {title, amount, type, id} = itemDetails

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="item-card">
      <p className="item-card-text">{title}</p>
      <p className="item-card-text">Rs {amount}</p>
      <p className="item-card-text">{type}</p>
      <button
        data-testid="delete"
        className="button-item"
        onClick={onDeleteItem}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
