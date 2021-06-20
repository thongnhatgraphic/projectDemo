import React from 'react';
import "./index.css"
// import PropTypes from 'prop-types';

// Sidebar.propTypes = {

// };

function Sidebar(props) {
    return (
        <>
        <div className="sidebar">
            <ul className="sidebar--list">
                <li className="sidebar--list--item">
                Collection of books
                </li>
                <li className="sidebar--list--item">
                favorite books
                </li>
                <li className="sidebar--list--item">
                featured book
                </li>
            </ul>
        </div>
        </>
    );
}

export default Sidebar;