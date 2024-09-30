from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .forms import ContactForm

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Get the form data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            
            # Send email (you can modify this to your liking)
            send_mail(
                f'Contact Form Submission from {name}',
                message,
                email,
                ['hampus.vretinger@hotmail.com'],  # Replace with your email address
                fail_silently=False,
            )

            # Display success message and redirect
            messages.success(request, 'Your message has been sent!')
            return redirect('contact')  # Assuming 'contact' is the name of your contact page
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})
