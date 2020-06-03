import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getCovid, getCovidRussian } from '../../store/actions/covid.thunk';
import Chart from "react-google-charts";
import moment from "moment";

class COVIData extends React.Component {
  componentDidMount() {
    this.props.getCovid()
    this.props.getCovidRussian()
  }


  render() {
    const { covid, covidRussia } = this.props;
    const russianCities = covidRussia.filter(cities => cities.general_city === 'Москва')
    const cities = covid.filter(cities => cities.country === 'Russia')
    const dataRostov = covidRussia.filter(cities => cities.general_city === 'Ростов')
    const chartDataHead = ['Data']
    const chartDataHeadMoscow = ['Data', 'Москва']
    const chartDataHeadRostov = ['Data', 'Ростов']
    let chartDateBody = []
    let chartDateBodyMoscow = []
    let chartDateBodyRostov = []


    russianCities.forEach((city, index) => {
      const formatDate = moment(city.observed_date).format('DD/MM/YYYY')
      chartDateBodyMoscow[index] = [formatDate, city.infected]
    })
    dataRostov.forEach((city, index) => {
      const formatDate = moment(city.observed_date).format('DD/MM/YYYY')
      chartDateBodyRostov[index] = [formatDate, city.infected]
    })

    chartDateBodyMoscow.splice(0, 0, chartDataHeadMoscow)
    chartDateBodyRostov.splice(0, 0, chartDataHeadRostov)


    cities.forEach(city => {
      chartDataHead.push(city.country)
    });

    if (cities[0]) {
      for (let i in cities[0].observed_data) {
        const formatDate = moment(cities[0].observed_data[i].date).format('L')
        chartDateBody[i] = [formatDate]
      }
    }

    chartDateBody.map(body => {
      for (let i in cities) {
        cities[i].observed_data.map(data => {
          const formatDate = moment(data.date).format('L')

          if (formatDate === body[0]) {
            body.push(data.value)
          }
        })
      }
    })
    console.log('chartDateBody :>> ', chartDateBody);
    chartDateBody.splice(0, 0, chartDataHead);

    return (
      <>
        <Chart
          width={'100%'}
          height={600}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartDateBodyMoscow}
        />
        <Chart
          width={'100%'}
          height={600}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartDateBodyRostov}
        />
        <Chart
          width={'100%'}
          height={600}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartDateBody}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    covid: state.covid.data,
    covidRussia: state.covid.russianData,
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCovid, getCovidRussian }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(COVIData);
