# Endpoints

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus efficitur lorem, ac elementum orci bibendum id. Nullam accumsan auctor urna, a malesuada ex efficitur vel. Curabitur sit amet turpis vitae tortor viverra ultricies. Vestibulum vel orci eget libero faucibus bibendum non nec leo. Nam dapibus ante et magna vehicula, sit amet iaculis sapien posuere.

## Animes <Badge type="tip" text="Endpoint" />

- `GET /api/animes/` Retrieve a list of animes.
- `POST /api/animes/` Create a new anime.
- `GET /api/animes/{id}/` Retrieve a single anime by ID.
- `PUT /api/animes/{id}/` Update an anime by ID.
- `PATCH /api/animes/{id}/` Partially update an anime by ID.
- `DELETE /api/animes/{id}/` Delete an anime by ID.
- `GET /api/animes/{id}/characters/` Retrieve a list of characters for a specific anime.
- `GET /api/animes/{id}/news/` Retrieve news related to a specific anime.
- `GET /api/animes/{id}/pictures/` Retrieve pictures for a specific anime.
- `GET /api/animes/{id}/recommendations/` Retrieve recommendations for a specific anime.
- `GET /api/animes/{id}/staff/` Retrieve staff information for a specific anime.
- `GET /api/animes/{id}/stats/` Retrieve statistics for a specific anime.
- `GET /api/animes/{id}/videos/` Retrieve videos for a specific anime.
- `GET /api/animes/{id}/reviews/` Retrieve reviews for a specific anime.
- `PATCH /api/animes/{id}/reviews/{id}/` Partially update a review by ID.
- `DELETE /api/animes/{id}/reviews/{id}/` Delete a review by ID.
- `POST /api/animes/{id}/reviews/create/` Create a new review for a specific anime.

## Characters <Badge type="tip" text="Endpoint" />

- `GET /api/characters/` Retrieve a list of characters.
- `POST /api/characters/` Create a new character.
- `GET /api/characters/{id}/` Retrieve a single character by ID.
- `PUT /api/characters/{id}/` Update a character by ID.
- `PATCH /api/characters/{id}/` Partially update a character by ID.
- `DELETE /api/characters/{id}/` Delete a character by ID.
- `GET /api/characters/members/` Retrieve a list of character members.

## Demographics <Badge type="tip" text="Endpoint" />

- `GET /api/demographics/` Retrieve a list of demographics.
- `POST /api/demographics/` Create a new demographic.
- `GET /api/demographics/{id}/` Retrieve a single demographic by ID.
- `PUT /api/demographics/{id}/` Update a demographic by ID.
- `PATCH /api/demographics/{id}/` Partially update a demographic by ID.
- `DELETE /api/demographics/{id}/` Delete a demographic by ID.

## Genres <Badge type="tip" text="Endpoint" />

- `GET /api/genres/` Retrieve a list of genres.
- `POST /api/genres/` Create a new genre.
- `GET /api/genres/{id}/` Retrieve a single genre by ID.
- `PUT /api/genres/{id}/` Update a genre by ID.
- `PATCH /api/genres/{id}/` Partially update a genre by ID.
- `DELETE /api/genres/{id}/` Delete a genre by ID.
- `GET /api/genres/{id}/animes/` Retrieve a list of animes associated with a specific genre.
- `GET /api/genres/{id}/mangas/` Retrieve a list of mangas associated with a specific genre.

## Home <Badge type="tip" text="Endpoint" />

- `GET /api/home/` Retrieve the home information.

## Magazines <Badge type="tip" text="Endpoint" />

- `GET /api/magazines/` Retrieve a list of magazines.
- `POST /api/magazines/` Create a new magazine.
- `GET /api/magazines/{id}/` Retrieve a single magazine by ID.
- `PUT /api/magazines/{id}/` Update a magazine by ID.
- `PATCH /api/magazines/{id}/` Partially update a magazine by ID.
- `DELETE /api/magazines/{id}/` Delete a magazine by ID.

## Mangas <Badge type="tip" text="Endpoint" />

