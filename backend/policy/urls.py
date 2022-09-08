from django.contrib import admin
from django.urls import path, include
from .views import policyAPI, PolicyEditAPI

urlpatterns = [
    path('get', policyAPI.as_view(), name="get"),
    path('post', policyAPI.as_view(), name="post"),
    path('post/<int:id>', PolicyEditAPI.as_view(), name="single_post"),
    path('get/<int:id>', PolicyEditAPI.as_view(), name="single_post_get")
]
