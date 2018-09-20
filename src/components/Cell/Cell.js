import * as React from 'react';

export const Cell = (props) => {
    // return React.createElement("div", {
    //     className: `cell ${props.alive ? "alive" : "dead"}`,
    //     style: {
    //         width: props.size,
    //         height: props.size
    //     },
    //     onClick: props.onChange
    // });
    return (
        <div
            className={`cell ${props.alive ? "alive" : "dead"}`}
            style={{
                'width': props.size,
                'height': props.size
            }}
            onClick={props.onChange}>
        </div>);
};