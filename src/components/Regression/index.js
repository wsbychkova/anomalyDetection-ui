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

        const cities = covid.filter(data => data.province === 'Hubei'
            || data.province === 'Guangdong'
            || data.province === 'Henan'
            || data.province === 'Zhejiang')

        const chartDataHead = ['Data', 'f(x)']
        let chartDateBody = []
        
        chartDateBody.push(chartDataHead)
        calculation.forEach((y, index) => {
            chartDateBody[index + 1] = [index, y]

        })

        cities.forEach(city => {
            chartDataHead.push(city.province)
        });


        // if (cities[0]) {
        //     for (let i in cities[0].observed_data) {
        //         chartDateBody[i] = [i]
        //     }
        // }
        chartDateBody.map(body => {
            body.map()
        })

        chartDateBody.map(body => {
            for (let i in cities) {
                // cities[i].observed_data.map((data, index) => {
                //     if (index === body) {
                //         body.push(data.value)
                //     }
                // })
            }
        })

        // chartDateBody.splice(0, 0, chartDataHead)

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
        covid: state.covid.data
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getRegression, getCovid }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Regression);
