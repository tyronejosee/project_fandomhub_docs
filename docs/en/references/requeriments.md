# Requeriments

Here is an example of a `requirements.txt` file for a Django project, along with explanations for why each package is used:

```plaintext
Django==4.2.3                  # The main Django framework
djangorestframework==3.14.0    # Django REST Framework for building APIs
psycopg2-binary==2.9.6         # PostgreSQL database adapter for Python
gunicorn==20.1.0               # WSGI HTTP Server for deploying the project
django-cors-headers==3.14.0    # Handling Cross-Origin Resource Sharing (CORS)
django-environ==0.10.0         # Environment variables management
Pillow==9.4.0                  # Image processing library
django-allauth==0.54.0         # User authentication, registration, and account management
djangorestframework-simplejwt==5.2.2  # JSON Web Token authentication for Django REST Framework
django-debug-toolbar==3.6.0    # Debugging tool for Django projects
django-extensions==3.2.1       # Collection of custom extensions for the Django framework
django-filter==23.2            # Filtering support for Django REST Framework
django-crispy-forms==1.14.0    # Enhanced Django form handling
drf-yasg==1.21.5               # Automated generation of real Swagger/OpenAPI 2.0 specifications
django-model-utils==4.3.1      # Django model utilities including TimeStampedModel
django-polymorphic==3.1        # Django ORM polymorphism for creating subclassed models
django-ckeditor==6.5.1         # Rich text editor for Django
easy-thumbnails==2.8.5         # Thumbnail generation for Django
django-spectacular==0.25.1     # OpenAPI 3.0 schema generation for Django REST framework
```

## Explanations

1. **Django**: The primary web framework used for building the project.
2. **djangorestframework**: Provides powerful and flexible tools for building Web APIs in Django.
3. **psycopg2-binary**: A PostgreSQL adapter that allows Django to interact with a PostgreSQL database.
4. **gunicorn**: A Python WSGI HTTP Server used for deploying the Django application in a production environment.
5. **django-cors-headers**: Middleware for handling Cross-Origin Resource Sharing (CORS), making it possible to accept requests from other domains.
6. **django-environ**: Simplifies the use of environment variables in the Django settings file.
7. **Pillow**: Adds support for image processing and file uploading capabilities.
8. **django-allauth**: Provides a comprehensive authentication framework, including registration, social account authentication, and email management.
9. **djangorestframework-simplejwt**: Adds JSON Web Token (JWT) support for authentication in Django REST Framework.
10. **django-debug-toolbar**: Provides a set of panels displaying various debug information about the current request/response.
11. **django-extensions**: A collection of custom extensions for the Django framework, such as management commands and model fields.
12. **django-filter**: Facilitates filtering of querysets in Django REST Framework.
13. **django-crispy-forms**: Enhances form handling by providing reusable and extendable form rendering.
14. **drf-yasg**: Automatically generates Swagger/OpenAPI documentation for your Django REST API.
15. **django-model-utils**: Adds utilities such as TimeStampedModel for managing created and modified fields.
16. **django-polymorphic**: Adds polymorphism to Django models, allowing models to be subclassed and queried as their base class.
17. **django-ckeditor**: Integrates the CKEditor rich text editor with Django for enhanced content editing capabilities.
18. **easy-thumbnails**: Provides an easy way to create and manage thumbnails for images in Django.
19. **django-spectacular**: Generates OpenAPI 3.0 schemas for Django REST framework, useful for API documentation.
