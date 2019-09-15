import React from 'react'
import Sidebar from '../components/common/sidebar';
import Title from '../components/common/title';

export default function About() {
    return (
        <div className="about general__container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="about__box">
                            <Title title="About page"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}
