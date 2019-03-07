import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Textbox } from 'react-inputs-validation';
import CommonFunc from 'util/CommonFunc';
import IntlMessages from 'util/IntlMessages';

import { 
    userSignIn
} from 'actions'

class Login extends React.Component {

    constructor () {
        super ();
        this.state = {
            name: '',
            password: '',
            validate: false,
        }
        this.sendUserSignInRequest = this.sendUserSignInRequest.bind(this);
    }

    componentDidMount(){
        if (this.props.authUser) {
            this.props.history.push ('/');
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.authUser) {
            console.log('login', this.props.authUser);
            this.props.history.push ('/');            
        }
    }

    sendUserSignInRequest(){
        this.setState({...this.state, validate: true});
        const params = {...this.state};
        delete params['validate'];
        if (!CommonFunc.isExistEmptyValue(params)){
            this.props.userSignIn(params);
        }
    }

    render() {
        const {
            name,
            password,
            validate,
        } = this.state;
        return (
            <div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12  card">
                            <div className="row login-container">
                                <div className="col-md-7 introduction-container text-center">
                                    <img style={{ width: '70%' }} src="../../../../assets/images/logo_jus.png" alt=""/>
                                </div>
                                <div className="col-md-5 form-container px-4">
                                    <h1 className="my-5 font-weight-bold"  style={{fontSize: '30px'}}>{<IntlMessages id="title_login"/>}</h1>
                                    <div className="form-group mb-4">
                                        <label htmlFor="name"><IntlMessages id="label_user"/></label>
                                        <Textbox id="name" name="name" type="text" validate = {validate} value={name} placeholder="User"
                                            tabIndex="1"
                                            onChange={(name, e) => {
                                                this.setState({ name: name });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{ 
                                                name: 'User',
                                                check: true,
                                                required: true,
                                                msgOnError: 'Este campo é obrigatório'
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="password"><IntlMessages id="label_password"/></label>
                                        <Textbox id="password" name="password" type="password" validate = {validate} value={password} 
                                            placeholder="Password"
                                            tabIndex="1"
                                            onChange={(password, e) => {
                                                this.setState({ password: password });
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'Password',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-5">
                                        <Button tabIndex="3" onClick={this.sendUserSignInRequest} color="primary" className="btn btn-block btn-lg"><IntlMessages id="button_login"/> </Button>
                                    </div>
                                    <div className="mb-4 text-center help-text pb-3">
                                    V1.0
                                        <Link to={'/'} className="text-decoration text-blue">
                                            <h4><IntlMessages id="button_forgotpassword"/></h4>
                                        </Link>
                                    </div>
                                    <div className="mb-5 text-center signup-text">
                                        <Link to={'/signup'} className="text-decoration text-blue"><h4 className="font-weight-bold"><IntlMessages id="button_signup"/></h4></Link>
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
    const { authUser } = user;
    return { authUser }
};

export default connect (mapStateToProps, {
    userSignIn,
}) (Login);