Router.route('/',  {
  name: 'home',
  template: 'bodytemp'
});

Router.route('vote', {
    template: 'vote',
    data: function () {
      // the data function is an example where this.params is available

      // we can access params using this.params
      // see the below paths that would match this route
      var params = this.params;

      // we can access query string params using this.params.query
      var queryStringParams = this.params.query;

      console.log('voteid: ' + this.params.query.voteid);

      var data = {images: MyImages.find({owner: this.params.query.voteid}).fetch()};
      // query params are added to the 'query' object on this.params.
      // given a browser path of: '/?task_name=abcd1234
      // this.params.query.task_name => 'abcd1234'
      return data;
    }
  });