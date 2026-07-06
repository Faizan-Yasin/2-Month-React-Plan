const emptyForm = {
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: ""
}

export const initialState = { form: emptyForm, users: [] }

export function userReducer(state, action) {
    switch (action.type) {
        case "change":
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.name]: action.payload.value
                }
            }

        case "submit":
            return {
                ...state,
                users: [...state.users, action.payload],
                form: {
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    gender: "",
                }
            }

        case "reset":
            return {
                ...state,
                form: {
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    gender: "",
                }
            }

        default:
            return state
    }
}

