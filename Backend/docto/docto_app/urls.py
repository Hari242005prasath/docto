from django.urls import path
from . import views

urlpatterns = [
    path('detect-disease/', views.detect_disease, name='detect_disease'),
    path('api/detect-skin-disease/', views.detect_skin_disease, name='detect_skin_disease'),
    path('api/predict-disease/', views.predict_disease, name='predict_disease'),
] 