# CharacterManga <Badge type="danger" text="model" />

The CharacterManga model represents the relationship between a character and a manga. It includes references to both the character and the manga.

## Fields

**`character_id`** foreign key

A foreign key to the Character model, limited to characters marked as available.

---

**`manga_id`** foreign key

A foreign key to the Manga model, limited to mangas marked as available.
