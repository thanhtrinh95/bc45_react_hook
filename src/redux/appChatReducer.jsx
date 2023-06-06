import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        { name: 'Quan', content: 'ahihi' },
        { name: 'Vinh', content: 'ahihi' }
    ]
}

const appChatReducer = createSlice({
    name: 'appChatReducer',
    initialState,
    reducers: {
        addCommentAction: (state, action) => {
            //state.arrComment = [...state.arrComment,action.payload]
            let useComment = { ...action.payload };
            state.arrComment.push(useComment);
        }
    }
});

export const { addCommentAction } = appChatReducer.actions

export default appChatReducer.reducer
