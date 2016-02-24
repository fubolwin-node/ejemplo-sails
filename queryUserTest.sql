
-- drop table fwuser;
CREATE TABLE FWUSER (
	id SERIAL PRIMARY KEY,
	name varchar(40),
	lastname varchar(40),
	username varchar(40) NOT NULL,
	email varchar(40) NOT NULL,
	password varchar(100),
	"createdAt" timestamp with time zone,
	"updatedAt" timestamp with time zone
);
select * from fwuser;

CREATE TABLE bet (
	userId varchar(40),
	event varchar(100)
);

