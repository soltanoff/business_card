.PHONY: static


BASE_DC = docker compose docker-compose.yml


build-no-cache:
	$(BASE_DC) build --no-cache

build:
	$(BASE_DC) build

up:
	$(BASE_DC) up -d

down:
	$(BASE_DC) down --remove-orphans

# Tools

image-build:
	DOCKER_BUILDKIT=1 docker build \
		--platform=linux/amd64 \
		-f Dockerfile \
		-t test-image .

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

all: format lint pip-audit
