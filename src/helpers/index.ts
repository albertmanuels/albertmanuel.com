import moment from "moment";

export const formatDate = (date: string) => {
	const dateString = new Date(date);
	const result = moment(dateString).format("MMM DD, YYYY");

	return result;
};
