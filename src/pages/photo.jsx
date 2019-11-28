import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";
import { connect } from "react-redux";
import { photos, photoss } from "./../redux/actions/actions";
import Axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

class Photo extends Component {
  constructor(props) {
    super(props);
    // this.state = { photo_array: [], loading: true };
  }

  componentDidMount() {
    this.props.photos();
    this.props.photoss();
  }
  render() {
    let single = this.props.photo.find(n => {
      return n.one_id === this.props.match.params.id && n.lang == this.props.lang;
    });

    let photo_all = [];

        for (var j = 0; j < this.props.photop.length; j++) {
          if (this.props.photop[j].photoname_id == single.one_id) {
            photo_all.push(this.props.photop[j]);
          }
      }

    console.log(photo_all);
    return (
      <div className="photo general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="photo__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/news">Фотогалерея</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <Title title={single.name} />
                  </div>
                <div className="col-12">
                    <div className="photo__content">
                        <div className="row">
                           {photo_all.map(m=>(
                                <div className="col-3 mt-5 text-center">
                                <img src={"http://uz.orikzor.com" + m.photo}  className="img-fluid" alt="" />  
                                </div>
                           ))}
                        </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  photo: state.photos.photos,
  photop: state.photos.photoss,
  lang: state.lang.lang
});
export default connect(mapStateToProps, { photos, photoss })(Photo);
