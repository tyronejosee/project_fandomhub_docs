# Club <Badge type="danger" text="model" />

The Club model represents a club entity in the database. It includes various fields to store information such as the name, description, image, category, number of members, creator, and public status.

## Fields

**`name`** string

The name of the club.

---

**`description`** text

A detailed description of the club.

---

**`image`** image

An optional image representing the club. Allowed file types are jpg, png, and webp, with a maximum size of 1 MB and dimensions of 600x600 pixels.

---

**`category`** string

The category of the club. It is a choice field with predefined options.

---

**`members`** positive integer

The number of members in the club. Default value is 0.

---

**`created_by`** one-to-one field

The user who created the club. This is a one-to-one relationship with the User model and is limited to users who are available.

---

**`is_public`** boolean

Indicates whether the club is public or not.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
