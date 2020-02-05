import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Tree, SchematicContext } from '@angular-devkit/schematics';

export default function packageIntall(options?: any) {
  return (_host: Tree, _context: SchematicContext) => {
    _context.addTask(new NodePackageInstallTask(options));
  };
}
