AOS.init();

      // Theme Toggle
      document.getElementById("themeToggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });

      // Language Switch
      const translations = {
        en: {
          header: "I’m a Web Designer/Developer",
          contact: "Contact"
        },
        fr: {
          header: "Je suis un développeur Front-End",
          contact: "Contactez-moi"
        }
      };
      const updateLang = (lang) => {
        document.getElementById("headerText").innerText = translations[lang].header;
        document.getElementById("contactBtn").innerText = translations[lang].contact;
      };
      document.getElementById("langSelect").addEventListener("change", (e) => {
        updateLang(e.target.value);
      });
      updateLang("en");

      // Project Search
      document.getElementById("search").addEventListener("input", function () {
        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll("#projectList .project-card");
        cards.forEach((card) => {
          const text = card.innerText.toLowerCase();
          card.style.display = text.includes(value) ? "block" : "none";
        });
      });