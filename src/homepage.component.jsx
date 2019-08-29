// import the modules...

import React from 'react';

import "./homepage.styles.scss";

// Functional component because we don't need of any life cycle method...
// or no need to store any state

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item ">
                <div className="content">
                    <h1 className="title">
                        HATS
                    </h1>
                    <span className="subtitle">
                        SHOP NOW
                    </span>

                </div>

            </div>

            <div className="menu-item ">
                <div className="content">
                    <h1 className="title">
                        JACKETS
                    </h1>
                    <span className="subtitle">
                        SHOP NOW
                    </span>

                </div>

            </div>

            <div className="menu-item ">
                <div className="content">
                    <h1 className="title">
                        SNEAKERS
                    </h1>
                    <span className="subtitle">
                        SHOP NOW
                    </span>

                </div>

            </div>

            <div className="menu-item ">
                <div className="content">
                    <h1 className="title">
                        WOMEN
                    </h1>
                    <span className="subtitle">
                        SHOP NOW
                    </span>

                </div>

            </div>

            <div className="menu-item ">
                <div className="content">
                    <h1 className="title">
                        MENS
                    </h1>
                    <span className="subtitle">
                        SHOP NOW
                    </span>

                </div>

            </div>

        </div>

    </div>
)

// export function

export default HomePage;