from django.shortcuts import render
def homepage(request):# look at this later
    return render(request, "homepage.html")
def register(request):
    return render(request, "register.html")
# Create your views here.
