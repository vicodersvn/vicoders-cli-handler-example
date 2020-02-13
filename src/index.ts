import { Rule, chain, apply, url, move, mergeWith, applyTemplates, filter, noop } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import * as path from 'path';
import { appendTo } from './utility/append-to-file/append-to-file';

export default function handler(options: any): Rule {
  const templateSource = apply(url('./files'), [
    options.skipTests ? filter(path => !path.endsWith('.spec.ts.template')) : noop(),
    applyTemplates({
      ...strings,
      ...options
    }),
    move(options.path)
  ]);
  return chain([mergeWith(templateSource), appendTo(path.resolve(process.cwd(), 'demo', 'index.js'), "import './test.js'")]);
}
