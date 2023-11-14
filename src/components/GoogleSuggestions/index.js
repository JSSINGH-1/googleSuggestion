import {Component} from 'react'

import './index.css'

import SuggestionItemList from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  searchI = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredSuggestions = suggestionsList.filter(eachData =>
      eachData.suggestion.includes(searchInput),
    )

    return (
      <div className="main-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
        </div>
        <div className="searchContainer">
          <div className="searchIcon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="iconImage"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="SearchInput"
              onChange={this.searchI}
            />
          </div>
          {filteredSuggestions.map(eachSuggestions => (
            <SuggestionItemList
              key={eachSuggestions.id}
              eachItem={eachSuggestions}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
