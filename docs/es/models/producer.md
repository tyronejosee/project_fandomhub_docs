# Producer <Badge type="danger" text="model" />

El modelo `Producer` representa una entrada de productor en la base de datos. Incluye campos para almacenar información sobre el nombre, la descripción, la fecha de establecimiento, el tipo, la imagen y el número de favoritos del productor.

## Campos

**`name`** string (único)

El nombre del productor en inglés.

---

**`name_jpn`** string (único)

El nombre del productor en japonés.

---

**`about`** text

Una breve descripción sobre el productor.

---

**`established`** string

La fecha en que se estableció el productor. Este campo es opcional.

---

**`type`** string

El tipo de productor, con opciones proporcionadas a través de la enumeración `TypeChoices`.

---

**`image`** image

La imagen que representa al productor. La imagen debe ser un archivo `jpg` o `webp` con un tamaño máximo de 1 MB y dimensiones de 600x600 píxeles.

---

**`favorites`** integer

El número de veces que el productor ha sido marcado como favorito por los usuarios.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el productor está disponible o no. El valor predeterminado es `True`.
