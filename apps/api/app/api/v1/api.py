from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, runbooks, execution, evidence, reports, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(runbooks.router, prefix="/runbooks", tags=["runbooks"])
api_router.include_router(execution.router, prefix="/execution", tags=["execution"])
api_router.include_router(evidence.router, prefix="/evidence", tags=["evidence"])
api_router.include_router(reports.router, prefix="/reports", tags=["reports"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
