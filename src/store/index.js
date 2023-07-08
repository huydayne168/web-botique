import { createSlice, configureStore } from "@reduxjs/toolkit";

////////////////////////////////////////////////
////////////////////////////////////////////////
// POPUP products items at homepage:
const popupProductItemsSlice = createSlice({
    name: "popup",
    initialState: {
        isShow: false,
    },
    reducers: {
        // show popup
        show(state) {
            state.isShow = true;
        },
        // hide popup
        hide(state) {
            state.isShow = false;
        },
    },
});
// export POPUP products items actions:
export const popupProductsItemsActions = popupProductItemsSlice.actions;

////////////////////////////////////////////////
////////////////////////////////////////////////
// current user Slice:
const curUserInitialState = {
    curUser: localStorage.getItem("curUser") || null,
};
const curUserSlice = createSlice({
    name: "cur-user",
    initialState: curUserInitialState,
    reducers: {
        login(state, action) {
            state.curUser = action.payload;
            localStorage.setItem("curUser", action.payload);
        },

        logout(state) {
            state.curUser = null;
            localStorage.removeItem("curUser");
        },
    },
});
// export current user actions:
export const curUserActions = curUserSlice.actions;

////////////////////////////////////////////////
////////////////////////////////////////////////
// Cart Slice:
const initialCartState =
    JSON.parse(
        localStorage.getItem(`${localStorage.getItem("curUser")}-cart`)
    ) ?? [];
const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        // add item to cart:
        addToCart(state, action) {
            // action.payload = {
            //     item,
            //     amount
            // }
            if (
                state[0] &&
                state.some(
                    (cartItem) =>
                        JSON.stringify(cartItem.item) ===
                        JSON.stringify(action.payload.item)
                )
            ) {
                console.log("ok");
                state = state.forEach((cartItem, index) => {
                    if (
                        JSON.stringify(cartItem.item) ===
                        JSON.stringify(action.payload.item)
                    ) {
                        state[index] = {
                            item: action.payload.item,
                            amount: cartItem.amount + action.payload.amount,
                            price: cartItem.price + action.payload.price,
                        };
                    }
                });
            } else {
                state.push(action.payload);
            }
        },

        // delete item from cart:
        deleteFromCart(state, action) {
            state.forEach((cartItem, index) => {
                if (
                    JSON.stringify(cartItem.item) ===
                    JSON.stringify(action.payload)
                ) {
                    state.splice(index, 1);
                }
            });
        },
    },
});
// export current user actions:
export const cartActions = cartSlice.actions;

///////////////////////////////////////////////
// store all slices:
const store = configureStore({
    reducer: {
        popupProductsItems: popupProductItemsSlice.reducer,
        curUser: curUserSlice.reducer,
        cart: cartSlice.reducer,
    },
});
export default store;
