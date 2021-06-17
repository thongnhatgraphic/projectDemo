import React from 'react';
import "./index.css"
// import PropTypes from 'prop-types';

// Header.propTypes = {

// };

function Header(props) {
    return (
        <>
            <div className="grid header__shadow">
                <div className="grid--wide">
                    <div className="grid--row">
                        <img
                            src="https://st3.depositphotos.com/5040187/19001/v/600/depositphotos_190011564-stock-illustration-logo-swoosh-ellipse-blue-letter.jpg"
                            alt="Logo name author"
                            className="header--logo"
                        />
                        <div className="header--title">
                            <h2 className="header--title__content">Bookstore Online</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </>
    );
}

export default Header;