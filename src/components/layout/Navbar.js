import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className={this.props.whatever}>
                <h1>
                <i className={this.props.iconClass} /> {this.props.title}
                </h1>
            </nav>
           
        );
    }
}

export default Navbar;
