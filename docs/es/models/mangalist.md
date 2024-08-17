# MangaList <Badge type="danger" text="model" />

El modelo `MangaList` representa una colección de manga de un usuario y hereda del modelo `PlaylistBase`. El modelo `PlaylistBase` sirve como una base abstracta para todos los modelos de listas, encapsulando atributos compartidos como el usuario, la imagen de banner y los ajustes de visibilidad pública.

## Campos

**`user`** foreign key

Una relación de clave externa al usuario que posee la lista.

---

**`banner`** image

Una imagen de banner opcional para la lista. La imagen debe ser un archivo `jpg` o `webp` con un tamaño máximo de 1 MB y dimensiones de 500x1500 píxeles.

---

**`is_public`** boolean

Indica si la lista es pública (el valor predeterminado es `True`).

---

**`created_at`** datetime

La fecha y hora en que se creó por primera vez la entrada. Este campo se llena automáticamente cuando la entrada se guarda inicialmente.

---

**`updated_at`** datetime

La fecha y hora de la última actualización. Este campo se actualiza automáticamente cada vez que se modifica y guarda la entrada.

---

**`is_available`** boolean

Indica si el ítem está disponible o no. El valor predeterminado es `True`.
