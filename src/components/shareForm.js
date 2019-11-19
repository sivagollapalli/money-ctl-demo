import React, { Component } from 'react';

class ShareForm extends Component {
    render() { 
        return (  
            <div className="col-md-6">
                <form onSubmit={this.props.submit}>
                   <label>
                       Enter Share Name:
                       <input type="text"
                        className='form-control'
                        value={this.props.share.name}
                        name="name"
                        onChange={this.props.change}>
                       </input>
                   </label>
                    <label>
                        Enter share value:
                        <input type="text" 
                            className='form-control' 
                            value={this.props.share.value}
                            name='value'
                            onChange={this.props.change}>
                        </input>
                    </label>
                    <button type="submit" 
                        className="btn btn-primary">
                            submit
                    </button>
                </form>
            </div>
        );
    }
}
 
export default ShareForm;