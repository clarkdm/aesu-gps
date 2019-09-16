create table gps
(
	id bigint auto_increment ,
	latitude bigint default 0 not null,
	longitude bigint default 0 not null,
	constraint gps_pk
		primary key (id)
);