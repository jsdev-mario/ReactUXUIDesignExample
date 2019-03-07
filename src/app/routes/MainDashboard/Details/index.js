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
import {
    showLoader,
    hideLoader,
    showMessage,
} from 'actions'

class MainDashboardDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id: props.match.params.id,
            validate: false,
        }
        this.save = this.save.bind(this)
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

    initData(params){
        // this.props.showLoader();
        // axios.get(`${API_URL.CONTRATO_DETAIL}/${params.id}`)
        // .then(data => {
        //     this.props.hideLoader();
        //     const response = data.data;
        //     if (CommonFunc.isResponseSuccess(response) && response.result && response.result.length > 0) {
        //         const result = response.result[0];
        //     }
        // })
        // .catch(error => {
        //     this.props.hideLoader();
        //     console.log('error', error);
        //     this.props.showMessage({
        //         type: 'error',
        //         message: 'Get process fail'
        //     })
        // });
    }

    save(){
        // this.setState({validate: true});
        // if (this.state.numeroContrato === '') {
        //     this.props.showMessage({
        //         type: 'error',
        //         message: 'Se faz necessário partes do Numero do Contrato'
        //     })
        //     return;
        // }
        // const params = {}
        // this.props.showLoader();
        // axios.put(API_URL.CONTRATO_SAVE, params)
        // .then(data => {
        //     this.props.hideLoader();
        //     const response = data.data;
        //     console.log('response', response);
        //     if (CommonFunc.isResponseSuccess(response)) {
        //         this.props.showMessage({
        //             type: 'success',
        //             message: response.message,
        //         })
        //         this.props.history.push('/dashboard');  
        //     }
        // })
        // .catch(error => {
        //     this.props.hideLoader();
        //     console.log('error', error);
        //     this.props.showMessage({
        //         type: 'error',
        //         message: 'Erro ao carregar os Contrato'
        //     })
        // });

    }

    render() {
        const { 
            validate,
        } = this.state;

        return (
            <div className="processmanager-create-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row mb-2">
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={'/maindashboard'} className="btn btn-outline-primary btn-lg btn-block"><i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>Voltar</Link>
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
}) (MainDashboardDetails);