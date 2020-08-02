var id=prompt("Enter the name of student");
var sub1=Number(prompt("Enter the mark of subject 1"));
var sub2=Number(prompt("Enter the mark of subject 2"));
var sub3=Number(prompt("Enter the mark of subject 3"));
var tot=Number(sub1+sub2+sub3);
alert("Total marks obtained"+tot);
if(tot>145){
    alert(id+"-Your grade is A+");}
else if((tot>140) & (tot<145)){
    alert(id+"-Your grade is A");}
else if((tot>135) & (tot<=140)){
    alert(id+"-Your grade is B+");}
else{
    alert("Failed");}