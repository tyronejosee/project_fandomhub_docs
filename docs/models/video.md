# Video <Badge type="danger" text="model" />

The `Video` model represents a video entry in the database. It includes fields to store the content type, object ID, and the video URL.

## Fields

**`content_type`** integer

A foreign key to the `ContentType` model, limited to specific models (anime, manga).

---

**`object_id`** UUID

The UUID of the related object.

---

**`content_object`** GenericForeignKey

A generic foreign key linking the video to the content type and object ID.

---

**`video`** string

The URL of the video.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
