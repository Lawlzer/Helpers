import fs from 'fs-extra';
import path from 'path';

import { throwError } from '../throwError';

/**
 * Recursively get every file in a directory
 */
export async function getAllFiles(pathToFolder: string): Promise<string[]> {
	try {
		const allFiles = await fs.readdir(pathToFolder);
		const output = await Promise.all(
			await allFiles.map(async (file) => {
				const filePath = path.join(pathToFolder, file);
				const isDirectory = (await fs.lstat(filePath))?.isDirectory();
				if (isDirectory) return await getAllFiles(filePath);
				return filePath;
			})
		);
		return output.flat(1);
	} catch (e) {
		throwError('We crashed attempting to read a directory');
	}
}
