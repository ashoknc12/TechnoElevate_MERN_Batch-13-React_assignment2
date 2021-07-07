// import React from 'react'
import React, {useState} from 'react';
import Select from 'react-select';
// import React, from 'react'
import './Bgcolor.css';

function Bgcolor()
{
    var colors =[
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"blue"
        },
        {
            value:3,
            label:"orange"
        },
        {
            value:4,
            label:"green"
        },
        {
            value:5,
            label:"greenyellow"
        },
        {
            value:6,
            label:"indigo"
        },
        
    ];
    var [setbgcolor,ddlvalue]=useState(colors.label);
     var ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
    return(
        <div>
           <h2>Select your Color</h2>
            <style>{'body {background-color:'+setbgcolor+';}'}</style>
            <Select className="select" options={colors} onChange={ddlhandle}></Select>
            
             </div>
    );
}
export default Bgcolor;