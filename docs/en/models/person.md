# Person <Badge type="danger" text="model" />

The Person model represents an individual associated with the anime industry, such as a voice actor, director, or other staff. It includes various fields to store information about the person's name, image, alternate names, birthday, biographical details, website, language, category, and favorites count.

## Fields

**`name`** string

The unique name of the person.

---

**`given_name`** string

The given name (first name) of the person. This field is optional.

---

**`family_name`** string

The family name (last name) of the person. This field is optional.

---

**`image`** image

The profile image of the person. It must be a JPG or WEBP file, with a maximum size of 1 MB and dimensions not exceeding 1080x1080 pixels. This field is optional.

---

**`alternate_names`** JSON

A list of alternative names for the person. This field is optional.

---

**`birthday`** date

The birth date of the person. This field is optional.

---

**`about`** text

A biographical description of the person. This field is optional.

---

**`website`** URL

The personal or professional website of the person. This field is optional.

---

**`language`** string

The language primarily spoken by the person. The default value is Japanese, and it can be one of the choices defined in `LanguageChoices`.

---

**`category`** string

The category of the person's role in the industry, such as voice actor or director. It is one of the choices defined in `CategoryChoices`.

---

**`favorites`** positive integer

The number of users who have marked this person as a favorite. The default value is 0.
