//---------------------------------ENKRIPTUJ

  function Enkriptuj()
  {

   //sadrzaj = document.getElementById("mytxt1").value.toLowerCase().replace(/[^a-z]/g, ""); 
    //sadrzaj = document.getElementById("mytxt1").value;
    sadrzaj = document.getElementById("mytxt1").value.toLowerCase().replace(/\s/g, ""); 
  
     console.log(sadrzaj);

    if(sadrzaj.length < 1)
        { 
          alert("Niste ucitali sadrzaj!"); 
          return;
         }   

    var key;
    key = document.getElementById("key").value;

    if(key.length < 2)
        { 
          if(key.length < 1)
          {
            alert("Niste uneli kljuc!"); 
            return;
          }
          alert("Kljuc mora biti najmanje duzine 2!"); 
          return;
         }   

    var pc = document.getElementById("pc").value;

      if(pc=="") pc = "_";    

      while(sadrzaj.length % key.length != 0)   //puni se sa _ dok se ne napuni matrica
         sadrzaj += pc.charAt(0); 


        var kolona = sadrzaj.length / key.length;     //duzina kolone
        var vrsta= key.length;                      //duzina vrste

        console.log(kolona);
        console.log(vrsta);

          var matrix = [];
          var pomocna=0;  
              for(var i=0; i<kolona; i++) 
              { 
                  matrix[i] = [];                                     //punimo matricu
                  for(var j=0; j<vrsta; j++) {
                      matrix[i][j]=sadrzaj[j+pomocna];
                  }
                  pomocna=pomocna+vrsta;
              }

          console.log(matrix);

         var pomocniNiz=[];  
          pomocniNiz= alfabetPos(key);       //pomocni niz za key vrednosti u alfabetu
          console.log(pomocniNiz);

     // document.getElementById("mytxt2").value = matrix.map(a => a.join(' ')).join('\n');
    
      for(var i=0;i<kolona;i++)
      {
        var copyOfMyArray = pomocniNiz.slice(0);
        matrix[i]=bubbleSort(matrix[i],copyOfMyArray,key);      //sortiranje kolona prema kljucu
      }

      console.log(matrix);

      var endMatrix=[];     //pomocna krajnja matrixa iz koje stampam, transpose

      endMatrix=transpose(matrix);
      console.log(endMatrix);

     


    //  document.getElementById("mytxt2").value = endMatrix.map(a => a.join(' ')).join('\n');
    document.getElementById("mytxt2").value = endMatrix.map(a => a.join('')).join('');
    
     
  }
//-------------------------------------------------------------------------------------pomocne f-je
/* function vratiVrednost(key){        //ima bag**** ne pozivam je
        var k=0;
        var i=0; 
        var pom=[];
        var chars = "abcdefghijklmnopqrstuvwxyz"; 
         while(k<26){
              t = key.indexOf(chars.charAt(k));
              k++;
              if(t>=0)
               {
                 pom[i]=t;
                 i=i+1;
               }
          }
          return pom;
        }*/

function bubbleSort(items,p,key) {
           var length = key.length;
            
            for (var i = 0; i < length; i++) { 
                
                for (var j = 0; j < (length - i - 1); j++) { 
                    
                    if(p[j] > p[j+1]) {
                        
                        var tmp = p[j];  
                        p[j] = p[j+1]; 
                        p[j+1] = tmp; 

                        var tmp = items[j];  
                        items[j] = items[j+1]; 
                        items[j+1] = tmp; 
                    }

                }
                
            }
           
                 return items; 
                  
      }

function transpose(array) {
  return array[0].map((col, i) => array.map(row => row[i]));
}




 /*  function alphabetPosition(text) {    //ne poziva se ni ova
            var result = [];
            for (var i = 0; i < text.length; i++) {
              var code = text.toUpperCase().charCodeAt(i)
              if (code > 64 && code < 91) 
                 result[i]= (code - 64);
            }

            return result;
          }*/


function alfabetPos(string)
{
  key = string.toUpperCase();
  chars = "abcdefghijklmnopqrstuvwxyz"; 
  alphabet=chars.toUpperCase();
  a = 1;
  k = Array(key.length);
  for (i = 0; i < alphabet.length; i++)
  {
    for (j = 0; j < key.length; j++)
    {

      if (key.substr(j,1) == alphabet.substr(i,1))
      {

        k[j] = a;
        a = a + 1;
      }
    }
  }
  
  return k;
}          


/*
//----------------------------------------------------------DEKRIPTUJ
function Dekriptuj()
{
  sadrzaj = document.getElementById("mytxt1").value.toLowerCase().replace(/\s/g, ""); 


  var key;
    key = document.getElementById("key").value;

    if(key.length < 2)
        { 
          if(key.length < 1)
          {
            alert("Niste uneli kljuc!"); 
            return;
          }
          alert("Kljuc mora biti najmanje duzine 2!"); 
          return;
         }   
 
    var pc = document.getElementById("pc").value;

      if(pc=="") pc = "_";    

      while(sadrzaj.length % key.length != 0)   //puni se sa _ dok se ne napuni matrica
         sadrzaj += pc.charAt(0); 

     var vrsta = key.length;     //duzina kolone
     var kolona= sadrzaj.length / key.length;

     console.log(kolona);
     console.log(vrsta);
 
       var matrix = [];
          var pomocna=0;  
              for(var i=0; i<vrsta; i++) 
              {
                  matrix[i] = [];                                     //punimo matricu
                  for(var j=0; j<kolona; j++) {
                      matrix[i][j]=sadrzaj[j+pomocna];
                     // console.log(matrix[i][j]);
                  }
                  pomocna=pomocna+kolona;
              }

     console.log(matrix);


    var endMatrix = [];
    for(var i=0; i<kolona; i++) {
    endMatrix[i] = [];
    for(var j=0; j<vrsta; j++) {
        endMatrix[i][j] = undefined;
     }
    }
 
    var endMatrix=[];     
    endMatrix=transpose(matrix);
    console.log(endMatrix);


  key1 = alfabetPos(key);
  console.log(key1);

  keysort=alfabetPos(key);
  bubbleSort(keysort);
  console.log(keysort);

var pom = [];
for(var i=0; i<kolona; i++) {
    pom[i] = [];
    for(var j=0; j<vrsta; j++) {
        pom[i][j] = undefined;
    }
}
  
  for(var i=0;i<vrsta;i++)
  {
    for(var j=0;j<vrsta;j++)
    {
      if(keysort[i]==key1[j])
      {
        for(var m=0;m<kolona;m++)
        {
          pom[m][j]=endMatrix[m][i];
        }
      }
    }
  }
  console.log(pom);

      document.getElementById("mytxt2").value = pom.map(a => a.join('')).join('');
      
}


function bubbleSort(items) {
    var length = items.length;
    //Number of passes
    for (var i = 0; i < length; i++) { 
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) { 
            //Compare the adjacent positions
            if(items[j] > items[j+1]) {
                //Swap the numbers
                var tmp = items[j];  
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}*/