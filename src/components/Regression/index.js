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

        calculation.forEach((y, index) => {
            if (index<10) {
                chartDateBody[index] = [index, Math.round(y)]
            }
        })

        cities.forEach(city => {
            chartDataHead.push(city.province)
        });





        chartDateBody.splice(0, 0, chartDataHead)
        let test = 0;
        chartDateBody[0].forEach((body, bodyIndex) => {
            cities.forEach(city => {
                if (body === city.province) {
                    test = bodyIndex;
                    city.observed_data.forEach((data, index) => {
                        if (index<10) {
                            chartDateBody[index + 1][test] = data.value
                        }
                        // console.log('data.value :', data.value);
                    })
                }
            })

            // cities.forEach(city => {
            // city.observed_data.forEach((data, index) => {

            //     chartDateBody[index + 1][test] = data.value
            //     // console.log('data.value :', data.value);
            // })

            // })

        })


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
