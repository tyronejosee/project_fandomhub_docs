# StaffAnime <Badge type="danger" text="model" />

El modelo `StaffAnime` representa la relación entre una persona y un anime en el que ha trabajado. Vincula a una persona con un anime y almacena detalles sobre su participación.

## Campos

**`person_id`** ForeignKey

Una referencia a la persona que ha trabajado en el anime. Solo se permiten personas marcadas como disponibles.

---

**`anime_id`** ForeignKey

Una referencia al anime en el que la persona ha trabajado. Solo se permiten animes marcados como disponibles.

---

**`created_at`** datetime

La fecha y hora en que se creó la entrada por primera vez. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si la entrada está disponible o no. El valor predeterminado es `True`.
