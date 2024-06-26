# Installation

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus efficitur lorem, ac elementum orci bibendum id. Nullam accumsan auctor urna, a malesuada ex efficitur vel. Curabitur sit amet turpis vitae tortor viverra ultricies. Vestibulum vel orci eget libero faucibus bibendum non nec leo. Nam dapibus ante et magna vehicula, sit amet iaculis sapien posuere. Nullam dignissim suscipit lectus, nec dignissim ex aliquet a.

## ⚙️ Installation

Clone the repository.

```bash
git clone git@github.com:tyronejosee/project_fandomhub_api.git
```

Create a virtual environment (Optional).

```bash
python -m venv env
```

Activate the virtual environment (Optional).

```bash
env\Scripts\activate
```

Install all dependencies.

```bash
pip install -r requirements/local.txt
```

Create an environment variable file .env.

```bash
SECRET_KEY=""
EMAIL_BACKEND=""
EMAIL_HOST=""
EMAIL_HOST_USER=""
EMAIL_HOST_PASSWORD=""
EMAIL_PORT=""
EMAIL_USE_TLS=""
```

Docker run.

```bash
(env) docker compose -f docker-compose.dev.yml up
(env) docker compose -f docker-compose.dev.yml up --build
(env) docker compose -f docker-compose.dev.yml stop
(env) docker compose -f docker-compose.dev.yml logs -f
(env) docker compose -f docker-compose.dev.yml start
(env) docker compose -f docker-compose.dev.yml restart <service>
```

Perform database migrations.

```bash
(env) docker compose -f docker-compose.dev.yml exec web bash
(env) docker compose -f docker-compose.dev.yml exec web python manage.py makemigrations*
(env) docker compose -f docker-compose.dev.yml exec web python manage.py migrate
(env) docker compose -f docker-compose.dev.yml exec web python manage.py migrate <app_label> <migration_name>
(env) docker compose -f docker-compose.dev.yml exec web python manage.py showmigrations
```

> Note: Create the migrations in case Django skips any.

## 🚀 Usage

Create a superuser to access the entire site without restrictions.

```bash
(env) docker compose -f docker-compose.dev.yml exec web python manage.py createsuperuser
```

Log in to `admin`:

```bash
http://127.0.0.1:8000/admin/
```

Access to Swagger o Redoc.

```bash
http://127.0.0.1:8000/api/schema/swagger/
http://127.0.0.1:8000/api/schema/redoc/
```

## 🌍 Internationalization

Generate translation files for the languages.

```bash
(env) django-admin makemessages -l ja --ignore=env/*
(env) django-admin makemessages -l es --ignore=env/*
```

> Use --ignore to exclude specific directories from translation.

Compile translation files after making changes to translations.

```bash
(env) django-admin compilemessages
```

## 🚨 Important Notes

Check the creation of migrations before creating them.

```bash
(env) docker compose -f docker-compose.dev.yml exec web bash
(env) docker compose -f docker-compose.dev.yml exec web python manage.py makemigrations users
(env) docker compose -f docker-compose.dev.yml exec web python manage.py makemigrations
(env) docker compose -f docker-compose.dev.yml exec web python manage.py migrate
```

> Note: Checking migrations before their creation is necessary to avoid inconsistencies in user models.

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

## ⚖️ License

This project is under the [Apache-2.0 license](https://github.com/tyronejosee/project_fandomhub_api/blob/main/LICENSE).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.
