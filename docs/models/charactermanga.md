# CharacterManga <Badge type="danger" text="model" />

The CharacterManga model represents the relationship between a character and a manga. It includes references to both the character and the manga.

## Fields

**`character_id`** foreign key

A foreign key to the Character model, limited to characters marked as available.

---

**`manga_id`** foreign key

A foreign key to the Manga model, limited to mangas marked as available.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
