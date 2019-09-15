import React from 'react'

export default function Title(props) {
    const {title} = props;
    return (
        <h2 className="general__title">
                {title}
        </h2>
    )
}
