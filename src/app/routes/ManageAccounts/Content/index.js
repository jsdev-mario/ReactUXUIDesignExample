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

class ManageAccountsContent extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            name: '',
            accountType: 0,
            accountTypes: ['Facebook', 'Tiwitter', 'Whatsapp'],
            users: [],
            validate: false,
        }
        this.search = this.search.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }


    componentDidMount(){
        this.search();
    }

    search(){
        this.setState({
            users:[
                {
                    id: 0,
                    name: 'Álvaro',
                },
                {
                    id: 1,
                    name: 'Jaon Micle',
                },
                {
                    id: 2,
                    name: 'BenzCruise',
                },
                {
                    id: 3,
                    name: 'Yoshidasadao',
                },
            ]
        })
    }
    
    add(){
        this.props.history.push('/manageaccounts/add');
    }

    delete(index){
        alert(index);
    }

    render() {
        const { 
            users,
            accountTypes,
            accountType,
            name,
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
                            <h1>{<IntlMessages id="title_manageaccounts"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row">
                                <div className="col-md-5">
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
                                <div className="col-md-4">
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
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label></label>
                                        <Button onClick={this.search} color="primary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-search mr-3 font-weight-bold"></i>{<IntlMessages id="button_search"/>}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 offset-md-9">
                                    <Button onClick={this.add} color="secondary" className="btn btn-block btn-lg">
                                        <i className=" zmdi zmdi-plus mr-3 font-weight-bold"></i>{<IntlMessages id="button_addaccount"/>}
                                    </Button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ReactTable
                                        data={users}
                                        nextText = {<IntlMessages id="table_next"/>}
                                        previousText = {<IntlMessages id="table_prev"/>}
                                        noDataText = {<IntlMessages id="table_nodata"/>}
                                        pageText = {<IntlMessages id="table_page"/>}
                                        ofText = {<IntlMessages id="table_of"/>}
                                        rowsText = {<IntlMessages id="table_row"/>}
                                        columns={[
                                            {
                                                Header: <IntlMessages id="table_id_field"/>,
                                                accessor: 'id'
                                            },
                                            {
                                                Header: <IntlMessages id="table_name_field"/>,
                                                accessor: 'name',
                                            },
                                            {
                                                Header: '',
                                                accessor: 'control',
                                                Cell: data => (
                                                    <div className="col d-flex justify-content-center">
                                                        <div onClick={()=>{
                                                                this.props.history.push(`/manageaccounts/details/${data.row._original.id}`)
                                                            }} className="point mr-md-4 mr-2">
                                                            <i className=" zmdi zmdi-edit zmdi-hc-2x text-primary mr-md-4 mr-2"></i>
                                                        </div>
                                                        <div onClick={() => {
                                                                this.delete(data.row._index)
                                                            }} className="point">
                                                            <i className=" zmdi zmdi-delete zmdi-hc-2x text-danger mr-md-4 mr-2"></i>
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
                </div>
            </div>
        );
    }
}



export default connect (null, {
    showLoader,
    hideLoader,
    showMessage,
}) (ManageAccountsContent);