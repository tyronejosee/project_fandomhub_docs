# Review <Badge type="danger" text="model" />

El modelo `Review` representa la reseña de un usuario sobre un objeto de contenido específico en la base de datos. Incluye campos para almacenar el usuario que hizo la reseña, el tipo de contenido revisado, la calificación, el comentario y metadatos adicionales como si el comentario contiene spoilers, y conteos de utilidad y reportes.

## Campos

**`user_id`** ForeignKey

Una referencia al usuario que creó la reseña. Este campo se vincula con el modelo `User`, asegurando que el usuario esté disponible.

---

**`content_type`** ForeignKey

Una referencia al tipo de contenido que se está revisando, utilizando el framework `ContentType` de Django.

---

**`object_id`** UUIDField

Un UUID que representa el objeto específico que se está revisando.

---

**`content_object`** GenericForeignKey

Una relación genérica con el objeto revisado, combinando `content_type` y `object_id`.

---

**`rating`** IntegerField

La calificación otorgada al contenido, con un valor entre 1 y 10.

---

**`comment`** TextField

La reseña o comentario textual proporcionado por el usuario.

---

**`is_spoiler`** BooleanField

Un indicador de si el comentario contiene spoilers. El valor predeterminado es `False`.

---

**`helpful_count`** PositiveIntegerField

El número de veces que la reseña ha sido marcada como útil por otros usuarios. El valor predeterminado es `0`.

---

**`reported_count`** PositiveIntegerField

El número de veces que la reseña ha sido reportada por otros usuarios. El valor predeterminado es `0`.

---

**`created_at`** datetime

La fecha y hora en que se creó la reseña por primera vez. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si la reseña está disponible o no. El valor predeterminado es `True`.
