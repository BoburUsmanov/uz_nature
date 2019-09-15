import React, { Component } from 'react';
import { connect } from 'react-redux';
import {events_all} from './../redux/actions/actions';

 class Events extends Component {
    componentDidMount(){
        this.props.events_all(this.props.lang);
    }
    render() {
        return (
            <div>
                {this.props.events.map(event=><h1>{event.name}</h1>)}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    events: state.events.events,
    lang:state.lang.lang
})

export default connect(mapStateToProps,{events_all})(Events)