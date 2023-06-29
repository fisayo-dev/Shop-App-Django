from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from .usables.usables import *

#  {% if len(description) > 15: %}
#         {% array = list(description) %}
#         {% word = '' %}
#         {% counter = 0 %}
#             {% while(counter == 0): %}
#                 {% word += array[counter] %}
#                 {% counter += 1 %}
#         {% return word %}
#     {% endif %} 



def showSignupPage(request):
    return render(request,'Reg/signup.html',{
        'title':pageTitle,
        'errorProbs': errorProbs,
        'btnName': 'Sign Up'
    })

def showLoginPage(request):
    return render(request, 'Reg/login.html',{
        'title':pageTitle,
        'btnName': 'Login In',
        'errorProbs': errorProbs2
    })

def homePage(request):
    products = Product.objects.all()
    return render(request,'home/home.html',{
        'mainHead': 'Buy anything with Shop App',
        'products_list': products,
        'paragraph_text': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem ullam beatae soluta illum optio tempore, perspiciatis voluptate eaque. Perspiciatis alias incidunt est fugiat ab, facere dignissimos mollitia dolores beatae.'
    })

# The second parameter is the unique key we are passsing to render a particular page
def productPage(request,productSlug):
    # Selecting the product based on the slug provided in the url   
    try: 
        selected_product = Product.objects.get(slug=productSlug)
        return render(request,'products/productDesc.html', {
            'selectedProduct': selected_product,
            'available': True,
            'title': pageTitle
        })
    except Exception as exc :
         return render(request,'products/productDesc.html', {
            'available': False
        })