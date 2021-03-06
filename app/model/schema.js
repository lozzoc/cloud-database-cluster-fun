function createMoviesTable() {
return `DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
epoch varchar(50) NOT NULL,
episode int NOT NULL,
title varchar(256) NOT NULL,
year int NOT NULL,
leecher varchar(30),
filename varchar(200) NOT NULL,
movieId SERIAL PRIMARY KEY,
movie_size bigint NOT NULL);`
}

function createTvShowTable() {
return `DROP TABLE IF EXISTS tvshows;
CREATE TABLE tvshows (
epoch varchar(50) NOT NULL,
season int,
episode int NOT NULL,
title varchar(256) NOT NULL,
year int NOT NULL,
leecher varchar(30),
filename varchar(200) NOT NULL,
movieId SERIAL PRIMARY KEY,
movie_size bigint NOT NULL);`
}

function createPiStatsTable(){
  return `DROP TABLE IF EXISTS CLUSTER_STATS;
  CREATE TABLE CLUSTER_STATS (
    submask varchar(16) NOT NULL,
    cpuload varchar(16) NOT NULL,
    processuptime bigint NOT NULL,
    date bigint NOT NULL
  );`
}
function createPiIdentityTable(){
  return `DROP TABLE IF EXISTS raspberrypis;
  CREATE TABLE raspberrypis (
    submask varchar(16) NOT NULL PRIMARY KEY,
    cpus  varchar(256),
    hostname varchar(128),
    release varchar(255),
    version varchar(255),
    ostype varchar(64),
    arch varchar(32)
  );`
}

function createWatchHistoryTable(){
  return `DROP TABLE IF EXISTS WatchHistory;
  CREATE TABLE WatchHistory(
    nodeId varchar(16) NOT NULL,
    movieId int NOT NULL,
    timestamp bigint NOT NULL
  );`
}

function createTagsTable() {
    return `DROP TABLE IF EXISTS tags;
    CREATE TABLE tags (
    tagId SERIAL PRIMARY KEY,
    tagName varchar(25))`;
}



function createMovieTagsRelationshipsTable() {
    return `DROP TABLE IF EXISTS MoviesWithTag;
    CREATE TABLE MoviesWithTag (
    tagId int,
    movieId int)`;
}

function createTVTagsRelationshipsTable() {
    return `DROP TABLE IF EXISTS TvShowsWithTag;
    CREATE TABLE TvshowsWithTag (
    tagId int,
    movieId int)`;
}
//will need to index both of these columns because the unique identifier is [tagId,movieId]

/*indexes on items that contain the tag movie or tvshow
 availibe tags and their frequency used hitlist
 */



 class NodejsServerIdentity {
   constructor(data) {
     ["submask", "cpus", "hostname", "release", "version", "ostype", "arch"]
     .forEach((name) => {
       if(!data[name]){
         this.invalid = true;
       }
     })
     if(this.invalid){
       return
     }
     const {submask, cpus, hostname, release, version, ostype, arch} = data;
     this.submask = submask
     this.cpus = cpus;
     this.hostname = hostname;
     this.release = release;
     this.version = version;
     this.ostype = ostype;
     this.arch = arch;
   }
 }

/*
 epoch: a reoccuring substring that links together other strings.
        Some movies will intersect upon the same epoch.
 season: int
 episode: int, maybe some series dont have season but they have episodes.. whataver
 title: name of item
 filename: full path of item
 duration: minutes whole number

 */
class Movie {
	constructor(data){
        const {year,publisher,epoch,season,episode,title,filename,duration} = data;
        this.epoch = epoch;
        this.title = title;
        this.filename = filename;
        this.duration = parseInt(duration);
        this.episode = parseInt(episode);
        this.season = season ? parseInt(season) : null;
        this.leecher = publisher
        this.year = parseInt(year);
        this.season = null;

        if(season){
          this.season = season
        }


        //checking if invalid
        this.invalid = !epoch || !title || !filename || !duration || !episode
    }
}

module.exports = {
  createTvShowTable,
  createPiStatsTable,
  createWatchHistoryTable,
  createPiIdentityTable,
    createMoviesTable,
    createTagsTable,
    createMovieTagsRelationshipsTable,
    createTVTagsRelationshipsTable,
    Movie,
    NodejsServerIdentity,
}
