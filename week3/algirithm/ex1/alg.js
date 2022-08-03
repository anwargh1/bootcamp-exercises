  function countVowels(string){

        let count =0;
        for(let c of string){
             if(c == 'a' || c== 'i' ||c == 'o' || c== 'e' ||c=='u'){
                count++;
                
             }
            
        }
        console.log(count)

    }

countVowels("ananeuio")