### Description

**jqmNavigator** is an extension for [jQuery Mobile](http://jquerymobile.com/) and [Backbone.js](http://backbonejs.org/) frameworks. It was inspired by [BackStack](https://github.com/pwalczyszyn/backstack) library which was inspired by [ViewNavigator API](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/spark/components/ViewNavigator.html) from the mobile SDK of the [Apache Flex framework](http://incubator.apache.org/flex/). It gives developers simple mechanizm to programatically manage jQueryMobile/BackBone pages/views, that can be pushed, popped, removed or replaced on a stack.

### Usage

Defining view is as simple as defining Backbone View:
```js

  var MyView = Backbone.View.extend({
    
    // jQM events like pageshow, pagehide handling
    events:{
      'pageshow':'this_pageshowHandler',
      'pagehide':'this_pagehideHandler'
    },
    
    render:function() {
      
      // Optionally it could be loaded from a template file, using for example RequrieJS text plugin
      var pageHTML = '<div data-role="header"><h1>jQM Header</h1></div>'
        + '<div data-role="content">Hello World!</div>';
      
      this.$el.html(pageHTML);
      
      return this;
    },
    
    this_pageshowHandler:function(event) {
      console.log('View was shown!');
    },
    
    this_pagehideHandler:function(event) {
      console.log('View was hidden!');
    }
    
  });


```

Pushing new view to the stack:

```js
$.mobile.jqmNavigator.pushView(new MyView());
```

Popping a view from the stack:

```js
$.mobile.jqmNavigator.popView();
```

Popping all views except the first one from the stack:

```js
$.mobile.jqmNavigator.popToFirst();
```

Replacing view on top of the stack:

```js
$.mobile.jqmNavigator.replaceView(new MyView2());
```

Replacing all views on the stack:

```js
$.mobile.jqmNavigator.replaceAll(new MyView2());
```

All functions above accept additional argument with transition options, these options are the same as options of [jQM changePage function](http://jquerymobile.com/demos/1.1.1/docs/api/methods.html):

```js
$.mobile.jqmNavigator.pushView(new MyView(), {reverse:true, transition:'slide'});
```


