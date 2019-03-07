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

class SocialCalendarDetails extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            id: props.match.params.id,
            name: '',
            schedules: [],
            reschedule_modal: false,
            messageTypeDlg: '',
            descriptionDlg: '',
            socialNetworkDlg: '',
            dateDlg: '',
            timeDlg: 0,
            validate: false,
        }
        this.save = this.save.bind(this)
        this.reScheduleModalToggle = this.reScheduleModalToggle.bind(this);
        this.newPost = this.newPost.bind(this);
        this.reSchedule = this.reSchedule.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.cancel = this.cancel.bind(this);
        this.onChangeDlgTime = this.onChangeDlgTime.bind(this)
    }

    
    componentDidMount(){
        this.initData()
    }

    componentWillUnmount(){
        
    }

    componentWillReceiveProps(nextProps){
       
    }

    initData(){
        let newSchedule = [];
        for(let i = 0; i < 35; i++){
            newSchedule.push({
                year: 2018,
                month: 11,
                day: i,
            });
        }
        this.setState({
            schedules: newSchedule,
        })
    }

    save(){
        
    }

    reScheduleModalToggle(){
        this.setState({
            reschedule_modal: !this.state.reschedule_modal,
        })
    }

    newPost(e, data) {
        
    } 

    reSchedule(e, data) {
        this.setState({
            reschedule_modal: true
        })
    } 

    deletePost(e, data){

    }

    cancel(e, data){

    }

    onChangeDlgTime(value){

    }

    cancel

    render() {
        const { 
            id,
            name,
            schedules,
            messageTypeDlg,
            descriptionDlg,
            socialNetworkDlg,
            dateDlg,
            timeDlg,
            validate,
        } = this.state;

        const getTimeData = () => {
            let timeData = [];
            for (let i = 0; i < 24; i++){
                timeData.push({id: i, name: `${`0${i}`.slice(-2)}:00`})
            }
            return timeData;
        }
        const schedulesData = () => {
            let monthDatas = [];
            for(let i = 0; i < 5; i++){
                monthDatas.push(
                    <div className="row px-2" key={1000 + i}>
                        {weekSchedules(i, 0)}
                    </div>
                )
            }
            return monthDatas;
        }

        const weekSchedules = (index, start) => {
            let weekDays = [];
            for (let i = 0; i < 7; i++){
                weekDays.push(
                    <div className="col pb-0 calendar_day" style={{padding: '3px'}} key={index * 7 + i}>
                        <ContextMenuTrigger id={`schedule${index * 7 + i}`}>
                            <div className="card mb-1" style={{height: '80px'}}></div>
                        </ContextMenuTrigger>
                        <ContextMenu  id={`schedule${index * 7 + i}`} className="contextmenu">
                            <MenuItem data={schedules[0]} onClick={this.newPost} attributes = {{ className: 'menuitem px-4 py-2 point'}}>
                                <i className="zmdi zmdi-plus mr-2"></i>New Post
                            </MenuItem>
                            <MenuItem data={schedules[0]} onClick={this.reSchedule} attributes = {{ className: 'menuitem px-4 py-2 point'}}>
                                <i className="zmdi zmdi-time mr-2"></i>Re-schedule
                            </MenuItem>
                            <MenuItem data={schedules[0]} onClick={this.deletePost} attributes = {{ className: 'menuitem px-4 py-2 point'}}>
                                <i className="zmdi zmdi-delete mr-2"></i>Delete this post
                            </MenuItem>
                            <MenuItem data={schedules[0]} onClick={this.cancel} attributes = {{ className: 'menuitem px-4 py-2 point'}}>
                                <i className="zmdi zmdi-minus mr-2"></i>Cancel
                            </MenuItem>
                        </ContextMenu>
                    </div>
                )
            }
            return weekDays;
        }

        return (
            <div className="processmanager-create-container">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-12">
                            <h1>{<IntlMessages id="title_social_calendar"/>}</h1>
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
                            <div className="row m-0">
                                <div className="col-md-12" >
                                    <h3>{<IntlMessages id="label_calendar"/>}</h3>
                                </div>
                                <div className="col-md-12 card pb-2">
                                    <div className="row mb-4">
                                        <div className="col-md-8 offset-md-2 pt-4">
                                            <div className="row">
                                                <div className="col-2">
                                                    <Button className="btn btn-secondary btn-lg btn-block text-center"><i className="zmdi zmdi-skip-previous"></i></Button>
                                                </div>
                                                <div className="col-2">
                                                    <Button className="btn btn-secondary btn-lg btn-block text-center"><i className="zmdi zmdi-fast-rewind"></i></Button>
                                                </div>
                                                <div className="col-4">
                                                    <Button className="btn btn-secondary btn-lg btn-block text-center">{moment().format('DD-MMM-YYYY')}</Button>
                                                </div>
                                                <div className="col-2">
                                                    <Button className="btn btn-secondary btn-lg btn-block text-center"><i className="zmdi zmdi-fast-forward"></i></Button>
                                                </div>
                                                <div className="col-2">
                                                    <Button className="btn btn-secondary btn-lg btn-block text-center"><i className="zmdi zmdi-skip-next"></i></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row px-2">
                                        <div className="col pb-0 text-center">Sunday</div>
                                        <div className="col pb-0 text-center">Monday</div>
                                        <div className="col pb-0 text-center">Tuesday</div>
                                        <div className="col pb-0 text-center">Wednesday</div>
                                        <div className="col pb-0 text-center">Thursday</div>
                                        <div className="col pb-0 text-center">Friday</div>
                                        <div className="col pb-0 text-center">Saturday</div>
                                    </div>
                                    {
                                        schedulesData()
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="text-center signup-text">
                                        <Link to={'/socialcalendar'} className="btn btn-outline-primary btn-lg btn-block">
                                            <i className=" zmdi zmdi-arrow-left mr-3 font-weight-bold"></i>{<IntlMessages id="button_cancel"/>}
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="reschedule_modal">
                    <Modal isOpen={this.state.reschedule_modal} toggle={this.reScheduleModalToggle} className={this.props.className}>
                        <ModalHeader toggle={this.reScheduleModalToggle}><IntlMessages id="title_reschedule"/></ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="messageTypeDlg"><IntlMessages id="label_messagetype"/>:</label>
                                        <Textbox id="messageTypeDlg" name="messageTypeDlg" type="text" value={messageTypeDlg}
                                            placeholder="Message Type" disabled
                                            validationOption={{
                                                name: 'Message Type',
                                                check: false,
                                                required: false,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="descriptionDlg"><IntlMessages id="label_description"/>:</label>
                                        <Textbox id="descriptionDlg" name="descriptionDlg" type="text" value={descriptionDlg}
                                            placeholder="Description" disabled
                                            validationOption={{
                                                name: 'Description',
                                                check: false,
                                                required: false,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="socialNetworkDlg"><IntlMessages id="label_social_network"/>:</label>
                                        <Textbox id="socialNetworkDlg" name="socialNetworkDlg" type="text" value={socialNetworkDlg}
                                            placeholder="Social Network" disabled
                                            validationOption={{
                                                name: 'Social Network',
                                                check: false,
                                                required: false,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="dateDlg"><IntlMessages id="label_date"/></label>
                                        <DayPickerInput
                                            formatDate={formatDate}
                                            parseDate={parseDate}
                                            value={dateDlg}
                                            placeholder="DD/MM/YYYY"
                                            format="DD/MM/YYYY"
                                            onDayChange={(dateDlg, modifiers) => {
                                                this.setState({
                                                    dateDlg: dateDlg,
                                                });
                                            }}
                                            dayPickerProps={{
                                                selectedDays: dateDlg,
                                                disabledDays: {
                                                    daysOfWeek: [0, 6],
                                                },
                                                localeUtils: MomentLocaleUtils, 
                                                locale: 'en'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="timeDlg"><IntlMessages id="label_time"/></label>
                                    <Select
                                        tabIndex="1" 
                                        id='timeDlg'
                                        name='timeDlg'
                                        value={timeDlg}
                                        customStyleOptionListContainer = {{
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                        }}
                                        validate = {this.state.validate}
                                        optionList={getTimeData()}
                                        customStyleWrapper={{
                                            backgroundColor: 'white',
                                            height: '44px'
                                        }}
                                        customStyleContainer={{
                                            backgroundColor: 'white',
                                            height: '44px'
                                        }}
                                        customStyleSelect={{
                                            backgroundColor: 'white',
                                            height: '30px'
                                        }}
                                        onChange={(selected_time, e) => {
                                            this.setState({
                                                timeDlg: selected_time
                                            })
                                        }}
                                        onBlur={(e) => {}}
                                        validationOption={{
                                            name: 'City you want', 
                                            check: true,
                                            required: true 
                                        }}
                                    />
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <label></label>
                                    <Button color="secondary" className="btn btn-block btn-lg" onClick={() => {
                                        this.reScheduleModalToggle();
                                    }}><i className="zmdi zmdi-plus mr-4"></i><IntlMessages id="button_add"/></Button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-bordered" style={{marginBottom: 0}}>
                                        <thead>
                                            <tr>
                                            <th scope="col"><IntlMessages id="table_date_field"/></th>
                                            <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                ['12/12/2018 06:00', '13/12/2018 06:00', '14/12/2018 06:00'].map((item, index) => 
                                                    <tr key={index}>
                                                        <th scope="row">{item}</th>
                                                        <td><i className="zmdi zmdi-delete text-danger"></i></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                this.reScheduleModalToggle();
                            }}> <IntlMessages id="button_cancel"/></Button>{' '}
                            <Button color="link" onClick={() => {
                                this.reScheduleModalToggle();
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
}) (SocialCalendarDetails);