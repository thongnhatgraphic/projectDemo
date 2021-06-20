const initialState = {
    booksCollection: [
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
}

const bookReducer = ( state = initialState, action ) => {
    switch (action.type) {
        default:
            return {...state};
    }
}

export default bookReducer;
