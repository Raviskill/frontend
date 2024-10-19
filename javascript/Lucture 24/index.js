
  const ProductData = async() => {
    let response = await fetch('http://localhost:3000/product')
    let res = await response.json()
    console.log(res);
    
    res.map((item) => {
      return document.getElementById('demo').innerHTML += `
        <p>${item.id}<p/>
        <p>${item.productName}<p/>
        <p>${item.productColor}<p/>
      ` 
    })
  }
  
  ProductData()
