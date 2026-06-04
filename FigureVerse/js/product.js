
let products=JSON.parse(localStorage.getItem('products')||'[{"name":"初音未來","price":2800}]');
function save(){localStorage.setItem('products',JSON.stringify(products));}
function render(){
 const el=document.getElementById('products'); if(!el) return;
 el.innerHTML=products.map(p=>`<div class='card'><h3>${p.name}</h3><p>NT$${p.price}</p></div>`).join('');
}
function addProduct(){
 const n=document.getElementById('name').value;
 const p=Number(document.getElementById('price').value);
 products.push({name:n,price:p}); save(); alert('新增成功');
}
render();
