
var Usrdata = document.querySelector('.box');
let tourData = [
  {
    id:1,
    name: "Madrid",
    desc: "İspanya'nın başkenti ve en güzel şehirlerinden biri olan Madrid, dünyaca ünlü müzeleri, görkemli tarihi yapıları ile dinamik ve çekici bir şehirdir.",
    price: 700,
    places: ["Casa de Campo", "Debod tapınağı", "Plaza de Espana", "Madrid Kraliyet Sarayı"],
    url: "https://res.cloudinary.com/turna/image/upload/c_fill,g_auto,w_448,h_498,dpr_2/q_auto,f_auto/f_jpg,q_auto:low/v1557240970/Madrid-Yapilacak-Seyler_pvusj0.jpg?_i=AA"
  },
  { id:2,
    name: "Paris",
    desc: "Fransa’nın en ünlü şehri Paris, Avrupa’nın hatta dünyanın en popüler şehirleri arasında listelerin üst sırasında yer alıyor. Sein Nehri kenarına iki yaka şeklinde kurulan şehir, 4000 yıllık köklü bir geçmişe sahip.",
    price: 900,
    places: ["Eiffel Kulesi", "Louvre Müzesi", "Notre Dame Katedrali", "Zafer Takı"],
    url: "https://cdnturint.touristica.com.tr/tur-resimleri/v1.00/paris-turu-3-gece-firsat-4-oteller/375x375/shutterstock-710380270_163945.jpg"
  },
  { id:3,
    name: "Maldivler",
    desc: "Maldivler bir çok gezginin tercih ettiği tropik bir cennettir ve tropikal bir tatil için benzersiz olanaklar sunar. Geniş bir alana yayılan nüfusuyla Maldivler parlak mavi gökyüzü altında keşfedilmeyi bekleyen büyüleyici bir kültüre sahiptir.",
    price: 500,
    places: ["Bathala Adası", "Victory batık gemisi", "Hukuru Miskiiy Camisi", "The Artificial Beach"],
    url: "https://www.seturselect.com/Tema/07072015173908shutterstock_89720368.jpg"
  },
  { id:4,
    name: "Tayland",
    desc: "Tayland, ülkemizden en çok gidilen Asya ülkesi. Kültürel geçmişinden aşılanmış misafirperverliği, güler yüzlü insanları ve Budist tapınaklarıyla insanı cezbeden bir atmosferi var.",
    price: 1000,
    places: ["Wat Pho", "Elephant Rescue Park", "The Sanctuary Of Truth", "Bang Tho Beach"],
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Bangkok_Wat_Pho_reclining_Buddha.jpg"
  },
  { id:5,
    name: "Dubai",
    desc: "Dubai her bütçeye göre hizmetler sunan bir turizm merkezi. Ben de yazı boyunca bu duruma özel önerilerde bulacağım. Kimileri için sadece giriş biletleri bile pahalı bulunabilecekken kimileri ise yat turları, helikopter gezileri tercih edilebilir.",
    price: 1257,
    places: ["Burj Khalifa", "Burj Al Arab", "The Dubai Mall", "The Dubai Fountain"],
    url: "https://pro.cosentino.com/wp-content/uploads/2020/09/Dubai.jpg"
  },
  { id:6,
    name: "Moskova",
    desc: "En canlı avrupa şehirlerinden biri olan Moskova, dünyaca ünlü turistik noktaları, hareketli gece hayatı, çarlık mimarisi ve popüler cazibe merkezleriyle eğlenceli ve rahat bir şehir.",
    price: 250,
    places: ["Aziz Vasil Katedrali", "Kızıl Meydan", "Kremlin Sarayı", "Moskova Metrosu"],
    url: "https://cokokuyancokgezen.com/wp-content/uploads/2019/12/moskova-kizil-meydan-768x1024.jpg"
  },
  { id:7,
    name: "Balkanlar",
    desc: "Balkanlar'da keşfedebileceğiniz öyle çok yer var ki! Balkan Turları kapsamında; Bosna Hersek’te; Saraybosna ve Mostar, Makedonya’da; Üsküp, Ohrid ve Manastır, Karadağ’da; Budva ve Kotor en çok ilgi gören ve ziyaret edilen şehirlerdir.",
    price: 300,
    places: ["Saraybosna", "Mostar", "Üsküp", "Manastır"],
    url: "https://geziotesi.com/wp-content/uploads/2018/09/plitvicelakes-hirvatistan.jpg"
  },
]


let basket = [{id:1,name:"Madrid",price:800}] 

function loadBasket() {
  document.getElementById("cardList").innerHTML = basket.map(tour =>
    `<li>
    <div id="rigtcontainer">
      <div class="rproduct-details">
        <h1>${tour.name}</h1><br>
        <h1 >$${tour.price}</h1>
        <i onclick="removeFromBasket(${tour.id})" class="fa fa-trash-o" style="font-size:36px ;color: rgb(70, 7, 7);"></i>
      </div>
    </li>`
    )
}

function removeFromBasket(id){
  for (let index = 0; index < basket.length; index++) {
    if ( basket[index].id == id) { 
    
      basket.splice(index, 1); 
  }
    
  }loadContent();
  calculatePrice();
}

function loadContent() {
  loadBasket();
  var form = document.getElementById("formD");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);
  calculatePrice();
  
  document.getElementById('cards').innerHTML = tourData.map(tour =>
    `<div id="container">
    
      <div class="product-details">
    
          <h1>${tour.name}</h1><br>
          <span class="hint-star star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
    
          <p class="information">${tour.desc}
          </p>
  
          <div class="control">
    
              <button onclick = "addToCart(${tour.id})" class="btn">
        <span class="price">${tour.price}</span>
        <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
        <span class="buy">Sepete ekle</span>
      </button>
    
          </div>
    
      </div>
    
      <div class="product-image">
    
          <img src="${tour.url}" alt="">
    
    
          <div class="info">
              <h2> Gezilecek yerler</h2>
              <ul>
                  <li>${tour.places[0]}</li>
                  <li>${tour.places[1]}</li>
                  <li>${tour.places[2]}</li>
                  <li>${tour.places[3]}</li>
    
              </ul>
          </div>
      </div>
    
    </div>`
  ).join('');
   
}




window.onload = loadContent ;
 




/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
  
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}



function addItem() {
  var pro = {

  }
  pro.name = document.getElementById("tname").value;
  pro.desc = document.getElementById("desc").value;
  pro.price = document.getElementById("price").value;
  place1 = document.getElementById("Tplace1").value;
  place2 = document.getElementById("Tplace2").value;
  place3 = document.getElementById("Tplace3").value;
  place4 = document.getElementById("Tplace4").value;
  pro.url = document.getElementById("photo").value;
  pro.places = [place1, place2, place3, place4]
  pro.id = tourData.length + 1;
  tourData.push(pro)
  loadContent();
  return false;
}

function addToCart(id) {
  for (let index = 0; index < tourData.length; index++) {
    const element = tourData[index];
    if (element.id == id){
      let item = {}
      item.id=id;
      item.name=element.name;
      item.price=element.price;
      basket.push(item);
      loadContent();
      calculatePrice();
    }
    
  }
}

function calculatePrice() {

  let sum =0;
  for (let index = 0; index < basket.length; index++) {
    const element = basket[index];
    sum+= element.price;
  }
  document.getElementById("ucret").innerHTML="Toplam ücret: " +sum;
}