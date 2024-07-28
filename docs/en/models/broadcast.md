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
