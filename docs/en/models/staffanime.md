
# StaffAnime <Badge type="danger" text="model" />

The StaffAnime model represents the relationship between a person and an anime they have worked on. It links a person to an anime and stores details about their involvement.

## Fields

**`person_id`** ForeignKey

A reference to the Person involved in the anime. Only persons marked as available are allowed.

---

**`anime_id`** ForeignKey

A reference to the Anime that the person has worked on. Only animes marked as available are allowed.
