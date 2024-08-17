# Video <Badge type="danger" text="model" />

El modelo `Video` representa una entrada de video en la base de datos. Incluye campos para almacenar el tipo de contenido, el ID del objeto relacionado y la URL del video.

## Campos

**`content_type`** integer

Una clave foránea al modelo `ContentType`, limitada a modelos específicos (anime, manga).

---

**`object_id`** UUID

El UUID del objeto relacionado.

---

**`content_object`** GenericForeignKey

Una clave foránea genérica que vincula el video al tipo de contenido y al ID del objeto.

---

**`video`** string

La URL del video.

---

**`created_at`** datetime

La fecha y hora en que se creó el video. Este campo se completa automáticamente cuando se guarda la entrada por primera vez.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el video está disponible o no. El valor por defecto es `True`.
