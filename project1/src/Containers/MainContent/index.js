import React from 'react';
import "./index.css"
// import PropTypes from 'prop-types';

// MainContent.propTypes = {sss

// };

function MainContent(props) {
    return (
        <>
            <div className="maincontent">
                <div className="grid--row">
                    <div className="col pc-3 md-4 mb-6">
                        <div className="maincontent__img">222
                            {/* <img src="" alt="books imgs"/> */}
                        </div>
                        <p className="maicontent__name">Tiêu đề sách</p>
                        <div className="maicontent__rate">
                            <small>5sao</small>
                            <small>like</small>
                        </div>
                    </div>
                    <div className="col pc-3 md-4 mb-6">
                        22222
                    </div>
                    <div className="col pc-3 md-4 mb-6">
                        22222
                    </div>
                    <div className="col pc-3 md-4 mb-6">
                        22222
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;