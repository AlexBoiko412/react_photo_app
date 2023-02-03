import React from 'react';
import cl from "./Option.module.css"

const Option = ({ children, isActive, ...props}) => {

    const classes = [cl.option]

    if(isActive) {
        classes.push(cl.active)
    }

    return (
        <div {...props} className={classes.join(" ")}>
            {children}
        </div>
    );
};

export default Option;