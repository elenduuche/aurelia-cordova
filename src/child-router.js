export class ChildRouter{
  heading = 'Child Router';

  configureRouter(config, router){
    config.map([
      { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',       name: 'flickr',       moduleId: './flickr',       nav: true, title:'Flickr' },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' },
      { route: 'download', name: 'download', moduleId: './download', nav: true, title:'Download' }
    ]);

    this.router = router;
  }
}
