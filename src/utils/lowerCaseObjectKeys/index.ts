/**
 * Recursively turn every key in a JSON object to lowercase
 */

import { UnknownObject } from '../types';

export function lowerCaseObjectKeys(input: UnknownObject | UnknownObject[]): UnknownObject | UnknownObject[] {
	if (typeof input !== 'object' || input === null) return input;
	const output: { [key: string]: unknown } = {};

	// Arrays
	if (Array.isArray(input)) {
		const result = input
			.map((item) => {
				item;
				const result = lowerCaseObjectKeys(item);
				return result;
			})
			.flat(99);
		return result;
	}

	// Objects
	for (const key in input) {
		// I'm too bad with TypeScript to figure out why it doesn't work without the as :/
		output[key.toLowerCase() as keyof typeof output] = lowerCaseObjectKeys(input[key] as UnknownObject);
	}
	return output;
}
