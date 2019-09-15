import React from 'react'
import Title from '../components/common/title';
import Sidebar from '../components/common/sidebar';

export default function Documents() {
    return (
        <div className="document general__container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="document__box">
                            <Title title="Documents page"/>
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
