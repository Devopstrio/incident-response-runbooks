.PHONY: help build up down test lint migrate simulate-incident execute-runbook

help:
	@echo "Incident Response Runbooks - Management Commands"
	@echo "----------------------------------------------"
	@echo "build            : Build all containers"
	@echo "up               : Start all services"
	@echo "down             : Stop all services"
	@echo "test             : Run all tests"
	@echo "lint             : Run linting checks"
	@echo "migrate          : Run database migrations"
	@echo "simulate-incident: Trigger a security incident simulation"
	@echo "execute-runbook  : Start a guided runbook execution"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

simulate-incident:
	docker-compose exec api python scripts/simulate/ransomware_event.py

execute-runbook:
	docker-compose exec api python scripts/execute/guided_response.py
