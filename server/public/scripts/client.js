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
      Name: $('#nameIn').val(),
      Age: $('#ageIn').val(),
      Gender: $('#genderIn').val(),
      Transfer_Status: $('#readyForTransferIn').val(),
      Notes: $('#notesIn').val(),
    };
    console.log(koalaToSend);
    // call saveKoala with the new object
    $('#nameIn').val(''),
    $('#ageIn').val(''),
    $('#genderIn').val(''),
    $('#readyForTransferIn').val(''),
    $('#notesIn').val(''),
    saveKoala(koalaToSend);
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
    renderKoalas(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
} // end getKoalas

function saveKoala(newKoala){
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
  for(let koala of koalas){
  // for (let i = 0; i <koalas.length; i++) {
  //   let koala = koalas[i];
      console.log(koala)
    let $newRow=$(`
    <tr>
      <td>${koala.Name}</td>
      <td>${koala.Age}</td>
      <td>${koala.Gender}</td>
      <td>${koala.Transfer_Status}</td>
      <td>${koala.Notes}</td>
      <td><button id="updateBtn">Ready for Transfer</button></td>
    </tr>
    `);
    $newRow.data('id', koalas.id);
    $('#viewKoalas').append($newRow);
  }
};
