import { Rule, Tree } from '@angular-devkit/schematics';
import { addPackageJsonDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies';

export function addDependency(name: string, options?: any): Rule {
  return (host: Tree) => {
    options = options || {};
    addPackageJsonDependency(host, {
      name: name,
      type: options.type ? options.type : NodeDependencyType.Default,
      version: options.version ? options.version : 'latest',
      overwrite: options.override ? options.override : false
    });

    return host;
  };
}
