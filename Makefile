#!/usr/bin/env make

build:
	if [ -d ".data" ]; then sudo chmod -R 755 .data; fi
	docker build -t guweb:latest .

run:
	docker compose up guweb mysql redis

run-bg:
	docker compose up -d guweb mysql redis

last?=1000
logs:
	docker compose logs -f guweb mysql redis --tail ${last}

shell:
	docker compose exec guweb bash

install:
	pip install -r ext/requirements.txt
