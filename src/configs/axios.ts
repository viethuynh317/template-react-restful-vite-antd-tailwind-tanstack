import axios from 'axios';

const baseURL = import.meta.env.API_ENDPOINT as string; // https://swapi.dev/api/

export const axiosInstance = axios.create({
	baseURL,
});

axiosInstance.interceptors.request.use(
	function (config) {
		const token = 'Bearer ...';
		if (token) config.headers.Authorization = token;
		config.headers['Content-Type'] = 'application/json';

		return config;
	},
	function (error) {
		// Do something with request error
		// e.g. Handle refresh token scenarios for here
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);
