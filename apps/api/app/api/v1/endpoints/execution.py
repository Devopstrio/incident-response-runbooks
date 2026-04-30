from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_execution():
    return {'status': 'ok'}
