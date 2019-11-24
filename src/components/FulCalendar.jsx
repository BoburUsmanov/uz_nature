import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./../css/calendar.css";

export default class FulCalendar extends Component {
    constructor() {
        super();
    

        this.toggle = this.toggle.bind(this);
    };

    toggle(info) {
        info.preventDefault();
       alert(info.event.title)
    }
  
  render() {
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={[
            { title: "В СУРХАНДАРЬИНСКОЙ ОБЛАСТИ ПЛАНИРУЕТСЯ ПОСАДИТЬ 1 МЛН САЖЕНЦЕВ РАЗЛИЧНЫХ ДЕРЕВЬЕВ", date: "2019-11-19",url: '/news/5' },
            { title: "АНДИЖАНСКАЯ ОБЛАСТЬ: ПРЕСЕЧЕНА НЕЗАКОННАЯ ДОБЫЧА ПЕСЧАНО-ГРАВИЙНОЙ СМЕСИ", date: "2019-10-27",url: '/news/6' },
            { title: "В ТАШКЕНТЕ ПРОШЛА АКЦИЯ «ПОСАДИМ ДЕРЕВЬЯ ВМЕСТЕ!»", date: "2019-11-24",url: '/news/7' }
          ]}
          eventClick={this.toggle}
          locale = 'ru'
        />
      </div>
    );
  }
}
