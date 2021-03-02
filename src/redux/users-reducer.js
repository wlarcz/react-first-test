const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: true, fullName: 'Wladislaw', status: 'I am a boss', location: {city: 'Tomsk', country: 'Russia'}},
        // {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: false, fullName: 'Petrushka', status: 'I want to sleep', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: true, fullName: 'Taras', status: 'relax', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                }) } 
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                }) } 
        case SET_USERS:
            // return { ...state, users: [...state.users, ...action.users]};
            return { ...state, users: [...action.users]};
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;