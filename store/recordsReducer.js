

const ADD_RECORD = 'ADD_RECORD';
const OPEN_EDIT = 'OPEN_EDIT';
const CHANGE_TEXT = 'CHANGE_TEXT';
const CLOSE_EDIT = 'CLOSE_EDIT';

const defaultState = {
    records: [

        {
            id: 1,
            text: 'сегодня 27-04-2023 ',
            date: '27-04-2023',
            isActive: false,
        },
        {
            id: 2,
            text: 'сегодня 28-04-2023 ',
            date: '28-04-2023',
            isActive: false,
        },
        {
            id: 3,
            text: 'сегодня 29-04-2023 ',
            date: '29-04-2023',
            isActive: false,
        },
        {
            id: 4,
            text: 'сегодня 30-04-2023 ',
            date: '30-04-2023',
            isActive: false,
        },
        {
            id: 5,
            text: 'сегодня 01-05-2023 ',
            date: '01-05-2023',
            isActive: false,
        }

    ]
}

export function recordsReducer(state = defaultState, action) {
    switch (action.type) {

        case ADD_RECORD:
            return { ...state, records: [...state.records, action.payload] };

        case OPEN_EDIT:
            return {
                ...state, records: state.records.map(record => {
                    if (record.id === action.payload) {
                        return {
                            ...record,
                            isActive: true,
                        }
                    }
                    return record
                })
            };

        case CHANGE_TEXT:
            return {
                ...state, records: state.records.map(record => {
                    if (record.isActive === true) {
                        return {
                            ...record,
                            text: action.payload,
                        }
                    }
                    return record
                })
            };

        case CLOSE_EDIT:
            return {
                ...state, records: state.records.map(record => {
                    if (record.isActive === true) {
                        return {
                            ...record,
                            isActive: action.payload,
                        }
                    }
                    return record
                })
            }

        default:
            return state;
    }
}

export const changeActiveStateAction = (payload) => ({ type: OPEN_EDIT, payload });
export const changeTextAction = (payload) => ({ type: CHANGE_TEXT, payload });
export const addRecordAction = (payload) => ({ type: ADD_RECORD, payload });
export const closeEditAction = (payload) => ({ type: CLOSE_EDIT, payload })