function showDetail(title, price) {
    document.getElementById('detailTitle').innerText = title;
    document.getElementById('detailPrice').innerText = price;
    document.getElementById('detailModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
  }
  
  function openCheckout(product, price) {
    document.getElementById('checkoutProduct').value = product;
    document.getElementById('checkoutPrice').value = price;
    document.getElementById('checkoutModal').style.display = 'block';
  }
  
  function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
  }
  
  // Tambah notifikasi elemen
  const notif = document.createElement('div');
  notif.id = 'notif';
  notif.innerText = 'Pesanan dikirim ke WhatsApp...';
  document.body.appendChild(notif);
  
  document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const product = document.getElementById('checkoutProduct').value;
    const price = document.getElementById('checkoutPrice').value;
    const name = this.elements[2].value.trim();
    const address = this.elements[3].value.trim();
    const userPhone = this.elements[4].value.trim();
  
    if (!name || !address || !userPhone) {
      alert('Harap lengkapi semua data!');
      return;
    }
  
    const message = `Halo, saya ingin memesan:%0AProduk: ${product}%0AHarga: ${price}%0ANama: ${name}%0AAlamat: ${address}%0AJumlah: ${userPhone}`;
    const waNumber = "6285860606828"; // Ganti dengan nomor kamu
    const waLink = `https://wa.me/${waNumber}?text=${message}`;
  
    notif.classList.add('show');
    setTimeout(() => {
      notif.classList.remove('show');
      window.open(waLink, '_blank');
      closeCheckout();
    }, 1000); // Delay 1 detik
  });

  






// Hapus data penyimpanan agar setiap refresh dianggap pertama kali
localStorage.removeItem("welcomeDate");

const today = new Date().toLocaleDateString();
const lastShown = localStorage.getItem("welcomeDate");

if (lastShown !== today) {
    alert("🌟 Selamat datang di website kami! 🌟");
    localStorage.setItem("welcomeDate", today);
}
