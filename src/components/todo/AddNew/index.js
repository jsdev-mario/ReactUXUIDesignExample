import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Moment from 'moment';


class AddNew extends React.Component {
    constructor() {
        super();
        this.state = {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            message: '',
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        const {onTodoAdd, onClose, user} = this.props;
        const {to, cc, bcc, subject, message} = this.state;
        return (

            <Modal onClose={onClose} isOpen={this.props.open}>
                <ModalHeader>
                    <div className="header" style={{minWidth: 300}}>
                        <div className="subject">
                            New Message
                        </div>
                        <span onClick={onClose}>
                            <i className="zmdi zmdi-close"/>
                        </span>
                    </div>
                </ModalHeader>
                <div className="add-todo" style={{minWidth: 300}}>
                    <ModalBody className="body d-flex flex-column" style={{width: '100%'}}>
                        <input type="text" className="form-control" placeholder="From"
                               defaultValue={user.email}
                        />
                        <input type="text" className="form-control" placeholder="To*"
                               onChange={(event) => this.setState({to: event.target.value})}
                               defaultValue={to}
                        />
                        <input type="text" className="form-control" placeholder="CC"
                               onChange={(event) => this.setState({cc: event.target.value})}
                               defaultValue={cc}
                        />
                        <input type="text" className="form-control" placeholder="Bcc"
                               onChange={(event) => this.setState({bcc: event.target.value})}
                               value={bcc}
                        />
                        <input type="text" className="form-control" placeholder="Subject"
                               onChange={(event) => this.setState({subject: event.target.value})}
                               value={subject}
                        />
                        <input type="text" className="form-control" placeholder="Message"
                               onChange={(event) => this.setState({message: event.target.value})}
                               value={message}
                        />
                    </ModalBody>

                    <ModalFooter className="footer d-flex flex-row">
                        <Button disabled={to === ''} color="primary" onClick={() => {
                            onClose();
                            onTodoAdd(
                                {
                                    'id': '15453a06c08fb021776',
                                    'from': {
                                        'name': user.name,
                                        'avatar': user.avatar,
                                        'email': user.email
                                    },
                                    'to': [
                                        {
                                            'name': to,
                                            'email': to
                                        }
                                    ],
                                    'subject': subject,
                                    'message': message,
                                    'time': Moment(new Date).format('DD MMM'),
                                    'read': false,
                                    'starred': false,
                                    'important': false,
                                    'hasAttachments': false,
                                    'folder': 1,
                                    'selected': false,
                                    'labels': [],
                                })

                        }}>Save ToDo</Button>
                        <span>
                            <i className="zmdi zmdi-attachment"/>
                        </span>
                        <span onClick={() => {
                            onClose();
                        }}>
                            <i className="zmdi zmdi-delete"/>
                        </span>
                    </ModalFooter>
                </div>
            </Modal>
        );
    }
}

export default AddNew;