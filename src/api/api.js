import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "1203502b-c1e4-48e3-81f8-d6ff6f99d19e"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
			.then(response => {
				return response.data;
			});
	},
	getUsers2(currentPage = 1, pageSize = 10) {
		return instance.get(`follow`,)
			.then(response => {
				return response.data;
			});
	},
	
	getHeader() {
		return instance.get(`auth/me`,)
			.then(response => {
				return response.data;
			});
	}
};


