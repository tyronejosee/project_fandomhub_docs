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
