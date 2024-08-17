# ClubMember <Badge type="danger" text="model" />

El modelo `ClubMember` representa a un miembro de un club. Incluye campos para almacenar información sobre el club, el usuario y la fecha en que se unió.

## Campos

**`club_id`** foreign key

El club al que pertenece el miembro. Esta es una relación de clave externa con el modelo `Club`, limitada a clubes disponibles.

---

**`user_id`** foreign key

El usuario que es miembro del club. Esta es una relación de clave externa con el modelo `User`, limitada a usuarios disponibles.

---

**`joined_at`** datetime

La fecha y hora en que el usuario se unió al club. Este campo se llena automáticamente cuando se crea un registro.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
