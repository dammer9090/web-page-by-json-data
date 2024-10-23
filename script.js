// 
//let jsonData = `{
//     "product": {
//         "id": 101,
//         "name": "Laptop",
//         "price": 750,
//         "specs": {
//             "ram": "8GB",
//             "storage": "256GB SSD"
//         },
//         "inStock": true
//     }
// }`


// // console.log(jsonData)

// let ObjectData = JSON.parse(jsonData)

// ObjectData.product.name = 'Mobile'
// // console.log(ObjectData)

// let updatedJson = JSON.stringify(ObjectData)

// console.log(updatedJson);




// .......................................................................





async function loadBMUPage() {
    
    let request = new Request("bmu/bmuData.json");

    // console.log(request.url)
    
    // let str = "http://127.0.0.1:5500/bmu/bmuData.json";
    
    let str = `${request.url}`


    
    // console.log(str)
    let response = await fetch(str);

    console.log(response)
    let data = await response.json();

    // console.log(data);

    showheader(data)
 
 
   
  }


  let header = document.querySelector('#div1');

  function showheader(data){

    let head1 = document.createElement('h1');

    head1.textContent = data.school;

    header.appendChild(head1)
    
    
    let img = document.createElement('img');
    
    img.src = data.image;

    header.appendChild(img)
    
    console.log(img)
    
    console.log(head1)



  }


  loadBMUPage()


