import React from 'react';
import {Button, Modal, ModalHeader} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';

class AddContact extends React.Component {
    constructor(props) {
        super(props);

        const {id, thumb, name, email, phone, designation, selected, starred, frequently} = props.contact;
        this.state = {
            id,
            thumb,
            name,
            email,
            phone,
            designation,
            selected,
            starred,
            frequently,
        };

    }


    render() {
        const {onSaveContact, onDeleteContact, onContactClose, open, contact} = this.props;
        const {id, name, email, phone, designation, selected, starred, frequently} = this.state;
        let {thumb} = this.state;
        if (!thumb) {
            thumb = 'http://via.placeholder.com/225x225';
        }
        return (
            <Modal className="modal-box" toggle={onContactClose} isOpen={open}>
                <ModalHeader className="modal-box-header bg-primary">
                    {contact.name === '' ? <IntlMessages id="contact.addContact"/> :
                        <IntlMessages id="contact.saveContact"/>}
                    <span className="text-white pointer">
                        <i className="zmdi zmdi-close zmdi-hc-lg" onClick={onContactClose}/>
                    </span>
                </ModalHeader>

                <div className="modal-box-content">
                    <div className="row no-gutters">
                        <div className="col-lg-3 text-center text-lg-right order-lg-2">
                            <img className="ml-lg-3 mb-4 mb-lg-0 avatar size-120" src={thumb}/>
                        </div>

                        <div className="col-lg-9 d-flex flex-column order-lg-1">
                            <input type="text" className="form-control mb-2"
                                   placeholder="Name"
                                   onChange={(event) => this.setState({name: event.target.value})}
                                   defaultValue={name}
                            />
                            <input type="text" className="form-control mb-2"
                                   placeholder="Email"
                                   onChange={(event) => this.setState({email: event.target.value})}
                                   value={email}
                            />
                            <input type="text" className="form-control mb-2"
                                   placeholder="Phone"
                                   onChange={(event) => this.setState({phone: event.target.value})}
                                   value={phone}

                            />
                            <input type="text" className="form-control mb-2"
                                   placeholder="Designation"
                                   onChange={(event) => this.setState({designation: event.target.value})}
                                   value={designation}
                            />
                        </div>
                    </div>
                </div>

                <div className="modal-box-footer d-flex flex-row">
                    <Button className="text-uppercase" disabled={name === ''} color="primary" onClick={() => {
                        onContactClose();
                        onSaveContact(
                            {
                                'id': id,
                                'name': name,
                                'thumb': thumb,
                                'email': email,
                                'phone': phone,
                                'designation': designation,
                                'selected': selected,
                                'starred': starred,
                                'frequently': frequently
                            });
                        this.setState({
                            'id': id + 1,
                            'name': '',
                            'thumb': '',
                            'email': '',
                            'phone': '',
                            'designation': '',
                        })

                    }}><IntlMessages id="contact.saveContact"/></Button>
                </div>
            </Modal>
        );
    }
}

export default AddContact;