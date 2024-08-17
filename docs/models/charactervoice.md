# CharacterVoice <Badge type="danger" text="model" />

The CharacterVoice model represents the relationship between a character and its voice actor. It includes references to both the character and the voice actor.

## Fields

**`character_id`** foreign key

A foreign key to the Character model, limited to characters marked as available.

---

**`voice_id`** foreign key

A foreign key to the Person model, limited to voice actors marked as available.

---

**`created_at`** datetime

The date and time when the character was first created. This field is automatically populated when the entry is initially saved.

---

**`updated_at`** datetime

The date and time of the last update. This field is automatically refreshed each time the entry is modified and saved.

---

**`is_available`** boolean

Indicates is available or not. The default value is `True`.
