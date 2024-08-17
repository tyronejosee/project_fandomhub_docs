# Demographic <Badge type="danger" text="model" />

El modelo `Demographic` representa una entrada demográfica en la base de datos. Incluye un campo para almacenar el nombre de la demografía y utiliza un administrador personalizado para consultas específicas de demografía.

## Campos

**`name`** string

El nombre de la demografía.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
