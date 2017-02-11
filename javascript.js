$.getJSON( "data.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    $.each( data.colors, function( key, val ) {
      items.push( "<span id='" + key + "'>" + ' ' + '<div style="padding: 1em; height: 3em; background: '+ this.hex +'">' + '</div><div style="padding: 1em;">' + this.color + '<br>' + this.hex + '</div></span>' );
    });
  });

  $( "<div/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
