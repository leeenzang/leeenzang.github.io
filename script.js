// 스크롤 감지해서 navbar에 클래스 붙이기
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


const checkbox = document.getElementById('featured-toggle');
const cards = document.querySelectorAll('.project-card');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        // ✅ 체크하면 대표만 보여
        cards.forEach(card => {
            if (card.dataset.featured === 'true') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        // ⬜ 체크 해제하면 전체 다 보여
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }
});


function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

  // ESC 키로도 닫히게 (옵션)
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
    }
});


window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});