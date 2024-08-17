# MangaListItem <Badge type="danger" text="model" />

The `MangaListItem` model represents an individual entry in a `MangaList`, tracking specific details about the manga, including status and reading progress.

## Fields

**`mangalist_id`** foreign key

A foreign key relationship to the `MangaList` the item belongs to.

---

**`manga_id`** foreign key

A foreign key relationship to the `Manga` being tracked.

---

**`status`** string

The current status of the manga, with choices defined in `MangaStatusChoices`.

---

**`volumes_read`** integer

The number of volumes read.

---

**`chapters_read`** integer

The number of chapters read.

---

**`score`** integer

A score assigned to the manga, with choices defined in `ScoreChoices`.

---

**`start_date`** date

The date when the user started reading the manga.

---

**`finish_date`** date

The date when the user finished reading the manga.

---

**`tags`** JSON

A list of tags associated with the manga.

---

**`priority`** string

The priority of reading the manga, with choices defined in `PriorityChoices`.

---

**`storage`** string

The storage method for the manga, with choices defined in `StorageChoices`.

---

**`times_reread`** integer

The number of times the manga has been reread.

---

**`notes`** string

Any notes related to the manga.

---

**`order`** integer

The order of the item in the list.

---

**`is_read`** boolean

Indicates whether the manga is marked as read.

---

**`is_favorite`** boolean

Indicates whether the manga is marked as a favorite.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
