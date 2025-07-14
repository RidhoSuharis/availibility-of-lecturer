const dosenList = [
      { nama: "Dr. Ir. Bagus Sumargo, M.Si.", hadir: false },
      { nama: "Dr. Makmuri, M.Si.", hadir: false },
      { nama: "Prof. Dr. Wardani Rahayu, M.Si.", hadir: false },
      { nama: "Dr. Pinta Deniyanti Sampoerno, M.Si.", hadir: false },
      { nama: "Dr. Ellis Salsabila, M.Si.", hadir: false },
      { nama: "Prof. Dr. Suyono, M.Si.", hadir: false },
      { nama: "Drs. Tri Murdiyanto, M.Si.", hadir: false },
      { nama: "Drs. Sudarwanto, M.Si, DEA.", hadir: false },
      { nama: "Drs. Mulyono, M.Kom.", hadir: false },
      { nama: "Dr. Dian Handayani, M.Si.", hadir: false },
      { nama: "Dra. Widyanti Rahayu, M.Si.", hadir: false },
      { nama: "Dr. Lukita Ambarwati, S.Pd., M.Si.", hadir: false },
      { nama: "Ratna Widyati, S.Si., M.Kom.", hadir: false },
      { nama: "Med Irzal, M.Kom.", hadir: false },
      { nama: "Dr. Vera Maya Santi, M.Si.", hadir: false },
      { nama: "Dr. Ria Arafiyah, M.Si.", hadir: false },
      { nama: "Dr. Eti Dwi Wiraningsih, S.Pd., M.Si.", hadir: false },
      { nama: "Dr. Lukman El Hakim, M.Pd.", hadir: false },
      { nama: "Aris Hadiyan Wijaksana, M.Pd.", hadir: false },
      { nama: "Ibnu Hadi, M.Si.", hadir: false },
      { nama: "Dwi Antari Wijayanti, M.Pd.", hadir: false },
      { nama: "Dr. Yudi Mahatma, M.Si.", hadir: false },
      { nama: "Dr. Meiliasari, S.Pd., M.Sc.", hadir: false },
      { nama: "Dr. Puspita Sari, S.Pd., M.Sc.", hadir: false },
      { nama: "Muhammad Eka Suryana, M.Kom", hadir: false },
      { nama: "Debby Agustine, M.Si.", hadir: false },
      { nama: "Dr. Siti Rohmah Rohimah, S.Pd., M.Si.", hadir: false },
      { nama: "Dania Siregar, S.Stat., M.Si.", hadir: false },
      { nama: "Ari Hendarno, S.Pd, M.Kom.", hadir: false },
      { nama: "Dr. Mimi Nur Hajizah, M.Pd. ", hadir: false },
      { nama: "Tian Abdul Aziz, Ph.D.", hadir: false },
      { nama: "Devi Eka Wardani Meganingtyas, S.Pd., M.Si.", hadir: false },
      { nama: "Qorry Meidianingsih, M.Si.", hadir: false },
      { nama: "Leny Dhianti Haeruman, M.Pd.", hadir: false },
      { nama: "Dr. Flavia Aurelia Hidajat, S.Pd., M.Pd.", hadir: false },
      { nama: "Faroh Ladayya, M.Si.", hadir: false },
      { nama: "Dr. Anny Sovia, S.Si., M.Pd.", hadir: false },
      { nama: "Agus Agung Permana, S.Si., M.Pd.", hadir: false },
      { nama: "Nurashri Partasiwi, S.Si., M.Pd.", hadir: false },
      { nama: "Kaola Rachma Adzima, S.Pd., M.Si.", hadir: false },
      { nama: "Nilam Novita Sari, S.Stat., M.Stat.", hadir: false },
      { nama: "Tiara Husnul Khotimah, M.Si.", hadir: false },
      { nama: "Muhammad Rido Wujudi, S.Si., M.Sc.", hadir: false },
      { nama: "Khoiruz Zahra, S.Si., M.Si.", hadir: false },
      { nama: "Eka Rahmi Kahar, S.Si., M.Si.", hadir: false },
      { nama: "Luqman Nuradi Prawadika, S.Si., M.Si.", hadir: false },
      { nama: "Carli Apriansyah Hutagalung, M.Kom", hadir: false },
      { nama: "Endang Yuliani, S.Mat., M.Si", hadir: false },
      { nama: "Ersa Resita, S.Tr.T., M.Tr.Kom", hadir: false },
      { nama: "⁠Linda Devi Fitriana, S.Pd., M.Pd., Ph.D.", hadir: false },
      { nama: "Muhammad Arib Alwansyah, S.Stat., M.Stat.", hadir: false },
      { nama: "Dessy Julita Sari, S.Pd., M.Si.", hadir: false },
      { nama: "Dinar Munggaran Akhmad, S.Kom., M.Kom.", hadir: false },
      { nama: "Ratna Maryam, M.Pd.", hadir: false },
      { nama: "⁠Ndaru Atmi Purnami, S.Si., M.Sc.", hadir: false },
      { nama: "Citra Komang Sari, M.Si", hadir: false },
      { nama: "Ridho Suharis, M.Mat", hadir: false }
    ];

    const ul = document.getElementById("daftar-dosen");

    function renderList() {
      ul.innerHTML = ""; // Clear the list before re-rendering

      const animationDurationPerItem = 8; // Total seconds for one full name-status cycle

      dosenList.forEach((dosen, index) => {
        const li = document.createElement("li");
        li.className = dosen.hadir ? "hadir" : "tidak-hadir";

        const nameSpan = document.createElement("span");
        nameSpan.className = "scroll-item name";
        nameSpan.textContent = dosen.nama; // Just the name

        const statusSpan = document.createElement("span");
        statusSpan.className = "scroll-item status";
        statusSpan.textContent = dosen.hadir ? "Available" : "Unavailable"; // Just the status

        li.appendChild(nameSpan);
        li.appendChild(statusSpan);

        // Set total animation duration for this li
        li.style.setProperty('--animation-duration', `${animationDurationPerItem}s`);

        // Add click listener
        li.addEventListener("click", () => {
          dosen.hadir = !dosen.hadir; // Toggle status
          renderList(); // Re-render the entire list to reflect changes
        });

        ul.appendChild(li);
      });
    }

    // Call initial render after DOM is fully loaded
    document.addEventListener('DOMContentLoaded', renderList);