import React from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Textbox } from 'react-inputs-validation';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {ListGroup, ListGroupItem} from 'reactstrap';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';
const axios = require('axios');
import CommonFunc from 'util/CommonFunc'
import API_URL from 'constants/ApiUrl'
import moment from 'moment';
import IntlMessages from 'util/IntlMessages';
import ConversationCell from '../ConversationCell';

import {
    showLoader,
    hideLoader,
    showMessage,
} from 'actions'

class DirectMessage extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            name: '',
            messageType: '',
            description: '',
            conversations: [],
            message: '',
            validate: false,
        }
        this.save = this.save.bind(this)
    }

    
    componentDidMount(){
        this.initData()
    }

    componentWillUnmount(){
        
    }

    componentWillReceiveProps(nextProps){
       
    }

    validate(){

    }

    initData(){
        this.setState({
            conversations: [
                {
                    thumb: 'https://www.fillmurray.com/200/200',
                    name: 'JaonMicle',
                    sentAt: moment().format('DD/MMM/YYYY'),
                    message: 'high time we had a celeb appear on this list, and who better than Fill Murray.'
                },
                {
                    thumb: 'https://www.fillmurray.com/200/200',
                    name: 'JaonMicle',
                    sentAt: moment().format('DD/MMM/YYYY'),
                    message: 'high time we had a celeb appear on this list, and who better than Fill Murray.'
                },
                {
                    thumb: 'https://www.fillmurray.com/200/200',
                    name: 'JaonMicle',
                    sentAt: moment().format('DD/MMM/YYYY'),
                    message: 'high time we had a celeb appear on this list, and who better than Fill Murray.'
                },
                {
                    thumb: 'https://www.fillmurray.com/200/200',
                    name: 'JaonMicle',
                    sentAt: moment().format('DD/MMM/YYYY'),
                    message: 'high time we had a celeb appear on this list, and who better than Fill Murray.'
                },
                {
                    thumb: 'https://www.fillmurray.com/200/200',
                    name: 'JaonMicle',
                    sentAt: moment().format('DD/MMM/YYYY'),
                    message: 'high time we had a celeb appear on this list, and who better than Fill Murray.'
                },
            ]
        })

    }

    save(){
        
    }

    render() {
        const { 
            id,
            name,
            conversations,
            messageType,
            description,
            message,
            validate,
        } = this.state;

        const accountType_Options = () => {
            return accountTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }

        return (
            <div className="directmessage-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_viewmessages_directmessage"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="id">{<IntlMessages id="label_Id"/>}:</label>
                                        <Textbox id="id" name="id" type="text" validate = {validate} value={id} 
                                            placeholder='Id' disabled
                                            validationOption={{
                                                name: 'Id',
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label htmlFor="name">{<IntlMessages id="label_name"/>}:</label>
                                        <Textbox id="name" name="name" type="text" validate = {validate} value={name} 
                                            placeholder='Name' disabled
                                            validationOption={{
                                                name: 'Name',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h2 className="mt-3">{<IntlMessages id="label_accounts"/>}</h2>
                                    <ListGroup className="overflow-hidden">
                                        <ListGroupItem className="ripple-effect-click" href="javascript:void(0)" action>
                                            <div className="media">
                                                <div className="mr-3">
                                                    <span className="user-avatar  bg-grey size-40">
                                                        <i className="zmdi zmdi-instagram zmdi-hc-fw zmdi-hc-lg text-white"/>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mt-2">jaonmicle@outlook.com</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="list-group-item-action list-group-item ripple-effect-click "
                                                    href="javascript:void(0)">
                                            <div className="media">
                                                <div className="mr-3">
                                                    <span className="user-avatar  bg-grey size-40">
                                                        <i className="zmdi zmdi-whatsapp zmdi-hc-fw zmdi-hc-lg text-white"/>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mt-2">benz@gmail.com</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="list-group-item-action list-group-item ripple-effect-click "
                                                    href="javascript:void(0)">
                                            <div className="media">
                                                <div className="mr-3">
                                                    <span className="user-avatar  bg-grey size-40">
                                                        <i className="zmdi zmdi-facebook zmdi-hc-fw zmdi-hc-lg text-white"/>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mt-2">yoshida@gmail.com</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                                <div className="col-md-3">
                                    <h2 className="mt-3">{<IntlMessages id="label_directs"/>}</h2>
                                    <ListGroup className="overflow-hidden">
                                        <ListGroupItem className="ripple-effect-click" href="javascript:void(0)" action>
                                            <div className="media">
                                                <div className="mr-3">
                                                    <span className="user-avatar  bg-grey size-40">
                                                        <i className="zmdi zmdi-user zmdi-hc-fw zmdi-hc-lg text-white"/>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mt-2">jaonmicle@outlook.com</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="list-group-item-action list-group-item ripple-effect-click "
                                                    href="javascript:void(0)">
                                            <div className="media">
                                                <div className="mr-3">
                                                    <span className="user-avatar  bg-grey size-40">
                                                        <i className="zmdi zmdi-user zmdi-hc-fw zmdi-hc-lg text-white"/>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mt-2">benz@gmail.com</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="list-group-item-action list-group-item ripple-effect-click "
                                                    href="javascript:void(0)">
                                            <div className="media">
                                                <div className="mr-3">
                                                    <span className="user-avatar  bg-grey size-40">
                                                        <i className="zmdi zmdi-user zmdi-hc-fw zmdi-hc-lg text-white"/>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mt-2">yoshida@gmail.com</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="mt-3">{<IntlMessages id="label_messages"/>}</h2>
                                    <div className="row px-3">
                                        <div className="card col-12 p-0">
                                            {
                                                conversations.map((conversation, index) => <ConversationCell key={index} conversation={conversation}/>)
                                            }
                                            <hr className="m-0"/>
                                            <div className="row p-2">
                                                <div className="col-11">
                                                    <Textbox id="message" name="message" type="text" validate = {validate} value={message} 
                                                        placeholder='Please input text'
                                                        onChange={(message, e) => {
                                                            this.setState({...this.state, message: message });
                                                        }}
                                                        validationOption={{
                                                            name: 'Please input text',
                                                            check: true,
                                                            required: true,
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-1">
                                                    <i className="zmdi zmdi-mail-send" style={{fontSize: '25px', marginTop: '8px'}}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={`${this.props.match.url.replace('/viewmessagecontent/directmessage', '')}`} className="btn btn-outline-primary btn-lg btn-block">
                                            <i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>{<IntlMessages id="button_cancel"/>}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { authUser } = user;
    return {
        authUser,
    }
};

export default connect (mapStateToProps, {
    showLoader,
    hideLoader,
    showMessage,
}) (DirectMessage);