
# AnimeListItem <Badge type="danger" text="model" />

The `AnimeListItem` model represents an individual entry in an `AnimeList`, tracking specific details about the anime, including status and progress.

## Fields

**`animelist_id`** foreign key

A foreign key relationship to the `AnimeList` the item belongs to.

---

**`anime_id`** foreign key

A foreign key relationship to the `Anime` being tracked.

---

**`status`** string

The current status of the anime, with choices defined in `AnimeStatusChoices`.

---

**`episodes_watched`** integer

The number of episodes watched.

---

**`score`** integer

A score assigned to the anime, with choices defined in `ScoreChoices`.

---

**`start_date`** date

The date when the user started watching the anime.

---

**`finish_date`** date

The date when the user finished watching the anime.

---

**`tags`** JSON

A list of tags associated with the anime.

---

**`priority`** string

The priority of watching the anime, with choices defined in `PriorityChoices`.

---

**`storage`** string

The storage method for the anime, with choices defined in `StorageChoices`.

---

**`times_rewatched`** integer

The number of times the anime has been rewatched.

---

**`notes`** string

Any notes related to the anime.

---

**`order`** integer

The order of the item in the list.

---

**`is_watched`** boolean

Indicates whether the anime is marked as watched.

---

**`is_favorite`** boolean

Indicates whether the anime is marked as a favorite.
