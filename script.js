// ==========================================
// EDIT JADWAL DI BAGIAN INI
// ==========================================
// Silakan ubah nama pelajaran dan catatan sesuai
// kebutuhan Ghaisan.
// Tidak menggunakan jam.
// ==========================================

const scheduleData = {
  senin: {
    title: "Senin",
    subjects: [
      "Upacara",
      "Sholat Dhuha",
      "Seni Musik 1",
      "Al-Islam 2",
      "Matematika 2"
    ],
    note: "Jangan lupa membawa perlengkapan sekolah hari Senin. 🚀"
  },
  selasa: {
    title: "Selasa",
    subjects: [
      "Tahsin Ummi",
      "Bahasa Jawa 2",
      "Matematika 3",
      "Bahasa Inggris 2",
      "Tugas Piket"
    ],
    note: "Siapkan buku dan alat tulis sebelum berangkat. ⭐"
  },
  rabu: {
    title: "Rabu",
    subjects: [
      "Tahsin Ummi",
      "Olahraga 3",
      "Matematika 3"
    ],
    note: "Tetap semangat! Satu langkah kecil hari ini adalah kemajuan. 🌟"
  },
  kamis: {
    title: "Kamis",
    subjects: [
      "Tahsin Ummi",
      "Seni Rupa 2",
      "Al Islam 2",
      "Bahasa Indonesia 3"
    ],
    note: "Pastikan semua tugas sudah dibawa dan dikumpulkan. 🛰️"
  },
  jumat: {
    title: "Jum'at",
    subjects: [
      "Tahsin Ummi",
      "Bahasa Indonesia 5"
    ],
    note: "Hebat! Selesaikan misi minggu ini dengan senyum. 🚀✨"
  }
};

const scheduleEl = document.getElementById("schedule");
const buttons = document.querySelectorAll(".day-btn");

function showDay(day) {
  const data = scheduleData[day];

  scheduleEl.innerHTML = `
    <div class="schedule-head">
      <h3>🚀 ${data.title}</h3>
      <span class="badge">MISSION DAY</span>
    </div>
    <div class="subject-list">
      ${data.subjects.map((subject, index) => `
        <div class="subject">
          <span class="number">${index + 1}</span>
          <span class="subject-name">${subject}</span>
        </div>
      `).join("")}
    </div>
    <div class="note">
      <strong>📝 Catatan Misi</strong>
      ${data.note}
    </div>
  `;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    showDay(button.dataset.day);
  });
});

showDay("senin");
