function querry()
{
    
    var uName=document.qform.uname.value;
    var eMail=document.qform.email.value;
    var Subject=document.qform.subject.value;
    var Query=document.qform.query.value;

    var status=1;
    var outDiv = document.getElementById("form-Output");
    outDiv.style.display="none";

    if(uName=="")
    {
        alert("Please Enter a Username !");
        status=0;
    }
    else if(eMail=="")
    {
        alert("Please Enter a E-Mail !");
        status=0;
    }
    else if(Subject==-1)
    {
        alert("Please Select a Subjeect !");
        status=0;
    }
    else if(Query=="")
    {
        alert("Please Enter Details!");
        status=0;
    }
    var atsign = eMail.indexOf("@");
    var dotsign = eMail.lastIndexOf(".");
    if(atsign < 1 || ( dotsign - atsign < 2 ))
    {
            alert("Please Enter Valied E-Mail");
            status=0;
    }
    if(status==1)
    {   
        console.log(outDiv.style.display);
        
        if (outDiv.style.display =="none")
        {
            outDiv.style.display = "block";
        }
        else
        {
            outDiv.style.display = "none";
        }
        document.getElementById("oname").innerHTML = uName;
        document.getElementById("omail").innerHTML = eMail;
        document.getElementById("osub").innerHTML = Subject;
        document.getElementById("oquery").innerHTML = Query;
        document.qform.uname.value="";
        document.qform.email.value="";
        document.qform.subject.value="";
        document.qform.query.value="";
    }
}

function qEdit()
{
    var outDiv = document.getElementById("form-Output");
    if (outDiv.style.display =="none")
    {
        outDiv.style.display = "block";
    }
    else
    {
        outDiv.style.display = "none";
    }
    var uname=document.getElementById("oname").innerHTML;
    var email=document.getElementById("omail").innerHTML;
    var sub=document.getElementById("osub").innerHTML;
    var detail=document.getElementById("oquery").innerHTML;

    document.qform.uname.value=uname;
    document.qform.email.value=email;
    document.qform.subject.value=sub;
    document.qform.query.value=detail;

    document.getElementById("oname").innerHTML = "";
    document.getElementById("omail").innerHTML = "";
    document.getElementById("osub").innerHTML = "";
    document.getElementById("oquery").innerHTML = "";
}

function qSend()
{
    var uName=document.qform.uname.value;
    var eMail=document.qform.email.value;
    var Subject=document.qform.subject.value;
    var Query=document.qform.query.value;
    window.open(eMail);

    var outDiv = document.getElementById("form-Output");
    if (outDiv.style.display =="none")
    {
        outDiv.style.display = "block";
    }
    else
    {
        outDiv.style.display = "none";
    }
    alert("Successfully sent !");
    document.getElementById("oname").innerHTML = "";
    document.getElementById("omail").innerHTML = "";
    document.getElementById("osub").innerHTML = "";
    document.getElementById("oquery").innerHTML = "";
    document.qform.uname.value="";
    document.qform.email.value="";
    document.qform.subject.value="";
    document.qform.query.value="";
}


/*References
https://www.tutorialspoint.com/javascript/javascript_form_validations.htm
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp




*/