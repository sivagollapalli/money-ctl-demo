import React, { Component } from 'react';

class Share extends Component {
    render() { 
        return (  
            <div>
                <p>Name: { this.props.share.name }</p>
                <p>Value: { this.props.share.value }</p>
            </div>
        );
    }
}
 
export default Share;