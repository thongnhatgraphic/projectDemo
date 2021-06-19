import { DislikeOutlined, LikeOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import "./index.css";

// import PropTypes from 'prop-types';

// MainContent.propTypes = {sss

// };

function MainContent(props) {
    const [current, setCurrent] = useState(1)
    const booksCollection = [
        {
            id: "1",
            name: "Three KingDom",
            author: "La Quang Trung",
            rate: 3,
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
        },
        {
            id: "3",
            name: "Harry potter asdsa ",
            author: "J.K. Rowling",
            rate: 4,
            linkImage: "https://conhocgioi.com/wp-content/uploads/2019/06/1488509319914_4461293-900x550.jpg",
            like: false
        }
        ,
        {
            id: "4",
            name: "Harry potter d",
            author: "J.K. Rowling",
            rate: 4,
            linkImage: "https://conhocgioi.com/wp-content/uploads/2019/06/1488509319914_4461293-900x550.jpg",
            like: false
        }
    ]

    const displayRate = (countStar) => {
        var i = 0;
        let result = [];
        for (i; i < countStar; i++) {
            result.push(<StarFilled key={i} style={{color: "#e3e31b", fontSize: "18px"}}/>)
        };
        for (let j = 0; j < 5 - i; j++) {
            result.push(<StarOutlined key={i + j} style={{color: "#e3e31b", fontSize: "18px"}}/>)
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
                <small>
                    {item.like ?
                        <LikeOutlined className="maicontent__like" style={{ color: "blue", fontSize: "20px" }} /> :
                        <DislikeOutlined className="maicontent__dislike"
                            style={{ color: "red", fontSize: "20px" }} />}
                </small>
            </div>
        </div>
    })
    const onChange = page => {
        console.log(page);
        setCurrent(page)
    };
    return (
        <>
            <div className="maincontent">
                <div className="grid--row">
                    {renderListBook}
                </div>
                <div className="maicontent--pagination">
                    <Pagination 
                    defaultCurrent={current}
                    onChange={onChange}
                    total={50} className="maicontent--pagination__list" />
                </div>
            </div>
        </>
    );
}



export default MainContent;



