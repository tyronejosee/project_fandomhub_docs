# AnimeList <Badge type="danger" text="model" />

El modelo `AnimeList` representa la colección de anime de un usuario, también heredando del modelo `PlaylistBase`. El modelo `PlaylistBase` sirve como base abstracta para todos los modelos de listas de reproducción, encapsulando atributos compartidos como el usuario, la imagen de banner y las configuraciones de visibilidad pública.

## Campos

**`user`** foreign key

Una relación de clave externa al usuario que posee la lista de reproducción.

---

**`banner`** image

Una imagen de banner opcional para la lista de reproducción. La imagen debe ser un archivo `jpg` o `webp` con un tamaño máximo de 1 MB y dimensiones de 500x1500 píxeles.

---

**`is_public`** boolean

Indica si la lista de reproducción es pública (el valor predeterminado es `True`).

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la lista de reproducción. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si la lista de reproducción está disponible o no. El valor predeterminado es `True`.
