const initialState = {
    productList: [],
}

export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVEPRODUCTLIST': return {
            ...state,
            productList: action.payload
        }
        default: return state;
    }
}