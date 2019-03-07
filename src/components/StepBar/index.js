import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IntlMessages from 'util/IntlMessages';

class StepBar extends Component {
    
    constructor(props) {
        super(props);
    }

    getStep1Color(){
        if (this.props.step >= 0){
            return 'col text-primary';
        }
        return 'col text-grey'
    }

    getStep2Color(){
        if (this.props.step >= 1){
            return 'col text-primary';
        }
        return 'col text-grey'
    }

    getStep3Color(){
        if (this.props.step >= 2){
            return 'col text-primary';
        }
        return 'col text-grey'
    }
    
    render() {
        let style = {
            width: `${(this.props.step + 1) / this.props.total_step * 100}%`
        }
        return (
            <div className="stepbar-container">
                <div className="steplabel-container d-flex">
                    <div className={this.getStep1Color()}>
                        <h4 className="font-weight-bold text-uppercase mb-1"><IntlMessages id="stepbar.step1.title"/></h4>
                        <h6><IntlMessages id="stepbar.step1.subtitle"/></h6>
                    </div>
                    <div className={this.getStep2Color()}>
                        <h4 className="font-weight-bold text-uppercase mb-1"><IntlMessages id="stepbar.step2.title"/></h4>
                        <h6><IntlMessages id="stepbar.step2.subtitle"/></h6>
                    </div>
                    <div className={this.getStep3Color()}>
                        <h4 className="font-weight-bold text-uppercase mb-1"><IntlMessages id="stepbar.step3.title"/></h4>
                        <h6><IntlMessages id="stepbar.step3.subtitle"/></h6>
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" 
                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={style}></div>
                </div>
            </div>
        )
    }
}

StepBar.propTypes = {
    step: PropTypes.number,
    total_step: PropTypes.number,
};

StepBar.defaultProps = {
    step: 0,
    total_step: 3
}



export default StepBar;

