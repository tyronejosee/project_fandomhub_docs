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
