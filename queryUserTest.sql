

CREATE TABLE USERTEST (
	id	integer PRIMARY KEY,
	name	varchar(40) NOT NULL,
	lastname	varchar(40) NOT NULL,
	email	varchar(40),
	encryptedPassword	varchar(100)
);

select * from userTest
