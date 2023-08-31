console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log(response);
    renderKoalas();
  }).catch(function(error){
    console.log('error in GET', error);
  });
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: newKoala,
    }).then(function(response) {
      console.log('Response from server.', response);
      getKoalas();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add koala at this time. Please try again later.');
    });
}

function renderKoalas(koalas){
  $('#viewKoalas').empty();
  for(let koala of koalas) {
    let $newRow=$(`
    <tr>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.readyForTransfer}</td>
      <td>${koala.notes}</td>
    </tr>
    `);
    $newRow.data('id', koalas.id);
    $('#viewKoalas').append($newRow);
  }
};
