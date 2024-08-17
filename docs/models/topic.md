# Topic <Badge type="danger" text="model" />

The Topic model represents a discussion topic within a club. It includes fields to store information about the name, club, and the user who created the topic.

## Fields

**`name`** string

The name of the topic.

---

**`club_id`** foreign key

The club to which the topic belongs. This is a foreign key relationship with the Club model and is limited to clubs that are available.

---

**`created_by`** foreign key

The user who created the topic. This is a foreign key relationship with the User model and is limited to users who are available. It allows null values and sets the user to null if they are deleted.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
