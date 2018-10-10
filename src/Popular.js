import React from 'react';
import PropTypes from 'prop-types';

//function componants
const SelectLanguage = (props) => {
  console.log(props);
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  
      return (
        <ul className='languages'>
        {languages.map((lang) => {
         return  <li
          style={lang === props.SelectedLanguage ? { color: '#d0021b' } : null}
          onClick={() => props.onSelect(lang)}
          key={lang}>
          {lang}
          </li>
          })}
  </ul>

      )
    
}

SelectLanguage.propTypes = {
  SelectedLanguage:PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };

    // this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage = (lang) => {
    this.setState(() => {
      return {
        selectedLanguage: lang,
      }
    });
  }
  render() {

    return (
      <div>
        <SelectLanguage
          SelectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />

      </div>
    )
  }
}

export default Popular