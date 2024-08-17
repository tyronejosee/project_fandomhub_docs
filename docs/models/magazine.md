# Magazine <Badge type="danger" text="model" />

The `Magazine` model represents a magazine entry in the database. It includes fields to store information such as the name of the magazine and the count of issues.

## Fields

**`name`** string

The name of the magazine.

---

**`count`** integer

The number of issues of the magazine.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
