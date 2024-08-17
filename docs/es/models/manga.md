# Manga <Badge type="danger" text="model" />

El modelo `Manga` representa una entrada de manga en la base de datos. Incluye diversos campos para almacenar información detallada sobre el manga, incluyendo nombres, imagen, sinopsis, datos de publicación, géneros, temas, y estadísticas de popularidad.

## Campos

**`name`** string

El nombre del manga en inglés.

---

**`name_jpn`** string

El nombre del manga en japonés.

---

**`name_rom`** string

El nombre romanizado del manga.

---

**`alternative_names`** list

Nombres alternativos del manga.

---

**`image`** image

La imagen que representa el manga.

---

**`synopsis`** string

Un resumen breve del manga.

---

**`background`** string

Información adicional de fondo sobre el manga.

---

**`media_type`** string

El tipo de medio del manga (por ejemplo, manga, novela).

---

**`chapters`** integer

El número total de capítulos del manga.

---

**`volumes`** integer

El número total de volúmenes del manga.

---

**`status`** string

El estado actual del manga (por ejemplo, en emisión, terminado).

---

**`published_from`** date

La fecha en que se publicó por primera vez el manga.

---

**`published_to`** date

La fecha en que se publicó por última vez el manga.

---

**`genres`** list

Los géneros del manga.

---

**`themes`** list

Los temas explorados en el manga.

---

**`demographic_id`** integer

El ID del demográfico al que pertenece el manga.

---

**`serialization_id`** integer

El ID de la publicación en la que se serializa el manga.

---

**`author_id`** integer

El ID del autor del manga.

---

**`website`** string

El sitio web oficial del manga.

---

**`is_recommended`** boolean

Un valor booleano que indica si el manga está recomendado.

---

**`score`** float

La puntuación del manga.

---

**`ranked`** integer

El ranking del manga.

---

**`popularity`** integer

La popularidad del manga.

---

**`members`** integer

El número de miembros que siguen el manga.

---

**`favorites`** integer

El número de favoritos del manga.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
