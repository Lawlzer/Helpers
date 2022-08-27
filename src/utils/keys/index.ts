/**
 * Will return the Object keys from an object (in a nice, TypeScript-friendly way)
 */

export function keys<T extends object>(obj: T): Array<keyof T> {
	return Object.keys(obj) as Array<keyof T>;
}
