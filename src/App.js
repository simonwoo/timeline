import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import restletStudio from './restlet-studio.png';
import restletClient from './restlet-client.png';
import restletCloud from './restlet-cloud.png';
import dayu from './dayu.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div class="icon avatar" />
        <div class="name-and-title">
          <span class="name">WU CHONG</span>
          <span class="title">Full stack web developer</span>
        </div>
      </header>
      <Timeline lineColor={'#ddd'} className="app_timeline">
        <TimelineItem
          key="001"
          dateText="2015.03 - 2017.01"
          style={{ color: '#e86971' }}
        >
          <h3><a href="https://restlet.com/" style={{textDecoration: 'none', color: "#333"}}>Restlet</a></h3>
          <h4>前端开发工程师</h4>
          <div style={{margin: "20px 0"}}>
            <a href="https://studio.restlet.com/" style={{textDecoration:'none', color: "#888"}}>Restlet Studio</a>
            <img src={restletStudio} style={{width: "100%", paddingTop: 10}}/>
          </div>

          <div style={{margin: "20px 0"}}>
            <a href="https://restlet.com/modules/client/" style={{textDecoration:'none', color: "#888"}}>Restlet Client</a>
            <img src={restletClient} style={{width: "100%", paddingTop: 10}}/>
          </div>

          <div style={{margin: "20px 0"}}>
            <a href="https://restlet.com/modules/cloud/" style={{textDecoration:'none', color: "#888"}}>Restlet Cloud</a>
            <img src={restletCloud} style={{width: "100%", paddingTop: 10}}/>
          </div>
        </TimelineItem>

        <TimelineItem
          key="002"
          dateText="2017.02 - 2018.06"
          style={{ color: '#e86971' }}
        >
          <h3>阿里巴巴大鱼号</h3>
          <h4>前端开发工程师</h4>
          <div style={{margin: "20px 0"}}>
            <a href="https://mp.dayu.com/" style={{textDecoration:'none', color: "#888"}}>大鱼号（PC端和Mobile端）</a>
            <img src={dayu} style={{width: "100%", paddingTop: 10}}/>
          </div>
          <div style={{margin: "20px 0"}}>
            <a href="/" style={{textDecoration:'none', color: "#888"}}>大鱼号运营平台</a>
          </div>
          <div style={{margin: "20px 0"}}>
            <a href="/" style={{textDecoration:'none', color: "#888"}}>大鱼号C端</a>

          </div>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="2018.06 - 至今"
          style={{ color: '#e86971' }}
        >
          <h3>广发证券</h3>
          <h4>前端开发leader</h4>
          <div style={{margin: "20px 0"}}>
            <a href="/" style={{textDecoration:'none', color: "#888"}}>投研平台</a>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default App;
