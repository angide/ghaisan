// ==========================================
// EDIT JADWAL DI BAGIAN INI
// ==========================================
// Ganti nama mata pelajaran dan catatan sesuai
// jadwal sekolah Ghaisan.
// Tidak menggunakan jam.
// ==========================================

const scheduleData = {
  senin: {
    title: "Senin",
    subjects: [
      "Upacara",
      "Sholat Dhuha",
      "Pancasila",
      "Seni Musik 1"
      "Al Islam 2"
      "Matematika"
      "Les"
    ],
    note: "Seragam Merah Putih. Pulang jam 13.45 WIB 🚀"
  },
  selasa: {
    title: "Selasa",
    subjects: [
      "Mata Pelajaran 1",
      "Mata Pelajaran 2",
      "Mata Pelajaran 3",
      "Mata Pelajaran 4"
    ],
    note: "Siapkan buku dan alat tulis sebelum berangkat. ⭐"
  },
  rabu: {
    title: "Rabu",
    subjects: [
      "Mata Pelajaran 1",
      "Mata Pelajaran 2",
      "Mata Pelajaran 3",
      "Mata Pelajaran 4"
    ],
    note: "Tetap semangat! Satu langkah kecil hari ini adalah kemajuan. 🌟"
  },
  kamis: {
    title: "Kamis",
    subjects: [
      "Mata Pelajaran 1",
      "Mata Pelajaran 2",
      "Mata Pelajaran 3",
      "Mata Pelajaran 4"
    ],
    note: "Pastikan semua tugas sudah dibawa dan dikumpulkan. 🛰️"
  },
  jumat: {
    title: "Jumat",
    subjects: [
      "Mata Pelajaran 1",
      "Mata Pelajaran 2",
      "Mata Pelajaran 3"
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
