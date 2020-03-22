import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getMatrixData } from '../../store/actions/matrix.thunk';

class MatrixCovid extends React.Component {
    state = {

    };


    componentDidMount() {
        this.props.getMatrixData()
    }


    render() {
        const { matrixData } = this.props;


        return (
            <div style={{ height: '100vh' }}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src={`${matrixData.url}.embed`}
                >

                </iframe>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { matrixData: state.matrix.matrixData }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMatrixData }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatrixCovid);
