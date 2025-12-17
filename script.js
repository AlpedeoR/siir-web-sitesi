// Sayfadaki tüm "Devamını Oku" butonlarını seçiyoruz
const buttons = document.querySelectorAll('.read-more');

// Her bir buton için bir "dinleyici" (listener) ekliyoruz
buttons.forEach(button => {
    button.addEventListener('click', function() {
        
        // Tıklanan butonun bir üstündeki (parent) kartın içindeki 'poem-body'yi bul
        // Bu yöntem, hangi butona tıklarsan sadece o şiirin açılmasını sağlar.
        const card = button.parentElement;
        const poemBody = card.querySelector('.poem-body');

        // 'collapsed' sınıfını varsa kaldır, yoksa ekle (Toggle işlemi)
        poemBody.classList.toggle('collapsed');
        poemBody.classList.toggle('expanded');

        // Butonun üzerindeki yazıyı duruma göre değiştir
        if (poemBody.classList.contains('expanded')) {
            button.textContent = "Kapat";
        } else {
            button.textContent = "Devamını Oku";
        }
    });
});