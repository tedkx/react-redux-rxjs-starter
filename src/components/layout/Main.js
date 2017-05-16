import React, { Component } from 'react'
import CSSTransitionGroup   from 'react-transition-group/CSSTransitionGroup'

import Helper               from '../../lib/Helper' 

class Main extends Component {
    render() {
        let key = this.context.router.route.location 
            ? Helper.getSubstringUntilNth(this.context.router.route.location.pathname, '/', 2) 
            : '';

        return (
            <CSSTransitionGroup
                transitionName="page-transition"
                transitionEnter={ true }
                transitionEnterTimeout={ 500 }
                transitionAppearTimeout={ 500 }
                transitionLeaveTimeout={ 500 }
                component="main"
                className="main-container">
                <section key={ key }>{ this.props.children }</section>
            </CSSTransitionGroup>
        );
    }
}

Main.contextTypes = {
    router: React.PropTypes.any.isRequired
}

export default Main;