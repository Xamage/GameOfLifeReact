import * as React from 'react';

export function Cell(props) {
    return (
        <div 
            className={`cell ${props.alive ? "alive" : "dead"}`} 
            style={{
                'width': props.size,
                'height': props.size
            }}
            onClick={props.onChange}>
        </div>
    );
};