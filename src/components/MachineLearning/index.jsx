import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getMachineLearning } from '../../store/actions/machileLearning.thunk';

class MatrixCovid extends React.Component {
    state = {

    };


    componentDidMount() {
        this.props.getMachineLearning()
    }


    render() {
        const { machinLearning } = this.props;
        return (
            <div style={{ height: '100vh' }}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src={`${machinLearning.url}.embed`}
                >

                </iframe>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { machinLearning: state.machinLearning.data }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMachineLearning }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatrixCovid);
