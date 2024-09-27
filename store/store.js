const { configureStore } = require("@reduxjs/toolkit");
const { default: reducer } = require("./reducer");




const store = configureStore({
    reducer : {
        addReducer : reducer
    }
})


export default store