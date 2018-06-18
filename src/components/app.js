import React, { Component } from 'react';
import SearchBar from '../contrainers/search_bar';
import WeatherList from '../contrainers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
