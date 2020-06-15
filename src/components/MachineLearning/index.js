import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getSvmData, getRandomForestData } from '../../store/actions/machineLearning.thunk';

class MachineLearning extends React.Component {
    componentDidMount() {
        this.props.getSvmData()
        this.props.getRandomForestData()
    }


    render() {
        const { svmData, randomForestData } = this.props;

        console.log('machineLearning :>> ', randomForestData);
        return (
            <div style={{ height: '100vh' }}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src={`${svmData.msg.url}.embed`}
                >
                </iframe>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src={`${randomForestData.msg.url}.embed`}
                >
                </iframe>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        svmData: state.machineLearning.svmData,
        randomForestData: state.machineLearning.randomForestData,
     }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSvmData, getRandomForestData }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MachineLearning);
