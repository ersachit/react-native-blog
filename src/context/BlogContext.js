import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogposts':
            return [...state,
            {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'delete_blogposts':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogposts':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload.id
                    : blogPost
            })
        default:
            return state;

    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogposts', payload: { title, content } })
        if(callback) {
            callback();
        }
        
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogposts', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({
            type: 'edit_blogposts',
            payload: { id, title, content }
        });
        if(callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'New Blog Post', content: 'New content', id: 1 }]);