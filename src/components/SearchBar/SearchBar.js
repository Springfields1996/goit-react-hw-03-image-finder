import React from 'react';
import {
  SearchBar_style,
  SearchForm,
  SearchForm_button,
  SearchForm_button_label,
  SearchForm_input,
  SearchBar_div,
} from '../styles/style.module.css';

export class SearchBar extends React.Component {
  state = {
    query: '',
  };

  handleChange = event => this.setState({ query: event.currentTarget.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={SearchBar_style}>
        <div className={SearchBar_div}>
          <form className={SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={SearchForm_button}>
              <span className={SearchForm_button_label}>Search</span>
            </button>

            <input
              className={SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </header>
    );
  }
}
