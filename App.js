import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { TastingIntro } from './components/TastingIntro';
import { TastingNotes } from './components/TastingNotes';
import { WhiskeyTypes } from './components/WhiskeyTypes';
import { WhiskeyDetails} from './components/WhiskeyDetails';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/TastingIntro' component={TastingIntro} />
        <Route path='/TastingNotes' component={TastingNotes} />
        <Route path='/WhiskeyTypes' component={WhiskeyTypes} />
        <Route path='/WhiskeyDetails' component={WhiskeyDetails} />
      </Layout>
    );
  }
}
