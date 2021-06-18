import React from 'react';
import "./index.css";
import { StarOutlined, StarFilled } from '@ant-design/icons';
// import PropTypes from 'prop-types';

// MainContent.propTypes = {sss

// };

function MainContent(props) {
    const booksCollection = [
        {
            id: "1",
            name: "Three KingDom",
            author: "La Quang Trung",
            rate: 5,
            linkImage: "https://salt.tikicdn.com/media/catalog/product/t/a/tam-quoc-dien-nghia-3-tap.jpg",
            like: true
        },
        {
            id: "2",
            name: "Harry potter",
            author: "J.K. Rowling",
            rate: 4,
            linkImage: "https://conhocgioi.com/wp-content/uploads/2019/06/1488509319914_4461293-900x550.jpg",
            like: false
        }
    ]

    const displayRate = (countStar) => {
        var i = 1;
        let result = [];
        for ( i ; i < countStar; i++ ) {
            result.push(<StarFilled key={i}/>)
        }
        for ( let j = 0 ; j > 5-i+1  ; i--) {
            result.push(<StarOutlined key ={i+j}/>)
        }

        return result
    }

    const renderListBook = booksCollection.map(item => {
        return <div className="col pc-3 md-4 mb-6" key={item.name}>
            <div className="maincontent__img">
                <div className="maincontent__imgborder">
                    <img src={item.linkImage}
                        alt="books imgs"
                        title={item.name}
                    />
                </div>
            </div>
            <div className="maicontent__name">
                <div>
                    <p >{item.name}</p>
                </div>
            </div>
            <p className="maicontent__author">{item.author}</p>
            <div className="maicontent__rate">
                <div>{displayRate(item.rate).map(item => item)}</div>
                <small>{item.like ? "Like" : "Like yet"}</small>
            </div>
        </div>
    })

    return (
        <>
            <div className="maincontent">
                <div className="grid--row">
                    {renderListBook}
                </div>
            </div>
        </>
    );
}



export default MainContent;



