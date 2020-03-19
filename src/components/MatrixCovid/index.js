import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import { getCovid } from '../../store/actions/covid.thunk';

class MatrixCovid extends React.Component {
    state = {

    };


    componentDidMount() {
        this.props.getCovid()
    }


    render() {



        return (
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
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
)(MatrixCovid);
