--Ski Resort database
drop schema if exists reservation cascade;
CREATE SCHEMA reservation;

DROP table if exists reservation.activities cascade;

CREATE TABLE reservation.activities (
	activity_id bigserial NOT NULL,
	lift_tickets int4 NULL,
	trail_users int4 NULL,
	price double precision NULL,
	CONSTRAINT activities_pk PRIMARY KEY (activity_id)
);

DROP table if exists reservation.group_books cascade;

CREATE TABLE reservation.group_books (
	group_id bigserial NOT NULL,
	item_id varchar(255) NULL,
	quantity int4 null,
	CONSTRAINT groupbook_pk PRIMARY KEY (group_id)
);

DROP table if exists reservation.individualbook cascade;

CREATE TABLE reservation.individualbook (
	individual_id bigserial NOT NULL,
	group_id bigserial NOT NULL,
	activity_id int8 NULL,
	quantity int4 null,
	constraint individualbook_pk primary key (individual_id)
);

DROP table if exists reservation.people cascade;

CREATE TABLE reservation.people (
	person_id bigserial NOT NULL,
	first_name varchar NULL,
	last_name varchar NULL,
	home_address varchar NULL,
	skill varchar NULL,
	birthday varchar NULL,
	group_id int8 NOT NULL,
	CONSTRAINT people_pk PRIMARY KEY (person_id)
);

DROP table if exists reservation.reservation cascade;

CREATE TABLE reservation.reservation (
	reservation_id bigserial NOT NULL,
	num_adults int4 NOT NULL,
	num_children int4 NULL,
	num_rooms int4 NULL,
	room1_type varchar NULL,
	room1_size varchar NULL,
	room2_type varchar NULL,
	room2_size varchar NULL,
	price float8 NULL,
	total_price double precision NULL,
	CONSTRAINT reservation_pk PRIMARY KEY (reservation_id)
);

DROP table if exists reservation.services cascade;

CREATE TABLE reservation.services (
	service_id bigserial NOT NULL,
	ski_rentals int4 NULL,
	snowboard_rentals int4 NULL,
	spaday_pkg int4 NULL,
	spamassage_pkg int4 NULL,
	couples_pkg int4 NULL,
	warmup_pkg int4 NULL,
	daycare_children int4 NULL,
	price double precision null,
	constraint services_pk primary key (service_id)
);

ALTER TABLE reservation.individualbook ADD CONSTRAINT individualbook_fk FOREIGN KEY 
	(individual_id) REFERENCES reservation.people(person_id);

ALTER TABLE reservation.individualbook ADD CONSTRAINT individualbook_fk_group FOREIGN KEY 
	(group_id) REFERENCES reservation.group_books(group_id);

drop table if exists reservation.inventory cascade;

CREATE TABLE reservation.inventory(
id bigserial not null ,
rentalName varchar,
price float,
typeRental varchar,
CONSTRAINT inventory_pk PRIMARY KEY (id)
);

INSERT INTO reservation.inventory
(rentalname, price, typerental)
VALUES('Mountain Queen Deluxe', 100.00, 'Room');
INSERT INTO reservation.inventory
(rentalname, price, typerental)
VALUES('Mountain Queen', 100.00, 'Room');
INSERT INTO reservation.inventory
(rentalname, price, typerental)
VALUES('Mountain King Suit Deluxe', 200.00, 'Room');
INSERT INTO reservation.inventory
(rentalname, price, typerental)
VALUES('Mountain King Suit', 200.00, 'Room');
INSERT INTO reservation.inventory
(rentalname, price, typerental)
VALUES('NonMountain Queen Deluxe', 50.00, 'Room');
INSERT INTO reservation.inventory
(rentalname, price, typerental)
VALUES('NonMountain Queen', 50.00, 'Room');

select * from reservation.inventory;
select * from reservation.group_books;
