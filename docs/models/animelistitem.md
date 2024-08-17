
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

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
