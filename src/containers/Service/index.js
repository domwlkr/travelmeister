import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StatusBox from '../../components/StatusBox';
import disruptionsActions from '../../actions/disruptionsActions';

class Service extends React.Component {
    componentWillMount() {
        this.props.getDisruptions(this.props.match.params.id);
    }

    render() {
        return (
            <div className="main">
                <StatusBox
                  disruptions={this.props.disruptions}
                  loading={this.props.loading}
                  mode={this.props.match.params.id}
                />
            </div>
        );
    }
}

Service.propTypes = {
    getDisruptions: PropTypes.func.isRequired,
    disruptions: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    return {
        disruptions: state.disruptionsReducer.disruptions,
        loading: state.disruptionsReducer.loading
    };
};

const mapDispatchToProps = dispatch => ({
    getDisruptions: (mode) => {
        dispatch(disruptionsActions.getDisruptions(mode)).then((response) => {
            let data = response.payload.data;

            dispatch(disruptionsActions.setDisruptions(data));
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
