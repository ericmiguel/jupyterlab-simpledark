# Simple Dark

A simple dark theme for [JupyterLab](https://jupyter.org/).

![Screenshot](https://github.com/ericmiguel/jupyterlab-simpledark/blob/master/screenshot.png?raw=true)

## Requirements

* JupyterLab >= 3.0

## Install

The source code is currently hosted on GitHub at: https://github.com/ericmiguel/jupyterlab-simpledark

Installers for the latest released version are available at the [PyPI](https://pypi.org/project/jupyterlab-simpledark) and [NPM](https://www.npmjs.com/package/jupyterlab-simpledark)

```bash
pip install jupyterlab-simpledark
npm install jupyterlab-simpledark
```

## Uninstall

```bash
pip uninstall jupyterlab-simpledark
npm uninstall jupyterlab-simpledark
```

### Older version

Version for JupyterLab 2.X is still avaible in the [NPM](https://www.npmjs.com/package/@ericmiguel/jupyterlab_simpledark) repository.

```
jupyter labextension install @ericmiguel/jupyterlab_simpledark
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab-simpledark directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

## Maintainer

[![Eric Miguel](https://avatars1.githubusercontent.com/u/12076399?s=70)](https://github.com/ericmiguel)

## License

[MIT License](./LICENSE)