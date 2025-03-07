from django.urls import path
from . import views

urlpatterns = [
    path('detect-disease/', views.detect_disease, name='detect_disease'),
] 