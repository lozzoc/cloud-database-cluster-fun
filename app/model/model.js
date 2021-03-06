const {Movie,NodejsServerIdentity} = require("./schema")


function createBulkTags() {
    return `
     INSERT INTO tags (tagName) VALUES('movie');
     INSERT INTO tags (tagName) VALUES('cartoon');
     INSERT INTO tags (tagName) values('anime');
     INSERT INTO tags (tagName) values('horror');
     INSERT INTO tags (tagName) values('drama');
     INSERT INTO tags (tagName) values('for couples');
     INSERT INTO tags (tagName) values('anime');
     INSERT INTO tags (tagName) VALUES('funny');
     INSERT INTO tags (tagName) VALUES('feels good');
     INSERT INTO tags (tagName) values('food');
     INSERT INTO tags (tagName) values('porn');
     INSERT INTO tags (tagName) values('sports');
     INSERT INTO tags (tagName) values('evil');
     INSERT INTO tags (tagName) values('folklore');
     INSERT INTO tags (tagName) VALUES('robots');
     INSERT INTO tags (tagName) VALUES('social commentary');
     INSERT INTO tags (tagName) values('space');
     INSERT INTO tags (tagName) values('post-apocalyptic');
     INSERT INTO tags (tagName) values('love story');
     INSERT INTO tags (tagName) values('bad acting');
     INSERT INTO tags (tagName) VALUES('geeky');
     INSERT INTO tags (tagName) VALUES('live action');
     INSERT INTO tags (tagName) VALUES('marvel');
     INSERT INTO tags (tagName) VALUES('dc');
     INSERT INTO tags (tagName) VALUES('tv show');
     INSERT INTO tags (tagName) VALUES('great soundtrack');
    `
}

function createInsertMovieString(movie){
	if( movie.constructor.name !== "Movie" || movie.invalid){
        return undefined;
    }
	return {
		text:"INSERT INTO movies(epoch,year,title,episode,leecher,movie_size,filename) VALUES($1,$2,$3,$4,$5,$6,$7)  RETURNING movieId,title;",
		values: [movie.epoch,movie.year,movie.title,movie.episode,movie.leecher,movie.duration,movie.filename],
	}
}
function createInsertTVString(movie){
  return {
    text: "INSERT INTO tvshows(epoch,year,title,season,episode,leecher,movie_size,filename) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING movieId,title;",
    values: [movie.epoch,movie.year,movie.title,movie.season,movie.episode,movie.leecher,movie.duration,movie.filename],
  }
}

function createPiStatTimestampe(stats){
  return {
    text: `INSERT INTO CLUSTER_STATS(submask,cpuload,processuptime,date) VALUES($1,$2,$3,$4)`,
    values: [stats.submask,stats.load,parseInt(stats['process-uptime']), Date.now()]
  }
}

function createPiIdentityRecord(info){
  if(info.constructor.name == "NodejsServerIdentity" && !info.invalid){
    return {
      text: `INSERT INTO raspberrypis(submask,cpus,hostname,release,version,ostype,arch) VALUES($1,$2,$3,$4,$5,$6,$7)`,
      values: [info.submask,info.cpus,info.hostname,info.release,info.version,info.ostype,info.arch],
    }
  } else {
    return null;
  }

}

function createMovieTagLinksString(movieId,tagIds){
  return tagIds.map(function(tag){
    return {
        text: `INSERT INTO MoviesWithTag (tagId,movieId) values ($1,$2)`,
        values: [tag,movieId]
    }
  })

}

function createTVShowTagLinksString(movieId,tagIds){
  return tagIds.map(function(tag){
    return {
        text: `INSERT INTO TvShowsWithTag (tagId,movieId) values ($1,$2)`,
        values: [tag,movieId]
    }
  })

}
function createWatchHistoryItem(stats){
  const {subnet,movieid} = stats
  return {
    text: `INSERT INTO WatchHistory (nodeId,movieId,timestamp) values($1,$2,$3)`,
    values: [subnet,movieid,Date.now()]
  }
}
function selectPiByHostname(hostname){
  return {
    text: `SELECT * FROM raspberrypis WHERE submask=$1`,
    values: [hostname],
  }
}


/*
select movie ideas that contain all these tags

*/
function selectMovieIdsWithTags(andtags = [],tags,type){
    return `select movieId
        from ${type === 'movie' ? 'MoviesWithTag' : 'TvShowsWithTag'}
        where tagId in (${tags})
        group by movieId
        ${andtags.length > 0 ? `having array_agg(tagId) @> array[${andtags}];` : ';'}`;
}

/* movies is an array of movie ids and their crap
*/
function filterMovieids(movies,filter){
  let moviesDict = {}
  let items = []
  movies.forEach(function(movie){
      if(!moviesDict[movie.movieid]){
        moviesDict[movie.movieid] = {}
      }
      moviesDict[movie.movieid][`${movie.tagid}`] = true

  })

  Object.keys(moviesDict).forEach(function(key){
    let andcount = 0
    let orVerify = false
    filter.andtags.forEach(function(tag){
      if(moviesDict[key][`${tag}`]){
        andcount += 1;
      }
    })
    filter.ortags.forEach(function(tag){
      if(moviesDict[key][`${tag}`]){
        orVerify = true;
      }
    })

    if(andcount == filter.andtags.length && orVerify){
      items.push(key)
    }

  })
  console.log(moviesDict);

  return items
}

function selectMoviesByManyIds(movieids,type){
  return `SELECT *
  FROM ${type === 'movie' ? 'movies' : 'tvshows'}
   WHERE movieId IN (${movieids})`;
}

function selectTagIdsWithMovieId(movieId){
    return {
        text: `SELECT tagId from MoviesWithTag WHERE movieId=$1`,
        values: [movieId],
    }
}
function readAllTags() {
    return `SELECT * FROM tags;`
}
function readStatsOfAllPis(){
  return `SELECT * FROM CLUSTER_STATS;`
}

/* deprecated

function readAllMovies() {
    return `SELECT * FROM movies;`;
}
function readAllTaggedMovies() {
  return `SELECT * FROM MoviesWithTag;`
}

SELECT
   COUNT(*)
FROM
   table_name
*/
function readTVCount(){
  return `SELECT COUNT(*) FROM tvshows;`
}
function readTagCount() {
    return `SELECT COUNT(*)  FROM tags;`
}
function readMovieCount() {
    return `SELECT COUNT(*)  FROM movies;`;
}
function readTaggedMoviesCount() {
  return `SELECT COUNT(*) FROM MoviesWithTag;`
}

function readAllPiesInfo() {
  return `SELECT * FROM raspberrypis;`
}

function deleteTagFromAllTags(tag) {
    return {
        values: [tag],
        text: `DELETE FROM tags WHERE tagId=$1`
    }
}


module.exports = {
  createPiIdentityRecord,
  createPiStatTimestampe,
  selectPiByHostname,
  createWatchHistoryItem,
  createTVShowTagLinksString,
  readAllPiesInfo,
  readTVCount,
  createInsertTVString,
    createInsertMovieString,
    createMovieTagLinksString,
    createBulkTags,
    readAllTags,
    readTagCount,
    readMovieCount,
    readTaggedMoviesCount,
    readStatsOfAllPis,
    selectMovieIdsWithTags,
    selectMoviesByManyIds,
    selectTagIdsWithMovieId,
    deleteTagFromAllTags,
    filterMovieids,
}
