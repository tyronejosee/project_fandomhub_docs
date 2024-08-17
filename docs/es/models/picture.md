# Picture <Badge type="danger" text="model" />

El modelo `Picture` representa una entrada de imagen en la base de datos. Incluye campos para almacenar el tipo de contenido, el ID del objeto, el nombre y la imagen misma.

## Campos

**`content_type`** integer

Una clave foránea al modelo `ContentType`, limitada a modelos específicos (anime, manga, personaje, persona).

---

**`object_id`** UUID

El UUID del objeto relacionado.

---

**`content_object`** GenericForeignKey

Una clave foránea genérica que vincula la imagen con el tipo de contenido y el ID del objeto.

---

**`name`** string

El nombre de la imagen, con un valor predeterminado generado por `generate_random_code`.

---

**`image`** image

El archivo de imagen, con validaciones para la extensión del archivo, tamaño y dimensiones.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si la imagen está disponible o no. El valor predeterminado es `True`.
