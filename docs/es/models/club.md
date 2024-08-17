# Club <Badge type="danger" text="model" />

El modelo `Club` representa una entidad de club en la base de datos. Incluye varios campos para almacenar información como el nombre, descripción, imagen, categoría, número de miembros, creador y estado público.

## Campos

**`name`** string

El nombre del club.

---

**`description`** text

Una descripción detallada del club.

---

**`image`** image

Una imagen opcional que representa al club. Los tipos de archivo permitidos son jpg, png y webp, con un tamaño máximo de 1 MB y dimensiones de 600x600 píxeles.

---

**`category`** string

La categoría del club. Es un campo de opción con opciones predefinidas.

---

**`members`** positive integer

El número de miembros en el club. El valor predeterminado es 0.

---

**`created_by`** one-to-one field

El usuario que creó el club. Esta es una relación uno a uno con el modelo `User` y está limitada a usuarios disponibles.

---

**`is_public`** boolean

Indica si el club es público o no.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
