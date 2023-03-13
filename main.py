from http import HTTPStatus

from fastapi import FastAPI
from starlette.middleware.trustedhost import TrustedHostMiddleware
from starlette.responses import HTMLResponse, RedirectResponse
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

import content
import settings

app = FastAPI(
    title='Index page',
    description='It\'s just a page',
    version='0.0.1',
    openapi_url=None,
    doc_url=None,
    redoc_url=None,
    swagger_ui_oauth2_redirect_url=None,
)
app.add_middleware(TrustedHostMiddleware, allowed_hosts=settings.ALLOWED_HOSTS)
app.mount(settings.STATIC_URL, StaticFiles(directory=settings.STATIC_DIRECTORY), name='static')
templates = Jinja2Templates(directory=settings.TEMPLATE_DIRECTORY)
html_content = templates.get_template(settings.BASE_TEMPLATE_NAME).render(content.data)


@app.exception_handler(HTTPStatus.NOT_FOUND)
async def custom_404_handler(*_):
    return RedirectResponse('/')


@app.get('/', response_class=HTMLResponse)
async def index():
    return HTMLResponse(content=html_content, status_code=HTTPStatus.OK)
