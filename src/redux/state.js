import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Эйё, че как оно?', likesCount: 12 },
            { id: 2, message: 'Первая мессага', likesCount: 11 },
            { id: 3, message: 'Вторая мессага', likesCount: 0 },
            { id: 4, message: 'Третья мессага', likesCount: -1 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your zen?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;