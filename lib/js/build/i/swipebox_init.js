$(document).ready(function(){$(".swipebox").swipebox(),$(".swipebox-video").swipebox(),$("#gallery").click(function(e){e.preventDefault(),$.swipebox([{href:"http://swipebox.csag.co/mages/image-1.jpg",title:"My Caption"},{href:"http://swipebox.csag.co/images/image-2.jpg",title:"My Second Caption"}])})});