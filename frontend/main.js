const box = document.getElementById('box')

axios
    .get('http://localhost:3000/foods')
    .then((res) => {
        console.log(res);
        const datas = res.data
        datas.map((data) => {
            box.innerHTML += `
        <div class="main-box">
         <div class="name">Name: <b>${data.name}</b></div>
         <div class="calory">Calory: <b>${data.calory}</b></div>
         <div class="price">Price: <b>${data.price}</b></div>
         
        </div>
        `
        })
    })
    .catch((err) => {
        console.log(err);

    })