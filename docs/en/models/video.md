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
