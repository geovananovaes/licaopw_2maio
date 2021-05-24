import React, { cloneElement } from 'react';

export default props => {

    return(
        <div>
            {/* Para un único elemento filho */}            
            {/* {cloneElement(props.children, {...props})} */}

            {/* Para vários elementos filhos */}
            {props.children.map((child) => {
                return cloneElement(child, {...props})
            })}
        </div>
    )
}
