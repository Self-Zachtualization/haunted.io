DELETE FROM users;
DELETE FROM tools;
DELETE FROM ghosts;
DELETE FROM users_tools;
DELETE FROM users_ghosts;

INSERT INTO users (username) VALUES ('SodaGhost');
INSERT INTO users (username) VALUES ('ProfHunter');
INSERT INTO users (username) VALUES ('ParanormalHunting');
INSERT INTO users (username) VALUES ('spiritedaway');
INSERT INTO users (username) VALUES ('teaChicken');

-- INSERT INTO tools (name, price) VALUES ('voice recorder', 32);
-- INSERT INTO tools (name, price) VALUES ('EMF detector', 60);
-- INSERT INTO tools (name, price) VALUES ('IR thermometer', 16);
-- INSERT INTO tools (name, price) VALUES ('motion sensor', 71);
-- INSERT INTO tools (name, price) VALUES ('spirit box', 130);


INSERT INTO ghosts (ghost_type,is_violent,name,address,user_id) VALUES ('poltergeist',FALSE,'Lizzie Hamer','012 Mckayla Prairie',1);
INSERT INTO ghosts (ghost_type,is_violent,name,address,user_id) VALUES ('demon',TRUE,'Monica Millard','02469 Johns Tunnel',2);
INSERT INTO ghosts (ghost_type,is_violent,name,address,user_id) VALUES ('phantom',FALSE,'Lianne Ryan','603 Muller Plaza',3);
INSERT INTO ghosts (ghost_type,is_violent,name,address,user_id) VALUES ('wraith',TRUE,'Gloria Eastwood','4047 Sipes Hills',4);
INSERT INTO ghosts (ghost_type,is_violent,name,address,user_id) VALUES ('shadow',FALSE,'Gemma Rowland','1546 Harris Points',5);

-- INSERT INTO users_tools (user_id, tool_id) VALUES (1, 1);
-- INSERT INTO users_tools (user_id, tool_id) VALUES (2, 2);
-- INSERT INTO users_tools (user_id, tool_id) VALUES (3, 3);
-- INSERT INTO users_tools (user_id, tool_id) VALUES (4, 4);
-- INSERT INTO users_tools (user_id, tool_id) VALUES (5, 3);
-- INSERT INTO users_tools (user_id, tool_id) VALUES (5, 4);
-- INSERT INTO users_tools (user_id, tool_id) VALUES (5, 5);

-- INSERT INTO users_ghosts (user_id, ghost_id) VALUES (1, 1);
-- INSERT INTO users_ghosts (user_id, ghost_id) VALUES (2, 2);
-- INSERT INTO users_ghosts (user_id, ghost_id) VALUES (3, 3);
-- INSERT INTO users_ghosts (user_id, ghost_id) VALUES (4, 4);
-- INSERT INTO users_ghosts (user_id, ghost_id) VALUES (5, 5);
