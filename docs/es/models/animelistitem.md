# AnimeListItem <Badge type="danger" text="model" />

El modelo `AnimeListItem` representa una entrada individual en una `AnimeList`, rastreando detalles específicos sobre el anime, incluyendo el estado y el progreso.

## Campos

**`animelist_id`** foreign key

Una relación de clave externa a la `AnimeList` a la que pertenece el ítem.

---

**`anime_id`** foreign key

Una relación de clave externa al `Anime` que se está rastreando.

---

**`status`** string

El estado actual del anime, con opciones definidas en `AnimeStatusChoices`.

---

**`episodes_watched`** integer

El número de episodios vistos.

---

**`score`** integer

Una puntuación asignada al anime, con opciones definidas en `ScoreChoices`.

---

**`start_date`** date

La fecha en la que el usuario comenzó a ver el anime.

---

**`finish_date`** date

La fecha en la que el usuario terminó de ver el anime.

---

**`tags`** JSON

Una lista de etiquetas asociadas con el anime.

---

**`priority`** string

La prioridad de ver el anime, con opciones definidas en `PriorityChoices`.

---

**`storage`** string

El método de almacenamiento para el anime, con opciones definidas en `StorageChoices`.

---

**`times_rewatched`** integer

El número de veces que se ha vuelto a ver el anime.

---

**`notes`** string

Cualquier nota relacionada con el anime.

---

**`order`** integer

El orden del ítem en la lista.

---

**`is_watched`** boolean

Indica si el anime está marcado como visto.

---

**`is_favorite`** boolean

Indica si el anime está marcado como favorito.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez el ítem. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
