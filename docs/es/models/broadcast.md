# Broadcast <Badge type="danger" text="model" />

El modelo `Broadcast` representa los detalles de transmisión para un programa. Incluye campos para almacenar la cadena de transmisión, el día, la hora y la zona horaria.

## Campos

**`string`** string

Una cadena personalizada asociada con la transmisión.

---

**`day`** string

El día de la semana en que ocurre la transmisión. Las opciones se proporcionan a través de la enumeración `DayChoices`.

---

**`time`** time

La hora del día en que ocurre la transmisión.

---

**`timezone`** string

La zona horaria para la hora de la transmisión. Las opciones se proporcionan a través de la enumeración `TimezoneChoices`, con un valor predeterminado de `JST`.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez el ítem. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
