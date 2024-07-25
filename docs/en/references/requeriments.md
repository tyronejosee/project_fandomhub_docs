# Requirements

Here is an example of a `requirements.txt` file for a Django project, along with explanations for why each package is used:

## Base Requirements

- [Django](#): A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- [django-cors-headers](#): A Django app for handling the server headers required for Cross-Origin Resource Sharing (CORS).
- [django-environ](#): A Django library for managing environment variables.
- [django-templated-mail](#): A Django app to send emails using templates.
- [djangorestframework](#): A powerful and flexible toolkit for building Web APIs in Django.
- [django-filter](#): A Django app for adding dynamic queryset filtering from URL parameters.
- [drf-spectacular](#): A tool for OpenAPI 3 schema generation for Django REST Framework.
- [drf-spectacular-sidecar](#): A companion package for drf-spectacular to handle static file dependencies.
- [djoser](#): A library providing a set of Django REST Framework views to handle authentication.
- [djangorestframework-simplejwt](#): A JSON Web Token authentication backend for the Django REST Framework.
- [oauthlib](#): A generic and thorough implementation of the OAuth request-signing logic.
- [PyJWT](#): A Python library for JSON Web Token encoding and decoding.
- [requests](#): A simple and elegant HTTP library for Python.
- [requests-oauthlib](#): An OAuthlib extension to support OAuth for HTTP requests.
- [social-auth-app-django](#): A Django library for social authentication.
- [social-auth-core](#): A core library for social authentication providers.
- [argon2-cffi](#): A Python binding for the Argon2 password hashing algorithm.
- [argon2-cffi-bindings](#): Low-level CFFI bindings for Argon2.
- [cryptography](#): A package designed to expose cryptographic recipes and primitives to Python developers.
- [python3-openid](#): A set of Python libraries to implement OpenID in applications.
- [django-redis](#): A Django cache backend for Redis.
- [redis](#): A Python client for Redis.
- [django-prometheus](#): A Django app to monitor Django projects with Prometheus.
- [pillow](#): A Python Imaging Library (PIL) fork for opening, manipulating, and saving many different image file formats.
- [django-import-export](#): A Django library that allows importing and exporting data with admin integration.
- [asgiref](#): ASGI (Asynchronous Server Gateway Interface) reference implementation.
- [attrs](#): A library for creating classes with automatically added special methods.
- [certifi](#): A library for providing Mozilla’s CA Bundle.
- [charset-normalizer](#): A library for character encoding detection.
- [defusedxml](#): A library to prevent XML bomb attacks.
- [inflection](#): A library for converting words between singular and plural forms, and for other word transformations.
- [idna](#): A library for Internationalized Domain Names in Applications (IDNA).
- [mccabe](#): A tool for checking the McCabe complexity of code.
- [packaging](#): A library for dealing with Python packages.
- [pycodestyle](#): A tool to check Python code against the PEP 8 style guide.
- [pycparser](#): A C parser and AST generator written in Python.
- [pyflakes](#): A tool to check Python source files for errors.
- [urllib3](#): A powerful, user-friendly HTTP client for Python.
- [cffi](#): A Foreign Function Interface for Python calling C code.
- [pytz](#): A library for accurate and cross-platform timezone calculations.
- [tzdata](#): IANA time zone database for Python.
- [jsonschema](#): A library for validating JSON schemas.
- [jsonschema-specifications](#): A collection of JSON Schema meta-schemas.
- [Markdown](#): A Python implementation of Markdown.
- [sqlparse](#): A non-validating SQL parser for Python.
- [swagger-spec-validator](#): A tool to validate Swagger specifications.
- [PyYAML](#): A YAML parser and emitter for Python.
- [referencing](#): A library for referencing JSON schemas.
- [rpds-py](#): A library for Python bindings for Rust's rpds (persistent data structures).
- [uritemplate](#): A Python implementation of RFC 6570 URI templates.
- [typing_extensions](#): Backported and experimental type hints for Python.
- [async-timeout](#): A timeout context manager for asyncio.

## Local Requirements

- [psycopg](#): The new generation PostgreSQL adapter for Python, providing asynchronous and efficient access to PostgreSQL databases.
- [psycopg2-binary](#): A binary package for `psycopg2`, the older PostgreSQL adapter for Python, providing fast and secure access to PostgreSQL databases.
- [ruff](#): A fast Python linter and code formatting tool aimed at enforcing code quality and style guidelines.
- [coverage](#): A tool for measuring code coverage of Python programs, useful for testing and ensuring that code paths are exercised.
- [flake8](#): A wrapper around PyFlakes, pycodestyle, and Ned Batchelder’s McCabe script, combining their functionalities to check the style and quality of Python code.
- [pre-commit](#): A framework for managing and maintaining multi-language pre-commit hooks, ensuring code quality before committing changes.
- [factory-boy](#): A library for generating test data, allowing the creation of fixtures for testing Django applications.

## Production Requirements

- [gunicorn](#): A Python WSGI HTTP Server for UNIX, commonly used to serve Python web applications like Django in production. It is designed to be lightweight and fast, handling concurrent requests efficiently.
- [psycopg-binary](#): A binary package for `psycopg`, the PostgreSQL adapter for Python, providing asynchronous and efficient access to PostgreSQL databases.
- [django-storages](#): A collection of custom storage backends for Django, allowing integration with various storage solutions like Amazon S3, Google Cloud Storage, and others, to store and serve files efficiently.
