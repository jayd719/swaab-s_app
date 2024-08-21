from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import CreateUserForm
def homepage(request):# look at this later
    return render(request, "homepage.html")
def register(request):
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()  # Save the user to the database
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('homepage')  # Redirect to a login page or homepage after registration
    else:
        form = CreateUserForm()
    return render(request, 'register.html', {'form': form})

