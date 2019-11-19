import { ADD_SHARE } from './actions'

const initialState = { 
    shares: [
        { id: '1', name: 'ITC', value: '238' },
        { id: '2', name: 'COAL INDIA', value: '138' }
    ]
}

const shareReducer  = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SHARE: return {
            shares: state.shares.concat([action.payload])
        }

        default: return state
    }

}

export default shareReducer;