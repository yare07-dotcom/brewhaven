
const DB = {
  categories: [
    {id:1, name:'Semua'},
    {id:2, name:'Espresso'},
    {id:3, name:'Latte'},
    {id:4, name:'Iced'},
    {id:5, name:'Specialty'},
    {id:6, name:'Non-Coffee'},
    {id:7, name:'Snack'}
  ],
  products: [
    {id:1, name:'Espresso', category:2, price:25000, description:'Shot espresso murni dengan crema sempurna, kuat dan berkarakter.', image:'https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg', badge:'Classic', sizes:['Single','Double'], basePrices:[25000,35000]},
    {id:2, name:'Americano', category:2, price:28000, description:'Espresso yang dilunakkan dengan air panas, nikmat dan ringan.', image:'https://i1-c.pinimg.com/1200x/32/ba/52/32ba52056d30b5bed11e6aeb2ad30874.jpg', badge:null, sizes:['Regular','Large'], basePrices:[28000,35000]},
    {id:3, name:'Latte', category:3, price:35000, description:'Espresso lembut dengan susu steam dan seni latte art cantik.', image:'https://i1-c.pinimg.com/1200x/f8/56/d2/f856d2d30045e34f7a3d7438d81c5141.jpg', badge:'Popular', sizes:['Regular','Large'], basePrices:[35000,42000]},
    {id:4, name:'Cappuccino', category:3, price:38000, description:'Keseimbangan sempurna antara espresso, susu steam, dan foam tebal.', image:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&q=80', badge:null, sizes:['Regular','Large'], basePrices:[38000,45000]},
    {id:5, name:'Flat White', category:3, price:40000, description:'Espresso double dengan microfoam velvet, kaya dan creamy.', image:'https://i.pinimg.com/736x/83/2f/9b/832f9b803d5725c52f23cc153e092fd1.jpg', badge:null, sizes:['Regular','Large'], basePrices:[40000,48000]},
    {id:6, name:'Mocha', category:3, price:42000, description:'Perpaduan espresso, cokelat premium, dan susu steam yang memanjakan.', image:'https://i1-c.pinimg.com/736x/77/eb/cd/77ebcd75d93e6b21395f38ff6aa410ad.jpg', badge:null, sizes:['Regular','Large'], basePrices:[42000,50000]},
    {id:7, name:'Iced Coffee', category:4, price:32000, description:'Kopi dingin segar dengan es batu, sempurna untuk hari panas.', image:'https://i.pinimg.com/736x/cc/32/48/cc32481f44aedc6161f4514aa51e86ed.jpg', badge:'Segar', sizes:['Regular','Large'], basePrices:[32000,40000]},
    {id:8, name:'Caramel Latte', category:3, price:45000, description:'Latte manis dengan sirep karamel homemade yang kaya rasa.', image:'https://i1-c.pinimg.com/1200x/17/59/c9/1759c9d02a4c3edb398c986e42629148.jpg', badge:'Favorit', sizes:['Regular','Large'], basePrices:[45000,52000]},
    {id:9, name:'Caramel Macchiato', category:5, price:48000, description:'Espresso dengan vanilla, susu steam, dan drizzle caramel — kombinasi sempurna.', image:'https://i1-c.pinimg.com/1200x/7f/7c/0a/7f7c0a441577459d9a0a01ee28b59cc5.jpg', badge:'Baru!', sizes:['Regular','Large'], basePrices:[48000,55000]},
    {id:10, name:'Cold Brew', category:4, price:38000, description:'Kopi diseduh dingin selama 12 jam, smooth dan penuh karakter.', image:'https://i1-c.pinimg.com/1200x/a0/8b/61/a08b618b6bbe45c5f3ae62ffdaff1d7d.jpg', badge:null, sizes:['Regular','Large'], basePrices:[38000,46000]},
    {id:11, name:'Matcha Latte', category:6, price:42000, description:'Matcha Jepang berkualitas tinggi dengan susu segar yang lembut.', image:'https://i1-c.pinimg.com/control1/1200x/f3/35/3d/f3353da22218a4de90629ea801d6d0ff.jpg', badge:'Non-Coffee', sizes:['Regular','Large'], basePrices:[42000,50000]},
    {id:12, name:'Chocolate', category:6, price:38000, description:'Cokelat panas premium dengan susu full cream yang kental dan nikmat.', image:'https://i1-c.pinimg.com/control1/736x/0a/34/4c/0a344cfabbe54777fb3b1ff22405507c.jpg', badge:'Non-Coffee', sizes:['Regular','Large'], basePrices:[38000,46000]},
    {id:13, name:'Strawberry cake', category:7, price:56000, description:'Kue dengan strawobery dan cream kental dan nikmat.', image:'https://i.pinimg.com/736x/59/0c/27/590c27b26bea88f95b3d2604e6be8579.jpg', badge:'snack', sizes:['Regular','Large'], basePrices:[56000,70000]},
    {id:14, name:'Cokelat cake', category:7, price:56000, description:'Kue dengan cokelat dan cream kental dan nikmat.', image:'https://i.pinimg.com/736x/5c/1f/58/5c1f58aebff946e50c53500d303e3156.jpg', badge:'snack', sizes:['Regular','Large'], basePrices:[56000,70000]},
    {id:15, name:'kentang fries', category:7, price:16000, description:'bukan ketang biasa soalnya udah di goreng.', image:'https://i.pinimg.com/736x/6e/b7/cd/6eb7cdd8e7877757354f1898211e946e.jpg', badge:'snack', sizes:['Regular','Large'], basePrices:[16000,20000]},
    {id:16, name:'Cireng', category:7, price:16000, description:'bukan cireng biasa soalnya udah di goreng.', image:'https://i.pinimg.com/736x/af/2a/6e/af2a6e77038cea18531cdafbd0d657dc.jpg', badge:'snack', sizes:['Regular','Large'], basePrices:[16000,20000]},
    {id:17, name:'Banana fries', category:7, price:16000, description:'bukan pisang biasa soalnya udah di goreng.', image:'https://i.pinimg.com/736x/cd/06/e8/cd06e88b424d6e1611fa9e2bfc422744.jpg', badge:'snack', sizes:['Regular','Large'], basePrices:[16000,20000]},
    {id:18, name:'Bakpao', category:7, price:16000, description:'ini cuma bakpao', image:'https://i.pinimg.com/736x/10/91/94/109194d0ca612989eca244892a80408e.jpg', badge:'snack', sizes:['Regular','Large'], basePrices:[16000,20000]},
  ],
  testimonials: [
    {id:1, name:'Rina Wulandari', role:'Coffee Enthusiast', avatar:'RW', text:'BrewHaven adalah surga bagi pecinta kopi! Caramel Macchiato mereka benar-benar luar biasa, tidak terlalu manis dan aromanya harum. Pasti balik lagi!', rating:5},
    {id:2, name:'Budi Santoso', role:'Pekerja Kreatif', avatar:'BS', text:'Tempat favorit saya untuk kerja remote. Kopinya konsisten enak, WiFi kencang, dan suasananya nyaman. Cold Brew-nya juara banget!', rating:5},
    {id:3, name:'Sari Dewi', role:'Food Blogger', avatar:'SD', text:'Latte art-nya bukan cuma cantik, tapi rasanya juga memukau. Barista di sini benar-benar tahu apa yang mereka lakukan. Highly recommended!', rating:5},
  ]
};

//state//
let cart = JSON.parse(localStorage.getItem('bhCart') || '[]');
let activeCategory = 1;
let currentModal = null;
let selectedSizeIdx = 0;

//render dan menu//
function renderFilters() {
  const row = document.getElementById('filterRow');
  if (!row) return;
  row.innerHTML = DB.categories.map(c =>
    `<button class="filter-btn${c.id===activeCategory?' active':''}" onclick="setCategory(${c.id})">${c.name}</button>`
  ).join('');
}

function setCategory(id) {
  activeCategory = id;
  renderFilters();
  renderMenu();
}

function formatPrice(p) { return 'Rp ' + p.toLocaleString('id-ID'); }

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const items = activeCategory===1 ? DB.products : DB.products.filter(p=>p.category===activeCategory);
  grid.innerHTML = items.map(p => `
    <div class="menu-card" onclick="openModal(${p.id})">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect width=%22200%22 height=%22200%22 fill=%22%23EDD8BB%22/><text x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-size=%2256%22>☕</text></svg>'">
        ${p.badge?`<div class="card-badge">${p.badge}</div>`:''}
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.description}</div>
        <div class="card-footer">
          <div class="card-price">${formatPrice(p.price)}</div>
          <button class="add-btn" onclick="event.stopPropagation();addToCartById(${p.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

//modal//
function openModal(id) {
  const p = DB.products.find(x=>x.id===id);
  if(!p) return;
  currentModal = p;
  selectedSizeIdx = 0;
  document.getElementById('modalImg').src = p.image;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.description;
  document.getElementById('modalSizes').innerHTML = p.sizes.map((s,i)=>
    `<button class="size-opt${i===0?' selected':''}" onclick="selectSize(${i},this)">${s} — ${formatPrice(p.basePrices[i])}</button>`
  ).join('');
  document.getElementById('modalPrice').textContent = formatPrice(p.basePrices[0]);
  document.getElementById('modalAddBtn').onclick = ()=>{ addToCart(p, selectedSizeIdx); closeModal(); };
  document.getElementById('modalOverlay').classList.add('active');
}

function selectSize(idx, el) {
  selectedSizeIdx = idx;
  document.querySelectorAll('.size-opt').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('modalPrice').textContent = formatPrice(currentModal.basePrices[idx]);
}

function closeModal(e) {
  if(e && e.target!==document.getElementById('modalOverlay') && !e.target.classList.contains('modal-close')) return;
  document.getElementById('modalOverlay').classList.remove('active');
  currentModal = null;
}

//cart//
function addToCartById(id) {
  const p = DB.products.find(x=>x.id===id);
  if(p) addToCart(p, 0);
}

function addToCart(product, sizeIdx=0) {
  const key = `${product.id}-${sizeIdx}`;
  const existing = cart.find(i=>i.key===key);
  if(existing) existing.qty++;
  else {
    cart.push({
      key, id:product.id, name:product.name,
      size:product.sizes[sizeIdx],
      price:product.basePrices[sizeIdx],
      image:product.image, qty:1
    });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} ditambahkan ke keranjang ☕`);
}

