import * as React from 'react';

export class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.getControlFor = this.getControlFor.bind(this);
        this.state = {};
    }
    
    getControlFor(name, label) {
        if (name.indexOf("toggle-") > -1) {
            const stateName = name.substr(7);
            const [labelState1, labelState2] = label.split("|");
            return (
                <button onClick={(e) => this.setState({[stateName]:!this.state[stateName]})}>
                    {(this.state[stateName] && labelState2) || labelState1}
                </button>
            );
        }
        return (
            <React.Fragment>
                <label htmlFor={name}>{label}</label> 
                <input id={name} type="text" onChange={(e) => this.setState({[name]:e.target.value})} />
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="inputs">
                    { Object
                        .getOwnPropertyNames(this.props)
                        .filter(name => name !== 'children')
                        .map((name,i) => (
                            <div key={i} className="input-row">
                                {this.getControlFor(name, this.props[name])}
                            </div>
                        ))
                    }
                </div>
                {this.props.children(this.state)}            
            </React.Fragment>
        );
    }
}