- `GET /api/mangas/` Retrieve a list of mangas.
- `POST /api/mangas/` Create a new manga.
- `GET /api/mangas/{id}/` Retrieve a single manga by ID.
- `PUT /api/mangas/{id}/` Update a manga by ID.
- `PATCH /api/mangas/{id}/` Partially update a manga by ID.
- `DELETE /api/mangas/{id}/` Delete a manga by ID.
- `GET /api/mangas/{id}/characters/` Retrieve a list of characters for a specific manga.
- `GET /api/mangas/{id}/news/` Retrieve news related to a specific manga.
- `GET /api/mangas/{id}/pictures/` Retrieve pictures for a specific manga.
- `GET /api/mangas/{id}/recommendations/` Retrieve recommendations for a specific manga.
- `GET /api/mangas/{id}/stats/` Retrieve statistics for a specific manga.
- `GET /api/mangas/{id}/reviews/` Retrieve reviews for a specific manga.
- `PATCH /api/mangas/{id}/reviews/{id}/` Partially update a review by ID.
- `DELETE /api/mangas/{id}/reviews/{id}/` Delete a review by ID.
- `POST /api/mangas/{id}/reviews/create/` Create a new review for a specific manga.

## News <Badge type="tip" text="Endpoint" />

- `GET /api/news/` Retrieve a list of news articles.
- `POST /api/news/` Create a new news article.
- `GET /api/news/{id}/` Retrieve a single news article by ID.
- `PUT /api/news/{id}/` Update a news article by ID.
- `PATCH /api/news/{id}/` Partially update a news article by ID.
- `DELETE /api/news/{id}/` Delete a news article by ID.

## Persons <Badge type="tip" text="Endpoint" />

- `GET /api/persons/` Retrieve a list of persons.
- `POST /api/persons/` Create a new person.
- `GET /api/persons/{id}/` Retrieve a single person by ID.
- `PUT /api/persons/{id}/` Update a person by ID.
- `PATCH /api/persons/{id}/` Partially update a person by ID.
- `DELETE /api/persons/{id}/` Delete a person by ID.
- `POST /api/persons/{id}/create-picture/` Create a new picture for a specific person.
- `GET /api/persons/{id}/mangas/` Retrieve a list of mangas associated with a specific person.
- `GET /api/persons/{id}/pictures/` Retrieve pictures for a specific person.
- `GET /api/persons/{id}/voices/` Retrieve voice information for a specific person.

## Playlists <Badge type="tip" text="Endpoint" />

- `GET /api/playlists/animelist/` Retrieve the anime list from playlists.
- `PATCH /api/playlists/animelist/` Update the anime list in playlists.
- `GET /api/playlists/animelist/animes/` Retrieve a list of animes in the anime list.
- `POST /api/playlists/animelist/animes/` Add a new anime to the anime list.
- `GET /api/playlists/animelist/animes/{item_id}/` Retrieve a specific anime item by ID from the anime list.
- `PATCH /api/playlists/animelist/animes/{item_id}/` Partially update a specific anime item by ID in the anime list.
- `DELETE /api/playlists/animelist/animes/{item_id}/` Delete a specific anime item by ID from the anime list.
- `GET /api/playlists/mangalist/` Retrieve the manga list from playlists.
- `PATCH /api/playlists/mangalist/` Update the manga list in playlists.
- `GET /api/playlists/mangalist/mangas/` Retrieve a list of mangas in the manga list.
- `POST /api/playlists/mangalist/mangas/` Add a new manga to the manga list.
- `GET /api/playlists/mangalist/mangas/{item_id}/` Retrieve a specific manga item by ID from the manga list.
- `PATCH /api/playlists/mangalist/mangas/{item_id}/` Partially update a specific manga item by ID in the manga list.
- `DELETE /api/playlists/mangalist/mangas/{item_id}/` Delete a specific manga item by ID from the manga list.

## Producers <Badge type="tip" text="Endpoint" />

- `GET /api/producers/` Retrieve a list of producers.
- `POST /api/producers/` Create a new producer.
- `GET /api/producers/{id}/` Retrieve a single producer by ID.
- `PUT /api/producers/{id}/` Update a producer by ID.
- `PATCH /api/producers/{id}/` Partially update a producer by ID.
- `DELETE /api/producers/{id}/` Delete a producer by ID.
- `GET /api/producers/{id}/animes/` Retrieve a list of animes associated with a specific producer.

