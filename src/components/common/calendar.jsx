import React, { Component } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import Axios from "axios";
import history from './../history';

class Ccalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };

    this.onChange = this.onChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    
  }

  componentDidMount() {
    Axios.get(`http://uz.orikzor.com/newws`).then(response => {
      this.setState({ news: response.data.data });
    });
   
  }

  // react-calendar__tile

  onClickBtn(event) {
    let path = `/news/1`;
    history.push(path);
    window.location.reload();
    // alert(event.target.value);
  }

  onChange(value) {
    // alert(value);
  }

  render() {
    {console.log(this.state.news)}
    var index = [];
    for(var i=0; i<this.state.news.length; i++){
        index.push(parseInt(this.state.news[i].c_d));
    }
    console.log(this.state.news.length)
     var el = document.querySelectorAll(".react-calendar__tile");
    for (let i = 0; i < el.length; i++) {
        for(var j=0; j<index.length;j++){
        if(index[j] == el[i].innerText){
             el[i].classList.add("react-calendar__tile--active");
        }
    }
    }
    return (
      <div>
        <Calendar onChange={this.onChange} onClickDay={this.onClickBtn} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang
});
export default connect(mapStateToProps)(Ccalendar);
