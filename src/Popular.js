import React from "react";
import PropTypes from 'prop-types';

const SelectedLanguage = (props) => {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  console.log(props);
  return (


    <div>
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li
              style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={() => props.onSelect(lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    </div>

  )
}



class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    }; var React = require('react');


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
      <SelectedLanguage
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}
      />
    )
  }
}

//proptypes for functional component
SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string,
  onClick: PropTypes.func,
}

export default Popular