import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Ccalendar extends Component {
   
  
    render() {
        return (
            <div>
                <Calendar
                    onClick={this.onChange}
                />
            </div>
        )
    }
}
