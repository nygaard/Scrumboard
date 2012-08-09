$('document').ready(init);
  function init(){
    $('article').bind('dragstart', function(event) {
      event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
  });
   // bind the dragover event on the board sections
  $('td.toDo, td.inProgress, td.inTest, td.done').bind('dragover', function(event) {
    event.preventDefault();
  });
  
  // bind the drop event on the board sections
  $('td.toDo, td.inProgress, td.inTest, td.done').bind('drop', function(event) {
      var notecard = event.originalEvent.dataTransfer.getData("text/plain");
      event.target.appendChild(document.getElementById(notecard));
      
      
     var status = event.target.getAttribute('class');
      
      var caseID = notecard;
      var caseID = caseID.split("-")[1];
      console.log(caseID+'-'+status);
      
      // Turn off the default behaviour
      // without this, FF will try and go to a URL with your id's name
      event.preventDefault();
  });
}
$("table").stickyTableHeaders();
