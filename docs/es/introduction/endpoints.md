# Endpoints

## Animes <Badge type="tip" text="Endpoint" />

- `GET /api/animes/` Obtener una lista de animes.
- `POST /api/animes/` Crear un nuevo anime.
- `GET /api/animes/{id}/` Obtener un anime específico por ID.
- `PUT /api/animes/{id}/` Actualizar un anime por ID.
- `PATCH /api/animes/{id}/` Actualizar parcialmente un anime por ID.
- `DELETE /api/animes/{id}/` Eliminar un anime por ID.
- `GET /api/animes/{id}/characters/` Obtener una lista de personajes para un anime específico.
- `GET /api/animes/{id}/news/` Obtener noticias relacionadas con un anime específico.
- `GET /api/animes/{id}/pictures/` Obtener imágenes de un anime específico.
- `GET /api/animes/{id}/recommendations/` Obtener recomendaciones para un anime específico.
- `GET /api/animes/{id}/staff/` Obtener información del personal de un anime específico.
- `GET /api/animes/{id}/stats/` Obtener estadísticas de un anime específico.
- `GET /api/animes/{id}/videos/` Obtener videos de un anime específico.
- `GET /api/animes/{id}/reviews/` Obtener reseñas de un anime específico.
- `PATCH /api/animes/{id}/reviews/{id}/` Actualizar parcialmente una reseña por ID.
- `DELETE /api/animes/{id}/reviews/{id}/` Eliminar una reseña por ID.
- `POST /api/animes/{id}/reviews/create/` Crear una nueva reseña para un anime específico.

## Characters <Badge type="tip" text="Endpoint" />

- `GET /api/characters/` Obtener una lista de personajes.
- `POST /api/characters/` Crear un nuevo personaje.
- `GET /api/characters/{id}/` Obtener un personaje específico por ID.
- `PUT /api/characters/{id}/` Actualizar un personaje por ID.
- `PATCH /api/characters/{id}/` Actualizar parcialmente un personaje por ID.
- `DELETE /api/characters/{id}/` Eliminar un personaje por ID.
- `GET /api/characters/members/` Obtener una lista de miembros de personajes.

## Demographics <Badge type="tip" text="Endpoint" />

- `GET /api/demographics/` Obtener una lista de demografías.
- `POST /api/demographics/` Crear una nueva demografía.
- `GET /api/demographics/{id}/` Obtener una demografía específica por ID.
- `PUT /api/demographics/{id}/` Actualizar una demografía por ID.
- `PATCH /api/demographics/{id}/` Actualizar parcialmente una demografía por ID.
- `DELETE /api/demographics/{id}/` Eliminar una demografía por ID.

## Genres <Badge type="tip" text="Endpoint" />

- `GET /api/genres/` Obtener una lista de géneros.
- `POST /api/genres/` Crear un nuevo género.
- `GET /api/genres/{id}/` Obtener un género específico por ID.
- `PUT /api/genres/{id}/` Actualizar un género por ID.
- `PATCH /api/genres/{id}/` Actualizar parcialmente un género por ID.
- `DELETE /api/genres/{id}/` Eliminar un género por ID.
- `GET /api/genres/{id}/animes/` Obtener una lista de animes asociados a un género específico.
- `GET /api/genres/{id}/mangas/` Obtener una lista de mangas asociados a un género específico.

## Home <Badge type="tip" text="Endpoint" />

- `GET /api/home/` Obtener la información de inicio.

## Magazines <Badge type="tip" text="Endpoint" />

- `GET /api/magazines/` Obtener una lista de revistas.
- `POST /api/magazines/` Crear una nueva revista.
- `GET /api/magazines/{id}/` Obtener una revista específica por ID.
- `PUT /api/magazines/{id}/` Actualizar una revista por ID.
- `PATCH /api/magazines/{id}/` Actualizar parcialmente una revista por ID.
- `DELETE /api/magazines/{id}/` Eliminar una revista por ID.

## Mangas <Badge type="tip" text="Endpoint" />

