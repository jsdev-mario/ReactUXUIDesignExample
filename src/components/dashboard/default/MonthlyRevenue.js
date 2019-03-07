import React from 'react';
import {Area, AreaChart, Legend, ResponsiveContainer, Tooltip} from 'recharts';

const MonthlyRevenue = ({chartData}) => (
    <ResponsiveContainer width="100%" height={192}>
        <AreaChart data={chartData} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
            <Legend
                layout='vertical'
                verticalAlign="top"
                margin={{left: 10}}
                wrapperStyle={{
                    top: 0,
                    left: 24,
                    lineHeight: '24px'
                }}
            />
            <Tooltip/>
            <Area type="monotone" dataKey="Expanse" stroke="#f3b439" fillOpacity={0.8} fill="#fbdd67"/>
            <Area type="monotone" dataKey="Income" stroke="#03275b" fillOpacity={0.8} fill="#91bced"/>
        </AreaChart>
    </ResponsiveContainer>
);

export default MonthlyRevenue;