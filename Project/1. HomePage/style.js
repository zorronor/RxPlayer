var content = document.getElementById('slides');

  	// Insert image in an Array
    var img = ['../assets/1','../assets/2','../assets/3','../assets/4'];
    var x=img.length;

    // Auto image slider
    setInterval(nextImg , 4500);

    // Prew slide function
    function prewImg(){
		content.innerHTML = "<img src="+img[x-1]+".jpg>";
    	if (x>1 && x<img.length+1) {
    		x-=1;
    	}else{
    		x=img.length;
    	}
    }

    // Next slide function
    function nextImg(){
		content.innerHTML = "<img src="+img[x-1]+".jpg>";
    	if (x<img.length) {
    		x+=1;
    	}else{
    		x=1;
    	}
    }
  
