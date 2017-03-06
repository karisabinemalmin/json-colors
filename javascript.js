$.getJSON( "data.json", function( data ) {
  var items = [];
<<<<<<< HEAD
  $.each( data.colors, function( key, val ) {
    items.push( "<span class='color' id='" + key + "'>" + ' ' + '<div class="color__block" style="background: '+ this.hex +'">' + '</div><div class="color__name"><strong>' + this.color + '</strong><br>' + this.hex + '</div></span>' );
=======
  $.each( data, function( key, val ) {
    $.each( data.colors, function( key, val ) {
      items.push( "<span class='color' id='" + key + "'>" + ' ' + '<div class="color__block" style="background: '+ this.hex +'">' + '</div><div class="color__name"><strong>' + this.color + '</strong><br>' + this.hex + '</div></span>' );
    });
>>>>>>> parent of aab0281... fix
  });

  $( "<div/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
