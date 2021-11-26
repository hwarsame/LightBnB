const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'hamza',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool
    .query(`SELECT * FROM users WHERE email = $1`, [email.toLowerCase()])
    .then((result) => {
      const user = result.rows[0]
      if (user){
        return (user)
      }
        return(null)
        })
        .catch((err) => {
      console.log(err.message);
    });

}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool
    .query(`SELECT * FROM users WHERE id = $1`, [id])
    .then((result) => {
      const user = result.rows[0]
      if (user) {
        return (user)
      }
        return(null)
        })
    .catch((err) => {
      console.log(err.message);
    });

}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  return pool
   .query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`, [user.name, user.email.toLowerCase(), user.password])
   .then((result) => result.rows[0])
   .catch((err) => {
    console.log(err.message);
  });
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  // return getAllProperties(null, 2);
  return pool
    .query(`SELECT  * 
            FROM reservations 
            JOIN properties ON property_id = properties.id 
            WHERE reservations.guest_id = $1
            AND reservations.start_date > now()::date
            ORDER BY reservations.start_date
            LIMIT $2`, [guest_id, limit])
    .then((result) => result.rows)
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllProperties = (options, limit = 10) => {
const queryParams = [];
// 2
let queryString = `
SELECT properties.*, avg(property_reviews.rating) as average_rating
FROM properties
JOIN property_reviews ON properties.id = property_id
`;

// My Listings App Implementation
if (options.owner_id) {
  queryParams.push(`${options.owner_id}`);
  queryString += `WHERE owner_id = $${queryParams.length}  `;
}

// Filters Implementation
if (options.city) {
  queryParams.push(`%${options.city}%`);
  queryString += `WHERE city LIKE $${queryParams.length} `;
}

if (options.minimum_price_per_night) {
  if(queryParams.length>0) {
    queryParams.push(`${options.minimum_price_per_night * 100}`); // In dollars
    queryString += `AND cost_per_night > $${queryParams.length} `;
  } else {
    queryParams.push(`${options.minimum_price_per_night * 100}`); // In dollars
    queryString += `WHERE cost_per_night > $${queryParams.length} `;
  }
}

if (options.maximum_price_per_night) {
  if(queryParams.length>0) {
    queryParams.push(`${options.maximum_price_per_night * 100}`); // In dollars
    queryString += `AND cost_per_night < $${queryParams.length} `;
  } else {
    queryParams.push(`${options.maximum_price_per_night * 100}`); // In dollars
    queryString += `WHERE cost_per_night < $${queryParams.length} `;
  }
}

queryString += `GROUP BY properties.id `;

if (options.minimum_rating) {
  queryParams.push(`${options.minimum_rating}`);
  queryString += `HAVING avg(property_reviews.rating) >= $${queryParams.length}  `;
}

queryParams.push(limit);
queryString += `ORDER BY cost_per_night 
LIMIT $${queryParams.length};`;

// // 5
console.log(queryString, queryParams);

// 6
return pool
.query(queryString, queryParams).then((res) => res.rows);
};

exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function({owner_id, title, description,
  thumbnail_photo_url, cover_photo_url, cost_per_night,
  street, city, province, post_code, country,
  parking_spaces, number_of_bathrooms, number_of_bedrooms}) {
  const str = `
  INSERT INTO properties (owner_id, title, description,
    thumbnail_photo_url, cover_photo_url, cost_per_night,
    street, city, province, post_code, country,
    parking_spaces, number_of_bathrooms, number_of_bedrooms)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  RETURNING *;`;
  const values = [owner_id, title, description,
    thumbnail_photo_url, cover_photo_url, cost_per_night,
    street, city, province, post_code, country,
    parking_spaces, number_of_bathrooms, number_of_bedrooms];
    
  return pool
    .query(str, values)
    .then(result => result.rows[0])
    .catch((err) => {
      console.log(err.message)
    });
}
exports.addProperty = addProperty;
