import { Rule, chain, apply, url, move, mergeWith, applyTemplates, filter, noop } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { common } from '@vicoders/cli-support';

export default function handler(options: any): Rule {
  const templateSource = apply(url('./files/slider'), [
    options.skipTests ? filter(path => !path.endsWith('.spec.ts.template')) : noop(),
    applyTemplates({
      ...strings,
      ...options
    }),
    move(options.path)
  ]);
  return chain([mergeWith(templateSource), common.console.Input('name', { message: 'Enter your block name' })]);
}
