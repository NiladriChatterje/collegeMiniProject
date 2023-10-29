create or replace DATABASE expense_tracker;
use expense_tracker;
create table
    user(
        user_id int(4) primary key auto_increment,
        user_name varchar(20) not null,
        user_email varchar(40) not null unique,
        user_psw varchar(40) not NULL,
        user_ph BIGINT(12) not NULL UNIQUE
    );
INSERT INTO user
values (
        0001,
        'Niladri',
        'cniladri415@gmail.com',
        'niladri2000',
        9330038859
    );

create table user_event(
    user_id int(4) REFERENCES user(user_id),
    event_status varchar(20) NOT NULL,
    timestamp varchar(20) NOT NULL,
    purpose varchar(150) NOT NULL,
    amount DOUBLE(10, 2)
);
alter table user_event modify event_status varchar(20) not null;
/*
INSERT INTO user_event VALUES(1,'restaurant','2023-04-19 13:08:22','China town restaurant',600.50);
*/
/*
 --total amount to be displayed in event page
 SELECT SUM(amount) FROM user_event
 WHERE user_id = <?>;
 
 --total amount expendenture on every month
 SELECT SUM(amount) FROM user_event GROUP BY MONTH(timestamp);
 
 --total amount per event and store in an array to display a pie chart
 SELECT SUM(amount) FROM user_event WHERE user_id=<?>
 GROUP BY event_status;
 
 --INSERT INTO user FROM registration modal
 INSERT INTO user VALUES(user_id,user_email,user_psw,user_ph);
 

--credentials
select user_name from user where user_email=<?> AND user_psw=<?>;

 --delete a record from an event
 DELETE FROM user_event WHERE timestamp = <?>;--need to be formatted in JS before query
 */

 --ALTER table user AUTO_INCREMENT=001;
