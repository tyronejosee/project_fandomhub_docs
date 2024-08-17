# Requisitos

Aquí tienes un ejemplo de un archivo `requirements.txt` para un proyecto Django, junto con explicaciones de por qué se usa cada paquete:

## Requisitos Básicos

- [Django](#): Un marco web de Python de alto nivel que fomenta el desarrollo rápido y un diseño limpio y pragmático.
- [django-cors-headers](#): Una aplicación Django para manejar los encabezados del servidor necesarios para el Compartición de Recursos de Origen Cruzado (CORS).
- [django-environ](#): Una biblioteca Django para gestionar variables de entorno.
- [django-templated-mail](#): Una aplicación Django para enviar correos electrónicos usando plantillas.
- [djangorestframework](#): Un conjunto de herramientas poderoso y flexible para construir APIs Web en Django.
- [django-filter](#): Una aplicación Django para añadir filtrado dinámico de consultas desde parámetros de URL.
- [drf-spectacular](#): Una herramienta para la generación de esquemas OpenAPI 3 para Django REST Framework.
- [drf-spectacular-sidecar](#): Un paquete complementario para drf-spectacular para manejar las dependencias de archivos estáticos.
- [djoser](#): Una biblioteca que proporciona un conjunto de vistas de Django REST Framework para manejar la autenticación.
- [djangorestframework-simplejwt](#): Un backend de autenticación JSON Web Token para Django REST Framework.
- [oauthlib](#): Una implementación genérica y completa de la lógica de firma de solicitudes OAuth.
- [PyJWT](#): Una biblioteca de Python para codificación y decodificación de JSON Web Tokens.
- [requests](#): Una biblioteca HTTP simple y elegante para Python.
- [requests-oauthlib](#): Una extensión de OAuthlib para soportar OAuth en solicitudes HTTP.
- [social-auth-app-django](#): Una biblioteca Django para autenticación social.
- [social-auth-core](#): Una biblioteca principal para proveedores de autenticación social.
- [argon2-cffi](#): Un enlace de Python para el algoritmo de hashing de contraseñas Argon2.
- [argon2-cffi-bindings](#): Enlaces de bajo nivel CFFI para Argon2.
- [cryptography](#): Un paquete diseñado para exponer recetas y primitivas criptográficas a desarrolladores de Python.
- [python3-openid](#): Un conjunto de bibliotecas de Python para implementar OpenID en aplicaciones.
- [django-redis](#): Un backend de caché de Django para Redis.
- [redis](#): Un cliente de Python para Redis.
- [django-prometheus](#): Una aplicación Django para monitorear proyectos Django con Prometheus.
- [pillow](#): Un fork de la Biblioteca de Imágenes de Python (PIL) para abrir, manipular y guardar muchos formatos de archivos de imagen.
- [django-import-export](#): Una biblioteca Django que permite importar y exportar datos con integración en el administrador.
- [asgiref](#): Implementación de referencia ASGI (Interfaz de Servidor de Puerta de Enlace Asíncrona).
- [attrs](#): Una biblioteca para crear clases con métodos especiales añadidos automáticamente.
- [certifi](#): Una biblioteca para proporcionar el paquete CA de Mozilla.
- [charset-normalizer](#): Una biblioteca para la detección de codificación de caracteres.
- [defusedxml](#): Una biblioteca para prevenir ataques XML bomb.
- [inflection](#): Una biblioteca para convertir palabras entre formas singular y plural, y para otras transformaciones de palabras.
- [idna](#): Una biblioteca para Nombres de Dominio Internacionalizados en Aplicaciones (IDNA).
- [mccabe](#): Una herramienta para verificar la complejidad McCabe del código.
- [packaging](#): Una biblioteca para tratar con paquetes de Python.
- [pycodestyle](#): Una herramienta para verificar el código Python contra la guía de estilo PEP 8.
- [pycparser](#): Un analizador C y generador de AST escrito en Python.
- [pyflakes](#): Una herramienta para verificar archivos fuente Python en busca de errores.
- [urllib3](#): Un cliente HTTP potente y fácil de usar para Python.
- [cffi](#): Una Interfaz de Función Extranjera para Python que llama a código C.
- [pytz](#): Una biblioteca para cálculos de zona horaria precisos y multiplataforma.
- [tzdata](#): Base de datos de zonas horarias IANA para Python.
- [jsonschema](#): Una biblioteca para validar esquemas JSON.
- [jsonschema-specifications](#): Una colección de metes-esquemas JSON Schema.
- [Markdown](#): Una implementación de Markdown en Python.
- [sqlparse](#): Un analizador SQL no validante para Python.
- [swagger-spec-validator](#): Una herramienta para validar especificaciones Swagger.
- [PyYAML](#): Un analizador y emisor YAML para Python.
- [referencing](#): Una biblioteca para referenciar esquemas JSON.
- [rpds-py](#): Una biblioteca para los enlaces de Python para rpds (estructuras de datos persistentes) de Rust.
- [uritemplate](#): Una implementación de Python de RFC 6570 Plantillas URI.
- [typing_extensions](#): Pistas de tipo retroportadas y experimentales para Python.
- [async-timeout](#): Un gestor de contexto de tiempo de espera para asyncio.

## Requisitos Locales

- [psycopg](#): El adaptador PostgreSQL de nueva generación para Python, que proporciona acceso asíncrono y eficiente a bases de datos PostgreSQL.
- [psycopg2-binary](#): Un paquete binario para `psycopg2`, el adaptador PostgreSQL anterior para Python, que proporciona acceso rápido y seguro a bases de datos PostgreSQL.
- [ruff](#): Una herramienta de linting y formateo de código Python rápida destinada a hacer cumplir las pautas de calidad y estilo del código.
- [coverage](#): Una herramienta para medir la cobertura del código de programas Python, útil para pruebas y asegurar que las rutas de código se ejercen.
- [flake8](#): Un envoltorio alrededor de PyFlakes, pycodestyle y el script McCabe de Ned Batchelder, combinando sus funcionalidades para verificar el estilo y la calidad del código Python.
- [pre-commit](#): Un marco para gestionar y mantener ganchos pre-commit de múltiples lenguajes, asegurando la calidad del código antes de realizar cambios.
- [factory-boy](#): Una biblioteca para generar datos de prueba, permitiendo la creación de fixtures para probar aplicaciones Django.

## Requisitos de Producción

- [gunicorn](#): Un servidor HTTP WSGI para UNIX, comúnmente utilizado para servir aplicaciones web Python como Django en producción. Está diseñado para ser ligero y rápido, manejando solicitudes concurrentes de manera eficiente.
- [psycopg-binary](#): Un paquete binario para `psycopg`, el adaptador PostgreSQL para Python, que proporciona acceso asíncrono y eficiente a bases de datos PostgreSQL.
- [django-storages](#): Una colección de backends de almacenamiento personalizados para Django, permitiendo la integración con varias soluciones de almacenamiento como Amazon S3, Google Cloud Storage y otros, para almacenar y servir archivos de manera eficiente.
