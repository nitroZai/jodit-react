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

        RequestData = JSONParser().parse(request)
        by_who = RequestData['by_who']
        policy_title = RequestData['policy_title']
        data = RequestData['data']

        # print(RequestData)

        policy = Policy()

        policy.data = data
        policy.policy_title = policy_title
        policy.by_who = by_who

        policy.save()

        return JsonResponse("Printed", safe=False)

class PolicyEditAPI(APIView):

    def post(self, request, id):

        policyData = JSONParser().parse(request)
        print(policyData)

        data = policyData['data']


        policy = Policy.objects.filter(id = id).update(data = data)

        print(data)

        return JsonResponse("Updation done", safe=False)

    def get(self, request, id):

        policy = Policy.objects.get(id = id)

        policySerial = PolicySerializer(policy)

        print(policySerial.data)

        return JsonResponse(policySerial.data, safe=False)

    #

