import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,} from 'reactstrap';
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

class ContactDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id: props.match.params.id,
            name: '',
            accountName: '',
            selected_contact: {},
            contactDlgSocialNetworks: [],
            sourceType: 0,
            sourceTypes: ['Facebook', 'Tiwitter', 'Whatsapp'],
            contacts: [],
            addContactModal: false,
            importContactModal: false,
            importsocialnetwork: true,
            importexcelfile: false,
            validate: false,
        }
        this.search = this.search.bind(this)
        this.delete = this.delete.bind(this);
        this.importContacts = this.importContacts.bind(this);
        this.addContacts = this.addContacts.bind(this);
        this.addContactDlgToggle = this.addContactDlgToggle.bind(this)
        this.importContactDlgToggle = this.importContactDlgToggle.bind(this)
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
            name: 'Álvaro Gomes',
            sourceType: 0,
            sourceType: 0,
            contactDlgSocialNetworks: ['Instagram-JaonMicle', 'Facebook-JaonMicle', 'Whatsapp-JaonMicle'],
            contacts: [
                {
                    id: 0,
                    name: 'Álvaro Gomes',
                    sourceType: 'Instagram',
                    email: 'alvaro@gmail.com',
                    phone: '+558389393092902'
                },
                {
                    id: 1,
                    name: 'Álvaro Gomes',
                    sourceType: 'Facebook',
                    email: 'alvaro@gmail.com',
                    phone: '+558389393092902'
                },
                {
                    id: 2,
                    name: 'Álvaro Gomes',
                    sourceType: 'Whatsapp',
                    email: 'alvaro@gmail.com',
                    phone: '+558389393092902'
                },
            ]
        })
    }

    search(){
        
    }

    addContactDlgToggle(){
        this.setState({
            addContactModal: !this.state.addContactModal
        })
    }

    importContactDlgToggle(){
        this.setState({
            importContactModal: !this.state.importContactModal
        })
    }

    delete(){

    }

    addContacts(){
        this.setState({
            selected_contact: {}
        })
        this.addContactDlgToggle();
    }

    importContacts(){
        this.importContactDlgToggle();
    }

    render() {
        const { 
            id,
            name,
            sourceType,
            sourceTypes,
            accountName,
            contacts,
            selected_contact,
            contactDlgSocialNetworks,
            importsocialnetwork,
            importexcelfile,
            validate,
        } = this.state;

        const sourceType_Options = () => {
            return sourceTypes.map((element, index) => {
                return <option value={index} key={index}>{element}</option>;
            })
        }

        return (
            <div className="viewmessage-details-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_contacts"/>}</h1>
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
                                        <label htmlFor="accountName">{<IntlMessages id="label_name"/>}:</label>
                                        <Textbox id="accountName" name="accountName" type="text" validate = {validate} value={accountName} 
                                            placeholder='Name'
                                            onChange={(accountName, e) => {
                                                this.setState({...this.state, accountName: accountName });
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
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="sourceType">{<IntlMessages id="label_sourcetype"/>}:</label>
                                        <select className="form-control" name="sourceType" id="sourceType" value={sourceType} 
                                            defaultValue={sourceType} style={{height: '45px'}}
                                            onChange={(e) => {
                                                this.setState({
                                                    sourceType: Number(e.target.value)
                                                })
                                            }}>>
                                            {sourceType_Options()}
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
                                <div className="col-md-6"></div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <Button onClick={this.importContacts} color="success" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-import-export mr-3 font-weight-bold"></i>{<IntlMessages id="button_importcontacts"/>}
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <Button onClick={this.addContacts} color="secondary" className="btn btn-block btn-lg">
                                            <i className=" zmdi zmdi-plus mr-3 font-weight-bold"></i>{<IntlMessages id="button_addcontacts"/>}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-12">
                                    <ReactTable
                                        data={contacts}
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
                                                Header: <IntlMessages id="table_sourcetype_field"/>,
                                                accessor: 'sourceType'
                                            },
                                            {
                                                Header: <IntlMessages id="table_email_field"/>,
                                                accessor: 'email'
                                            },
                                            {
                                                Header: <IntlMessages id="table_phonenumber_field"/>,
                                                accessor: 'phone'
                                            },
                                            {
                                                Header: '',
                                                accessor: 'control',
                                                Cell: data => (
                                                    <div className="col d-flex justify-content-center">
                                                        <div onClick={()=>{
                                                                this.setState({
                                                                    selected_contact: data.row._original
                                                                })
                                                                console.log(data.row._original);
                                                                this.addContactDlgToggle()
                                                            }} className="point mr-md-4 mr-2">
                                                            <i className=" zmdi zmdi-edit zmdi-hc-2x text-primary mr-md-4 mr-2"></i>
                                                        </div>
                                                        <div onClick={this.delete} className="point">
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
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={'/contacts'} className="btn btn-outline-primary btn-lg btn-block">
                                            <i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>{<IntlMessages id="button_cancel"/>}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addContactModal">
                    <Modal isOpen={this.state.addContactModal} toggle={this.addContactDlgToggle} className={this.props.className}>
                        <ModalHeader toggle={this.addContactDlgToggle}><IntlMessages id="title_addcontact"/></ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="selected_contact_name"><IntlMessages id="label_name"/>:</label>
                                        <Textbox id="selected_contact_name" name="selected_contact_name" type="text" value={selected_contact.name}
                                            placeholder="Name"
                                            onChange={(contactDlgName, e) => {
                                                this.setState({...this.state, selected_contact: {...selected_contact, name: contactDlgName}});
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
                                    <div className="form-group">
                                        <label htmlFor="contactDlgEmail"><IntlMessages id="label_email"/>:</label>
                                        <Textbox id="contactDlgEmail" name="contactDlgEmail" type="text" value={selected_contact.email}
                                            placeholder="E-mail"
                                            onChange={(contactDlgEmail, e) => {
                                                this.setState({...this.state, selected_contact: {...selected_contact, email: contactDlgEmail}});
                                            }}
                                            onBlur={(e) => {}}
                                            validationOption={{
                                                name: 'E-Mail',
                                                check: true,
                                                required: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="contactDlgPhone"><IntlMessages id="label_phonenumber"/>:</label>
                                            <Textbox id="contactDlgPhone" name="contactDlgPhone" type="text" value={selected_contact.phone}
                                                placeholder="Phone Number"
                                                onChange={(contactDlgPhone, e) => {
                                                    this.setState({...this.state, selected_contact: {...selected_contact, phone: contactDlgPhone}});
                                                }}
                                                onBlur={(e) => {}}
                                                validationOption={{
                                                    name: 'Phone Number',
                                                    check: true,
                                                    required: true,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="contactDlgPhone"><IntlMessages id="label_social_network"/>:</label>
                                    <Typeahead
                                        clearButton
                                        defaultSelected={contactDlgSocialNetworks.slice(0, 0)}
                                        labelKey="name"
                                        multiple
                                        onChange={(data)=>{
                                            this.setState({...this.state, selected_contact: {...selected_contact, sourceType: data}});
                                        }}
                                        options={contactDlgSocialNetworks}
                                        placeholder="Choose a account..."
                                        style={{height: '50px'}}
                                    />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                this.setState({
                                    selected_contact: {}
                                })
                                this.addContactDlgToggle();
                            }}> <IntlMessages id="button_cancel"/></Button>{' '}
                            <Button color="link" onClick={() => {
                                this.setState({
                                    selected_contact: {}
                                })
                                this.addContactDlgToggle();
                            }}><IntlMessages id="button_save"/></Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div id="importContactModal">
                    <Modal isOpen={this.state.importContactModal} toggle={this.importContactDlgToggle} className={this.props.className}>
                        <ModalHeader toggle={this.importContactDlgToggle}><IntlMessages id="title_importcontact"/></ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="importsocialnetwork" name="importfile" className="custom-control-input"
                                            value={importsocialnetwork} defaultValue={importsocialnetwork}
                                            onChange={(e)=>{
                                                this.setState({
                                                    importsocialnetwork: true,
                                                    importexcelfile: false,
                                                })
                                            }}/>
                                        <label className="custom-control-label" htmlFor="importsocialnetwork" style={{marginTop: '3px'}}><IntlMessages id="label_importsocialnetwork"/></label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="importexcelfile" name="importfile" className="custom-control-input"
                                            value={importexcelfile}    
                                            onChange={(e)=>{
                                                this.setState({
                                                    importexcelfile: true,
                                                    importsocialnetwork: false,
                                                })
                                            }}/>
                                        <label className="custom-control-label" htmlFor="importexcelfile" style={{marginTop: '3px'}}><IntlMessages id="label_importexcelfile"/></label>
                                    </div>
                                </div>
                                {this.state.importexcelfile && <div className="col-md-12 mt-4">
                                    <div className="form-group">
                                        <label htmlFor="importfile">{<IntlMessages id="label_file"/>}:</label>
                                        <input type="file" id="importfile" name="importfile" className="form-control"/>
                                    </div>
                                </div>}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                this.importContactDlgToggle();
                            }}> <IntlMessages id="button_cancel"/></Button>{' '}
                            <Button color="link" onClick={() => {
                                this.importContactDlgToggle();
                            }}><IntlMessages id="button_save"/></Button>
                        </ModalFooter>
                    </Modal>
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
}) (ContactDetails);