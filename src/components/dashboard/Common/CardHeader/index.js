import React from 'react';

class CardHeader extends React.Component {


    render() {
        const {heading, subHeading} = this.props;
        let {styleName} = this.props;
        return (
            <div className={`jr-card-header d-flex ${styleName}`}>
                <div className="mr-auto">
                    <h3 className="card-heading">{heading}</h3>
                    {subHeading && <p className="sub-heading">{subHeading}</p>}
                </div>

                <span className="icon-btn size-30">
                    <i className="zmdi zmdi-chevron-down"/>
                </span>
            </div>
        )
    }
}

export default CardHeader;
CardHeader.defaultProps = {
    styleName: '',
    subHeading: ''
};

