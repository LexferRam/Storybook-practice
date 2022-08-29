export interface IinitialState {
    count: number,
    // [key: string]: number | string;
}

export const initialState: IinitialState = {count: 0}

interface State extends IinitialState { }
interface Action { type: string,payload: number}

const dataReducer = (state: State, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}

export default dataReducer;