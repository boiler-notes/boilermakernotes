	
	var id="content";
		
	function initalizeStyle(){
		changeFont();
		changeSize();
		changeSpacing();
	}
	
	function resize()
        // function execute while load the iframe
        {
          var frame = document.getElementById("Iframe");
          // set the height of the iframe as 
          // the height of the iframe content
          frame.style.height = 
          (frame.contentWindow.document.body.scrollHeight + 50) + 'px';     
        }

	function changeFont(){
		  var frm=document.getElementById("Iframe").contentWindow
		  frm.document.getElementById(id).classList.remove("Handwritting");
		  frm.document.getElementById(id).classList.remove("Simple");
		  frm.document.getElementById(id).classList.remove("Coding");
		 
		  frm.document.getElementById(id).classList.add(document.getElementById("font").value);
		  resize();
		 	  
	}
	
	function changeSize(){
		  var frm=document.getElementById("Iframe").contentWindow
		  var val=document.getElementById("size").value;
		
		
		var tags=["h1","h2","h3","h4","h5","h6","p"]
		var counter=0
		for(var j = 0; j < tags.length; j++){
			var h1Elements = frm.document.getElementsByTagName(tags[j]);
			if(h1Elements.length==0){
				counter++;
			}
			for(var i = 0; i < h1Elements.length; i++) {
			   h1Elements[i].style.fontSize =((Math.sqrt(10)-Math.sqrt(j-counter+2))*(val))+"px";
			}
		}

		  resize();
		 	  
	}
	
	function changeSpacing(){
		  var frm=document.getElementById("Iframe").contentWindow;
		  var val=document.getElementById("space").value;
		
		
		var tags=["p","h1","h2","h3","h4","h5","h6"]
		for(var j = 0; j < tags.length; j++){
			var h1Elements = frm.document.getElementsByTagName(tags[j]);
			for(var i = 0; i < h1Elements.length; i++) {
			   h1Elements[i].style.lineHeight =(val*100) + '%';
			}
		}
		
		resize();
	}
	
	
	function printDiv() {
            var frm = document.getElementById("Iframe").contentWindow;
	    var con=frm.document.children[0].innerHTML;
            var a = window.open('', '', 'height=500, width=500');
            a.document.write(con);
            a.document.close();
            a.print();
        }
