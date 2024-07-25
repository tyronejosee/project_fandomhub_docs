# Endpoints

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus efficitur lorem, ac elementum orci bibendum id. Nullam accumsan auctor urna, a malesuada ex efficitur vel. Curabitur sit amet turpis vitae tortor viverra ultricies. Vestibulum vel orci eget libero faucibus bibendum non nec leo. Nam dapibus ante et magna vehicula, sit amet iaculis sapien posuere.

## User Management <Badge type="tip" text="Endpoint" />

- `POST /api/users/register` Register a new user.
- `POST /api/users/login` Authenticate a user and return a token.
- `GET /api/users/profile` Retrieve the authenticated user's profile.
- `PUT /api/users/profile` Update the authenticated user's profile.
- `POST /api/users/logout` Log out the authenticated user.

## Articles/Posts <Badge type="tip" text="Endpoint" />

- `GET /api/articles` Retrieve a list of articles.
- `POST /api/articles` Create a new article.
- `GET /api/articles/{id}` Retrieve a single article by ID.
- `PUT /api/articles/{id}` Update an article by ID.
- `DELETE /api/articles/{id}` Delete an article by ID.

## Comments <Badge type="tip" text="Endpoint" />

- `GET /api/articles/{id}/comments` Retrieve a list of comments for a specific article.
- `POST /api/articles/{id}/comments` Create a new comment for a specific article.
- `GET /api/comments/{id}` Retrieve a single comment by ID.
- `PUT /api/comments/{id}` Update a comment by ID.
- `DELETE /api/comments/{id}` Delete a comment by ID.

## Categories <Badge type="tip" text="Endpoint" />

- `GET /api/categories` Retrieve a list of categories.
- `POST /api/categories` Create a new category.
- `GET /api/categories/{id}` Retrieve a single category by ID.
- `PUT /api/categories/{id}` Update a category by ID.
- `DELETE /api/categories/{id}` Delete a category by ID.

## Tags <Badge type="tip" text="Endpoint" />

- `GET /api/tags` Retrieve a list of tags.
- `POST /api/tags` Create a new tag.
- `GET /api/tags/{id}` Retrieve a single tag by ID.
- `PUT /api/tags/{id}` Update a tag by ID.
- `DELETE /api/tags/{id}` Delete a tag by ID.

## Products (for e-commerce) <Badge type="tip" text="Endpoint" />

- `GET /api/products` Retrieve a list of products.
- `POST /api/products` Create a new product.
- `GET /api/products/{id}` Retrieve a single product by ID.
- `PUT /api/products/{id}` Update a product by ID.
- `DELETE /api/products/{id}` Delete a product by ID.

## Orders (for e-commerce) <Badge type="tip" text="Endpoint" />

- `GET /api/orders` Retrieve a list of orders.
- `POST /api/orders` Create a new order.
- `GET /api/orders/{id}` Retrieve a single order by ID.
- `PUT /api/orders/{id}` Update an order by ID.
- `DELETE /api/orders/{id}` Cancel an order by ID.

## Payments (for e-commerce) <Badge type="tip" text="Endpoint" />

- `POST /api/payments` Process a payment.
- `GET /api/payments/{id}` Retrieve payment details by ID.
