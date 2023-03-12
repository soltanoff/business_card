# Index page

[![Supported python versions](https://img.shields.io/pypi/pyversions/fastapi.svg?style=flat-square)](https://pypi.python.org/pypi/fastapi)
[![MIT License](https://img.shields.io/pypi/l/aiogram.svg?style=flat-square)](https://opensource.org/licenses/MIT)

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

Fill your database and run FastAPI development server:

```shell
$ pip install -r requirements.txt
$ python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

To run with a docker compose:

```shell
$ docker-compose up
```