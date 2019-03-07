import React from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Textbox } from 'react-inputs-validation';
import ReactTable from 'react-table';
import Dropzone from 'react-dropzone';
import 'react-table/react-table.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
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

class ViewMessagesAccountContent extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id: props.match.params.id,
            name: '',
            account_name: '',
            postType: 0,
            postTypes: ['Post', 'Stories'],
            accountType: 0,
            accountTypes: ['Facebook', 'Tiwitter', 'Whatsapp'],
            accountsDetails: [],
            beginDate: '',
            endDate: '',
            validate: false,
        }
        this.search = this.search.bind(this)
    }

    
    componentDidMount(){
        if (this.state.id){
            this.initData()
        }
    }

    componentWillUnmount(){
        
    }

    componentWillReceiveProps(nextProps){
       
    }

    initData(){
        if(!this.state.id){
            return;
        }
        this.setState({
            name: 'Álvaro Gomes',
            postType: 0,
            accountType: 0,
            accountsDetails: [
                {
                    id: 0,
                    name: 'Álvaro Gomes',
                    accountType: 'Instagram, Twitter, Facebook',
                    postType: 'Post',
                    date: '01/01/2018',
                    views: '10k',
                    likes: '2k',
                    comments: '54',
                },
                {
                    id: 1,
                    name: 'Álvaro Gomes',
                    accountType: 'Instagram, Twitter, Facebook',
                    postType: 'Post',
                    date: '01/01/2018',
                    views: '10k',
                    likes: '2k',
                    comments: '54',
                },
                {
                    id: 2,
                    name: 'Álvaro Gomes',
                    accountType: 'Instagram, Twitter, Facebook',
                    postType: 'Post',
                    date: '01/01/2018',
                    views: '10k',
                    likes: '2k',
                    comments: '54',
                },
            ]
        })
    }

    search(){
        
    }

    render() {
        const { 
            id,
            name,
            postType,
            postTypes,
            account_name,
            accountsDetails,
            accountType,
            accountTypes,
            beginDate,
            endDate,
            validate,
        } = this.state;

        const postType_Options = () => {
            return postTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }

        const accountType_Options = () => {
            return accountTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }
        return (
            <div className="viewmessage-details-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_viewmessages"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                            <div className="row mb-2">
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
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-5">
                                    <div className="form-group">
                                        <label htmlFor="account_name">{<IntlMessages id="label_name"/>}:</label>
                                        <Textbox id="account_name" name="account_name" type="text" validate = {validate} value={account_name} 
                                            placeholder='Name'
                                            onChange={(account_name, e) => {
                                                this.setState({...this.state, account_name: account_name });
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
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6">
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
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="postType">{<IntlMessages id="label_posttype"/>}:</label>
                                                <select className="form-control" name="postType" id="postType" value={postType} 
                                                    defaultValue={postType} style={{height: '45px'}}
                                                    onChange={(e) => {
                                                        this.setState({
                                                            postType: Number(e.target.value)
                                                        })
                                                    }}>>
                                                    {postType_Options()}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
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
                                <div className="col-md"></div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <Button onClick={this.search} color="primary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-search mr-3 font-weight-bold"></i>{<IntlMessages id="button_search"/>}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-12">
                                    <ReactTable
                                        data={accountsDetails}
                                        nextText = {<IntlMessages id="table_next"/>}
                                        previousText = {<IntlMessages id="table_prev"/>}
                                        noDataText = {<IntlMessages id="table_nodata"/>}
                                        pageText = {<IntlMessages id="table_page"/>}
                                        ofText = {<IntlMessages id="table_of"/>}
                                        rowsText = {<IntlMessages id="table_row"/>}
                                        columns={[
                                            {
                                                Header: <IntlMessages id="table_name_field"/>,
                                                accessor: 'name'
                                            },
                                            {
                                                Header: <IntlMessages id="table_accounttype_field"/>,
                                                accessor: 'accountType'
                                            },
                                            {
                                                Header: <IntlMessages id="table_posttype_field"/>,
                                                accessor: 'postType'
                                            },
                                            {
                                                Header: <IntlMessages id="table_date_field"/>,
                                                accessor: 'date'
                                            },
                                            {
                                                Header: <IntlMessages id="table_views_field"/>,
                                                accessor: 'views'
                                            },
                                            {
                                                Header: <IntlMessages id="table_likes_field"/>,
                                                accessor: 'likes'
                                            },
                                            {
                                                Header: <IntlMessages id="table_comments_field"/>,
                                                accessor: 'comments'
                                            },
                                            {
                                                Header: '',
                                                accessor: 'control',
                                                Cell: data => (
                                                    <div className="col d-flex justify-content-center">
                                                        <div onClick={()=>{
                                                                this.props.history.push(`${this.props.match.url}/viewmessagecontent/details/${data.row._original.id}`)
                                                            }} className="point mr-md-4 mr-2">
                                                            <i className=" zmdi zmdi-search zmdi-hc-2x text-primary mr-md-4 mr-2"></i>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        ]}
                                        defaultPageSize={5}
                                        className="-striped -highlight"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={'/viewMessages'} className="btn btn-outline-primary btn-lg btn-block">
                                            <i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>{<IntlMessages id="button_cancel"/>}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <Link to={`${this.props.match.url}/viewmessagecontent/directmessage`} className="btn btn-secondary btn-lg btn-block">
                                            <i className=" zmdi zmdi-search mr-3 font-weight-bold"></i>{<IntlMessages id="button_viewdirectmessages"/>}
                                        </Link>
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
}) (ViewMessagesAccountContent);