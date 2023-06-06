import { configureStore } from '@reduxjs/toolkit'
import appChatReducer from './appChatReducer'

export const store = configureStore({
    reducer: {
        appChatReducer: appChatReducer
    }
})