import React                from 'react'
import CSSTransitionGroup   from 'react-transition-group/CSSTransitionGroup'

class LoaderOverlay extends React.Component {
    render() {
        let component = this.props.component || 'div'

        return (
            <CSSTransitionGroup
                transitionName="cubic-bezier-opacity"
                transitionAppear= { true }
                transitionAppearTimeout={ 500 }
                transitionEnterTimeout={ 500 }
                transitionLeaveTimeout={ 500 }
                component={ component }>
                {
                    this.props.loading === true
                        ? (
                            <div className="loader">
                                Loading
                            </div>
                        )
                        : false
                }
            </CSSTransitionGroup>
        );
    }
}

export default LoaderOverlay