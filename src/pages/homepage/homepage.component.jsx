// import the modules...

import React from 'react';

import Directory from "../../components/directory/directory.component"

import "./homepage.styles.scss";

// Functional component because we don't need of any life cycle method...
// or no need to store any state

const HomePage = () => (
    <div className="homepage">
       <Directory />
    </div>
)

// export function

export default HomePage;