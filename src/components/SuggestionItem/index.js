import './index.css'

const suggestionItemList = props => {
  const {eachItem} = props
  const {suggestion} = eachItem

  return (
    <ul className="listItem">
      <li value="suggestion">{suggestion}</li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow-image"
      />
    </ul>
  )
}

export default suggestionItemList
