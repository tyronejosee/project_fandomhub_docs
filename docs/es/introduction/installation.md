# Instalación

Para comenzar con la API de FandomHub, sigue estos pasos para configurar tu entorno de desarrollo y hacer que la aplicación funcione sin problemas.

## ⚙️ Instalación

Clona el repositorio.

```bash
git clone git@github.com:tyronejosee/project_fandomhub_api.git
```

Crea un entorno virtual (Opcional).

```bash
python -m venv env
```

Activa el entorno virtual (Opcional).

```bash
env\Scripts\activate
```

Instala todas las dependencias.

```bash
pip install -r requirements/local.txt
```

Crea un archivo de variables de entorno `.env`.

```bash
SECRET_KEY=
EMAIL_BACKEND=
EMAIL_HOST=
EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=
EMAIL_PORT=
EMAIL_USE_TLS=
```

Ejecuta Docker.

```bash
(env) docker compose -f docker-compose.dev.yml up
(env) docker compose -f docker-compose.dev.yml up --build
(env) docker compose -f docker-compose.dev.yml stop
(env) docker compose -f docker-compose.dev.yml logs -f
(env) docker compose -f docker-compose.dev.yml start
(env) docker compose -f docker-compose.dev.yml restart <service>
```

Realiza migraciones de base de datos.

```bash
(env) docker compose -f docker-compose.dev.yml exec web bash
(env) docker compose -f docker-compose.dev.yml exec web python manage.py makemigrations*
(env) docker compose -f docker-compose.dev.yml exec web python manage.py migrate
(env) docker compose -f docker-compose.dev.yml exec web python manage.py migrate <app_label> <migration_name>
(env) docker compose -f docker-compose.dev.yml exec web python manage.py showmigrations
```

> Nota: Crea las migraciones en caso de que Django omita alguna.

## 🚀 Uso

Crea un superusuario para acceder a todo el sitio sin restricciones.

```bash
(env) docker compose -f docker-compose.dev.yml exec web python manage.py createsuperuser
```

Inicia sesión en `/admin`:

```bash
http://127.0.0.1:8000/admin/
```

Accede a Swagger o Redoc.

```bash
http://127.0.0.1:8000/api/schema/swagger/
http://127.0.0.1:8000/api/schema/redoc/
```

## 🌍 Internacionalización

Genera archivos de traducción para los idiomas.

```bash
(env) django-admin makemessages -l ja --ignore=env/*
(env) django-admin makemessages -l es --ignore=env/*
```

> Usa `--ignore` para excluir directorios específicos de la traducción.

Compila los archivos de traducción después de hacer cambios en las traducciones.

```bash
(env) django-admin compilemessages
```

## 🚨 Notas Importantes

Verifica la creación de migraciones antes de crearlas.

```bash
(env) docker compose -f docker-compose.dev.yml exec web bash
(env) docker compose -f docker-compose.dev.yml exec web python manage.py makemigrations users
(env) docker compose -f docker-compose.dev.yml exec web python manage.py makemigrations
(env) docker compose -f docker-compose.dev.yml exec web python manage.py migrate
```

> Nota: Verificar las migraciones antes de su creación es necesario para evitar inconsistencias en los modelos de usuario.

## 💾 PostgreSQL

```bash
(env) docker compose -f docker-compose.dev.yml exec web python manage.py dumpdata > backup.json
(env) docker compose -f docker-compose.dev.yml exec web python manage.py loaddata
(env) docker compose -f docker-compose.dev.yml exec db psql -U postgres -d fandomhub_db
(fandomhub_db=#) \dt
(fandomhub_db=#) \d <table>
```

## 💾 Redis

```bash
(env) docker compose exec redis redis-cli
(127.0.0.1:6379) keys *
```

## ⚖️ Licencia

Este proyecto está bajo la [licencia Apache-2.0](https://github.com/tyronejosee/project_fandomhub_api/blob/main/LICENSE).

## 🌱 Contribuyendo

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/new-feature`).
3. Realiza un commit de tus cambios (`git commit -am 'Add new feature'`).
4. Empuja a la rama (`git push origin feature/new-feature`).
5. Abre un Pull Request.
