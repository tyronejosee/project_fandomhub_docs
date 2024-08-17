
# StaffAnime <Badge type="danger" text="model" />

The StaffAnime model represents the relationship between a person and an anime they have worked on. It links a person to an anime and stores details about their involvement.

## Fields

**`person_id`** ForeignKey

A reference to the Person involved in the anime. Only persons marked as available are allowed.

---

**`anime_id`** ForeignKey

A reference to the Anime that the person has worked on. Only animes marked as available are allowed.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
