# AnimeStats <Badge type="danger" text="model" />

The `AnimeStats` model tracks viewing statistics for each anime, providing an overview of how users interact with different titles.

## Fields

**`anime_id`** foreign key

A one-to-one relationship with the `Anime` model, ensuring that each anime can have only one associated set of statistics. The relationship is set to cascade on delete, meaning if the anime is deleted, its stats will also be removed. The `limit_choices_to` ensures that only available anime can be linked.

---

**`watching`** integer

The number of users currently watching the anime.

---

**`completed`** integer

The number of users who have completed watching the anime.

---

**`on_hold`** integer

The number of users who have put the anime on hold.

---

**`dropped`** integer

The number of users who have dropped the anime.

---

**`plan_to_watch`** integer

The number of users who plan to watch the anime.

---

**`total`** integer

The total number of users who have interacted with the anime in any capacity.
