import { configureStore } from "@reduxjs/toolkit"
import { authenticationSlice } from "./slices/authentication"
import { userSlice } from "./slices/user"

const store = configureStore({
    reducer : {
        authentication: authenticationSlice.reducer,
        user: userSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store