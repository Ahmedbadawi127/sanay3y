// order object
count_orders=0
function Orders (o_number,cus_name,o_desc,o_date,tech_name,o_status)
{
    count_orders++
 this.o_number=o_number;
 this.cus_name=cus_name;
 this.o_desc=o_desc;
 this.o_date=o_date;
 this.tech_name=tech_name;
 this.o_status=o_status ;

 this.getorder=function(n)
 {
     
     order_arr=new Array()
     for(let i=0 ;i<count_order;i++)
     {
         if(o_number == n)
         {
            order_arr = [o_number,cus_name,o_desc,o_date,tech_name,o_status]
         }
     }
    return order_arr;
 }
}