function updateQty(key, delta) {
  const item = cart.find(i=>i.key===key);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(i=>i.key!==key);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function removeItem(key) {
  cart = cart.filter(i=>i.key!==key);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() { localStorage.setItem('bhCart', JSON.stringify(cart)); }

function updateCartUI() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').textContent = total;
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

function renderCartItems() {
  const wrap = document.getElementById('cartItems');
  if(!wrap) return;
  if(cart.length===0) {
    wrap.innerHTML = `<div class="cart-empty"><div class="empty-icon">☕</div><p>Keranjangmu masih kosong</p><p style="font-size:.8rem;margin-top:6px;color:var(--text-muted)">Yuk pesan kopi favoritmu!</p></div>`;
    document.getElementById('cartTotal').textContent = formatPrice(0);
    return;
  }
  wrap.innerHTML = cart.map(item=>`
    <div class="cart-item">
      <div class="ci-img"><img src="${item.image}" onerror="this.parentElement.innerHTML='☕'" style="width:46px;height:46px;object-fit:contain"></div>
      <div class="ci-info">
        <div class="ci-name">${item.name} <small style="color:var(--text-muted)">(${item.size})</small></div>
        <div class="ci-price">${formatPrice(item.price)}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="updateQty('${item.key}',-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.key}',1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeItem('${item.key}')">✕</button>
    </div>
  `).join('');
  const grandTotal = cart.reduce((s,i)=>s+(i.price*i.qty),0);
  document.getElementById('cartTotal').textContent = formatPrice(grandTotal);
}

//chekout//
async function checkout() {
  if(cart.length === 0) {
    showToast('Keranjang masih kosong!');
    return;
  }
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const customerName = document.getElementById('customerName') ? document.getElementById('customerName').value : 'Guest';
  if(customerName.trim() === '') customerName = 'Guest';
  
  const orderData = {
    cart: cart.map(item => ({ name: item.name, size: item.size, qty: item.qty, price: item.price })),
    customer_name: customerName,
    total_amount: totalAmount
  };
  
  const btn = document.querySelector('.checkout-btn');
  const originalText = btn.textContent;
  btn.textContent = 'Memproses...';
  btn.disabled = true;
  
  try {
    const response = await fetch('api.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    const result = await response.json();
    if(result.success) {
      showToast(`✅ Pesanan berhasil! Kode: ${result.order_code}`);
      cart = [];
      saveCart();
      updateCartUI();
      renderCartItems();
      closeCart();
      if(document.getElementById('customerName')) document.getElementById('customerName').value = '';
    } else {
      showToast('❌ Gagal: ' + result.message);
    }
  } catch(error) {
    console.error(error);
    showToast('❌ Error: ' + error.message);
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

//testimani//
function renderTestimonials() {
  const grid = document.getElementById('testiGrid');
  if(!grid) return;
  grid.innerHTML = DB.testimonials.map(t=>`
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.rating)}</div>
      <div class="testi-text">"${t.text}"</div>
      <div class="testi-author">
        <div class="testi-avatar">${t.avatar}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
      </div>
    </div>
  `).join('');
}

//toast//
function showToast(msg) {
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}

//init//
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderMenu();
  renderTestimonials();
  updateCartUI();
});