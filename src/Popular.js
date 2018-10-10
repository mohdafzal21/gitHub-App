var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };

    // this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage = (lang)=>{
    this.setState( ()=> {
      return {
        selectedLanguage: lang,
      }
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <ul className='languages'>
          {languages.map( (lang)=> {
            return (
              <li
                style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                key={lang}
                onClick={()=>this.updateLanguage(lang)}>
                {lang}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Popular