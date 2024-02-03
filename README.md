# jupyterlab Simpledark

[![Package version](https://img.shields.io/pypi/v/jupyterlab-simpledark?color=%2334D058&label=pypi%20package)](https://pypi.org/project/jupyterlab-simpledark)
[![Supported Python versions](https://img.shields.io/pypi/pyversions/jupyterlab-simpledark.svg?color=%2334D058)](https://pypi.org/project/jupyterlab-simpledark)
[![Github Actions Status](https://github.com/ericmiguel/jupyterlab-simpledark/workflows/Build/badge.svg)](https://github.com/ericmiguel/jupyterlab-simpledark/actions/workflows/build.yml)

A (growing) dark theme collection for JupyterLab.

## Previews

### Simpledark Original

![original](https://raw.githubusercontent.com/ericmiguel/jupyterlab-simpledark/v1.0.0/examples/original1.png)

### Simpledark Fresh

![fresh](https://raw.githubusercontent.com/ericmiguel/jupyterlab-simpledark/v1.0.0/examples/fresh1.png)

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab-simpledark
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
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab-simpledark
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-simpledark` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
