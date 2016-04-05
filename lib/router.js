Router.route('/',  {
  name: 'home',
  template: 'bodytemp'
});

Router.route('vote', {
    template: 'vote',
    data: function () {
      var params = this.params;

      var queryStringParams = this.params.query;

      //console.log('voteid: ' + this.params.query.voteid);

      var data = {images: MyImages.find({owner: this.params.query.voteid}).fetch()};
      
      return data;
    }
    //action: function () {
    //  Session.set("ip", this.request.connection.remoteAddress);
    //}
});