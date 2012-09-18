### Description

**jqmNavigator** is an extension for [jQuery Mobile](http://jquerymobile.com/) and [Backbone.js](http://backbonejs.org/) frameworks. It was inspired from [BackStack](https://github.com/pwalczyszyn/backstack) which was inspired from [ViewNavigator API](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/spark/components/ViewNavigator.html) from the mobile SDK of the [Apache Flex framework](http://incubator.apache.org/flex/). It gives developers simple mechanizm to manage HTML/BackBone views, that can be pushed, popped, removed or replaced on a stack.

### Usage

Defining view is as simple as defining Backbone View:
```js

  var MyView = Backbone.View.extend({
    
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
      console.log('View was pushed to the stack!');
    },
    
    this_pagehideHandler:function(event) {
      console.log('View was popped of the stack!');
    }
    
  });


```

Pushing new view:

```js
$.mobile.jqmNavigator.pushView(new MyView());
```


