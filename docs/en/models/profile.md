# Profile <Badge type="danger" text="model" />

The `Profile` model represents user profiles in a MyAnimeList-based app. It stores user-related information such as names, birth date, bio, profile image, and cover image.

## Fields

**`user_id`** one-to-one

A one-to-one relationship to the `User` model, representing the user associated with the profile.

---

**`first_name`** string

The user's first name.

---

**`last_name`** string

The user's last name.

---

**`birth_date`** date

The user's birth date.

---

**`bio`** string

A brief biography of the user.

---

**`image`** image

The user's profile image. The image is validated to be a `jpg`, `png`, or `webp` file with a maximum size of 1 MB and dimensions of 600x600 pixels.

---

**`cover`** image

The user's cover image. The image is validated to be a `jpg`, `png`, or `webp` file with a maximum size of 1 MB and dimensions of 1200x600 pixels.

---

### Additional Methods

**`__str__`** method

Returns the username of the associated user.

---

**`full_name`** property

Returns the full name of the user by combining the first name and last name.
