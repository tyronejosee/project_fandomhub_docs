# Theme <Badge type="danger" text="model" />

El modelo `Theme` representa una entrada de tema en la base de datos. Incluye un campo para almacenar el nombre del tema y utiliza un administrador personalizado para consultas específicas del tema.

## Campos

**`name`** string

El nombre del tema.

---

**`created_at`** datetime

La fecha y hora en que se creó la entrada por primera vez. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si la entrada está disponible o no. El valor predeterminado es `True`.
