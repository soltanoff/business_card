# Yet One Business Card

[![MIT License](https://img.shields.io/pypi/l/aiogram.svg?style=flat-square)](https://opensource.org/licenses/MIT)

<img width="713" alt="image" src="https://github.com/user-attachments/assets/5a830b08-ed02-451a-9fab-42308010fb3d">

## How to run

```shell
make build-index-page
```

## Development tools

### Bandit tool

[Bandit](https://github.com/PyCQA/bandit) is a tool designed to find common security issues in Python code. To do this
Bandit processes each file, builds an AST from it, and runs appropriate plugins against the AST nodes. Once Bandit has
finished scanning all the files it generates a report.

```shell
bandit -r .
```

### flake8

[flake8](https://github.com/PyCQA/flake8) is a python tool that glues together pycodestyle, pyflakes, mccabe, and
third-party plugins to check the style and quality of some python code.

```shell
flake8 .
```
