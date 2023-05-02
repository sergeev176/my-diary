



const ACTIVE_BUTTON = 'ACTIVE_BUTTON';

const defaultState = {
    disabled: false,
}

export function buttonReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIVE_BUTTON:
            return { ...state, disabled: action.payload }
        default:
            return state;
    }
}

export const activeButtonAction = (payload) => ({ type: ACTIVE_BUTTON, payload })