var product = [
    {
      id: "SP1",
      name: "Áo dài thêu họa tiết",
      image: "p1.jpg",
      price: 790000,
    },
    {
        id: "SP2",
        name: "Áo dài truyền thống",
        image: "p2.jpg",
        price: 345000,
    },
    {
        id: "SP3",
        name: "Áo dài cách tân",
        image: "p3.jpg",
        price: 258000,
    }
];

function Save() {
    localStorage.setItem('listProduct',JSON.stringify(product))
    
}

function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
    
}

if (localStorage.getItem("listProduct")!= null) {
    load();
}

var listLocal = function () {
    var listproduct = "";
    for (var i in product) {
            var data = JSON.parse(JSON.stringify(product[i]));
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width: auto;">';
        listproduct += '<img class="card-img-top" src="image/'+data.image+'" alt="..."">';
        listproduct += '<div class="card-title product-title text-center h5">'+data.name + '</div>';
        listproduct += '<div class="price text-center h6">'+data.price + 'd</div>';
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+
        data.id+'"data-name="'+data.name+'"data-img="'+data.image+'"data-price="'+data.price+'"onclick="tks()">';
        listproduct += '<a>';
        listproduct += '<i class="fa fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';
        document.getElementById("banchay").innerHTML += listproduct;
    }
    Save();
}
listLocal();