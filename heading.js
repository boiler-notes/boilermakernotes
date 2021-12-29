function isActive(name){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page==name+".html"){
		return " active";
	}
	else
	{
		if(page =="" && name=="index.html")
		{
			return " active";
		}
		else
		{
			return "";
		}
	}
}

function loadHeader() {

	let names =[
		["CS",159],
		["MA",261],
		["ENGR",133]
		];
	 var nav='<div class="header">\n\
				Boilermaker Notes\n\
			</div>\n\
			<div id="navbar">\n\
				<a class="'+isActive("index")+'" href="index.html">Home</a>\n\
				<a class="'+isActive("find")+'" href="find.html">Find</a>\n\
				<div class="dropdown">\n\
					<button class="dropbtn">\n\
						Classes \n\
						<i class="fa fa-caret-down"></i>\n\
					</button>\n\
					<div class="dropdown-content">'
		for (var i=0;i<names.length;i++){
			nav+='<a href="'+names[i][0]+'_'+names[i][1]+'_page.html">'+names[i][0]+' '+names[i][1]+'</a></br>';
		}
		nav+='</div>\n\
			</div> \n\
			<a class="'+isActive("donate")+'" href="donate.html">Donate</a>\n\
			</div>';	 
	 document.getElementsByTagName("header")[0].innerHTML = nav; 
} 
