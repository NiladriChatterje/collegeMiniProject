create table user(
    user_id int(4) primary key,
    user_email varchar(40) not null unique,
    user_psw varchar(40) not NULL,
    user_ph int(12) not NULL UNIQUE   
)
INSERT INTO user values
(0001,'cniladri415@gmail.com',niladri2000,9330038859)


create user_event(
    user_id int(4) REFERENCES user(user_id),
    event_status varchar(20) NOT NULL UNIQUE,
    timestamp DATETIME NOT NULL,
    purpose varchar(150) NOT NULL,
    amount DOUBLE(10,2)    
);

/*
--total amount to be displayed in event page
SELECT SUM(amount) FROM user_event
WHERE user_id = <?>;

--total amount per event and store in an array to display a pie chart
SELECT SUM(amount) FROM user_event WHERE user_id=<?>
GROUP BY event_status;

--delete a record from an event
DELETE FROM user_event WHERE timestamp = <?>;--need to be formatted in JS before query
*/