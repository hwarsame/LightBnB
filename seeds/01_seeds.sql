-- USERS information --


INSERT INTO users (name, email, password) VALUES ('Eva Stanley', 'sebastianguerra@ymail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );
INSERT INTO users (name, email, password) VALUES ('Louisa Meyer', 'jacksonrose@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );
INSERT INTO users (name, email, password) VALUES ('Dominic Parks', 'victoriablackwell@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );
INSERT INTO users (name, email, password) VALUES (' Sue Luna', ' jasonvincent@gmx.com', ' $2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );
INSERT INTO users (name, email, password) VALUES ('Rosalie Garza', 'jacksondavid@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );
INSERT INTO users (name, email, password) VALUES ('Etta West ', 'charlielevy@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );
INSERT INTO users (name, email, password) VALUES ('Margaret Wong', 'makaylaweiss@icloud.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );
INSERT INTO users (name, email, password) VALUES ('Leroy Hart', 'jaycereynolds@inbox.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.' );


-- Properties populating information

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) 
VALUES ('1', 'Speed lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 930, 6, 4, 8, 'Canada','536 Namsub Highway', 'Sotboske', 'Quebec', 28142, TRUE );
INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) 
VALUES ('2', 'Blank corner ', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 85234, 6, 6, 7, 'Canada', '651 Nami Road ', 'Bohbatev', 'Alberta', 83680, TRUE);
INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) 
VALUES ('3', 'Habit mix', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 46058, 0, 5, 6, 'Canada', '1650 Hejto Center', 'Genwezuj', 'Newfoundland And Labrador', 44583, TRUE);

-- Reservations populating information

INSERT INTO reservations (start_date, end_date, property_id, guest_id)  VALUES ( '2018-09-11', '2018-09-26', 1, 2);
INSERT INTO reservations (start_date, end_date, property_id, guest_id)  VALUES ( '2019-01-04', '2019-02-01', 2, 3);
INSERT INTO reservations (start_date, end_date, property_id, guest_id)  VALUES ( '2021-10-01', '2021-10-14', 3, 4);


-- Property reviews populating information 

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES  ( 2, 1, 3, 3, 'so bad dont go there !');
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES  ( 3, 2, 2, 4, 'pretty bas service dont really recommened');
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES  ( 4, 3, 1, 8, 'great, good time with the family');


