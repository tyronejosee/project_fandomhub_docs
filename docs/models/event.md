# Event <Badge type="danger" text="model" />

The Event model represents an event organized by a club. It includes fields to store information about the club, name, description, and date of the event.

## Fields

**`club_id`** foreign key

The club organizing the event. This is a foreign key relationship with the Club model and is limited to clubs that are available.

---

**`name`** string

The name of the event.

---

**`description`** text

A detailed description of the event.

---

**`date`** datetime

The date and time of the event.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
