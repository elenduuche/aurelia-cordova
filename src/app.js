import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia+Cordova';
    config.map([
      { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',       name: 'flickr',       moduleId: './flickr',       nav: true, title:'Flickr' },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' },
      { route: 'download', name: 'download', moduleId: './download', nav: true, title:'Download' },
    ]);

    this.router = router;
  }
}
