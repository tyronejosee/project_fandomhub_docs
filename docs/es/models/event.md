# Event <Badge type="danger" text="model" />

El modelo `Event` representa un evento organizado por un club. Incluye campos para almacenar información sobre el club, el nombre, la descripción y la fecha del evento.

## Campos

**`club_id`** foreign key

El club que organiza el evento. Esta es una relación de clave externa con el modelo `Club` y está limitada a clubes que están disponibles.

---

**`name`** string

El nombre del evento.

---

**`description`** text

Una descripción detallada del evento.

---

**`date`** datetime

La fecha y hora del evento.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
