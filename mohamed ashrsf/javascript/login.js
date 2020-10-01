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
        for(i = 0; i < UserData.length; i++)
        {
           
           if(user_name==UserData[i].name && password_user==UserData[i].password)
               {
                  console.log('user name '+user_name)
                  console.log('passwoed' + password_user) 
                  console.log('sueccssful')
                  alert('تم التاكد من الاسم والباسورد تفضل للدخول')
                  sessionStorage.removeItem('currenLoginUser')
                  sessionStorage.setItem('currenLoginUser', UserData[i].name)
                  if(UserData[i].job=="none")  
                    {// if customer
                        // document.getElementsByName("myform").setAttribute("action", "/mohamed abdelnaeem/home_customer.html")
                        window.location.replace("/mohamed abdelnaeem/home_customer.html")
                        noSigIn=true
                    }
                  else
                    {// if tech
                        // document.getElementsByName("myform").setAttribute("action", "/ahmed ibrahim/tech-orders-view.html")
                        window.location.replace("/ahmed ibrahim/tech-orders-view.html") 
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
    xmlhttp.open("GET", "http://m0stafaeladawy00.pythonanywhere.com/UsersAccounts/", true);
    xmlhttp.send();
}

function goSignUp(){
    window.location.replace("/mostafa/Html/register.html")   
}