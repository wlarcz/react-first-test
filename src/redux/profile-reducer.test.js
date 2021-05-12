import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Эйё, че как оно?', likesCount: 12 },
        { id: 2, message: 'Первая мессага', likesCount: 11 },
        { id: 3, message: 'Вторая мессага', likesCount: 0 },
        { id: 4, message: 'Третья мессага', likesCount: -1 },
    ]
}

test('new post should be added', () => {
    // 1. start (test) data
    let action = addPostActionCreator('эйьё че как оно?');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. start (test) data
    let action = addPostActionCreator('эйьё че как оно?');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('эйьё че как оно?');
});

test('after deleted length should be decrement', () => {
    // 1. start (test) data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test(`after deleted length shouldn't be decrement if id is incorrect`, () => {
    // 1. start (test) data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});