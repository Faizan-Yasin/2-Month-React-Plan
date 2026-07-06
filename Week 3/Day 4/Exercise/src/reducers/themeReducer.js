import { TOGGLE_THEME } from '../reducers/themeActions'

export function themeReducer(state, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: !state.theme
            }

        default:
            return state
    }
}