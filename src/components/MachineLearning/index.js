import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getMachineLearningData } from '../../store/actions/machineLearning.thunk';

class MachineLearning extends React.Component {
    componentDidMount() {
        this.props.getMachineLearningData()
    }


    render() {
        const { machineLearning } = this.props;

        console.log('machineLearning :>> ', machineLearning);
        return (
            <div style={{ height: '100vh' }}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src={`${machineLearning.msg.url}.embed`}
                >
                </iframe>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { machineLearning: state.machineLearning.data }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMachineLearningData }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MachineLearning);
