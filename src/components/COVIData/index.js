import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getCovid } from '../../store/actions/covid.thunk';
import Chart from "react-google-charts";
import moment from "moment";

class COVIData extends React.Component {
  componentDidMount() {
    this.props.getCovid()
  }


  render() {
    const { covid } = this.props;
    const cities = covid.filter(data => data.province === 'Hubei'
      || data.province === 'Guangdong'
      || data.province === 'Henan'
      || data.province === 'Zhejiang')

    const chartDataHead = ['Data']
    let chartDateBody = []

    cities.forEach(city => {
      chartDataHead.push(city.province)
    });
console.log('cities :', cities);
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

    chartDateBody.splice(0, 0, chartDataHead)

    return (
      <Chart
        width={'100%'}
        height={600}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={chartDateBody}
      />
    );
  }
}

function mapStateToProps(state) {
  return { covid: state.covid.data }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCovid }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(COVIData);
