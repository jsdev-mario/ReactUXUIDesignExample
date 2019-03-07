import React from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Textbox } from 'react-inputs-validation';
import DayPickerInput from 'react-day-picker/DayPickerInput';
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
import {
    showLoader,
    hideLoader,
    showMessage,
} from 'actions'

class SocialAccountDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            type: props.match.params.type,
            userName: '',
            password: '',
            name: '',
            photo: '/assets/images/photo.jpg', 
            description: '', 
            accountType: 0,
            accountTypes: ['Facebook', 'Tiwitter', 'Whatsapp'],
            validate: false,
        }
        this.save = this.save.bind(this)
        this.validate = this.validate.bind(this);
    }

    
    componentDidMount(){
        if (this.state.id){
            this.initData({
                id: this.state.id
            })
        }
    }

    componentWillUnmount(){
        
    }

    componentWillReceiveProps(nextProps){
       
    }

    validate(){

    }

    initData(params){
        
    }

    save(){
        
    }

    render() {
        const { 
            type,
            userName,
            password,
            accountTypes,
            accountType,
            name,
            photo,
            description,
            validate,
        } = this.state;

        const accountType_Options = () => {
            return accountTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }

        return (
            <div className="processmanager-create-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_manageaccounts_details"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row mb-2 mb-4">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label htmlFor="accountType">{<IntlMessages id="label_accounttype"/>}:</label>
                                        <select className="form-control" name="accountType" id="accountType" value={accountType} 
                                            defaultValue={accountType} style={{height: '45px'}}
                                            onChange={(e) => {
                                                this.setState({
                                                    accountType: Number(e.target.value)
                                                })
                                            }}>>
                                            {accountType_Options()}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label htmlFor="userName">{<IntlMessages id="label_username"/>}:</label>
                                        <Textbox id="userName" name="userName" type="text" validate = {validate} value={userName} 
                                            placeholder='Username'
                                            onChange={(userName, e) => {
                                                this.setState({...this.state, userName: userName });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Username',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label htmlFor="password">{<IntlMessages id="label_password"/>}:</label>
                                        <Textbox id="password" name="password" type="password" validate = {validate} value={userName} 
                                            placeholder='Username'
                                            onChange={(password, e) => {
                                                this.setState({...this.state, password: password });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Username',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label></label>
                                        <Button onClick={this.validate} color="secondary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-check mr-3 font-weight-bold"></i>{<IntlMessages id="button_validate"/>}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img src={photo} alt="" style={
                                        {
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '100%'
                                        }
                                    }/>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">{<IntlMessages id="label_name"/>}:</label>
                                        <Textbox id="name" name="name" type="text" validate = {validate} value={name} 
                                            placeholder='Name'
                                            onChange={(name, e) => {
                                                this.setState({...this.state, name: name });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Name',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">{<IntlMessages id="label_description"/>}:</label>
                                        <textarea className="form-control" name="description" id="observacao" rows="4" value={description}
                                            onChange={(e) => {
                                                this.setState({
                                                    description: e.target.value
                                                })
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={`${this.props.match.url.replace(`/socialaccount/${this.state.type}`, '')}`} className="btn btn-outline-primary btn-lg btn-block"><i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>Voltar</Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <Button onClick={this.save} color="primary" className="btn btn-block btn-lg"><i className=" zmdi zmdi-check mr-3 font-weight-bold"></i>Salvar</Button>
                                    </div>
                                </div>
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
}) (SocialAccountDetails);