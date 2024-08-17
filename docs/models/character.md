# Character <Badge type="danger" text="model" />

The Character model represents a character entry in the database. It includes various fields to store information such as the name, kanji name, description, role, image, and the number of favorites.

## Fields

**`name`** string

The name of the character.

---

**`name_kanji`** string

The kanji name of the character.

---

**`about`** text

A description of the character.

---

**`role`** string

The role of the character, with choices defined by `RoleChoices`.

---

**`image`** image

An optional image of the character, with specific validation for file extension, size, and dimensions (max 600x600 pixels, max 1 MB).

---

**`favorites`** integer

The number of users who have favorited the character. Default value is 0.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
