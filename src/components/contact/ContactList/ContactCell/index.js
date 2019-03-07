import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import AddContact from '../../AddContact/index';

class ContactCell extends React.Component {

    onContactOptionToggle = event => {
        this.setState({menuState: !this.state.menuState});
    };

    onContactClose = () => {
        this.setState({addContactState: false});
    };
    onDeleteContact = (contact) => {
        this.setState({addContactState: false});
        this.props.onDeleteContact(contact);
    };
    onEditContact = () => {
        this.setState({menuState: false, addContactState: true});
    };

    constructor() {
        super();
        this.state = {
            menuState: false,
            addContactState: false,
        }
    }

    render() {
        const {contact, addFavourite, onContactSelect, onSaveContact} = this.props;
        const {menuState, addContactState} = this.state;
        const {name, thumb, email, phone, designation, starred} = contact;
        const options = [
            'Edit',
            'Delete',
        ];
        return (

            <div className="contact-item">

                <div className="form-control-checkbox d-flex">
                    <div className="form-checkbox">
                        <input type="checkbox"
                               checked={contact.selected}
                               value="checked"
                               onClick={() => {
                                   onContactSelect(contact)
                               }}
                        />

                        <span className="check">
                            <i className="zmdi zmdi-check zmdi-hc-lg"/>
                        </span>
                    </div>
                </div>

                <div className="col-auto px-1 actions d-none d-xs-flex">
                    <span className="icon-btn" onClick={() => {
                        addFavourite(contact)
                    }}>
                      {starred ? <i className="zmdi zmdi-star"/> : <i className="zmdi zmdi-star-outline"/>}
                    </span>
                </div>
                {(thumb === null || thumb === '') ?
                    <div className="rounded-circle size-40 bg-blue text-center text-white mx-1 mx-md-3"
                         style={{fontSize: 20}}>
                        {name.charAt(0).toUpperCase()}
                    </div> :
                    <img className="rounded-circle size-40 mx-1 mx-md-3" alt={name} src={thumb}/>}

                <div className="col con-inf-mw-100">
                    <p className="mb-0">
                        <span className="text-truncate contact-name">
                            {name}
                        </span>
                        <span className="d-inline-block toolbar-separator">&nbsp;</span>
                        <span className="text-truncate job-title">
                            {designation}
                        </span>
                    </p>

                    <div className="text-muted">
                        <span className="email d-inline-block mr-2">
                            {email}
                        </span>
                        <span className="phone d-inline-block">
                            {phone}
                        </span>
                    </div>
                </div>


                <div className="col-auto px-1 actions d-none d-sm-flex">


                    <Dropdown isOpen={menuState}
                              toggle={this.onContactOptionToggle.bind(this)}>
                        <DropdownToggle tag="span">
                            <span className="icon-btn text-grey pointer">
                                <i className="zmdi zmdi-more-vert zmdi-hc-lg"/>
                            </span>
                        </DropdownToggle>

                        <DropdownMenu>
                            {options.map(option =>
                                <DropdownItem key={option} onClick={() => {
                                    if (option === 'Edit') {
                                        this.onEditContact()
                                    } else {
                                        this.onDeleteContact(contact)
                                    }
                                }
                                }>
                                    {option}
                                </DropdownItem>,
                            )}
                        </DropdownMenu>

                    </Dropdown>

                    {addContactState &&
                    <AddContact open={addContactState} contact={contact} onSaveContact={onSaveContact}
                                onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>}
                </div>
            </div>
        )
    }
}

export default ContactCell;