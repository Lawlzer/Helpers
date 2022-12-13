import fs from 'fs-extra';
import path, { extname } from 'path';
import util from 'util';

/**
 * @deprecated
 *
 * This function has been deprecated in favour of ensureFileExists and ensureDirectoryExists. Please use one of those two instead.
 */

export async function ensureExists(path: string, initialFileContent = '') {
	util.deprecate(() => {}, 'ensureExists is deprecated. Use ensureFileExists or ensureDirectoryExists instead.')();
}
