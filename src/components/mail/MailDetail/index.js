import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import CustomScrollbars from 'util/CustomScrollbars';

import labels from 'app/routes/mail/data/labels';

class MailDetail extends React.Component {

    handleToggle = event => {
        this.setState({open: !this.state.open});
    };

    constructor() {
        super();
        this.state = {
            open: false,
            showDetail: false
        };
    }


    render() {
        const {mail, onStartSelect, onImportantSelect, width} = this.props;
        console.log(width);
        const {open} = this.state;
        const options = [
            'Reply',
            'Forward',
            'Print',
        ];
        return (
            <div className="module-detail mail-detail">
                <CustomScrollbars className="module-list-scroll scrollbar" style={{
                    height: width >= 1200 ? 'calc(100vh - 315px)' : 'calc(100vh - 295px)'
                }}>
                    <div className="mail-header">

                        <div className="mail-header-content col pl-0">
                            <div className="subject">
                                {mail.subject}
                            </div>

                            <div className="labels">
                                {labels.map((label, index) => {
                                    return (mail.labels).includes(label.id) && <div key={index}
                                                                                    className={`badge text-white bg-${label.color}`}>{label.title}</div>
                                })}
                            </div>


                        </div>

                        <div className="mail-header-actions">

                            <span className="icon-btn" onClick={() => {
                                onStartSelect(mail);
                            }}>
                                {mail.starred ?
                                    <i className="zmdi zmdi-star"/> :
                                    <i className="zmdi zmdi-star-outline"/>
                                }

                            </span>
                            <span className="icon-btn" onClick={() => {
                                onImportantSelect(mail);
                            }}>

                                {mail.important ?
                                    <i className="zmdi zmdi-label-alt"/>
                                    : <i className="zmdi zmdi-label-alt-outline"/>
                                }
                            </span>
                        </div>

                    </div>
                    <hr/>

                    <div className="mail-user-info">

                        {mail.from.avatar === '' ?
                            <div
                                className="bg-blue avatar rounded-circle size-40 text-white d-flex align-items-center justify-content-center"
                                style={{fontSize: 16}}> {mail.from.name.charAt(0).toUpperCase()}</div> :
                            <img className="rounded-circle avatar size-40 mr-4" alt="Alice Freeman"
                                 src={mail.from.avatar}/>
                        }

                        <div className="sender-name">{mail.from.name}
                            <div className="send-to text-grey">to me</div>
                        </div>


                        <Dropdown isOpen={open} className="ml-auto"
                                  toggle={this.handleToggle.bind(this)}>
                            <DropdownToggle tag="span">
                                <span className="icon-btn">
                                      <i className="zmdi zmdi-more-vert"/>
                                </span>
                            </DropdownToggle>

                            <DropdownMenu>
                                {options.map(option =>
                                    <DropdownItem key={option}>
                                        {option}
                                    </DropdownItem>,
                                )}
                            </DropdownMenu>

                        </Dropdown>


                    </div>


                    <div className="show-detail" onClick={() => {
                        this.setState({showDetail: !this.state.showDetail});
                    }}>{this.state.showDetail ? 'Hide Detail' : 'Show Detail'}</div>
                    {this.state.showDetail && (<div>
                        <div>
                            <strong>From: </strong>{mail.from.email}
                        </div>
                        < div>
                            < strong> To: </strong>
                            {
                                mail.to.map((to, index) => <span>{index > 0 && ', '} {to.email}</span>)
                            }
                        </div>
                        <div><strong>Date: </strong>{mail.time} </div>
                    </div>)}


                    <p className="message">
                        {mail.message}
                    </p>

                    {mail.hasAttachments &&
                    <div className="attachment-block">
                        <h3>Attachments ({mail.hasAttachments.length})</h3>
                        <div className="row">
                            {mail.attachments.map((attachment, index) =>
                                <div className="col-3" key={index}>
                                    <img className="size-100" src={attachment.preview} alt={attachment.fileName}/>
                                    <div className="size">{attachment.size}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    }

                </CustomScrollbars>
            </div>
        );
    }
}

export default MailDetail;