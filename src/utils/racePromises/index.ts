/**
 * Given an array of promises it will return the first promise to resolve.
 */

export async function racePromises(promises: Promise<unknown>[]): Promise<unknown> {
	const wrappedPromises: Promise<unknown>[] = [];
	promises.map((promise: Promise<unknown>) => {
		wrappedPromises.push(
			new Promise((resolve) => {
				promise.then(resolve).catch(resolve);
			}).catch()
		);
	});
	return Promise.race(wrappedPromises).catch();
}
