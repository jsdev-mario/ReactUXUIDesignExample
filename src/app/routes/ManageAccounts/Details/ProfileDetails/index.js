import React from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Textbox } from 'react-inputs-validation';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
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

class ProfileDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id: props.match.params.id,
            name: '',
            photo: '/assets/images/photo.jpg', 
            description: '', 
            socialAccounts: [],
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
        this.setState({
            name: 'JaonMicle',
            description: 'Design and build advanced applications for the iOS platform Collaborate with cross-functional teams to define, design, and ship new features. Unit-test code for robustness, including edge cases, usability, and general reliability. Work on bug fixing and improving application performance. Continuously discover',
            socialAccounts: [
                {
                    type: 'Instagram',
                    userName: 'jaonmicle@outlook.com'
                },
                {
                    type: 'Facebook',
                    userName: 'benzcruise@gmail.com'
                },
                {
                    type: 'Whatsapp',
                    userName: 'yoshida@outlook.com'
                },
            ]
        })
    }

    save(){
        
    }

    render() {
        const { 
            name,
            photo,
            description,
            socialAccounts,
            validate,
        } = this.state;

        return (
            <div className="manageaccounts-create-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_manageaccounts_details"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row mb-2">
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
                        </div>
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_socialnetworkaccounts"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row">
                                <div className="col-md-3 offset-md-9">
                                    <Button onClick={()=>{
                                            this.props.history.push(`${this.props.match.url}/socialaccount/add`)
                                        }} color="secondary" className="btn btn-block btn-lg">
                                        <i className=" zmdi zmdi-plus mr-3 font-weight-bold"></i>{<IntlMessages id="button_addasocialnetwork"/>}
                                    </Button>
                                </div>
                            </div>
                            <ReactTable
                                data={socialAccounts}
                                nextText = {<IntlMessages id="table_next"/>}
                                previousText = {<IntlMessages id="table_prev"/>}
                                noDataText = {<IntlMessages id="table_nodata"/>}
                                pageText = {<IntlMessages id="table_page"/>}
                                ofText = {<IntlMessages id="table_of"/>}
                                rowsText = {<IntlMessages id="table_row"/>}
                                columns={[
                                    {
                                        Header: <IntlMessages id="table_type_field"/>,
                                        accessor: 'type'
                                    },
                                    {
                                        Header: <IntlMessages id="table_username_field"/>,
                                        accessor: 'userName',
                                    },
                                    {
                                        Header: '',
                                        accessor: 'control',
                                        Cell: data => (
                                            <div className="col d-flex justify-content-center">
                                                <div onClick={()=>{
                                                        this.props.history.push(`${this.props.match.url}/socialaccount/${data.row._original.type}`)
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
                                defaultPageSize={5}
                                className="-striped -highlight"
                            />  
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={'/manageaccounts'} className="btn btn-outline-primary btn-lg btn-block"><i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>{<IntlMessages id="button_cancel"/>}</Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <Button onClick={this.save} color="primary" className="btn btn-block btn-lg"><i className=" zmdi zmdi-check mr-3 font-weight-bold"></i>{<IntlMessages id="button_save"/>}</Button>
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
}) (ProfileDetails);