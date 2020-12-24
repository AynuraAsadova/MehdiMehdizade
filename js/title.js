// if(document.URL = "http://127.0.0.1:5500/full-news.html"){
//     document.title = document.getElementById("text_title").innerHTML;
// } else {
//   document.title = "Mehdi Mehdizadə";
// }

if(document.URL != "https://aynuraasadova.github.io/MehdiMehdizade/full-news.html"){
  document.title = "Mehdi Mehdizade"
}else{
  document.title = document.getElementById("text_title").innerHTML;
}