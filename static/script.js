async function translateText(){

    const text=document.getElementById("text").value;
    const source=document.getElementById("source").value;
    const target=document.getElementById("target").value;

    const response=await fetch("/translate",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            text:text,
            source:source,
            target:target
        })

    });

    const data=await response.json();

    if(data.translated_text){
        document.getElementById("output").value=data.translated_text;
    }else{
        alert(data.error);
    }

}