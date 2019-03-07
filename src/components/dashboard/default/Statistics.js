import React from 'react';
import {Area, AreaChart, Line, LineChart, ResponsiveContainer,} from 'recharts';

import {data1} from '../../../app/routes/dashboard/routes/Default/data'

class Statistics extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;
        return (
            <div className="jr-card overflow-hidden p-0">
                <div className="d-flex justify-content-between align-items-center bg-primary pt-3 px-4">
                    <span className="jr-menu-icon">
                        <span className="menu-icon bg-white"/>
                    </span>
                    <h2 className="text-white mb-0">Statistics</h2>
                    <span className="icon-btn size-30"><i className="zmdi zmdi-eye text-white"/></span>
                </div>
                <div className="bg-primary text-white no-rounded-0 mb-0">

                    {value === 0 ?
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data1} margin={{top: 30, right: 0, bottom: 0, left: 0}}>
                                <Area type="monotone" dataKey="uv" stroke="rgba(255,255,255,0.5)" activeDot={{r: 8}}
                                      fillOpacity={.5}
                                      fill="white"/>
                            </AreaChart>
                        </ResponsiveContainer>
                        :
                        value === 1 ?
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={data1}>
                                    <Line dataKey="uv" stroke="#ffffff" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                            : <ResponsiveContainer width="100%" height={300}>

                                <LineChart data={data1}>
                                    <Line type="monotone" dataKey="uv" stroke="#ffffff" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="pv" stroke="#ffffff" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                    }
                </div>
                <div className="jr-card-social pt-3 pb-2">
                    <ul className="social-link">
                        <li onClick={this.handleChange.bind(this, 0)}>
                            <span className="icon-btn" color={value === 0 ? "primary" : "default"}>
                                <i className="zmdi zmdi-timer zmdi-hc-lg"/>
                            </span>
                        </li>
                        <li onClick={this.handleChange.bind(this, 1)}>
                            <span className="icon-btn" color={value === 1 ? "primary" : "default"}>
                                <i className="zmdi zmdi-gesture zmdi-hc-lg"/>
                            </span>
                        </li>
                        <li onClick={this.handleChange.bind(this, 2)}>
                            <span className="icon-btn" color={value === 2 ? "primary" : "default"}>
                                <i className="zmdi zmdi-time-interval zmdi-hc-lg"/>
                            </span>
                        </li>
                    </ul>
                </div>


            </div>
        )
    }
}

export default Statistics;

