# Theme <Badge type="danger" text="model" />

The Theme model represents a theme entry in the database. It includes a field to store the name of the theme and uses a custom manager for theme-specific queries.

## Fields

**`name`** string

The name of the theme.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.