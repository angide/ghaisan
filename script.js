// ==========================================
// DATA JADWAL GHAISAN
// ==========================================
// Bro bisa mengubah jadwal dan catatan
// langsung di bagian ini.
// ==========================================


const scheduleData = {


  senin: {

    title: "Senin",

    uniformName: "Seragam Merah-Putih",

    // GANTI GAMBAR DI SINI
    uniformImage: "seragam-senin.png",

    subjects: [

      "Upacara",

      "Sholat Dhuha",

      "Pancasila",

      "Seni Musik 1",

      "Al-Islam 2",

      "Matematika 2",

      "LES"

    ],

    note:
      "Pulang Jam 13:45 WIB. 🚀"

  },


  selasa: {

    title: "Selasa",

    uniformName: "Seragam Batik Purwo",

    // GANTI GAMBAR DI SINI
    uniformImage: "seragam-selasa.png",

    subjects: [

      "Tugas Piket",

      "Tahsin Ummi",

      "Bahasa Jawa 2",

      "Matematika 3",

      "Bahasa Inggris 2"

    ],

    note:
      "Pulang Jam 13:00 WIB. ⭐"

  },


  rabu: {

    title: "Rabu",

    uniformName: "Seragam Olahraga",

    // GANTI GAMBAR DI SINI
    uniformImage: "seragam-rabu.png",

    subjects: [

      "Tahsin Ummi",

      "Olahraga 3",

      "Matematika 3",

      "Ekskul: ROBOTIC"

    ],

    note:
      "Pulang Jam 13:45 WIB. 🌟"

  },


  kamis: {

    title: "Kamis",

    uniformName: "Batik Muhammadiyah",

    // GANTI GAMBAR DI SINI
    uniformImage: "seragam-kamis.png",

    subjects: [

      "Tahsin Ummi",

      "Seni Rupa 2",

      "Al Islam 2",

      "Bahasa Indonesia 3",

      "LES"

    ],

    note:
      "Pulang Jam 13:45 WIB. Sementara Off Renang. 🛰️"

  },


  jumat: {

    title: "Jum'at",

    uniformName: "BIM Identitas",

    // GANTI GAMBAR DI SINI
    uniformImage: "seragam-jumat.png",

    subjects: [

      "Tahsin Ummi",

      "Bahasa Indonesia 5"

    ],

    note:
      "Pulang Jam 11:00 WIB. 🚀✨"

  }

};


// ==========================================
// ELEMENT HTML
// ==========================================

const scheduleEl =
  document.getElementById("schedule");

const buttons =
  document.querySelectorAll(".day-btn");


// ==========================================
// MENAMPILKAN JADWAL
// ==========================================

function showDay(day) {

  const data =
    scheduleData[day];


  scheduleEl.innerHTML = `

    <div class="schedule-layout">


      <!-- =========================
           SERAGAM
      ========================== -->

      <div class="uniform-card">

        <div class="uniform-title">

          👕 Seragam Hari Ini

        </div>


        <img

          class="uniform-image"

          src="${data.uniformImage}"

          alt="${data.uniformName}"

          onerror="this.src='https://placehold.co/600x600/0d1f43/49dfff?text=Gambar+Seragam';"

        >


        <div class="uniform-name">

          ${data.uniformName}

        </div>

      </div>


      <!-- =========================
           JADWAL
      ========================== -->

      <div>

        <div class="schedule-head">

          <h3>
            🚀 ${data.title}
          </h3>

          <span class="badge">
            MISSION DAY
          </span>

        </div>


        <div class="subject-list">

          ${data.subjects.map(
            (subject, index) => `

            <div class="subject">

              <span class="number">
                ${index + 1}
              </span>

              <span class="subject-name">
                ${subject}
              </span>

            </div>

          `
          ).join("")}

        </div>


        <!-- =========================
             CATATAN
        ========================== -->

        <div class="note">

          <strong>
            📝 Catatan Misi
          </strong>

          ${data.note}

        </div>

      </div>


    </div>

  `;

}


// ==========================================
// TOMBOL HARI
// ==========================================

buttons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      buttons.forEach(btn => {

        btn.classList.remove("active");

      });


      button.classList.add("active");


      showDay(
        button.dataset.day
      );

    }
  );

});


// ==========================================
// TAMPILKAN SENIN SAAT WEBSITE DIBUKA
// ==========================================

showDay("senin");
