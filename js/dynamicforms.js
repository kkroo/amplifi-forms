var personal_details =
{
	"firstname" :"Omar",
	"lastname"  :"Ramadan",
	"emailid"   :"email@domainname.com",
	"jobprofile":"Research Assistant",
	"location"  :"San Francisco bay Area",
	"mobile"    :"+91-9876543210"
};

var skills=[
            
            {
            	"language_known":"Java"
            },
            {
            	"language_known":"C++"
            },
            {
            	"language_known":"oracle"
            },
            {
            	"language_known":"c"
            },
            {
            	"language_known":"phython"
            }
            
            ];

        for(var i=0;i<skills.length;i++)
        	{
        	document.getElementById("KnownSkills").innerHTML+="<a class='bg_fff data_skil  border_ccc' id='"+"skills"+i+"' onclick=\"editskills('"+"skills"+i+"')\" >"+skills[i].language_known+"</a>"
        	}
        
      var experience =
      [
       
       {
    	   "companyname" :"Barklays",
    	   "jobprofile"  :"Software Developer",
    	   "period"      :"12/Aug/2008 to 19/september/2010"
       },
       {
    	   "companyname" :"IBM",
    	   "jobprofile"  :"Senior Software Developer",
    	   "period"      :"24/September/2010 to 26/December/2012"
       },
       {
    	   "companyname" :"Microsoft",
    	   "jobprofile"  :"Project Manager",
    	   "period"      :"13/January/2013 to 26/October/2014"
       },
       
      ];

       alert(experience.length);
      for(var i=0;i<experience.length;i++)
      	{
      	document.getElementById("addexperience").innerHTML+="<li class='w100p border_bottom float_left border_top_f' onclick=\editexperience('"+"company"+i+"','"+"profile"+i+"','"+"period"+i+"')\>"+
"<div class='data_show float_left w100p'><h4 class='w100p font18 float_left' id='"+"company"+i+"' >"+experience[i].companyname+"</h4>"+
"<label class='w100p font18 float_left ' id='"+"profile"+i+"' >"+experience[i].jobprofile+"</label>"+
"<span class='w100p font14 float_left color_9' id='"+"period"+i+"'>"+experience[i].period+"</span>"+
"<div class=clear'>"+
"</div>"+
"</div>"+
"</li>"
      	}
document.getElementById("firstname").innerHTML=personal_details.firstname;
document.getElementById("lastname").innerHTML=personal_details.lastname;
document.getElementById("emailid").innerHTML=personal_details.emailid;
document.getElementById("jobprofile").innerHTML=personal_details.jobprofile;
document.getElementById("location").innerHTML=personal_details.location;

var usr_emailid="",usr_jobprofile='',usr_location='',usr_contact='',usr_cmpnyname1='',usr_cmpnyname2='',usr_profile1='',usr_profile2='',jobperiod1='',jobperiod2='',colegename1='',degree1='',colegename2='',degree2='',yrofpassing1='',yrofpassing2='';





function open_editjobprofile()
{
	  
	usr_jobprofile =document.getElementById("jobprofile").innerHTML; 
	  
	document.getElementById("show_jobprofile").innerHTML=usr_jobprofile;
	document.getElementById("edit_jobprofile").value=usr_jobprofile;
	
	document.getElementById("editjobprofile").style.display="block";
	document.getElementById("changejobprofile").style.display="block";
}
function changejobprofile()
{

	document.getElementById("changejobprofile").style.display="none";
	document.getElementById("updatejobprofile").style.display="block";
}


function canceljobprofile()
{ 

	document.getElementById("changejobprofile").style.display="block";
	document.getElementById("updatejobprofile").style.display="none";
}


function open_editlocation()
{
	
	  
	usr_location =document.getElementById("location").innerHTML;
	document.getElementById("show_location").innerHTML=usr_location;
	document.getElementById("edit_location").value=usr_location;
	
	document.getElementById("editlocation").style.display="block";
	document.getElementById("changelocation").style.display="block";
}
function changejoblocation()
{
	document.getElementById("changelocation").style.display="none";
	document.getElementById("updatelocation").style.display="block";
}


function canceljoblocation()
{ 
	document.getElementById("changelocation").style.display="block";
	document.getElementById("updatelocation").style.display="none";
}


function open_editcontact()
{
	
	  
	usr_contact =document.getElementById("contact").innerHTML;
	document.getElementById("show_contact").innerHTML=usr_contact;
	document.getElementById("edit_contact").value=usr_contact;
	
	document.getElementById("editcontact").style.display="block";
	document.getElementById("changecontact").style.display="block";
}
function changecontact()
{
	document.getElementById("changecontact").style.display="none";
	document.getElementById("updatecontact").style.display="block";
}


function cancelcontact()
{ 
	document.getElementById("changecontact").style.display="block";
	document.getElementById("updatecontact").style.display="none";
}




