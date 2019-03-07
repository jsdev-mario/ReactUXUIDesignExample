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

class ManagePostDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id: props.match.params.id,
            name,
            postType: 0,
            postTypes: ['Post', 'Stories'],
            description: '',
            attachments: [],
            accepted: [],
            rejected: [],
            accounts: ['Instagram-JaonMicle', 'Facebook-JaonMicle', 'Whatsapp-JaonMicle'],
            validate: false,
        }
        this.save = this.save.bind(this)
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
            name: 'Site increase effectiveness for tourists',
            postType: 0,
            description: 'Our online resource is informational and provides tourists who seek active recreation, data on various routes through the forest, indicating places of recreation, various interesting places, and the like.Tourists can choose one of several routes and move along it, without fear of getting lost in the',
            attachments: [
                {
                    mimeType: 'PNG',
                    size: '100kb',
                    dimensions: '200x 100',
                },
                {
                    mimeType: 'MP4',
                    size: '1.2Mb',
                    dimensions: '670x 320',
                },
                {
                    mimeType: 'JPG',
                    size: '5.1kb',
                    dimensions: '250x 100',
                },
                {
                    mimeType: 'PNG',
                    size: '100kb',
                    dimensions: '200x 200',
                },
            ]
        })
    }

    save(){
        
    }

    render() {
        const { 
            id,
            name,
            postType,
            postTypes,
            description,
            attachments,
            accounts,
            validate,

        } = this.state;

        const postType_Options = () => {
            return postTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }

        console.log(this.state.accepted);
        return (
            <div className="processmanager-create-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_managepostsadd"/>}</h1>
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
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-4">
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
                                <div className="col-md-8">
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
                            <div className="row mb-4">
                                <div className="col-12">
                                    <h3>{<IntlMessages id="label_imagesvideos"/>}</h3>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <ReactTable
                                                data={attachments}
                                                nextText = {<IntlMessages id="table_next"/>}
                                                previousText = {<IntlMessages id="table_prev"/>}
                                                noDataText = {<IntlMessages id="table_nodata"/>}
                                                pageText = {<IntlMessages id="table_page"/>}
                                                ofText = {<IntlMessages id="table_of"/>}
                                                rowsText = {<IntlMessages id="table_row"/>}
                                                columns={[
                                                    {
                                                        Header: <IntlMessages id="table_mimetype_field"/>,
                                                        accessor: 'mimeType'
                                                    },
                                                    {
                                                        Header: <IntlMessages id="table_size_field"/>,
                                                        accessor: 'size'
                                                    },
                                                    {
                                                        Header: <IntlMessages id="table_dimensions_field"/>,
                                                        accessor: 'dimensions'
                                                    },
                                                    {
                                                        Header: '',
                                                        accessor: 'control',
                                                        Cell: data => (
                                                            <div className="col d-flex justify-content-center">
                                                                <div onClick={()=>{
                                                                        const index = Number(data.row._index);
                                                                        if(index < this.state.attachments.length - 1){
                                                                           const temp = this.state.attachments[index];
                                                                           this.state.attachments[index] = this.state.attachments[index+1];
                                                                           this.state.attachments[index+1] = temp;
                                                                           this.setState({...this.state, attachments: this.state.attachments})
                                                                        }
                                                                    }} className="point mr-md-4 mr-2">
                                                                    <i className=" zmdi zmdi-long-arrow-down zmdi-hc-2x text-danger"></i>
                                                                </div>
                                                                <div onClick={()=>{
                                                                        const index = Number(data.row._index);
                                                                        if(index > 0){
                                                                            const temp = this.state.attachments[index];
                                                                            this.state.attachments[index] = this.state.attachments[index-1];
                                                                            this.state.attachments[index-1] = temp;
                                                                            this.setState({...this.state, attachments: this.state.attachments})
                                                                        }
                                                                    }} className="point mr-md-4 mr-2">
                                                                    <i className=" zmdi zmdi-long-arrow-up zmdi-hc-2x text-success"></i>
                                                                </div>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        Header: '',
                                                        accessor: 'control',
                                                        Cell: data => (
                                                            <div className="col d-flex justify-content-center">
                                                                <div onClick={()=>{
                                                                        const newAttachments = [...this.state.attachments];
                                                                        newAttachments.splice(data.row._index, 1);
                                                                        this.setState({
                                                                            attachments: newAttachments,
                                                                        })
                                                                    }} className="point mr-md-4 mr-2">
                                                                    <i className=" zmdi zmdi-delete zmdi-hc-2x text-danger"></i>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                ]}
                                                defaultPageSize={5}
                                                className="-striped -highlight"
                                            />
                                            <div className="row mt-2">
                                                <div className="col-md-8 col-sm-6"></div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="form-group">
                                                        <Button onClick={this.preview} color="secondary" className="btn btn-block btn-lg">
                                                            <i className=" zmdi zmdi-play mr-3 font-weight-bold"></i>{<IntlMessages id="button_preview"/>}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="h-100 d-flex justify-content-center align-items-center">
                                                <div className="dropzone">
                                                    <Dropzone
                                                        accept=".jpeg,.png"
                                                        onDrop={(accepted, rejected) => {
                                                            this.setState({accepted, rejected});
                                                        }}
                                                    >
                                                        {({isDragActive, isDragReject}) => {
                                                            if (isDragActive) {
                                                                return 'All files will be accepted';
                                                            }
                                                            if (isDragReject) {
                                                                return 'Some files will be rejected';
                                                            }
                                                            return 'Dropping some files here...';
                                                        }}
                                                    </Dropzone>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <h3>{<IntlMessages id="title_selectaccounts"/>}</h3>
                                    <Typeahead
                                        clearButton
                                        defaultSelected={accounts.slice(0, accounts.length)}
                                        labelKey="name"
                                        multiple
                                        onChange={(data)=>{
                                            this.setState({
                                                accounts: data,
                                            })
                                        }}
                                        options={accounts}
                                        placeholder="Choose a account..."
                                        style={{height: '50px'}}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={'/manageposts'} className="btn btn-outline-primary btn-lg btn-block">
                                            <i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>{<IntlMessages id="button_cancel"/>}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <Button onClick={()=>{
                                            
                                        }} color="success" className="btn btn-block btn-lg">
                                        <i className=" zmdi zmdi-timer mr-3 font-weight-bold"></i>{<IntlMessages id="button_schedule"/>}
                                    </Button>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <Button onClick={this.save} color="primary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-check mr-3 font-weight-bold"></i>{<IntlMessages id="button_save"/>}
                                        </Button>
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
}) (ManagePostDetails);