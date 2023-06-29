from django.urls import path
from . import views


#UrlConfig
# Mapping tech function to the url
urlpatterns = [
    path('signup/', views.showSignupPage, name='signupPage'),
    path('login/', views.showLoginPage, name='loginPage'),
    path('', views.homePage, name="homePage"),
    path('product/<slug:productSlug>', views.productPage, name="slugPage")
    # path('product/<slug:productSlug>', views.productPage, name="slugPage")
    # <slug:productSlug> is telling django that we are creating a different id
    
]

