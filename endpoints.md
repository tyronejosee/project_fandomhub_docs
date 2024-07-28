# Endpoints

## Animes

GET animes/
POST animes/
GET animes/{id}/
PUT animes/{id}/
PATCH animes/{id}/
DELETE animes/{id}/
GET animes/{id}/characters/
GET animes/{id}/news/
GET animes/{id}/pictures/
GET animes/{id}/recommendations/
GET animes/{id}/staff/
GET animes/{id}/stats/
GET animes/{id}/videos/
GET animes/{id}/reviews/
PATCH animes/{id}/reviews/{id}/
DELETE animes/{id}/reviews/{id}/
POST animes/{id}/reviews/create/

## Characters

GET characters/
POST characters/
GET characters/{id}/
PUT characters/{id}/
PATCH characters/{id}/
DELETE characters/{id}/
GET characters/members/

## Demographics

GET demographics/
POST demographics/
GET demographics/{id}/
PUT demographics/{id}/
PATCH demographics/{id}/
DELETE demographics/{id}/

## Genres

GET genres/
POST genres/
GET genres/{id}/
PUT genres/{id}/
PATCH genres/{id}/
DELETE genres/{id}/
GET genres/{id}/animes/
GET genres/{id}/mangas/

## Home

GET home/

## Magazines

GET magazines/
POST magazines/
GET magazines/{id}/
PUT magazines/{id}/
PATCH magazines/{id}/
DELETE magazines/{id}/

## Mangas

GET mangas/
POST mangas/
GET mangas/{id}/
PUT mangas/{id}/
PATCH mangas/{id}/
DELETE mangas/{id}/
GET mangas/{id}/characters/
GET mangas/{id}/news/
GET mangas/{id}/pictures/
GET mangas/{id}/recommendations/
GET mangas/{id}/stats/
GET mangas/{id}/reviews/
PATCH mangas/{id}/reviews/{id}/
DELETE mangas/{id}/reviews/{id}/
POST mangas/{id}/reviews/create/

## News

GET news/
POST news/
GET news/{id}/
PUT news/{id}/
PATCH news/{id}/
DELETE news/{id}/

## Persons

GET persons/
POST persons/
GET persons/{id}/
PUT persons/{id}/
PATCH persons/{id}/
DELETE persons/{id}/
POST persons/{id}/create-picture/
GET persons/{id}/mangas/
GET persons/{id}/pictures/
GET persons/{id}/voices/

## Playlists

GET playlists/animelist/
PATCH playlists/animelist/
GET playlists/animelist/animes/
POST playlists/animelist/animes/
GET playlists/animelist/animes/{item_id}/
PATCH playlists/animelist/animes/{item_id}/
DELETE playlists/animelist/animes/{item_id}/
GET playlists/mangalist/
PATCH playlists/mangalist/
GET playlists/mangalist/mangas/
POST playlists/mangalist/mangas/
GET playlists/mangalist/mangas/{item_id}/
PATCH playlists/mangalist/mangas/{item_id}/
DELETE playlists/mangalist/mangas/{item_id}/

## Producers

GET producers/
POST producers/
GET producers/{id}/
PUT producers/{id}/
PATCH producers/{id}/
DELETE producers/{id}/
GET producers/{id}/animes/

## Profiles

GET profiles/
POST profiles/
GET profiles/{id}/
PUT profiles/{id}/
PATCH profiles/{id}/
DELETE profiles/{id}/
GET profiles/my-profile/
PATCH profiles/update-profile/

## Random

GET random/anime/
GET random/character/
GET random/manga/
GET random/person/

## Recommendations

GET recommendations/anime/
GET recommendations/manga/

## Schedules

GET schedules/

## Seasons

GET seasons/{year}/{season}/
GET seasons/now/
GET seasons/upcoming/

## Socials

GET socials/o/{provider}/
POST socials/o/{provider}/

## Themes

GET themes/
POST themes/
GET themes/{id}/
PUT themes/{id}/
PATCH themes/{id}/
DELETE themes/{id}/

## Tokens

POST tokens/jwt/create/
POST tokens/jwt/refresh/
POST tokens/jwt/verify/

## Top

GET top/animes/
GET top/artists/
GET top/characters/
GET top/mangas/
GET top/reviews/

## Users

GET users/
POST users/
GET users/{id}/
PUT users/{id}/
PATCH users/{id}/
DELETE users/{id}/
GET users/{username}/about/
GET users/{username}/reviews/
POST users/activation/
GET users/me/
PUT users/me/
PATCH users/me/
DELETE users/me/
POST users/resend_activation/
POST users/reset_email/
POST users/reset_email_confirm/
POST users/reset_password/
POST users/reset_password_confirm/
POST users/set_email/
POST users/set_password/
