export default function undefinedCheck(array: Array<unknown>): Array<unknown> {
	array.map((item) => {
		if (item === "undefined" || item === undefined) {
			item = "";
		}
	});

	return array;
}
