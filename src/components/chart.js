import React, { Component } from 'react'
import Trend from 'react-trend';
import _ from 'lodash';

function average (data) {
    return _.round(_.sum(data)/data.length);
}
export default (props) => {
    return (
        <div>
            <Trend
                smooth
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-out"
                data={props.data}
                gradient={props.color}
                radius={10}
                strokeWidth={2}
                strokeLinecap={'butt'}
            />
            <div>{average(props.data)} {props.unit}</div>
        </div>
    );
}

