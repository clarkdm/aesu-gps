create table course
(
	id bigint not null
		primary key
)
engine=MyISAM;

create table course_targets
(
	course_id bigint not null,
	targets_id bigint not null,
	primary key (course_id, targets_id),
	constraint UK_k3kqbea7g33od36p23em5fjr1
		unique (targets_id)
)
engine=MyISAM;

create table gps
(
	id bigint not null
		primary key,
	latitude float null,
	longitude float null
)
engine=MyISAM;

create table guess
(
	id bigint not null
		primary key,
	time_stamp datetime null,
	guess_id bigint null,
	target_id bigint null
)
engine=MyISAM;

create index FK6plmq7om7a5f9wrtug9knmne
	on guess (guess_id);

create index FKnvkk5x3fjacgpy6von2q778j8
	on guess (target_id);

create table hibernate_sequence
(
	next_val bigint null
)
engine=MyISAM;

create table run
(
	id bigint not null
		primary key,
	course_id bigint null,
	team_id bigint null
)
engine=MyISAM;

create index FK2c3x1xwsgrtson7sh3u8q74hp
	on run (course_id);

create index FKo24sxqtcv5m450dsc89ns8b25
	on run (team_id);

create table run_guess_set
(
	run_id bigint not null,
	guess_set_id bigint not null,
	primary key (run_id, guess_set_id),
	constraint UK_d3a72wuiuowpxvd7ig4kcul8v
		unique (guess_set_id)
)
engine=MyISAM;

create table team
(
	id bigint not null
		primary key
)
engine=MyISAM;

create table team_runs
(
	team_id bigint not null,
	runs_id bigint not null,
	primary key (team_id, runs_id),
	constraint UK_rqmb2h8xd45lmn6p4wagjkb80
		unique (runs_id)
)
engine=MyISAM;

