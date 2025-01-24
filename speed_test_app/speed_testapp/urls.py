from django.urls import path
from .views import home, signup, index, run_speedtest, login_view

urlpatterns = [
    path('', home, name='home'),
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),
    path('speedtest/', index, name='index'),
    path('run-speedtest/', run_speedtest, name='run_speedtest'),
]
