# CharacterAnime <Badge type="danger" text="model" />

El modelo `CharacterAnime` representa la relación entre un personaje y un anime. Incluye referencias tanto al personaje como al anime.

## Campos

**`character_id`** foreign key

Una clave externa al modelo `Character`, limitada a personajes marcados como disponibles.

---

**`anime_id`** foreign key

Una clave externa al modelo `Anime`, limitada a animes marcados como disponibles.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
