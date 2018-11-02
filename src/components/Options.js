import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
       <h3>Number of options: {props.options.length}</h3>
       <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length == 0 && <p>Please add an option to get started!</p>}
        {
           props.options.map((option)=>(
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}/>
            ))
        }
    </div>
);

export default Options;