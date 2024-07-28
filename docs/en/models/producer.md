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
