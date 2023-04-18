export interface IMutationResponse<T> {
	status: number;
	message: string;
	data: T;
}

export interface IPaginationQueryResponse<T> {
	status: number;
	message: string;
	data: T;
	totalCount: number;
	dataCount: number;
	pageSize: number;
	pageNumber: number;
}
