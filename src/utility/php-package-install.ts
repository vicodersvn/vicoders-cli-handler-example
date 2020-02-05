import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PhpPackageInstallTask } from './tasks/php-package/install-task';
/**
 * Install NPM dependencies
 *
 * @param options NodePackageTaskOptions
 * @param options.directory
 * @param options.packageManager ["npm", "yarn"]
 */
export default function phpPackageIntall(options?: any) {
  return (_host: Tree, _context: SchematicContext) => {
    _context.addTask(new PhpPackageInstallTask(options));
  };
}
