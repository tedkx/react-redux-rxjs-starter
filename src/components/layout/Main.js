import React, { Component } from 'react'
import CSSTransitionGroup   from 'react-transition-group/CSSTransitionGroup'

import Helper               from '../../lib/Helper' 

class Main extends Component {
    render() {
        return (
            <CSSTransitionGroup
                transitionName="page-transition"
                transitionEnter={ true }
                transitionEnterTimeout={ 500 }
                transitionAppearTimeout={ 500 }
                transitionLeaveTimeout={ 500 }
                component="main"
                className="main-container">
                <section key={ Helper.getSubstringUntilNth(this.props.location.pathname, '/', 2) }>{ this.props.children }</section>
            </CSSTransitionGroup>
        );
    }
}

// Main.contextTypes = {
//     router: React.PropTypes.any.isRequired
// }

export default Main;