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

class InvoicesContent extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            beginDate: '',
            endDate: '',
            invoices: [],
            validate: false,
        }
        this.search = this.search.bind(this);
        this.clear = this.clear.bind(this);
    }


    componentDidMount(){
        this.search();
    }

    search(){
        this.setState({
            invoices:[
                {
                    id: 0,
                    period: '01/2018',
                    date: '01/02/2018',
                    plan: 'Small Business',
                    price: 45.00,
                    status: 'PAYED',
                },
                {
                    id: 1,
                    period: '02/2018',
                    date: '01/03/2018',
                    plan: 'Small Business',
                    price: 45.00,
                    status: 'REFUSED',
                },
            ]
        })
    }

    clear(){
        this.setState({
            beginDate: '',
            endDate: '',
        })
    }
    
    render() {
        const { 
            beginDate,
            endDate,
            invoices,
            validate,
        } = this.state;

        const accountType_Options = () => {
            return accountTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }
        
        return (
            <div className="invoicecontent">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_paymentinvoices"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row mb-4">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label htmlFor="beginDate"><IntlMessages id="label_begindate"/></label>
                                        <DayPickerInput
                                            formatDate={formatDate}
                                            parseDate={parseDate}
                                            value={beginDate}
                                            placeholder="DD/MM/YYYY"
                                            format="DD/MM/YYYY"
                                            onDayChange={(beginDate, modifiers) => {
                                                this.setState({
                                                    beginDate: beginDate,
                                                });
                                            }}
                                            dayPickerProps={{
                                                selectedDays: beginDate,
                                                disabledDays: {
                                                    daysOfWeek: [0, 6],
                                                },
                                                localeUtils: MomentLocaleUtils, 
                                                locale: 'en'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label htmlFor="endDate"><IntlMessages id="label_enddate"/></label>
                                        <DayPickerInput
                                            formatDate={formatDate}
                                            parseDate={parseDate}
                                            value={endDate}
                                            placeholder="DD/MM/YYYY"
                                            format="DD/MM/YYYY"
                                            onDayChange={(endDate, modifiers) => {
                                                this.setState({
                                                    endDate: endDate,
                                                });
                                            }}
                                            dayPickerProps={{
                                                selectedDays: endDate,
                                                disabledDays: {
                                                    daysOfWeek: [0, 6],
                                                },
                                                localeUtils: MomentLocaleUtils, 
                                                locale: 'en'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label></label>
                                        <Button onClick={this.clear} color="secondary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-delete mr-3 font-weight-bold"></i>{<IntlMessages id="button_clear"/>}
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label></label>
                                        <Button onClick={this.search} color="primary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-search mr-3 font-weight-bold"></i>{<IntlMessages id="button_search"/>}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ReactTable
                                        data={invoices}
                                        nextText = {<IntlMessages id="table_next"/>}
                                        previousText = {<IntlMessages id="table_prev"/>}
                                        noDataText = {<IntlMessages id="table_nodata"/>}
                                        pageText = {<IntlMessages id="table_page"/>}
                                        ofText = {<IntlMessages id="table_of"/>}
                                        rowsText = {<IntlMessages id="table_row"/>}
                                        columns={[
                                            {
                                                Header: <IntlMessages id="table_period_field"/>,
                                                accessor: 'period'
                                            },
                                            {
                                                Header: <IntlMessages id="table_date_field"/>,
                                                accessor: 'date'
                                            },
                                            {
                                                Header: <IntlMessages id="table_plan_field"/>,
                                                accessor: 'plan'
                                            },
                                            {
                                                Header: <IntlMessages id="table_price_field"/>,
                                                accessor: 'price'
                                            },
                                            {
                                                Header: <IntlMessages id="table_status_field"/>,
                                                accessor: 'status'
                                            },
                                            {
                                                Header: '',
                                                accessor: 'control',
                                                Cell: data => (
                                                    <div className="col d-flex justify-content-center">
                                                        {data.row._original.status === 'PAYED' && <div onClick={()=>{
                                                                this.props.history.push(`/invoices/details/${data.row._original.id}`)
                                                            }} className="point">
                                                            <i className=" zmdi zmdi-search zmdi-hc-2x text-primary"></i>
                                                        </div>}
                                                        {data.row._original.status === 'REFUSED' && <div onClick={()=>{
                                                                this.props.history.push(`/invoices/details/${data.row._original.id}`)
                                                            }} className="point">
                                                            <i className=" zmdi zmdi-refresh-sync zmdi-hc-2x text-primary"></i>
                                                        </div>}
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
                </div>
            </div>
        );
    }
}



export default connect (null, {
    showLoader,
    hideLoader,
    showMessage,
}) (InvoicesContent);