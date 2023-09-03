create table user(
    user_id int(4) primary key,
    user_email varchar(40) not null unique,
    user_psw varchar(40) not NULL,
    user_ph int(12) not NULL UNIQUE   
)

create user_event(
    user_id int(4) REFERENCES user(user_id),
    
)