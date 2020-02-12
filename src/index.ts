import { addDependency } from './utility/add-dependency';
import { Rule, chain, apply, url, move, mergeWith, applyTemplates, filter, noop } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import phpPackageIntall from './utility/php-package-install';

export default function handler(options: any): Rule {
  const templateSource = apply(url('./files'), [
    options.skipTests ? filter(path => !path.endsWith('.spec.ts.template')) : noop(),
    applyTemplates({
      ...strings,
      ...options
    }),
    move(options.path)
  ]);
  return chain([mergeWith(templateSource), addDependency('@vicoders/support'), phpPackageIntall({ packageName: 'league/fractal' })]);
}
