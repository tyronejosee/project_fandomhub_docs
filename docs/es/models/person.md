# Person <Badge type="danger" text="model" />

El modelo `Person` representa a una persona asociada con la industria del anime, como un actor de voz, director u otro personal. Incluye diversos campos para almacenar información sobre el nombre de la persona, imagen, nombres alternativos, fecha de nacimiento, detalles biográficos, sitio web, idioma, categoría y número de favoritos.

## Campos

**`name`** string

El nombre único de la persona.

---

**`given_name`** string

El nombre de pila (primer nombre) de la persona. Este campo es opcional.

---

**`family_name`** string

El apellido (segundo nombre) de la persona. Este campo es opcional.

---

**`image`** image

La imagen de perfil de la persona. Debe ser un archivo JPG o WEBP, con un tamaño máximo de 1 MB y dimensiones no superiores a 1080x1080 píxeles. Este campo es opcional.

---

**`alternate_names`** JSON

Una lista de nombres alternativos para la persona. Este campo es opcional.

---

**`birthday`** date

La fecha de nacimiento de la persona. Este campo es opcional.

---

**`about`** text

Una descripción biográfica de la persona. Este campo es opcional.

---

**`website`** URL

El sitio web personal o profesional de la persona. Este campo es opcional.

---

**`language`** string

El idioma que la persona habla principalmente. El valor predeterminado es Japonés, y puede ser uno de los valores definidos en `LanguageChoices`.

---

**`category`** string

La categoría del rol de la persona en la industria, como actor de voz o director. Es uno de los valores definidos en `CategoryChoices`.

---

**`favorites`** positive integer

El número de usuarios que han marcado a esta persona como favorita. El valor predeterminado es 0.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
