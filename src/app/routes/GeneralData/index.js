import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Textbox } from 'react-inputs-validation';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import IntlMessages from 'util/IntlMessages';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
import {
    showLoader,
    hideLoader,
    showMessage,
} from 'actions'
const axios = require('axios');
import CommonFunc from 'util/CommonFunc'
import API_URL from 'constants/ApiUrl'

class GeneralData extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            name: '',
            email:'',
            password: '',
            confirmPass: '',
            plan: '',
            cardNumber: '',
            cardName: '',
            expireDate: '',
            secNum: '',
            paymentaccounts: [],
            validate: false,
        }
        this.initData = this.initData.bind(this);
        this.delete = this.delete.bind(this);
        this.addPayment = this.addPayment.bind(this);
        this.changePass = this.changePass.bind(this);
        this.cancelPayment = this.cancelPayment.bind(this);
    }


    componentDidMount(){
        this.initData();
    }

    initData(){
        this.setState({
            name: 'Albaro',
            email:'albaro@gmail.com',
            password: '',
            confirmPass: '',
            plan: 'Small Business',
            paymentaccounts: [
                {
                    id: 0,
                    type: 'Credit Card',
                    cardName: 'Alvaro',
                    cardNum: '5467XXXXXXXXX89',
                    expireDate: '04/22'
                },
                {
                    id: 1,
                    type: 'Master Card',
                    cardName: 'Alvaro',
                    cardNum: '9483XXXXXXXXX89',
                    expireDate: '08/22'
                },
            ]
        })
    }
    
    delete(index){
        alert(index);
    }

    changePass(){

    }

    addPayment(){

    }

    cancelPayment(){

    }

    render() {
        const { 
            name,
            email,
            password,
            plan,
            confirmPass,
            cardNumber,
            cardName,
            expireDate,
            secNum,
            paymentaccounts,
            validate,
        } = this.state;

        const accountType_Options = () => {
            return accountTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }
        
        return (
            <div className="app-wrapper">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_setting"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row">
                                <div className="col-md-4">
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
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="email">{<IntlMessages id="label_email"/>}:</label>
                                        <Textbox id="email" name="email" type="text" validate = {validate} value={email} 
                                            placeholder='E-mail' disabled
                                            validationOption={{
                                                name: 'E-mail',
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="plan">{<IntlMessages id="label_plan"/>}:</label>
                                        <Textbox id="plan" name="plan" type="text" validate = {validate} value={plan} 
                                            placeholder='Plan' disabled
                                            validationOption={{
                                                name: 'Plan',
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="password">{<IntlMessages id="label_password"/>}:</label>
                                        <Textbox id="password" name="password" type="text" validate = {validate} value={password} 
                                            placeholder='Password'
                                            onChange={(password, e) => {
                                                this.setState({...this.state, password: password });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Password',
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="confirm_pass">{<IntlMessages id="label_confirm_pass"/>}:</label>
                                        <Textbox id="confirm_pass" name="confirm_pass" type="text" validate = {validate} value={confirmPass} 
                                            placeholder='Confirm Password'
                                            onChange={(confirmPass, e) => {
                                                this.setState({...this.state, confirmPass: confirmPass });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Confirm Password',
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label></label>
                                        <Button onClick={this.changePass} color="success" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-check mr-3 font-weight-bold"></i>{<IntlMessages id="button_changepassword"/>}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_paymentdetail"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="card_number">{<IntlMessages id="label_cardnumber"/>}:</label>
                                        <Textbox id="card_number" name="card_number" type="text" validate = {validate} value={cardNumber} 
                                            placeholder='Credit Card number'
                                            onChange={(cardNumber, e) => {
                                                this.setState({...this.state, cardNumber: cardNumber });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Credit Card number',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="card_name">{<IntlMessages id="label_cardname"/>}:</label>
                                        <Textbox id="card_name" name="card_name" type="text" validate = {validate} value={cardName} 
                                            placeholder='Name in the card'
                                            onChange={(cardName, e) => {
                                                this.setState({...this.state, cardName: cardName });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Name in the card',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="expire_date">{<IntlMessages id="label_expiredate"/>}:</label>
                                        <Textbox id="expire_date" name="expire_date" type="text" validate = {validate} value={expireDate} 
                                            placeholder='Expire Date'
                                            onChange={(expireDate, e) => {
                                                this.setState({...this.state, expireDate: expireDate });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Expire Date',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="sec_num">{<IntlMessages id="label_secnumber"/>}:</label>
                                        <Textbox id="sec_num" name="sec_num" type="text" validate = {validate} value={secNum} 
                                            placeholder='Security Number'
                                            onChange={(secNum, e) => {
                                                this.setState({...this.state, secNum: secNum });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Security Number',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label></label>
                                        <Button onClick={this.addPayment} color="primary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-plus mr-3 font-weight-bold"></i>{<IntlMessages id="button_addpayment"/>}
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <ReactTable
                                        data={paymentaccounts}
                                        nextText = {<IntlMessages id="table_next"/>}
                                        previousText = {<IntlMessages id="table_prev"/>}
                                        noDataText = {<IntlMessages id="table_nodata"/>}
                                        pageText = {<IntlMessages id="table_page"/>}
                                        ofText = {<IntlMessages id="table_of"/>}
                                        rowsText = {<IntlMessages id="table_row"/>}
                                        columns={[
                                            {
                                                Header: <IntlMessages id="table_cardtype_field"/>,
                                                accessor: 'type'
                                            },
                                            {
                                                Header: <IntlMessages id="table_cardname_field"/>,
                                                accessor: 'cardName'
                                            },
                                            {
                                                Header: <IntlMessages id="table_cardnumber_field"/>,
                                                accessor: 'cardNum'
                                            },
                                            {
                                                Header: <IntlMessages id="table_expiredate_field"/>,
                                                accessor: 'expireDate'
                                            },
                                            {
                                                Header: '',
                                                accessor: 'control',
                                                Cell: data => (
                                                    <div className="col d-flex justify-content-center">
                                                        <div onClick={()=>{
                                                                this.delete(data.row._index)
                                                            }} className="point mr-md-4 mr-2">
                                                            <i className=" zmdi zmdi-delete zmdi-hc-2x text-danger"></i>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        ]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="row my-3"> 
                        <div className="col-8"></div>
                        <div className="col-4">
                            <Button onClick={this.cancelPayment} color="secondary" className="btn btn-block btn-lg">
                                <i className=" zmdi zmdi-delete mr-3 font-weight-bold"></i>{<IntlMessages id="button_cancelaccount"/>}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default connect (null, {
    showLoader,
    hideLoader,
    showMessage,
}) (GeneralData);