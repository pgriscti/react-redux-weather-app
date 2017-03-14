import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-maps';

class WeatherList extends Component {
  renderWeather(data) {
    const temps = data.list.map((weather) => {return weather.main.temp - 273.15}); // kelvin to celcius
    const pressure = data.list.map((weather) => {return weather.main.pressure});
    const humidity = data.list.map((weather) => {return weather.main.humidity});
    const {lat, lon} = data.city.coord;

    return(
      <tr key={data.city.name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="green" units='C' /></td>
        <td><Chart data={pressure} color="blue" units='HpA' /></td>
        <td><Chart data={humidity} color="black" units='%' /></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  };
};

function mapStateToProps({weather}) {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);