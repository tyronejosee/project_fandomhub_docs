# News <Badge type="danger" text="model" />

El modelo `News` representa una entrada de noticias en la base de datos. Incluye diversos campos para almacenar información como el título, descripción, contenido, imagen, URL de la fuente, etiqueta y relaciones con anime y manga. Además, almacena información sobre el autor de la noticia.

## Campos

**`name`** string

El título del artículo de noticias.

---

**`description`** string

Una breve descripción del artículo de noticias.

---

**`content`** text

El contenido completo del artículo de noticias.

---

**`image`** image

Una imagen asociada con el artículo de noticias. La imagen se carga en una ruta específica definida por la función `picture_image_path`.

---

**`source`** URL

La URL de la fuente del artículo de noticias.

---

**`tag`** string

Una etiqueta que categoriza el artículo de noticias. El campo de etiqueta tiene opciones predefinidas definidas por `TagChoices` y, por defecto, se establece en `TagChoices.PENDING`.

---

**`anime_relations`** many-to-many

Una relación de muchos a muchos con el modelo Anime, permitiendo que el artículo de noticias esté asociado con múltiples entradas de anime.

---

**`manga_relations`** many-to-many

Una relación de muchos a muchos con el modelo Manga, permitiendo que el artículo de noticias esté asociado con múltiples entradas de manga.

---

**`author_id`** foreign key

Una relación de clave foránea con el modelo User, que referencia al autor del artículo de noticias. El autor debe tener `is_available` establecido en `True`.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
