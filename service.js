function Service() {
  var copy = {}
  var url = "http://pokeapi.co/api/v2/pokemon/"
  var next = ''
  var previous = ''

  this.getPokemon = function () {

    return new Promise(function (resolve, reject) {
			try {
				$.get(url)
					.done(function (data) {
            next = data.next
            previous = data.previous
						resolve(data.results);
					})
					.catch(function (error) {
						reject(error);
					});
			}
			catch (error) {
				console.log(error);
				reject(error);
			}
		})};

  this.goNext = function () {
   debugger
    return new Promise(function (resolve, reject) {
			try {
				$.get(next)
					.done(function (data) {
            next = data.next
            previous = data.previous
						resolve(data.results);
					})
					.catch(function (error) {
						reject(error);
					});
			}
			catch (error) {
				console.log(error);
				reject(error);
			}
		})};


  this.goPrevious = function () {
  
    return new Promise(function (resolve, reject) {
			try {
				$.get(previous)
					.done(function (data) {
            next = data.next
            previous = data.previous
						resolve(data.results);
					})
					.catch(function (error) {
						reject(error);
					});
			}
			catch (error) {
				console.log(error);
				reject(error);
			}
		})};

}