import React from 'react'
import {connect} from "react-redux"
import { createBrowserHistory } from "history";
import {BottomNavigation,BottomNavigationAction,Grid} from '@mui/material';
import {Restore} from '@mui/icons-material'
import ExploreIcon from '@mui/icons-material/Explore';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import MovieSearchCard from "./components/MovieSearchCard"
import PlainHtml5Viewr from "./components/PlainHtml5Viewr"
import RaspberryStatsView from "./components/RaspberryStatsView"
import {setTagsAction,setPiHistoryAction} from "../actions"
import { css } from '@emotion/css'
import TopLevelMirrorStyles from "./style/mirror.js"
const Navbar = props => {
  let history = useHistory();

   return (
     <BottomNavigation
       showLabels
       value={"Recents"}
       onChange={(event, newValue) => {
         if(newValue === 0){
           history.push("/server")
         }
         else{
           history.push("/movies")
         }
       }}
       >
       <BottomNavigationAction label="Server" icon={<Restore />} />
       <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
     </BottomNavigation>
   )
}

const MiorrorNavBar = (props) => {
  const host = window.location.host;
  const mirrorContainer=css`
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: row;
  `;
  const selectedButtonStyle = css`
  border-color: 'green';
  `;
  const unselectedButtonStyle = css`
  border-color: #121212;
  background: 'white';
  `;

  // const mirrorButtonSelectedStyle=css`
  // `;
  let mirrors = ["10.0.0.114","10.0.0.92","10.0.0.237"]

  return (
    <div className={TopLevelMirrorStyles}>
      <p>MIRRORS</p>
      <div className={`${mirrorContainer} container`}>
        <button
          className={`btn play-pause ${host.includes('localhost:3000') ? selectedButtonStyle : unselectedButtonStyle}`}
          onClick={function(){
            window.location.href = 'http://localhost:3000';
          }}
          key={'http://localhost:3000'}
          >
          <div className="icon-container">
          <p>Dev Mirror</p>
          </div>
        </button>

        {mirrors.map(function(url,index){
          console.log(url);
          return (
            <button
              onClick={function(){ window.location.href = `http://${url}` }}
              key={url}
              className="btn play-pause">
            {host.includes(url) && <button className="btn play-pause">
          		<div className={`icon-container ${selectedButtonStyle}`}>
          			<p>Selected</p>
          		</div>
            </button>}
          	{!host.includes(url)	&& <div className={`icon-container ${unselectedButtonStyle}`}>
                <button>
                  Mirror {index+1}
                </button>
          		</div>}
              </button>
            )
        })}
    </div>
  </div>
  )
}

class Dashboard extends React.Component {
  constructor(){
    super()
    this.state = {
      tags: [],
      isLoadingCommercial: false,
      history: createBrowserHistory()
    }
    this.setValue = this.setValue.bind(this)
    this.handleLoadTags = this.handleLoadTags.bind(this)
    this.handleLoadPiHistory = this.handleLoadPiHistory.bind(this)
  }
  componentDidMount() {
    this.handleLoadTags()
    this.handleLoadPiHistory()
    this.handleLoadUserHistory()
    this.state.history.push("/movies")
  }

  render(){
    return (
      <Router history={this.state.history}>
      <div style={{height:"100%"}}>
      {/*row  bottom /inset top inset?*/}
      <MiorrorNavBar />
      <Navbar />


      <Route path="/server">
        <RaspberryStatsView />
      </Route>

      <Route path="/movies">
        <Grid container spacing={2} sx={{ height: '85%' }}>
          <Grid item xs={4}>
              {/*Column*/}<PlainHtml5Viewr />
          </Grid>
          <Grid item xs={8}>
            {/*browse menu, to find other files */}<MovieSearchCard />
          </Grid>
          <Grid item xs={12}>
            {/*explore the current epoch selecte and related items, if none there than suggest random items*/}
          </Grid>
        </Grid>
      </Route>

      </div>
      </Router>
    )
  }


  setValue(v){

  }

  handleLoadRelatedContent(movie){

  }
  handleLoadUserHistory(){
    // const userRecentItems = sessionStorage.getItem("Watch History")
  }
  handleLoadPiHistory(){
    const self = this;
    fetch('/api/getAllPiStats')
    .then(res => res.json())
    .then(function(data){
      self.props.setPiHistory(data)
    })
    .catch(function(e){
      console.log(e);
    })
  }
  handleLoadTags(){
    const self = this;
    fetch("/api/tags")
    .then(res => res.json())
    .then(function(res){
      self.props.setTags(res)
    })
    .catch(function(e){
      console.log(e);
    })
  }
}

function mapDispatchToProps(dispatch){
  return {
    setPiHistory: (history) => dispatch(setPiHistoryAction(history)),
    setTags: (tags) => dispatch(setTagsAction(tags)),
    setRelatedContent: (key,content) => dispatch({type:"RELATEDCONTENT"}),
  }
}

export default connect(null,mapDispatchToProps)(Dashboard)
