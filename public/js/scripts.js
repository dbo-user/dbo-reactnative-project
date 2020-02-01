
  $(function() {
    
    
    // Using this to get the vertical side nav to work
    $('a.js-scroll-trigger').on('click', function(event) {

      event.preventDefault();
  
      // Make sure this.hash id is just from the vertcal sidenav
      if (this.hash === "#about" || this.hash === "#experience" || this.hash === "#education"){
          
        // Store hash id for the next scrollTop method
        var hash = this.hash;
        
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top-130 // vertical top position - 180 so not all the way to the top
        }, 800, function(){
            // The optional number (800) is the number of milliseconds it takes to scroll
            //window.location.hash = hash;
            //window.scrollBy(0, -70);
        }); // end
         

      }; // end if
      if (this.hash === "#skills") {
        // Store hash id for the next scrollTop method
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top+20 // vertical top position - 180 so not all the way to the top
        }, 800, function(){
            // The optional number (800) is the number of milliseconds it takes to scroll
        }); // end

      }; // end if

      if (this.hash === "#interests") {
        // Store hash id for the next scrollTop method
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top-30 // vertical top position - 180 so not all the way to the top
        }, 800, function(){
            // The optional number (800) is the number of milliseconds it takes to scroll
        }); // end

      }; // end if

    }); // end on click

    
  }); // end function ready
