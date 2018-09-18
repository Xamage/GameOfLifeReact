import * as React from 'react';

export class PropsFeeder extends React.Component {
    state = {};

    getControlFor(name, props) {
        switch (props.type) {
            case 'boolean':
                {
                    return (
                        <button onClick={() => this.setState({ [name]: !this.state[name] })}>
                            {(this.state[name] && props.titleTrue) || props.titleFalse}
                        </button>
                    );
                }
            case 'number':
                {
                    return (
                        <React.Fragment>
                            <label htmlFor={name}>{props.title}</label>
                            <input id={name} 
                                type="text"
                                onChange={(e) => this.setState({ [name]: +e.target.value })} 
                            />
                        </React.Fragment>
                    );
                }
            default:
                return <span>Unhandled control type {props.type} for {name}</span>
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="inputs">
                    {Object
                        .getOwnPropertyNames(this.props)
                        .filter(name => name !== 'children')
                        .map((name, i) => (
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

export function withPropsFeeder(WrappedComponent, conf) {
    return class extends React.Component {
        render() {
            return (
                <PropsFeeder {...conf}>
                    {props =>
                        <WrappedComponent {...props} />
                    }
                </PropsFeeder>
            );
        }
    };
}