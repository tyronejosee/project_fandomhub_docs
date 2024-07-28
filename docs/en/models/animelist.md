# AnimeList <Badge type="danger" text="model" />

The `AnimeList` model represents a user's collection of anime, also inheriting from the `PlaylistBase` model.
The `PlaylistBase` model serves as an abstract base for all playlist models, encapsulating shared attributes such as the user, banner image, and public visibility settings.

## Fields

**`user`** foreign key

A foreign key relationship to the user who owns the playlist.

---

**`banner`** image

An optional banner image for the playlist. The image must be a `jpg` or `webp` file with a maximum size of 1 MB and dimensions of 500x1500 pixels.

---

**`is_public`** boolean

Indicates whether the playlist is public (default is `True`).
