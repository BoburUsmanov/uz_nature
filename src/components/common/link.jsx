import React from 'react';
import {Link} from 'react-router-dom';

export default function Anchor(props) {
    const {text} = props;
    return (
        <Link className="general__link" to="/news">{text}  <span className="fa fa-angle-right "></span></Link>
    )
}
