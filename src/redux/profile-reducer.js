const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Эйё, че как оно?', likesCount: 12 },
        { id: 2, message: 'Первая мессага', likesCount: 11 },
        { id: 3, message: 'Вторая мессага', likesCount: 0 },
        { id: 4, message: 'Третья мессага', likesCount: -1 },
    ],
    newPostText: 'yo-you-youoy'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';            
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updeteNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;