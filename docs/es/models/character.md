# Character <Badge type="danger" text="model" />

El modelo `Character` representa una entrada de personaje en la base de datos. Incluye varios campos para almacenar información como el nombre, nombre en kanji, descripción, rol, imagen y número de favoritos.

## Campos

**`name`** string

El nombre del personaje.

---

**`name_kanji`** string

El nombre en kanji del personaje.

---

**`about`** text

Una descripción del personaje.

---

**`role`** string

El rol del personaje, con opciones definidas por `RoleChoices`.

---

**`image`** image

Una imagen opcional del personaje, con validación específica para la extensión del archivo, tamaño y dimensiones (máx. 600x600 píxeles, máx. 1 MB).

---

**`favorites`** integer

El número de usuarios que han marcado al personaje como favorito. El valor predeterminado es 0.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez el ítem. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
