import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import Title from "../components/common/title";
import { sections, activities } from "./../redux/actions/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
class Activities extends Component {
  componentDidMount() {
    $(".faq__item.nofaq").on("click", function() {
      $(this)
        .siblings()
        .removeClass("active")
        .find(".faq__content")
        .slideUp();
      $(this)
        .siblings()
        .find(".fa")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");

      $(this)
        .find(".faq__content")
        .slideToggle();
      $(this)
        .find(".fa")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this).addClass("active");
    });

    $(".faq__item.hasfaq").on("click", function() {
      $(this)
        .siblings()
        .removeClass("active")
        .find(".faq__content")
        .slideUp();
      $(this)
        .siblings()
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");

      $(this)
        .find(".faq__content")
        .slideToggle();
      $(this)
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(this).addClass("active");
    });
    this.props.sections();
    this.props.activities();
  }

  render() {
    let t = this.props.activity.find(a => {
      return (
        a.one_id === `${this.props.match.params.id}` &&
        a.lang === this.props.lang
      );
    });

    let acts = this.props.section.filter(s => {
      return (
        s.lang === this.props.lang &&
        s.activity_id === this.props.match.params.id &&
        s.faq === "off"
      );
    });

    let faq = this.props.section.filter(s => {
      return (
        s.lang === this.props.lang &&
        s.activity_id === this.props.match.params.id &&
        s.faq === "on"
      );
    });
    let len = faq.length;
    return (
      <div className="activity general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="activity__box h-100">
                <div className="row">
                  <div className="col-12">
                    <Title title={t.name ? t.name : null} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    {acts.map(a => (
                      <div className="faq__item nofaq">
                        <div className="row no-gutters align-items-center faq__head">
                          <div className="col-10">
                            <div className="faq__text">{a.name}</div>
                          </div>
                          <div className="col-2 text-right">
                            <div className="faq__icon">
                              <i className="fa fa-chevron-down"></i>
                            </div>
                          </div>
                        </div>

                        <div className="faq__content">
                          {ReactHtmlParser(a.description)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                    <h2 className="activity__faq">
                      {faq.length > 0 ? "FAQ" : null}
                    </h2>
                  </div>
                  <div className="col-12">
                    {faq.map(f => (
                    <div className="faq__item hasfaq">
                      <div className="row no-gutters align-items-center faq__head">
                        <div className="col-10">
                          <div className="faq__text">
                            {f.name}
                          </div>
                        </div>
                        <div className="col-2 text-right">
                          <div className="faq__icon">
                            <i className="fa fa-plus"></i>
                          </div>
                        </div>
                      </div>

                      <div className="faq__content">
                        {ReactHtmlParser(f.description)}
                      </div>
                    </div>
                     ))} 
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
  lang: state.lang.lang,
  section: state.sections.sections,
  activity: state.activities.activities
});

export default connect(
  mapStateToProps,
  { sections, activities }
)(Activities);
