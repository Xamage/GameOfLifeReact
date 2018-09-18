import React from 'react'

export class LifeCycleHooksLogger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {methodName: 'constructor', props}
  }
  componentWillMount () {
    this.logMethod('componentWillMount')
  }
  componentDidMount () {
    // setState here will trigger render()
    this.logMethod('componentDidMount')
  }
  componentWillUpdate (nextProps) {
    // NO setState HERE !
    this.logMethod('componentWillUpdate', nextProps)
  }
  componentDidUpdate (prevProps) {
    // Not called for initial render()
    this.logMethod('componentDidUpdate', prevProps)
  }
  componentWillReceiveProps (nextProps) {
    // deprecated: use getDerivedStateFromProps
    this.logMethod('componentWillReceiveProps', nextProps)
  }
  componentWillUnmount () {
    this.logMethod('componentWillUnmount')
  }
  logMethod (methodName, props) {
    console.log('Component event triggered with', this.state)
  // this.setState({methodCalled: methodName, props})
  }
  render () {
    return <React.Fragment>
      { this.props.children }
    </React.Fragment>
  }
}

export function withLifeCycleHooksLogger (WrappedComponent) {
  return class extends React.Component {
    render () {
      return (
        <LifeCycleHooksLogger>
            <WrappedComponent {...this.props} />
        </LifeCycleHooksLogger>
      )
    }
  }
}
