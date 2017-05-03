function Controller() {
  var service = new Service();

  this.getPokemon = function () {
    service.getPokemon()
      .then(function (data) {
        draw(data);
      })
      .catch(function (error) {
        console.log('Caught: ', error);
      });
  }

  this.goNext = function () {
    service.goNext()
      .then(function (data) {
        draw(data);
      })
      .catch(function (error) {
        console.log('Caught: ', error);
      });
  }

  this.goPrevious = function () {
    service.goPrevious()
      .then(function (data) {
        draw(data);
      })
      .catch(function (error) {
        console.log('Caught: ', error);
      });
  }

  function draw(pokemon) {
    var template = ''
    var elem = document.getElementById("container")
    for (var i = 0; i < pokemon.length; i++) {
      template += `
        <h1>${pokemon[i].name}</h1>
        `
    }
    return elem.innerHTML = template
  }


  function failed() {
    var elem = document.getElementById("errors")
    elem.innerHTML = ""
  }




}