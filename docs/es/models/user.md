# User <Badge type="danger" text="model" />

El modelo `User` representa una entrada de usuario en la base de datos. Extiende `AbstractBaseUser` y `PermissionsMixin` de Django para proporcionar autenticación básica y manejo de permisos. El modelo incluye varios campos para almacenar información sobre el usuario, como el correo electrónico, nombre de usuario, rol, estado en línea, estado de cuenta, estado de personal y marcas de tiempo para la creación y última actualización de la cuenta.

## Campos

**`id`** UUID

El identificador único para el usuario. Es un campo UUID que se genera automáticamente y no es editable.

---

**`email`** string

La dirección de correo electrónico del usuario. Este campo es único, indexado y requerido.

---

**`username`** string

El nombre de usuario del usuario. Este campo es único y requerido.

---

**`role`** string

El rol del usuario dentro del sistema. Este campo tiene opciones predefinidas y por defecto es 'Member'.

---

**`is_online`** boolean

Indica si el usuario está actualmente en línea. El valor por defecto es `False`.

---

**`is_active`** boolean

Indica si la cuenta del usuario está activa. El valor por defecto es `True`.

---

**`is_staff`** boolean

Indica si el usuario tiene privilegios de personal. El valor por defecto es `False`.

---

**`created_at`** datetime

La fecha y hora en que se creó la cuenta del usuario. Este campo se establece automáticamente cuando se crea el usuario.

---

**`updated_at`** datetime

La fecha y hora en que se actualizó por última vez la cuenta del usuario. Este campo se actualiza automáticamente siempre que se modifiquen los datos del usuario.
