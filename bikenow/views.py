from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
# Create your views here.

def index(request):
	return render_to_response('index.html')

def club(request):
	return render_to_response('club.html')
	
def events(request):
	return render_to_response('events.html')
	
def friends(request):
	return render_to_response('friends.html')
	
def home(request):
	return render_to_response('home.html')

def profile(request):
	return render_to_response('profile.html')


def page_not_found(request, template_name='errors/404.html'):

    return render_to_response(template_name,
        context_instance = RequestContext(request)
    )