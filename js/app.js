require.config({
    paths: {
       'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
       'tmpl': 'tmpl'
    },
    shim: {
      'jquery': {
        exports: 'jQuery'
      },
      'tmpl': {
  			exports: 'tmpl'
  		}
    }

});

require(
  [
    'jquery',
    'tmpl',
    'model',
    'view',
    'controller'
  ],
  function($, tmpl, model, view, controller){
    // console.log("dd", model);
    // console.log('d1d', model);
    var initToDoList = ['Learn', 'Sleep'];
    var model = new Model(initToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);

  }




);
