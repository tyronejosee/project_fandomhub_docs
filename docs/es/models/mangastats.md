# MangaStats <Badge type="danger" text="model" />

El modelo `MangaStats` representa estadísticas para una entrada específica de manga en la base de datos. Incluye campos para almacenar diversos estados de lectura y totales relacionados con el manga.

## Campos

**`manga_id`** integer

Una relación uno a uno con el modelo `Manga`, vinculando las estadísticas a un manga específico.

---

**`reading`** integer

El número de usuarios que actualmente están leyendo el manga.

---

**`completed`** integer

El número de usuarios que han completado el manga.

---

**`on_hold`** integer

El número de usuarios que han puesto el manga en espera.

---

**`dropped`** integer

El número de usuarios que han abandonado el manga.

---

**`plan_to_read`** integer

El número de usuarios que planean leer el manga.

---

**`total`** integer

El número total de usuarios que han interactuado con el manga de alguna manera (leyendo, completado, en espera, abandonado, planean leer).

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
