import { sleep } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will not do anything if called without async', async () => {
		const start = Date.now();
		sleep(1000);
		const end = Date.now();
		expect(end - start).toBeLessThan(100);
	});

	it('will sleep for the specified amount of time', async () => {
		const start = Date.now();
		await sleep(1000);
		const end = Date.now();
		expect(end - start).toBeGreaterThan(800);
		expect(end - start).toBeLessThan(2000); // It may take awhile if the system lags...
	});

	it('will work for strings that represent numbers (ms)', async () => {
		const start = Date.now();
		await sleep('1s');
		const end = Date.now();
		expect(end - start).toBeGreaterThan(900);
		expect(end - start).toBeLessThan(1100);
	});

	it('will throw an error if inputTime is undefined (not a number or a string)', async () => {
		try {
			// @ts-expect-error We are not passing in a number or a string
			await sleep(undefined);
			expect(true).toBe(false); // Sleep should have crashed.
		} catch (e) {
			expect(true).toBe(true);
		}
	});

	it('will throw an error if inputTime is a string that does not represent an MS string', async () => {
		try {
			await sleep('invalid string');
			expect(true).toBe(false); // Sleep should have crashed.
		} catch (e) {
			expect(true).toBe(true);
		}
	});
});
