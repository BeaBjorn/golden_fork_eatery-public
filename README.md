# Publik webbplats för projektuppgift - webbutveckling III - DT173G  
## Student : Beatrice Björn  

Det här repositoryt innehåller de filer som skapats för den publika webbplatsen som ska konsumera det API som gjorts för projektuppgiften.   
Repositoryt har JavaScript-filer för att via APIet läsa ut data från databasen och skriva ut de så att det blir synligt på webbplatsen.  

Det finns möjlighet för besökare av webbplatsen att göra bokningar som sedan lagras i databasen. APIet kontrollerar att alla uppgifter som krävs skickats med i formuläret och lagrar datat om så är fallet. Skulle information som skickats med vara felaktig tom lagras inte bokningen i databasen. 

Gulp används för transpilering av koden. För att installera projektet på egen dator läggs filerna i valfri mapp och sedan körs kommandot npm install i terminalen. Detta återskapar de inställningsfiler som finns för projektet (node_modules).
