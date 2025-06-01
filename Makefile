.PHONY: static


format: # format your code according to project linter tools
	black . -t py313
	isort .

black:
	black --check . -t py313

isort:
	isort --check .

flake8:
	flake8 .

lint: black isort flake8

pip-audit:
	pip-audit

build-index-page:
	python template/render.py

all: format lint build-index-page pip-audit
