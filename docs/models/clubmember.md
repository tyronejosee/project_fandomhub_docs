# ClubMember <Badge type="danger" text="model" />

The ClubMember model represents a member of a club. It includes fields to store information about the club, user, and the date they joined.

## Fields

**`club_id`** foreign key

The club to which the member belongs. This is a foreign key relationship with the Club model and is limited to clubs that are available.

---

**`user_id`** foreign key

The user who is a member of the club. This is a foreign key relationship with the User model and is limited to users who are available.

---

**`joined_at`** datetime

The date and time when the user joined the club. This field is auto-populated when a record is created.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
