# Discussion <Badge type="danger" text="model" />

El modelo `Discussion` representa una discusión dentro de un tema. Incluye campos para almacenar información sobre el tema, el contenido de la discusión y el usuario que creó la discusión.

## Campos

**`topic_id`** foreign key

El tema al que pertenece la discusión. Esta es una relación de clave externa con el modelo `Topic` y está limitada a temas que están disponibles.

---

**`content`** text

El contenido de la discusión.

---

**`created_by`** foreign key

El usuario que creó la discusión. Esta es una relación de clave externa con el modelo `User` y está limitada a usuarios que están disponibles. Permite valores nulos y establece el usuario en nulo si se elimina.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
