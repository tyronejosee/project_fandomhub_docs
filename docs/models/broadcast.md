# Broadcast <Badge type="danger" text="model" />

The `Broadcast` model represents the broadcast details for a show. It includes fields to store the broadcast string, day, time, and timezone.

## Fields

**`string`** string

A custom string associated with the broadcast.

---

**`day`** string

The day of the week when the broadcast occurs. Choices are provided through the `DayChoices` enumeration.

---

**`time`** time

The time of day when the broadcast occurs.

---

**`timezone`** string

The timezone for the broadcast time. Choices are provided through the `TimezoneChoices` enumeration, with a default value of `JST`.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
