# Manga <Badge type="danger" text="model" />

<!-- TODO: Add slug and base fields -->

The `Manga` model represents a manga entry in the database. It includes various fields to store information such as the name, alternative names, image, synopsis, background, media type, chapters, volumes, status, publication dates, genres, themes, demographic, author, website, and recommendation status. Additionally, it stores statistical data like the score, ranking, popularity, members, and favorites.

## Fields

**`name`** string

The name of the manga in English.

---

**`name_jpn`** string

The name of the manga in Japanese.

---

**`name_rom`** string

The romanized name of the manga.

---

**`alternative_names`** list

Alternative names for the manga.

---

**`image`** image

The image representing the manga.

---

**`synopsis`** string

A brief summary of the manga.

---

**`background`** string

Additional background information about the manga.

---

**`media_type`** string

The media type of the manga (e.g., manga, novel).

---

**`chapters`** integer

The total number of chapters of the manga.

---

**`volumes`** integer

The total number of volumes of the manga.

---

**`status`** string

The current status of the manga (e.g., airing, finished).

---

**`published_from`** date

The date when the manga was first published.

---

**`published_to`** date

The date when the manga was last published.

---

**`genres`** list

The genres of the manga.

---

**`themes`** list

The themes explored in the manga.

---

**`demographic_id`** integer

The ID of the demographic to which the manga belongs.

---

**`serialization_id`** integer

The ID of the publication in which the manga is serialized.

---

**`author_id`** integer

The ID of the author of the manga.

---

**`website`** string

The official website of the manga.

---

**`is_recommended`** boolean

A boolean indicating if the manga is recommended.

---

**`score`** float

The score of the manga.

---

**`ranked`** integer

The ranking of the manga.

---

**`popularity`** integer

The popularity of the manga.

---

**`members`** integer

The number of members following the manga.

---

**`favorites`** integer

The number of favorites for the manga.