function open_editeducation()
{
	colegename1=document.getElementById("colegename1").innerHTML;
	degree1=document.getElementById("degreename1").innerHTML;
	yrofpassing1=document.getElementById("duration1").innerHTML.split("to");
	
	document.getElementById("showcolege1").innerHTML=colegename1;
	document.getElementById("showdegreename1").innerHTML=degree1;
	document.getElementById("show_edu_durtn1").innerHTML=yrofpassing1[0]+" to "+yrofpassing1[1];
	
	document.getElementById("editcolege1").value=colegename1;
	document.getElementById("editdegree1").value=degree1;
	document.getElementById("editdegreestrt1").value=yrofpassing1[0];
	document.getElementById("editdegreeend1").value=yrofpassing1[1];
	
	colegename2=document.getElementById("colegename2").innerHTML;
	degree2=document.getElementById("degreename2").innerHTML;
	yrofpassing2=document.getElementById("duration2").innerHTML.split("to");
	
	document.getElementById("showcolege2").innerHTML=colegename2;
	document.getElementById("showdegreename2").innerHTML=degree2;
	document.getElementById("show_edu_durtn2").innerHTML=yrofpassing2[0]+" to "+yrofpassing2[1];
	
	document.getElementById("editcolege2").value=colegename2;
	document.getElementById("editdegree2").value=degree2;
	document.getElementById("editdegreestrt2").value=yrofpassing2[0];
	document.getElementById("editdegreeend2").value=yrofpassing2[1];
	document.getElementById("editeducation").style.display="block";
	
}

function changeeducation(showdivid,hidedivid)
{
	document.getElementById(showdivid).style.display="block";
	document.getElementById(hidedivid).style.display="none";
}


function canceleducation(showdivid,hidedivid)
{
   alert('one');
   alert(showdivid);
   alert(hidedivid);
	document.getElementById(showdivid).style.display="block";
	document.getElementById(hidedivid).style.display="none";
}


function hideparent(divid)
{

	document.getElementById(divid).style.display="none";
}



//                           SKILLS

var slct_language='';

function editskills(languageid)
{
	document.getElementById("editskill").innerHTML=document.getElementById(languageid).innerHTML;
	document.getElementById("changeskills").value=document.getElementById(languageid).innerHTML;
	document.getElementById("editKnownskills").style.display="block";
}

function changeskills()
{
	document.getElementById('updateknownskills').style.display="block";
	document.getElementById('changeknownskills').style.display="none";
}


function cancelskills()
{
   alert("abcd");
	document.getElementById('changeknownskills').style.display="block";
	document.getElementById('updateknownskills').style.display="none";
}
//                            SKILLS END

//                           NAME
function open_editname()
{
	document.getElementById("frstname_toedit").innerHTML=document.getElementById("firstname").innerHTML;
	document.getElementById("lastname_toedit").innerHTML=document.getElementById("lastname").innerHTML;
	document.getElementById("edited_frstname").value=document.getElementById("firstname").innerHTML;
	document.getElementById("edited_lastname").value=document.getElementById("lastname").innerHTML;
	 alert("111");
	document.getElementById("edit_namediv").style.display="block";  
}

function changename()
{
	document.getElementById("changename").style.display="none";
	document.getElementById("updatename").style.display="block";
	
}

function cancelnamechange()
{ 
	document.getElementById("changename").style.display="block";
	document.getElementById("updatename").style.display="none";
}
//                          END NAME

//                            EMAILID

function open_editemail()
{
	document.getElementById("show_editemailid").innerHTML=document.getElementById("emailid").innerHTML
	document.getElementById("editedemail_id").value=document.getElementById("emailid").innerHTML;
	document.getElementById("edit_email").style.display="block";
	document.getElementById("change_emailid").style.display="block";
}


function changeemail()
{
	document.getElementById("change_emailid").style.display="none";
	document.getElementById("updateemailid").style.display="block";
	
	
}

function cancelemailchange()
{ 
	document.getElementById("change_emailid").style.display="block";
	document.getElementById("updateemailid").style.display="none";
}
//                          END EMAILID

//                          EXPERIENCE
 function editexperience(companyname,jobprofile,duration)
 {
	 
	 document.getElementById('show_compnyname').innerHTML=document.getElementById(companyname).innerHTML;
	 document.getElementById('show_profile').innerHTML=document.getElementById(jobprofile).innerHTML;
	 document.getElementById('show_duration').innerHTML=document.getElementById(duration).innerHTML;
	 var timeperiod=document.getElementById(duration).innerHTML.split("to");

	 document.getElementById('edit_compnyname').value=document.getElementById(companyname).innerHTML;
	 document.getElementById('edit_profile').value=document.getElementById(jobprofile).innerHTML;
	 document.getElementById('edit_jobstart').value=timeperiod[0];
	 document.getElementById('edit_joblast').value=timeperiod[1];
	 
	 document.getElementById("editexperience").style.display="block";
	 document.getElementById("changeexperience").style.display="block";
	
 
 
 }        
 
 
 function changeexperience(showdivid,hidedivid)
 {
	 alert(showdivid);
	 alert(hidedivid);
 	document.getElementById(showdivid).style.display="block";
 	document.getElementById(hidedivid).style.display="none";
 	
 	
 }

function cancelexperience(showdivid,hidedivid)
{
	 alert(showdivid);
	 alert(hidedivid);
 	document.getElementById(showdivid).style.display="block";
 	document.getElementById(hidedivid).style.display="none";
}
//                          END EXPERIENCE