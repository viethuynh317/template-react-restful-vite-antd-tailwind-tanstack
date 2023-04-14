/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

import { HTTPMethod, IDynamicAPI } from './type';

export const dynamicAPI = async ({ method, url, obj = {} }: IDynamicAPI) => {
	try {
		switch (method) {
			case HTTPMethod.Get:
				return await axios.get(url).then((res) => res.data);

			case HTTPMethod.Post:
				return await axios.post(url, obj).then((res) => res.data);

			case HTTPMethod.Put:
				return await axios.put(url, obj).then((res) => res.data);

			case HTTPMethod.Delete:
				return await axios.delete(url).then((res) => res.data);
		}
	} catch (error) {
		/* empty */
	}
};
