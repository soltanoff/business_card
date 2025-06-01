# Yet One Business Card

[![Supported python versions](https://img.shields.io/pypi/pyversions/fastapi.svg?style=flat-square)](https://pypi.python.org/pypi/fastapi)
[![MIT License](https://img.shields.io/pypi/l/aiogram.svg?style=flat-square)](https://opensource.org/licenses/MIT)

<img width="713" alt="image" src="https://github.com/user-attachments/assets/5a830b08-ed02-451a-9fab-42308010fb3d">

App configs `settings.py`:

```python
import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

STATIC_URL = '/static/'
STATIC_DIRECTORY = os.path.join(BASE_DIR, 'static')

TEMPLATE_DIRECTORY = os.path.join(BASE_DIR, 'templates')
BASE_TEMPLATE_NAME = 'index.html'

ALLOWED_HOSTS = ['*']
# ALLOWED_HOSTS = []  # for development
# ALLOWED_HOSTS = ['*']  # for docker-compose
# ALLOWED_HOSTS = ["your-production-domain"]  # for production
```

## How to run

### Without Docker:

```shell
pip install -r requirements.txt
python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

### With Docker

```shell
make up
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
