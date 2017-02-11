$.getJSON( "data.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<span class='color' id='" + key + "'>" + ' ' + '<div class="color__block" style="background: '+ this.hex +'">' + '</div><div class="color__name"><strong>' + this.color + '</strong><br>' + this.hex + '</div></span>' );
  });

  $( "<div/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