## Profiles <Badge type="tip" text="Endpoint" />

- `GET /api/profiles/` Retrieve a list of profiles.
- `POST /api/profiles/` Create a new profile.
- `GET /api/profiles/{id}/` Retrieve a single profile by ID.
- `PUT /api/profiles/{id}/` Update a profile by ID.
- `PATCH /api/profiles/{id}/` Partially update a profile by ID.
- `DELETE /api/profiles/{id}/` Delete a profile by ID.
- `GET /api/profiles/my-profile/` Retrieve the authenticated user's profile.
- `PATCH /api/profiles/update-profile/` Update the authenticated user's profile.

## Random <Badge type="tip" text="Endpoint" />

- `GET /api/random/anime/` Retrieve a random anime.
- `GET /api/random/character/` Retrieve a random character.
- `GET /api/random/manga/` Retrieve a random manga.
- `GET /api/random/person/` Retrieve a random person.

## Recommendations <Badge type="tip" text="Endpoint" />

- `GET /api/recommendations/anime/` Retrieve anime recommendations.
- `GET /api/recommendations/manga/` Retrieve manga recommendations.

## Schedules <Badge type="tip" text="Endpoint" />

- `GET /api/schedules/` Retrieve a list of schedules.

## Seasons <Badge type="tip" text="Endpoint" />

- `GET /api/seasons/{year}/{season}/` Retrieve specific season information.
- `GET /api/seasons/now/` Retrieve the current season information.
- `GET /api/seasons/upcoming/` Retrieve upcoming season information.

## Socials <Badge type="tip" text="Endpoint" />

- `GET /api/socials/o/{provider}/` Retrieve social information by provider.
- `POST /api/socials/o/{provider}/` Authenticate with a social provider.

## Themes <Badge type="tip" text="Endpoint" />

- `GET /api/themes/` Retrieve a list of themes.
- `POST /api/themes/` Create a new theme.
- `GET /api/themes/{id}/` Retrieve a single theme by ID.
- `PUT /api/themes/{id}/` Update a theme by ID.
- `PATCH /api/themes/{id}/` Partially update a theme by ID.
- `DELETE /api/themes/{id}/` Delete a theme by ID.

## Tokens <Badge type="tip" text="Endpoint" />

- `POST /api/tokens/jwt/create/` Create a new JWT token.
- `POST /api/tokens/jwt/refresh/` Refresh the JWT token.
- `POST /api/tokens/jwt/verify/` Verify the JWT token.

## Top <Badge type="tip" text="Endpoint" />

- `GET /api/top/animes/` Retrieve a list of top animes.
- `GET /api/top/artists/` Retrieve a list of top artists.
- `GET /api/top/characters/` Retrieve a list of top characters.
- `GET /api/top/mangas/` Retrieve a list of top mangas.
- `GET /api/top/reviews/` Retrieve a list of top reviews.

## Users <Badge type="tip" text="Endpoint" />

- `GET /api/users/` Retrieve a list of users.
- `POST /api/users/` Create a new user.
- `GET /api/users/{id}/` Retrieve a single user by ID.
- `PUT /api/users/{id}/` Update a user by ID.
- `PATCH /api/users/{id}/` Partially update a user by ID.
- `DELETE /api/users/{id}/` Delete a user by ID.
- `GET /api/users/{username}/about/` Retrieve information about a specific user.
- `GET /api/users/{username}/reviews/` Retrieve reviews by a specific user.
- `POST /api/users/activation/` Activate a user account.
- `GET /api/users/me/` Retrieve the authenticated user's information.
- `PUT /api/users/me/` Update the authenticated user's information.
- `PATCH /api/users/me/` Partially update the authenticated user's information.
- `DELETE /api/users/me/` Delete the authenticated user's account.
- `POST /api/users/resend_activation/` Resend activation email.
- `POST /api/users/reset_email/` Reset user email.
- `POST /api/users/reset_email_confirm/` Confirm email reset.
- `POST /api/users/reset_password/` Reset user password.
- `POST /api/users/reset_password_confirm/` Confirm password reset.
- `POST /api/users/set_email/` Set user email.
- `POST /api/users/set_password/` Set user password.
