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

INSERT INTO tools (name, price) VALUES ('voice recorder', 32);
INSERT INTO tools (name, price) VALUES ('EMF detector', 60);
INSERT INTO tools (name, price) VALUES ('IR thermometer', 16);
INSERT INTO tools (name, price) VALUES ('motion sensor', 71);
INSERT INTO tools (name, price) VALUES ('spirit box', 130);


INSERT INTO ghosts (ghost_type,is_violent,name,address) VALUES ('poltergeist',FALSE,'Lizzie Hamer','012 Mckayla Prairie');
INSERT INTO ghosts (ghost_type,is_violent,name,address) VALUES ('demon',TRUE,'Monica Millard','02469 Johns Tunnel');
INSERT INTO ghosts (ghost_type,is_violent,name,address) VALUES ('phantom',FALSE,'Lianne Ryan','603 Muller Plaza');
INSERT INTO ghosts (ghost_type,is_violent,name,address) VALUES ('wraith',TRUE,'Gloria Eastwood','4047 Sipes Hills');
INSERT INTO ghosts (ghost_type,is_violent,name,address) VALUES ('shadow',FALSE,'Gemma Rowland','1546 Harris Points');

INSERT INTO users_tools (user_id, tool_id) VALUES (1, 1);
INSERT INTO users_tools (user_id, tool_id) VALUES (2, 2);
INSERT INTO users_tools (user_id, tool_id) VALUES (3, 3);
INSERT INTO users_tools (user_id, tool_id) VALUES (4, 4);
INSERT INTO users_tools (user_id, tool_id) VALUES (5, 3);
INSERT INTO users_tools (user_id, tool_id) VALUES (5, 4);
INSERT INTO users_tools (user_id, tool_id) VALUES (5, 5);

INSERT INTO users_ghosts (user_id, ghost_id) VALUES (1, 1);
INSERT INTO users_ghosts (user_id, ghost_id) VALUES (2, 2);
INSERT INTO users_ghosts (user_id, ghost_id) VALUES (3, 3);
INSERT INTO users_ghosts (user_id, ghost_id) VALUES (4, 4);
INSERT INTO users_ghosts (user_id, ghost_id) VALUES (5, 5);
