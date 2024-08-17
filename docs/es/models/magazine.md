# Magazine <Badge type="danger" text="model" />

El modelo `Magazine` representa una entrada de revista en la base de datos. Incluye campos para almacenar información como el nombre de la revista y el número de ediciones.

## Campos

**`name`** string

El nombre de la revista.

---

**`count`** integer

El número de ediciones de la revista.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
