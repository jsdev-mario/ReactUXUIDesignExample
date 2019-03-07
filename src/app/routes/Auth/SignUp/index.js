import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Textbox,} from 'react-inputs-validation';
import CommonFunc from 'util/CommonFunc'
import API_URL from 'constants/ApiUrl'
import IntlMessages from 'util/IntlMessages';
const axios = require('axios');
import { 
    setInitUrl,
    userSignUp,
    showMessage,
    showLoader,
    hideLoader,
} from 'actions'


class SignUp extends React.Component {

    constructor () {
        super ();
        this.state = {
            name:'',
            address:'',
            zipcode:'',
            city:'',
            state:'',
            country:'',
            email: '',
            password: '',
            confirm_password: '',
            influencer: '',
            small_business: '',
            multi_business: '',
            cardnumber: '',
            cardname: '',
            expiredate: '',
            secnumber: '',
            validate: false,
        }
        this.signUp = this.signUp.bind(this);
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){
        this.props.setInitUrl('/');
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.initURL === '/login') {
            this.props.history.push (nextProps.initURL);
        }
    }

    signUp(event){
        this.setState({...this.state, validate: true});
        const params = {}
        // this.props.userSignUp(params);
        this.props.history.push('/login')
    }

    render() {
        const {
            name,
            address,
            zipcode,
            city,
            state,
            country,
            email,
            password,
            confirm_password,
            influencer,
            small_business,
            multi_business,
            cardnumber,
            cardname,
            expiredate,
            secnumber,
            validate,
        } = this.state;

        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 card p-md-5 p-2">
                            <h1 className="mt-2 mb-4">{<IntlMessages id="title_generalinfo"/>}</h1>
                            <div className="row">
                                <div className="col-md-12">
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
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="address">{<IntlMessages id="label_address"/>}:</label>
                                        <Textbox id="address" name="address" type="text" validate = {validate} value={address} 
                                            placeholder='Address'
                                            onChange={(address, e) => {
                                                this.setState({...this.state, address: address });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Address',
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="zipcode">{<IntlMessages id="label_zipcode"/>}:</label>
                                                <Textbox id="zipcode" name="zipcode" type="text" validate = {validate} value={zipcode} 
                                                    placeholder='Zip Code'
                                                    onChange={(zipcode, e) => {
                                                        this.setState({...this.state, zipcode: zipcode });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'Zip Code',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="city">{<IntlMessages id="label_city"/>}:</label>
                                                <Textbox id="city" name="city" type="text" validate = {validate} value={city} 
                                                    placeholder='City'
                                                    onChange={(city, e) => {
                                                        this.setState({...this.state, city: city });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'City',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="state">{<IntlMessages id="label_state"/>}:</label>
                                                <Textbox id="state" name="state" type="text" validate = {validate} value={state} 
                                                    placeholder='State'
                                                    onChange={(state, e) => {
                                                        this.setState({...this.state, state: state });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'State',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="country">{<IntlMessages id="label_country"/>}:</label>
                                                <Textbox id="country" name="country" type="text" validate = {validate} value={country} 
                                                    placeholder='Country'
                                                    onChange={(country, e) => {
                                                        this.setState({...this.state, country: country });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'Country',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label htmlFor="email">{<IntlMessages id="label_email"/>}:</label>
                                        <Textbox id="email" name="email" type="text" validate = {validate} value={email} 
                                            placeholder='E-mail'
                                            onChange={(email, e) => {
                                                this.setState({...this.state, email: email });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'E-mail',
                                                check: false,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md">
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
                                <div className="col-md">
                                    <div className="form-group">
                                        <label htmlFor="confirm_password">{<IntlMessages id="label_confirm_pass"/>}:</label>
                                        <Textbox id="confirm_password" name="confirm_password" type="text" validate = {validate} value={confirm_password} 
                                            placeholder='Confirm Password'
                                            onChange={(confirm_password, e) => {
                                                this.setState({...this.state, confirm_password: confirm_password });
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
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="mt-3 mb-2"><IntlMessages id="label_typeofaccount"/></label>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="influencer" name="accountType" className="custom-control-input"
                                            value={influencer}    
                                            onChange={(e)=>{
                                                this.setState({
                                                    influencer: e.target.value,
                                                })
                                            }}/>
                                        <label className="custom-control-label" htmlFor="influencer" style={{marginTop: '3px'}}><IntlMessages id="label_influencer"/></label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="small_business" name="accountType" className="custom-control-input"
                                            value={small_business}    
                                            onChange={(e)=>{
                                                this.setState({
                                                    small_business: e.target.value,
                                                })
                                            }}/>
                                        <label className="custom-control-label" htmlFor="small_business" style={{marginTop: '3px'}}><IntlMessages id="label_small_business"/></label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="multi_business" name="accountType" className="custom-control-input"
                                            value={multi_business}    
                                            onChange={(e)=>{
                                                this.setState({
                                                    multi_business: e.target.value,
                                                })
                                            }}/>
                                        <label className="custom-control-label" htmlFor="multi_business" style={{marginTop: '3px'}}><IntlMessages id="label_multi_business"/></label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="mb-4 mt-5">{<IntlMessages id="title_paymentdetails"/>}</h1>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="cardnumber">{<IntlMessages id="label_cardnumber"/>}:</label>
                                                <Textbox id="cardnumber" name="cardnumber" type="text" validate = {validate} value={cardnumber} 
                                                    placeholder='Credit Card number'
                                                    onChange={(cardnumber, e) => {
                                                        this.setState({...this.state, cardnumber: cardnumber });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'Credit Card number',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>  
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="cardname">{<IntlMessages id="label_cardname"/>}:</label>
                                                <Textbox id="cardname" name="cardname" type="text" validate = {validate} value={cardname} 
                                                    placeholder='Name in the card'
                                                    onChange={(cardname, e) => {
                                                        this.setState({...this.state, cardname: cardname });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'Name in the card',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>  
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label htmlFor="expiredate">{<IntlMessages id="label_expiredate"/>}:</label>
                                                <Textbox id="expiredate" name="expiredate" type="text" validate = {validate} value={expiredate} 
                                                    placeholder='Expire Date'
                                                    onChange={(expiredate, e) => {
                                                        this.setState({...this.state, expiredate: expiredate });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'Expire Date',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>  
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label htmlFor="secnumber">{<IntlMessages id="label_secnumber"/>}:</label>
                                                <Textbox id="secnumber" name="secnumber" type="text" validate = {validate} value={secnumber} 
                                                    placeholder='Security Number'
                                                    onChange={(secnumber, e) => {
                                                        this.setState({...this.state, secnumber: secnumber });
                                                    }}
                                                    onBlur={(e) => {}}
                                                    validationOption={{
                                                        name: 'Security Number',
                                                        check: false,
                                                        required: true,
                                                    }}
                                                />
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={'/login'} className="btn btn-outline-primary btn-lg btn-block"><i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i><IntlMessages id="button_cancel"/></Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <Button onClick={this.signUp} color="primary" className="btn btn-block btn-lg"><i className=" zmdi zmdi-check mr-3 font-weight-bold"></i><IntlMessages id="button_save"/></Button>
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

const mapStateToProps = ({ ui, user}) => {
    const {initURL} = ui;
    const { authUser } = user;
    return { authUser, initURL }
};

export default connect (mapStateToProps, {
    setInitUrl,
    userSignUp,
    showMessage,
    showLoader,
    hideLoader,
}) (SignUp);