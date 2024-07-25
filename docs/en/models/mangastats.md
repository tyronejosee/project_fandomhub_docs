# MangaStats <Badge type="danger" text="model" />

The `MangaStats` model represents statistics for a specific manga entry in the database. It includes fields to store various reading statuses and totals related to the manga.

## Fields

**`manga_id`** integer

A one-to-one relationship with the `Manga` model, linking the statistics to a specific manga.

---

**`reading`** integer

The number of users currently reading the manga.

---

**`completed`** integer

The number of users who have completed the manga.

---

**`on_hold`** integer

The number of users who have put the manga on hold.

---

**`dropped`** integer

The number of users who have dropped the manga.

---

**`plan_to_read`** integer

The number of users who plan to read the manga.

---

**`total`** integer

The total number of users who have interacted with the manga in any way (reading, completed, on hold, dropped, plan to read).
