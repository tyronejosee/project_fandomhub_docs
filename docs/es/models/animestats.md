# AnimeStats <Badge type="danger" text="model" />

El modelo `AnimeStats` rastrea las estadísticas de visualización para cada anime, proporcionando una visión general de cómo los usuarios interactúan con diferentes títulos.

## Campos

**`anime_id`** foreign key

Una relación uno a uno con el modelo `Anime`, asegurando que cada anime pueda tener solo un conjunto asociado de estadísticas. La relación se configura para eliminar en cascada, lo que significa que si el anime se elimina, sus estadísticas también se eliminarán. El `limit_choices_to` asegura que solo los animes disponibles puedan ser vinculados.

---

**`watching`** integer

El número de usuarios que actualmente están viendo el anime.

---

**`completed`** integer

El número de usuarios que han completado la visualización del anime.

---

**`on_hold`** integer

El número de usuarios que han puesto el anime en espera.

---

**`dropped`** integer

El número de usuarios que han abandonado el anime.

---

**`plan_to_watch`** integer

El número de usuarios que planean ver el anime.

---

**`total`** integer

El número total de usuarios que han interactuado con el anime de alguna manera.

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez el ítem. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
