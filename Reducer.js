// it creates store
// reducer controls state and action

const { createStore } = require('redux');

let initialState = {
    age: 25,
    history: []
}

// step 2
const myReducer = (state = initialState, action) => {
    let newState = { ...state }; // state cannot be mutated directly;(same as react)
    if (action.type === "up") {
        newState.age = newState.age + action.payload;
    }
    else if (action.type === "down") {
        newState.age = newState.age - action.payload;
    }
    newState.history.push({age: state.age})

    return newState;
}

const store = createStore(myReducer); // step 1

store.subscribe(() => {
    console.log("state changed: " + JSON.stringify(store.getState()));
})

export { myReducer };

// it creates store
// reducer controls state and action

// const { createStore } = require('redux');

// let initialState = {
//     age: 25
// }

// // step 2
// const myReducer = (state = initialState, action) => {
//     let newState = { ...state }; // state cannot be mutated directly like in react
//     if (action.type === "ADD") {
//         if(action.payload === undefined)
//             newState.age += 1;
//         else
//             newState.age = action.payload;
//     }
//     else if (action.type === "SUB") {
//         newState.age -= 1;
//     }
//     return newState;
// }

// const store = createStore(myReducer); // step 1

// store.subscribe(() => {
//     console.log("state changed: " + JSON.stringify(store.getState()));
// })

// store.dispatch({ type: "ADD" }); // step 3
// store.dispatch({ type: "ADD", payload: 34 });
// store.dispatch({ type: "ADD" });
// store.dispatch({ type: "ADD" });
// store.dispatch({ type: "ADD", payload: 50 });
// store.dispatch({ type: "SUB" });

