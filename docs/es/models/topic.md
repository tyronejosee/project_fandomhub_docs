# Topic <Badge type="danger" text="model" />

El modelo `Topic` representa un tema de discusión dentro de un club. Incluye campos para almacenar información sobre el nombre, el club al que pertenece y el usuario que creó el tema.

## Campos

**`name`** string

El nombre del tema.

---

**`club_id`** foreign key

El club al que pertenece el tema. Esta es una relación de clave foránea con el modelo `Club` y está limitada a clubes disponibles.

---

**`created_by`** foreign key

El usuario que creó el tema. Esta es una relación de clave foránea con el modelo `User` y está limitada a usuarios disponibles. Permite valores nulos y establece el usuario en nulo si se elimina.

---

**`created_at`** datetime

La fecha y hora en que se creó el tema por primera vez. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el tema está disponible o no. El valor predeterminado es `True`.
