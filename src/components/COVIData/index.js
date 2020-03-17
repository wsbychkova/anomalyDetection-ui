import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getCovid } from '../../store/actions/covid.thunk';
import Chart from "react-google-charts";

class COVIData extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.props.getCovid()
  }

  render() {
    const { covid } = this.props;
    const cities = covid.filter(data => data.province === 'Hubei'
      || data.province === 'Guangdong'
      || data.province === 'Henan'
      || data.province === 'Zhejiang')

    console.log('cities :', cities);
    return (
      <Chart
        width={400}
        height={300}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: 'number', label: 'x' },
            { type: 'number', label: 'values' },
            { id: 'i0', type: 'number', role: 'interval' },
            { id: 'i1', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },

          ],
          [1, 100, 90, 110, 85, 96, 104, 120],
          [2, 120, 95, 130, 90, 113, 124, 140],
          [2, 120, 95, 130, 90, 113, 124, 2],


        ]}
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
