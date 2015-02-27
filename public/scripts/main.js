console.log('access to main.js');

// do a possible constructor for confirmations
// 



$(function() {

	$('button').on('click',function(e) {
		e.preventDefault();
		console.log('clicked');

		// var renderCountries = function(data){

		// 		var countryInfo = $('<ul class="countryInfo"></ul>');
		// 				var name = $('<li>').text("name:  " + data.name);
		// 				var frenchName = $('<li class="frenchName">').text("french name  " +data.frenchName);
		// 				var localName =$('<li class="localName">').text("local name: " +data.localName) ;
		// 				var region =$('<li class="region">').text("region: " +data.region) ;
		// 				countryInfo.append(name,frenchName,localName,region);
		// 				return countryInfo
		// 		}

		$.get('/countries',function(data){
			console.log('data',data);
			$('.countries-div').empty().append(data.map(function(data){
						// console.log('data',data);
						var countryInfo = $('<ul class="countryInfo"></ul>');
						var name = $('<li>').text("name:  " + data.name);
						var frenchName = $('<li class="frenchName">').text("french name  " +data.frenchName);
						var localName =$('<li class="localName">').text("local name: " +data.localName) ;
						var region =$('<li class="region">').text("region: " +data.region);
						var hasVisited = $("<a href=# class='hasVisited'><i class='glyphicon glyphicon-ok-circle'></i></a>");
						var notVisited = $('<a href=# class="notVisited"><i class="glyphicon glyphicon-remove"></i></a>')
						countryInfo.append(name,frenchName,localName,region,hasVisited,notVisited);
						return countryInfo
				}))

		})


	})  // end of submit on button

		$('.submission').on('click',function(e) {
				e.preventDefault();
				// console.log('test');
				$.post('/search', {name: $('.countrySearch').val()},function(data) {
						console.log(data);
						$('.countries-div').empty().append(data.map(function(data) {
							
						var countryInfo = $('<ul class="countryInfo"></ul>');
						var name = $('<li>').text("name:  " + data.name);
						var frenchName = $('<li class="frenchName">').text("french name  " +data.frenchName);
						var localName =$('<li class="localName">').text("local name: " +data.localName) ;
						var region =$('<li class="region">').text("region: " +data.region);
						var hasVisited = $("<iclass='glyphicon glyphicon-ok-circle hasVisited'></i>")
						countryInfo.append(name,frenchName,localName,region,hasVisited);
						return countryInfo
						}))

				})
		});
	

});
// end of doc on ready