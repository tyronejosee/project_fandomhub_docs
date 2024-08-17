# Anime <Badge type="danger" text="model" />

El modelo `Anime` representa una entrada de anime en la base de datos. Incluye varios campos para almacenar información como el nombre, nombres alternativos, imagen, URL del tráiler, sinopsis, fondo, temporada, año, detalles de transmisión, tipo de medio, fuente, número de episodios, estado, fechas de emisión, productores, licenciatarios, estudio, géneros, temas, duración, calificación, sitio web y estado de recomendación. Además, almacena datos estadísticos como la puntuación, clasificación, popularidad, miembros y favoritos.

## Campos

**`name`** string

El nombre del anime en inglés.

---

**`name_jpn`** string

El nombre del anime en japonés.

---

**`name_rom`** string

El nombre romanizado del anime.

---

**`alternative_names`** list

Nombres alternativos para el anime.

---

**`image`** image

La imagen que representa al anime.

---

**`trailer`** string

La URL del tráiler del anime.

---

**`synopsis`** string

Un resumen breve del anime.

---

**`background`** string

Información adicional sobre el anime.

---

**`season`** string

La temporada en la que se emitió el anime.

---

**`year`** integer

El año en el que se emitió el anime.

---

**`broadcast_id`** integer

El ID de la información de transmisión del anime.

---

**`media_type`** string

El tipo de medio del anime (por ejemplo, TV, OVA, película).

---

**`source`** string

El material fuente del anime (por ejemplo, manga, novela).

---

**`episodes`** integer

El número total de episodios del anime.

---

**`status`** string

El estado actual del anime (por ejemplo, en emisión, terminado).

---

**`aired_from`** date

La fecha en que el anime se emitió por primera vez.

---

**`aired_to`** date

La fecha en que el anime dejó de emitirse.

---

**`producers`** list

Las compañías de producción involucradas en la producción del anime.

---

**`licensors_id`** integer

El ID de la compañía de licencias del anime.

---

**`studio_id`** integer

El ID del estudio que produjo el anime.

---

**`genres`** list

Los géneros del anime.

---

**`themes`** list

Los temas explorados en el anime.

---

**`duration`** string

La duración de cada episodio del anime.

---

**`rating`** string

La calificación por edad del anime.

---

**`website`** string

El sitio web oficial del anime.

---

**`is_recommended`** boolean

Un booleano que indica si el anime es recomendado.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez el anime. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el anime está disponible o no. El valor predeterminado es `True`.
