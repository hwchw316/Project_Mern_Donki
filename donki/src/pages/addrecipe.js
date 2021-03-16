import React, { Component } from 'react';


class Addrecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Test'
        }
    }

    render() {
        return (
            <div className = "addrecipe">
                <small> {this.state.title} </small>
            </div>
        
        );
    }
}

export default Addrecipe;