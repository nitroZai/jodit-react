from django.contrib import admin
from django.urls import path, include
from .views import policyAPI

urlpatterns = [
    path('get', policyAPI.as_view(), name="get"),
    path('post', policyAPI.as_view(), name="post"),
    path('post/<int:id>', policyAPI.as_view(), name="single_post")
]
