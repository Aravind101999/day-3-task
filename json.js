        //// QUESTION 1: JSON
 var arr=[
    {
     
      "id": "1",
      "title":"sun",
  
    },
    {
  
      "id": "2",
      "title": "moon",
    
    },
    {
      
      "id": "3",
      "title": "star",
      
    },
    {
     
      "id": "4",
      "title": "galaxy",
     
    }];
          ////// FOR LOOP ///////////
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].id+" "+arr[i].title);
        }
  
         ////// FOR IN LOOP/////


         for(var i in arr){
            console.log(arr[i].id+" "+arr[i].title);
            }

            ///// QUESTION 2 : ///////////

     ////////   RESUME data in  JSON format   ////// 

      var resume = {
        "name":"aravindhan",
        "education":"10th,12th,B.E in mechanical ",
        "work experience": "nil",
        "address":"vellore,tamil nadu",
        "e-mail":"aravindbala101@gmail.com",
        "skills":"full stack developer",
        "language":"english",


      }