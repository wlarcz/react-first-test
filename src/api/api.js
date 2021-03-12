import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '13d4a9ef-08ca-4bf5-824e-01bca24f4d32'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&counter=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&counter=${pageSize}`)
        .then(response => {
            return response.data;
        })
}