import React  from "react";
function Contact(){
    return(
        <div>
            <div class="container-f">
		<h1> CONTACT US </h1>
		<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
			 Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
			Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem.</p>
	   <div class="form-row">					 		
				   <div class="form-col">
						   <div class="form-form">
							   <div class="name">
								   <div class="form-name">
									   <input type="text" placeholder="your name"/>
								   </div>
								   <div class="form-name">
									   <input  type="email"  placeholder="your Email"/>
								   </div>
							   </div>
							   <div class="form-subject">
									   <input type="text"  placeholder="subject"/>
							   </div>
									
							   <div class="form-subject">
								   <textarea placeholder="Message"></textarea>
							   </div>
							   <div class="form-button">
								   <button>Send Message</button>								
							   </div>	
						   </div>
				   </div>
				   
	   </div>
</div> 

        </div>
    )
}
export default Contact ;
