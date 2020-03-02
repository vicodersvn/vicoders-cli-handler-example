import { Rule, chain, apply, url, move, mergeWith, applyTemplates, filter, noop } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { common } from '@vicoders/cli-support';
import * as path from 'path';

export default function handler(options: any): Rule {
  const templateSource = apply(url('./files/slider'), [
    options.skipTests ? filter(path => !path.endsWith('.spec.ts.template')) : noop(),
    applyTemplates({
      ...strings,
      ...options
    }),
    move(options.path)
  ]);
  return chain([
    mergeWith(templateSource),
    common.console.exec('ls -al'),
    common.ulti.download('https://github.com/vicodersvn/vicoders-cli-handler-example/archive/master.zip', path.resolve(process.cwd(), 'master.zip')),
    common.console.exec(`mkdir -p ${path.resolve(process.cwd(), 'test')}`),
    common.ulti.sleep(5000),
    common.ulti.decompress(path.resolve(process.cwd(), 'master.zip'), path.resolve(process.cwd(), 'test'))
  ]);
}
