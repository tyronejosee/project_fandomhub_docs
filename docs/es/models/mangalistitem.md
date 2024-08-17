# MangaListItem <Badge type="danger" text="model" />

El modelo `MangaListItem` representa una entrada individual en una `MangaList`, rastreando detalles específicos sobre el manga, incluyendo el estado y el progreso de lectura.

## Campos

**`mangalist_id`** foreign key

Una relación de clave externa con la `MangaList` a la que pertenece el ítem.

---

**`manga_id`** foreign key

Una relación de clave externa con el `Manga` que se está rastreando.

---

**`status`** string

El estado actual del manga, con opciones definidas en `MangaStatusChoices`.

---

**`volumes_read`** integer

El número de volúmenes leídos.

---

**`chapters_read`** integer

El número de capítulos leídos.

---

**`score`** integer

Una puntuación asignada al manga, con opciones definidas en `ScoreChoices`.

---

**`start_date`** date

La fecha en la que el usuario comenzó a leer el manga.

---

**`finish_date`** date

La fecha en la que el usuario terminó de leer el manga.

---

**`tags`** JSON

Una lista de etiquetas asociadas con el manga.

---

**`priority`** string

La prioridad de lectura del manga, con opciones definidas en `PriorityChoices`.

---

**`storage`** string

El método de almacenamiento para el manga, con opciones definidas en `StorageChoices`.

---

**`times_reread`** integer

El número de veces que se ha vuelto a leer el manga.

---

**`notes`** string

Cualquier nota relacionada con el manga.

---

**`order`** integer

El orden del ítem en la lista.

---

**`is_read`** boolean

Indica si el manga está marcado como leído.

---

**`is_favorite`** boolean

Indica si el manga está marcado como favorito.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
