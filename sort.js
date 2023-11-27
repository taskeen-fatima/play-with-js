var user ={
    Nitin: ["js", "sql", "python","html"],
    John: ["html", "css", "java"],
    Riya: ["css", "js","c#"],
    Rama: ["dbms", "react", "js","c#"],
    Rozy: ["html", "css", "python"],
    Ali: ["css", "oops","c#"],
}

//console.log(user.Ali[0]);
var entries = Object.entries(user);
var sub;
/* function getNamesBySub(entries, sub)
{

} */
for(var i = 0;i<entries.length;i++)
{
    //console.log(entries[i]);
    for(j=0;j<entries[i][1].length;j++)
    {
            if(entries[i][1][j]=="html")
            console.log(entries[i][0]);
    }

    
}
