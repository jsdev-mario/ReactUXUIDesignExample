import React from 'react';
import {DropdownItem, DropdownMenu} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';

class CardMenu extends React.Component {

    render() {
        const options = [
            <IntlMessages id="popup.updateData"/>,
            <IntlMessages id="popup.detailedLog"/>,
            <IntlMessages id="popup.statistics"/>,
            <IntlMessages id="popup.clearData"/>
        ];
        const {handleRequestClose} = this.props;
        return (
            <DropdownMenu>
                {options.map((option, index) =>
                    <DropdownItem key={index} onClick={handleRequestClose}>
                        {option}
                    </DropdownItem>,
                )}
            </DropdownMenu>
        );
    }

}

export default CardMenu;