- `GET /api/mangas/` Obtener una lista de mangas.
- `POST /api/mangas/` Crear un nuevo manga.
- `GET /api/mangas/{id}/` Obtener un manga específico por ID.
- `PUT /api/mangas/{id}/` Actualizar un manga por ID.
- `PATCH /api/mangas/{id}/` Actualizar parcialmente un manga por ID.
- `DELETE /api/mangas/{id}/` Eliminar un manga por ID.
- `GET /api/mangas/{id}/characters/` Obtener una lista de personajes para un manga específico.
- `GET /api/mangas/{id}/news/` Obtener noticias relacionadas con un manga específico.
- `GET /api/mangas/{id}/pictures/` Obtener imágenes de un manga específico.
- `GET /api/mangas/{id}/recommendations/` Obtener recomendaciones para un manga específico.
- `GET /api/mangas/{id}/stats/` Obtener estadísticas de un manga específico.
- `GET /api/mangas/{id}/reviews/` Obtener reseñas de un manga específico.
- `PATCH /api/mangas/{id}/reviews/{id}/` Actualizar parcialmente una reseña por ID.
- `DELETE /api/mangas/{id}/reviews/{id}/` Eliminar una reseña por ID.
- `POST /api/mangas/{id}/reviews/create/` Crear una nueva reseña para un manga específico.

## News <Badge type="tip" text="Endpoint" />

- `GET /api/news/` Obtener una lista de artículos de noticias.
- `POST /api/news/` Crear un nuevo artículo de noticias.
- `GET /api/news/{id}/` Obtener un artículo de noticias específico por ID.
- `PUT /api/news/{id}/` Actualizar un artículo de noticias por ID.
- `PATCH /api/news/{id}/` Actualizar parcialmente un artículo de noticias por ID.
- `DELETE /api/news/{id}/` Eliminar un artículo de noticias por ID.

## Persons <Badge type="tip" text="Endpoint" />

- `GET /api/persons/` Obtener una lista de personas.
- `POST /api/persons/` Crear una nueva persona.
- `GET /api/persons/{id}/` Obtener una persona específica por ID.
- `PUT /api/persons/{id}/` Actualizar una persona por ID.
- `PATCH /api/persons/{id}/` Actualizar parcialmente una persona por ID.
- `DELETE /api/persons/{id}/` Eliminar una persona por ID.
- `POST /api/persons/{id}/create-picture/` Crear una nueva imagen para una persona específica.
- `GET /api/persons/{id}/mangas/` Obtener una lista de mangas asociados a una persona específica.
- `GET /api/persons/{id}/pictures/` Obtener imágenes de una persona específica.
- `GET /api/persons/{id}/voices/` Obtener información de doblaje para una persona específica.

## Playlists <Badge type="tip" text="Endpoint" />

- `GET /api/playlists/animelist/` Obtener la lista de animes desde las listas de reproducción.
- `PATCH /api/playlists/animelist/` Actualizar la lista de animes en las listas de reproducción.
- `GET /api/playlists/animelist/animes/` Obtener una lista de animes en la lista de animes.
- `POST /api/playlists/animelist/animes/` Añadir un nuevo anime a la lista de animes.
- `GET /api/playlists/animelist/animes/{item_id}/` Obtener un ítem de anime específico por ID desde la lista de animes.
- `PATCH /api/playlists/animelist/animes/{item_id}/` Actualizar parcialmente un ítem de anime específico por ID en la lista de animes.
- `DELETE /api/playlists/animelist/animes/{item_id}/` Eliminar un ítem de anime específico por ID de la lista de animes.
- `GET /api/playlists/mangalist/` Obtener la lista de mangas desde las listas de reproducción.
- `PATCH /api/playlists/mangalist/` Actualizar la lista de mangas en las listas de reproducción.
- `GET /api/playlists/mangalist/mangas/` Obtener una lista de mangas en la lista de mangas.
- `POST /api/playlists/mangalist/mangas/` Añadir un nuevo manga a la lista de mangas.
- `GET /api/playlists/mangalist/mangas/{item_id}/` Obtener un ítem de manga específico por ID desde la lista de mangas.
- `PATCH /api/playlists/mangalist/mangas/{item_id}/` Actualizar parcialmente
