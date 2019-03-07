import React from 'react';
import labels from 'app/routes/mail/data/labels'

const MailListItem = ({mail, onMailSelect, onMailChecked, onStartSelect}) => {
    return (
        <div className="module-list-item mail-cell">

            <div className="form-control-checkbox d-flex">
                <div className="form-checkbox">
                    <input type="checkbox"
                           checked={mail.selected}
                           onChange={(event) => {
                               event.stopPropagation();
                               onMailChecked(mail)
                           }}
                           value="SelectMail"
                    />

                    <span className="check">
                        <i className="zmdi zmdi-check zmdi-hc-lg"/>
                    </span>
                </div>

                <span className="icon-btn" onClick={() => {
                    onStartSelect(mail);
                }}>
                {mail.starred ?
                    <i className="zmdi zmdi-star zmdi-hc-lg"/> :
                    <i className="zmdi zmdi-star-outline zmdi-hc-lg"/>
                }
                </span>
            </div>


            <div className="mail-user-info">
                {mail.from.avatar === '' ?
                    <div
                        className="bg-blue avatar rounded-circle size-40 text-white d-flex align-items-center justify-content-center"
                        style={{fontSize: 16}}> {mail.from.name.charAt(0).toUpperCase()}</div> :
                    <img className="rounded-circle avatar size-40" alt="Alice Freeman"
                         src={mail.from.avatar}/>
                }
            </div>

            <div className="module-list-info ml-2" onClick={() => {
                onMailSelect(mail);
            }}>

                <div className="module-list-content">
                    <div className="mail-user-info">

                        <span className="sender-name">{mail.from.name}</span>

                        <span className="toolbar-separator">&nbsp;</span>

                        <span className="d-inline-block font-weight-semibold text-truncate"
                              style={{maxWidth: 'calc(100% - 220px)',}}>{mail.subject}</span>

                        {mail.hasAttachments &&

                        <i className="zmdi zmdi-attachment"/>}

                        <div className="time">{mail.time}</div>

                    </div>


                    <div className="message mb-2">
                        <p> {mail.message}</p>

                    </div>
                    <div className="labels">
                        {labels.map((label, index) => {
                            return (mail.labels).includes(label.id) && <div key={index}
                                                                            className={`badge text-white bg-${label.color}`}>{label.title}</div>
                        })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
};

export default MailListItem;