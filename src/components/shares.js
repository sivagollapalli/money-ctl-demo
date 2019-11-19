import React, { Component } from 'react';
import Share from './share';
import ShareForm from './shareForm';
import { addShare } from '../redux/actions'
import { connect } from 'react-redux'

class Shares extends Component {
    constructor(props) {
        super(props);

        this.state = {
            share: { id: '', name: '', value: '' }
        }
    }   
    
    handleChange = (event) => {
        this.setState({
            share: {...this.state.share, ...{ [event.target.name]: event.target.value } }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var share = {...this.state.share, ...{ id: Math.random() } }
        this.props.addShare(share)
    }

    render() { 
        return ( 
            <div>
                <ShareForm share={this.state.share} change={this.handleChange} submit={this.handleSubmit}/>
                { this.props.shares.map(share => 
                    <Share key={share.id} share={share} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      shares: state.shares
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addShare: (share) => dispatch(addShare(share))
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(Shares);