import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Textbox, Select } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import IntlMessages from 'util/IntlMessages';
import ReactTable from 'react-table';
import Dropzone from 'react-dropzone';
import 'react-table/react-table.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
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

class InvoicesDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id:  props.match.params.id,
            details: [],
        }
        this.print = this.print.bind(this);
        this.confirmPayment = this.confirmPayment.bind(this)
    }

    
    componentDidMount(){
        this.initData()
    }

    componentWillUnmount(){
        
    }

    componentWillReceiveProps(nextProps){
       
    }

    initData(){
        this.setState({
            details: [
                {
                    description: 'Social Express - Small Business Plan',
                    total: 45,
                },
                {
                    description: 'Social Express - Small Business Plan',
                    total: 45,
                },
                {
                    description: 'Social Express - Small Business Plan',
                    total: 45,
                },
                {
                    description: 'Social Express - Small Business Plan',
                    total: 45,
                },
                {
                    description: 'Social Express - Small Business Plan',
                    total: 45,
                },
            ]
        })
    }

    print(){
        
    }

    confirmPayment(){
        
    }
    
    render() {
        const { 
            details,
        } = this.state;

        const detailTable = () => {
            return details.map((element, index) => {
                return  <tr key={index}>
                            <td>{element.description}</td>
                            <td>${element.total}</td>
                        </tr>
            })
        }

        console.log(details);

        return (
            <div className="invoicedetails">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_paymentinvoices"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row mb-2">
                                <div className="col-md d-flex justify-content-start">
                                    <div>
                                        <p>Álvaro Brito</p>
                                        <p>Borgfelder Straße, 93</p>
                                        <p>217654, Hamburg</p>
                                        <p>Germany</p>
                                    </div>
                                </div>
                                <div className="col-md d-flex justify-content-end">
                                    <div>
                                        <p><span className=" font-weight-bold">Invoice #&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>INV-54968-17</p>
                                        <p><span className=" font-weight-bold">Order Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Done</p>
                                        <p><span className=" font-weight-bold">Billing Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>01/01/2018</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <table class="table table-bordered">
                                        <thead style={{background: '#e2e2e2'}}>
                                            <tr>
                                                <th scope="col"><IntlMessages id="table_description_field"/></th>
                                                <th scope="col"><IntlMessages id="table_total_field"/></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { 
                                                detailTable()
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-12 d-flex justify-content-end">
                                    <div className="d-flex" style={{width: '200px'}}>
                                        <div className="w-50">
                                            <p className=" font-weight-bold">Sub total:</p>
                                            <p className=" font-weight-bold">Tax:</p>
                                            <p className=" font-weight-bold">Total:</p>
                                        </div>
                                        <div className="w-50 text-right">
                                            <p>$ 45.00</p>
                                            <p>$ 5.00</p>
                                            <p>$ 50.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-end">
                                        <Button onClick={this.print} color="light" className="btn btn-lg">
                                            <i className=" zmdi zmdi-print font-weight-bold"></i>
                                        </Button>
                                        <Button onClick={this.confirmPayment} color="primary" className="btn btn-lg">
                                            <i className=" zmdi zmdi-check mr-3 font-weight-bold"></i>{<IntlMessages id="button_confirmpayment"/>}
                                        </Button>
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
}) (InvoicesDetails);