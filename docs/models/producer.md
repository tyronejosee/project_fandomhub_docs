# Producer <Badge type="danger" text="model" />

The `Producer` model represents a producer entry in the database. It includes various fields to store information such as the name, description, established date, type, image, and the number of favorites.

## Fields

**`name`** string (unique)

The name of the producer in English.

---

**`name_jpn`** string (unique)

The name of the producer in Japanese.

---

**`about`** text

A brief description about the producer.

---

**`established`** string

The date when the producer was established. This field is optional.

---

**`type`** string

The type of producer, with choices provided through the `TypeChoices` enumeration.

---

**`image`** image

The image representing the producer. The image is validated to be a `jpg` or `webp` file with a maximum size of 1 MB and dimensions of 600x600 pixels.

---

**`favorites`** integer

The number of times the producer has been marked as a favorite by users.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
