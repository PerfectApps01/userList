import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

//all requests are made here
export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts?_embed=comments',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        fetchAllComments: build.query<IComment[], number>({
            query: (limit: number = 5) => ({
                url: '/comments',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        createComment: build.mutation<IComment[], IComment>({
            query: (text) => ({
                url: `/comments`,
                method: 'POST',
                body: text,
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE'}),
            invalidatesTags: ['Post']
        }),
        deleteComment: build.mutation<IComment[], IComment>({
            query: (comment) => ({
                url: `/comments/${comment.id}`,
                method: 'DELETE'}),
            invalidatesTags: ['Post']
        }),
    })
})

