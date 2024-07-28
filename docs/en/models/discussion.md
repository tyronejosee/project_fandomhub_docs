# Discussion <Badge type="danger" text="model" />

The Discussion model represents a discussion within a topic. It includes fields to store information about the topic, content of the discussion, and the user who created the discussion.

## Fields

**`topic_id`** foreign key

The topic to which the discussion belongs. This is a foreign key relationship with the Topic model and is limited to topics that are available.

---

**`content`** text

The content of the discussion.

---

**`created_by`** foreign key

The user who created the discussion. This is a foreign key relationship with the User model and is limited to users who are available. It allows null values and sets the user to null if they are deleted.
