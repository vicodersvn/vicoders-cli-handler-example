# Vicoders CLI Handler

- [Vicoders CLI Handler](#vicoders-cli-handler)
  - [Getting Started](#getting-started)
  - [Steps](#steps)
    - [Add NPM dependency](#add-npm-dependency)
    - [Install NPM dependency](#install-npm-dependency)

## Getting Started

Fork this repo to start build new command

## Steps

### Add NPM dependency

```javascript

/**
 * Add package dependency to package.json
 *
 * @param name
 * @param options
 * @param options.type NodeDependencyType
 * @param options.version string
 * @param options.overwrite boolean
 */
addDependency(name, options?)
```

### Install NPM dependency

```javascript

/**
 * Install NPM dependencies
 *
 * @param options NodePackageTaskOptions
 * @param options.directory
 * @param options.packageManager ["npm", "yarn"]
 */
packageIntall(options?)
```


