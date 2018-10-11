import fetchPopularRepos from './utils/api'
import React from 'react';
import PropTypes from 'prop-types'
// var React = require('react');
// var PropTypes = require('prop-types');
// var api = require('../utils/api');

function SelectLanguage ({selectedLanguage,onSelect}) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map((lang)=> {
        return (
          <li
            style={lang === selectedLanguage ? {color: '#d0021b'} : null}
            onClick={()=>onSelect( lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

function RepoGrid ({repos}) {
  return (
    <ul className='popular-list'>
      {repos.map( (repo, index)=> {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
              <li><button className="btn"> Follow</button></li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    // this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount=()=> {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage=(lang)=> {
    this.setState(()=> {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    fetchPopularRepos(lang)
      .then((repos)=> {
        this.setState(()=> {
          return {
            repos: repos
          }
        });
      });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <p>time taking to load api from github</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

export default Popular;