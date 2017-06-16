// this is setting the var body global show it will access the DOM
var $button= $('#button');
var $input= $('#input')
var intel= [];
var $body = $('#body');
//this is the template for the var paper to loop and print
var newsTemplate = "" +
    "<div style='background-color: lightblue; color: black;''>" +
    "<div style='background-color: lightblue; color: black; '<p>{{author}}</p></div>" +
    "<div style='background-color: lightblue; color: black; '<p>{{description}}</p></div>" +
    "<div style='background-color: lightblue; color: black; '<p>{{publishedAt}}</p></div>" +
    "<div style='background-color: lightblue; color: black; '<p>{{title}}</p></div>" +
    //this gets the imgs from the web page
    "</div>" +
    "<div <a href='{{url}}' class='container'><img src='{{urlToImage}}' style='width:1000px; position:relative; left: 10%;'/></a>";
 
    // empty array to call the function addNews
var paper= [];
   function addNews(news){
      $body.append(Mustache.render(newsTemplate,news));
   }
//when doc is ready do this function on success print news = var paper
$(document).ready(function(){
	var API ='ab46ac13d5e8476b99c5a8d492a867dd'
	$.ajax({
		type:'GET',
		url: 'https://newsapi.org/v1/articles?source=new-york-magazine&sortBy=top&apiKey='+API,
			success: function(news){
				console.log(news)
				intel=news.articles
				//this is calling the empty var paper = addNews
				paper =news
				// this is looping for each news article print 
				$.each(news.articles,function(i, news){
					// addNews(news);
				});
			},

			// this will catch any error and give an alert box
			error:function(){
				alert('error loading friends')
			}
		});
	$('#button').on('click',function(){
		var articleNumber= $('#input').val()
		addNews(intel[articleNumber])
	
	})

	});
		
	
			
		


