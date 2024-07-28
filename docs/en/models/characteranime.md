# CharacterAnime <Badge type="danger" text="model" />

The CharacterAnime model represents the relationship between a character and an anime. It includes references to both the character and the anime.

## Fields

**`character_id`** foreign key

A foreign key to the Character model, limited to characters marked as available.

---

**`anime_id`** foreign key

A foreign key to the Anime model, limited to animes marked as available.
