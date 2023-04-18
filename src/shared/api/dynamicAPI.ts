/* eslint-disable @typescript-eslint/no-unsafe-return */
import { axiosInstance } from '../../configs/axios';

import { HTTPMethod, IDynamicAPI } from './type';

export const dynamicAPI = async ({ method, url, obj = {} }: IDynamicAPI) => {
	try {
		switch (method) {
			case HTTPMethod.Get:
				return await axiosInstance.get(url).then((res) => res.data);

			case HTTPMethod.Post:
				return await axiosInstance.post(url, obj).then((res) => res.data);

			case HTTPMethod.Put:
				return await axiosInstance.put(url, obj).then((res) => res.data);

			case HTTPMethod.Delete:
				return await axiosInstance.delete(url).then((res) => res.data);
		}
	} catch (error) {
		/* empty */
	}
};
