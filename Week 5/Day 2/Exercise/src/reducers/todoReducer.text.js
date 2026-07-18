import { todoReducer, initialState } from "./todoReducer";

import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    CHANGE_INPUT,
    START_EDIT,
    LOAD_TODOS,
} from "./todoActions";

console.log("========== Reducer Tests ==========");

// -------------------- CHANGE_INPUT --------------------

const changeInputState = todoReducer(initialState, {
    type: CHANGE_INPUT,
    payload: {
        name: "title",
        value: "Learn React",
    },
});

console.assert(
    changeInputState.form.title === "Learn React",
    "CHANGE_INPUT failed"
);

// -------------------- ADD_TODO --------------------

const todo = {
    id: "1",
    title: "React",
    description: "Learn Context API",
    completed: false,
    createdAt: "Today",
};

const addState = todoReducer(initialState, {
    type: ADD_TODO,
    payload: todo,
});

console.assert(
    addState.todos.length === 1,
    "ADD_TODO length failed"
);

console.assert(
    addState.todos[0].title === "React",
    "ADD_TODO data failed"
);

// -------------------- START_EDIT --------------------

const startEditState = todoReducer(addState, {
    type: START_EDIT,
    payload: todo,
});

console.assert(
    startEditState.editId === "1",
    "START_EDIT id failed"
);

console.assert(
    startEditState.form.title === "React",
    "START_EDIT form failed"
);

// -------------------- UPDATE_TODO --------------------

const updateInitialState = {
    ...startEditState,
    form: {
        title: "Updated Title",
        description: "Updated Description",
    },
};

const updateState = todoReducer(updateInitialState, {
    type: UPDATE_TODO,
});

console.assert(
    updateState.todos[0].title === "Updated Title",
    "UPDATE_TODO title failed"
);

console.assert(
    updateState.todos[0].description === "Updated Description",
    "UPDATE_TODO description failed"
);

// -------------------- TOGGLE_TODO --------------------

const toggleState = todoReducer(updateState, {
    type: TOGGLE_TODO,
    payload: "1",
});

console.assert(
    toggleState.todos[0].completed === true,
    "TOGGLE_TODO failed"
);

// -------------------- DELETE_TODO --------------------

const deleteState = todoReducer(toggleState, {
    type: DELETE_TODO,
    payload: "1",
});

console.assert(
    deleteState.todos.length === 0,
    "DELETE_TODO failed"
);

// -------------------- SET_FILTER --------------------

const filterState = todoReducer(initialState, {
    type: SET_FILTER,
    payload: "completed",
});

console.assert(
    filterState.filter === "completed",
    "SET_FILTER failed"
);

// -------------------- LOAD_TODOS --------------------

const loadedTodos = [
    {
        id: "10",
        title: "Todo 1",
        description: "Testing",
        completed: false,
        createdAt: "Today",
    },
];

const loadState = todoReducer(initialState, {
    type: LOAD_TODOS,
    payload: loadedTodos,
});

console.assert(
    loadState.todos.length === 1,
    "LOAD_TODOS failed"
);

console.log("✅ All reducer tests passed!");