import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./../css/calendar.css";
import { connect } from "react-redux";
import { events } from "./../redux/actions/actions";

 class FulCalendar extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
    };
    
    componentDidMount() {
     this.props.events();
    }

    toggle(info) {
        // info.preventDefault();
    }
  
  render() {

    let event_arr = this.props.eventss.filter(n => {
      return (
        n.lang === this.props.lang
      );
    }); 

    let obj = {title:'',date:'',url:''};
    let arr = [];
    for(let i=0; i<event_arr.length; i++){
      obj.title = event_arr[i].name;
      obj.date = `${event_arr[i].c_y}-${event_arr[i].c_m}-${event_arr[i].c_d}`;
      obj.url = `/events/${event_arr[i].one_id}`
      arr.push(obj);
      obj = {title:'',date:'',url:''}
    }
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events = {arr}
          eventClick={this.toggle}
          locale = 'ru'
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang,
  eventss: state.events.events
});
export default connect(mapStateToProps, { events })(FulCalendar);
