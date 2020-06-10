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
    const chartDataHead = ['Data', 'Infected']
    let chartDateBody = []
    console.log('covid :>> ', covid);
    if (covid) {
      const sort = covid.sort((o1, o2) => {
        var o1 = new Date(o1.date);
        var o2 = new Date(o2.date);
        return o1-o2;
      });
      sort.forEach((element, index) => {
        const formatDate = moment(element.date).format('DD/MM/YYYY')
        chartDateBody.push([formatDate, element.new_cases])

      });
    }
    // console.log('chartDateBody :>> ', chartDateBody);
    
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
