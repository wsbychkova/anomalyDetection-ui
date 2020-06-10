import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getRegression } from '../../store/actions/calculation.thunk';
import { getCovid } from '../../store/actions/covid.thunk';

import Chart from "react-google-charts";
import moment from "moment";

class Regression extends React.Component {
    componentDidMount() {
        this.props.getRegression();
        this.props.getCovid()
    }


    render() {
        const { calculation, covid } = this.props;

        const chartDataHead = ['Data', 'f(x)']
        let chartDateBody = []

        calculation.forEach((y, index) => {
            chartDateBody[index] = [index, Math.round(y)]
        })

        chartDateBody.splice(0, 0, chartDataHead)

        console.log('chartDateBody :', chartDateBody);
        return (
            <>
                <Chart
                    width={'100%'}
                    height={600}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={chartDateBody}
                />ƒ
            </>

        );
    }
}

function mapStateToProps(state) {
    return {
        calculation: state.calculation.data,
        // covid: state.covid.data
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getRegression, getCovid }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Regression);
