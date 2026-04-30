from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_runbooks():
    return {'status': 'ok'}
