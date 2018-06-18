import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fatchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fatchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input placeholder='Get a five day' value={this.state.term} className='form-control' onChange={this.onInputChange}/>
                <span className='input-group-btn' >
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fatchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);