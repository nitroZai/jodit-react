from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.authentication import get_authorization_header
from rest_framework.views import APIView
from rest_framework import exceptions
from rest_framework.parsers import JSONParser
from .models import  Policy
from .serializers import PolicySerializer
# Create your views here.


class policyAPI(APIView):

    def get(self, request):

        policies = Policy.objects.all()
        print(policies)
        policySerial = PolicySerializer(policies, many=True)

        # print(policySerial)

        return JsonResponse(policySerial.data,safe=False)
        # return Response(policySerial.data)

    def post(self, request):
        return

    def post(self, request, id):
        return



