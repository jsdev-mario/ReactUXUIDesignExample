import React from 'react';
import {Button, Modal, ModalHeader} from 'reactstrap';
import Moment from 'moment';


class ComposeMail extends React.Component {
    constructor() {
        super();
        this.state = {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            message: '',
        }
    }

    render() {
        const {onMailSend, onClose, user} = this.props;
        const {to, cc, bcc, subject, message} = this.state;
        return (
            <Modal className="modal-box modal-box-mail" toggle={onClose} isOpen={this.props.open}
                   style={{zIndex: 2600}}>
                <ModalHeader className="modal-box-header bg-primary">
                    New Message
                    <span className="text-white pointer" onClick={onClose}>
                        <i className="zmdi zmdi-close zmdi-hc-lg"/>
                    </span>
                </ModalHeader>
                <div className="modal-box-content d-flex flex-column">

                    <input type="text" className="form-control mb-2" placeholder="To*"
                           onChange={(event) => this.setState({to: event.target.value})}
                           defaultValue={to}
                    />
                    <input type="text" className="form-control mb-2" placeholder="Subject"
                           onChange={(event) => this.setState({subject: event.target.value})}
                           value={subject}

                    />
                    <input type="text" className="form-control mb-2" placeholder="Message"
                           onChange={(event) => this.setState({message: event.target.value})}
                           value={message}
                    />
                </div>

                <div className="modal-box-footer">
                    <span className="attach-file jr-btn text-muted bg-white">
                        <i className="zmdi zmdi-attachment mr-2 zmdi-hc-2x"/> Attach File
                    </span>

                    <Button disabled={to === ''} color="primary" onClick={() => {
                        onClose();
                        onMailSend(
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

                    }}>
                        <i className="zmdi zmdi-mail-send mr-2"/> Send Message</Button>
                </div>
            </Modal>
        );
    }
}

export default ComposeMail;