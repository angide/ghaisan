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
      "Seni Musik 1",
      "Al Islam 2",
      "Matematika",
      "Les"
    ],
    note: "Seragam Merah Putih. Pulang jam 13.45 WIB 🚀"
  },
  selasa: {
    title: "Selasa",
    subjects: [
      "Tahsin Ummi",
      "Bahasa Jawa 2",
      "Matematika 3",
      "Bahasa Inggris 2"
    ],
    note: "Seragam Batik Purwo. Pulang jam 13.00 WIB. ⭐"
  },
  rabu: {
    title: "Rabu",
    subjects: [
      "Tahsin Ummi",
      "Olahraga 3",
      "Matematika 3",
      "Ekskul: ROBOTIC"
    ],
    note: "Seragam Olahraga. Pulang Jam 13.40 WIB. 🌟"
  },
  kamis: {
    title: "Kamis",
    subjects: [
      "Tahsin Ummi",
      "Seni Rupa 2",
      "Al Islam 2",
      "Bahasa Indonesia 3,"
      "Les"
    ],
    note: "Seragam Batik Muhammadiyah. Pulang Jam 13.45. Sementara Tidak ikut Ekskul Renang. 🛰️"
  },
  jumat: {
    title: "Jumat",
    subjects: [
      "Tahsin Ummi",
      "Bahasa Indonesia 5"
    ],
    note: "Seragam BIM Identitas. Pulang Jam 11.00 WIB. 🚀✨"
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
