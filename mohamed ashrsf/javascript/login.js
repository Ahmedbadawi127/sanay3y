function setAction(form)
{
    var user_name=document.getElementById('Uname').value
    var password_user=document.getElementById('Pass').value
    var noSigIn=false
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
        {
        var UserData = JSON.parse(xmlhttp.responseText);
        for(i = 0; i < UserData.UserData.length; i++)
        {
           
           if(user_name==UserData.UserData[i].name && password_user==UserData.UserData[i].password)
               {
                  console.log('user name '+user_name)
                  console.log('passwoed' + password_user) 
                  console.log('sueccssful')
                  alert('تم التاكد من الاسم والباسورد تفضل للدخول')
                  if(UserData.UserData[i].job==null)  
                    {
                        window.location.replace("../html/homepage.htm")
                        noSigIn=true
                    }
                  else
                    {
                        window.location.replace("../html/Login.htm") 
                        noSigIn=true
                    }
                  break
               } else
               {
                   continue
               }
        }
        if(noSigIn==false)
        {
            alert('يوجد خطا فى الاسم او الباسورد ')
        }

        }
    };
    xmlhttp.open("GET", "../jsonfile/userData.json", true);
    xmlhttp.send();
}

function goSignUp(){
    window.location.replace("../html/homepage.htm")   
}