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

class MainDashboardContent extends React.Component {

    constructor () {
        super ();
        this.state = {
            topPosts: [],
            validate: false,
        }
    }


    componentDidMount(){
        this.initData();
    }

    initData(){
        this.setState({
            topPosts:[
                {
                    id: 0,
                    user: 'Álvaro',
                    socialNetwork: 'Instagram',
                    method: 'Post',
                    message: 'Muito boa a entrevista #awesome',
                    views: '547k',
                    likes: '10k'
                },
                {
                    id: 1,
                    user: 'Álvaro',
                    socialNetwork: 'Instagram',
                    method: 'Post',
                    message: 'Muito boa a entrevista #awesome',
                    views: '547k',
                    likes: '10k'
                },
                {
                    id: 2,
                    user: 'Álvaro',
                    socialNetwork: 'Instagram',
                    method: 'Post',
                    message: 'Muito boa a entrevista #awesome',
                    views: '547k',
                    likes: '10k'
                },
                {
                    id: 3,
                    user: 'Álvaro',
                    socialNetwork: 'Instagram',
                    method: 'Post',
                    message: 'Muito boa a entrevista #awesome',
                    views: '547k',
                    likes: '10k'
                },
            ]
        })
    }
    
    render() {
        const { 
            topPosts,
            validate,
        } = this.state;
        
        return (
            <div className="processmanager-create-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_socialtrafic"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                        </div>
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_topposts"/>}</h1>
                        </div>
                        <div className="col-12 card p-md-5 p-2">
                        <ReactTable
                            data={topPosts}
                            nextText = {<IntlMessages id="table_next"/>}
                            previousText = {<IntlMessages id="table_prev"/>}
                            noDataText = {<IntlMessages id="table_nodata"/>}
                            pageText = {<IntlMessages id="table_page"/>}
                            ofText = {<IntlMessages id="table_of"/>}
                            rowsText = {<IntlMessages id="table_row"/>}
                            columns={[
                                {
                                    Header: <IntlMessages id="table_user_field"/>,
                                    accessor: 'user'
                                },
                                {
                                    Header: <IntlMessages id="table_socialnetwork_field"/>,
                                    accessor: 'socialNetwork',
                                },
                                {
                                    Header: <IntlMessages id="table_method_field"/>,
                                    accessor: 'method',
                                },
                                {
                                    Header: <IntlMessages id="table_message_field"/>,
                                    accessor: 'message',
                                },
                                {
                                    Header: <IntlMessages id="table_views_field"/>,
                                    accessor: 'views',
                                },
                                {
                                    Header: <IntlMessages id="table_likes_field"/>,
                                    accessor: 'likes',
                                },
                                {
                                    Header: '',
                                    accessor: 'control',
                                    Cell: data => (
                                        <div className="col d-flex justify-content-center">
                                            <div onClick={()=>{
                                                    this.props.history.push(`/maindashboard/details/${data.row._original.id}`)
                                                }} className="point">
                                                <i className=" zmdi zmdi-search zmdi-hc-2x text-danger mr-md-4 mr-2"></i>
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
        );
    }
}



export default connect (null, {
    showLoader,
    hideLoader,
    showMessage,
}) (MainDashboardContent);