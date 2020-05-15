<!-- Javascript Source Code NTANTA 25/2/2020 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


<script>
function PreSaveAction(){
	
	// Get Values of Current Title	    
    var Title_Form = document.getElementById('Code_$TextField').value;
    
    // Get Ticket Type Choice Field
    var Ticket_Type_Form = document.getElementById('Code_$DropDownChoice');
    var Ticket_Type_Form_Selected = Ticket_Type_Form.options[Ticket_Type_Form.selectedIndex].text;
    
    // Get Task Type Choice Field
    var Task_Type_Form = document.getElementById('Code_$DropDownChoice');
    var Task_Type_Form_Selected = Task_Type_Form.options[Task_Type_Form.selectedIndex].text;
    
    //  Get Next Action Choice Field
    var Next_Action_Form = document.getElementById('Code_$DropDownChoice');
    var Next_Action_Form_Selected =  Next_Action_Form.options[Next_Action_Form.selectedIndex].text;

	// control variable  
    var save = false;
	
	// AJAX CALL TO GET THE ELEMENTS Of "Workflow_Rule" LIST
	$.ajax({ 
		url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Workflow_Rules')/Items?", 
		type: "GET", 
		cache: true,
        async: false,
		headers: {"accept": "application/json;odata=verbose"}, 
		success: function (data) { 
			if (data.d.results) {  
				for (var i=0;i<data.d.results.length;i++){
					var Title="";
					var Ticket_Type = data.d.results[i].Ticket_Type;				
					var Task_Type = data.d.results[i].Task_Type;
					var Next_Action = data.d.results[i].Next_Action;
					if (!Title)
					{
						Title = "-"
					}
					
					if ( Ticket_Type_Form_Selected == Ticket_Type && Task_Type_Form_Selected == Task_Type && Next_Action_Form_Selected == Next_Action) {
						
						console.log('Rule found');
					    save = true; 
					    						
					}
					
					else {
						
						console.log('Rule not found yet');	
						save = false;	
						
					} 
						
				 }	         
			  } 
		   },
		
		   complete:function(data) {
		   
		   },
		   
		   error: function (xhr) {
			   
		   } 
		});	

	return control;
}
</script>


