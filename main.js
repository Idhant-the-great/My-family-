var image = ["https://th.bing.com/th/id/OIP.ml0Uu4nIp1s81eevnNJ9bwHaHa?w=177&h=180&c=7&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/R.20ea58e14cc9082ecff95155c619a1c0?rik=n8RREiraxhGneA&riu=http%3a%2f%2fclipartmag.com%2fimages%2fcartoon-mom-clipart-12.jpg&ehk=nZ1OZN0dkqtnBdRcZlzX4%2fljAQUQbkEvdu66m8X5%2fU4%3d&risl=&pid=ImgRaw",
"https://th.bing.com/th/id/R.03156d80411351e8c24f18896e06bf46?rik=gwqKPATV5qADiQ&riu=http%3a%2f%2fclipground.com%2fimages%2ffather-clipart-6.jpg&ehk=CFNCkpLs6AdVTbooItpYLLIJMg5fvIns93CMAuFjdiE%3d&risl=&pid=ImgRaw",
"https://th.bing.com/th/id/R.4c579d2ae06b889496a4b6a7119eee0f?rik=1qMYNXoXgdzbhA&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fkiM%2f6r4%2fkiM6r4qij.jpg&ehk=cDLSHcli8%2fgisdMDhVIsOsdpi8Dup0TUubFMamuQr0M%3d&risl=&pid=ImgRaw",
"https://clipground.com/images/animated-baby-clipart-6.jpg",
"https://th.bing.com/th/id/R.e18f4a4c8e716afeb5a1bbf598db00be?rik=2O%2fdZWMqqxYcJg&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1823234.png&ehk=KTFhYC8jKUNh4Jh4QsrmsubX0kQkaOj%2b2gKkGINTgsg%3d&risl=&pid=ImgRaw",
"https://cdn.imgbin.com/0/13/15/imgbin-grandparent-grandfather-grandpa-grandpa-art-background-man-wearing-vest-and-dress-shirt-H2brpK9cxN4NRenzWkt0JRnAu.jpg"];
var names = ["My Family Book","Rashmi","Vamshi","Me","Ivyaan","Sujata","Venkatesh"];
var i=0;
function next_picture()
{
    i++;
 if(i>image.length)
 i=0;
 document.getElementById("family_book").src=image[i];
 document.getElementById("name").innerHTML=names[i];
}