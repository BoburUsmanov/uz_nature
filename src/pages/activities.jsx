import React from 'react'
import Sidebar from '../components/common/sidebar';
import Title from '../components/common/title';

export default function Activities() {
    return (
        <div className="activity general__container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="activity__box">
                            <Title title="activity page"/>
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
