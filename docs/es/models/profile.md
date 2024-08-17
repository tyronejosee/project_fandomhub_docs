# Profile <Badge type="danger" text="model" />

El modelo `Profile` representa los perfiles de usuario en una aplicación basada en MyAnimeList. Almacena información relacionada con los usuarios, como nombres, fecha de nacimiento, biografía, imagen de perfil y portada.

## Campos

**`user_id`** one-to-one

Una relación uno a uno con el modelo `User`, que representa al usuario asociado con el perfil.

---

**`first_name`** string

El primer nombre del usuario.

---

**`last_name`** string

El apellido del usuario.

---

**`birth_date`** date

La fecha de nacimiento del usuario.

---

**`bio`** string

Una breve biografía del usuario.

---

**`image`** image

La imagen de perfil del usuario. La imagen debe ser un archivo `jpg`, `png` o `webp` con un tamaño máximo de 1 MB y dimensiones de 600x600 píxeles.

---

**`cover`** image

La imagen de portada del usuario. La imagen debe ser un archivo `jpg`, `png` o `webp` con un tamaño máximo de 1 MB y dimensiones de 1200x600 píxeles.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el perfil está disponible o no. El valor predeterminado es `True`.
