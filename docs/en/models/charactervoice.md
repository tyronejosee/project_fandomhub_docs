# CharacterVoice <Badge type="danger" text="model" />

The CharacterVoice model represents the relationship between a character and its voice actor. It includes references to both the character and the voice actor.

## Fields

**`character_id`** foreign key

A foreign key to the Character model, limited to characters marked as available.

---

**`voice_id`** foreign key

A foreign key to the Person model, limited to voice actors marked as available.
