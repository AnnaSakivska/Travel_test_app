const travelDocuments = document.getElementById("travel-documents");
const loyaltyPrograms = document.getElementById("loyalty-programs");
const travelPreferences = document.getElementById("travel-preferences");
const travelInfoContainer = document.querySelector(".travel-info__container");
const newPassportIcon = document.querySelector(".document__new-passport-icon");
const newPassportContainer = document.querySelector(".new-passport-container");
const passportClosedIcon = document.querySelector(".new-passport__close");
const submitButton = document.querySelector(".form__submit");

function choseMenuOption() {
  const travelDocumentsDOM = `<div class="document">
    <h2 class="document__country document__country--ukraine">
      Ukraine
    </h2>
    <spa class="document__code">FJ22346</spa>
    <span class="document__date">April 25, 2020</span>
  </div>

  <div class="document">
    <h2 class="document__country document__country--uk">
      United Kingdom
    </h2>
    <span class="document__code">FJ22346</span>
    <span class="document__date">April 25, 2020</span>
  </div>

  <div class="document document__new">
    <img
      class="document__new-passport-icon"
      src="src/imgs/new_passport.svg"
    />
    <span class="document__add-text">Add new passport</span>
  </div>`;

  const loyaltyProgramsDOM = ``;

  const travelPreferencesDOM = ``;

  const travelInfoContainerHTMLOption = [
    travelDocumentsDOM,
    loyaltyProgramsDOM,
    travelPreferencesDOM,
  ];

  function removeChosenClass(element) {
    element.classList.remove("travel-info__selected-option");
  }

  function addChosenClass(element) {
    element.addEventListener("click", () => {
      [travelDocuments, loyaltyPrograms, travelPreferences].forEach(
        (el, index) => {
          //   console.log(index);

          if (el !== element) {
            // travelInfoContainer.style.height = "26.2rem";

            removeChosenClass(el);
          } else {
            travelInfoContainer.innerHTML = ``;
            travelInfoContainer.innerHTML =
              travelInfoContainerHTMLOption[index];
            // if (el === loyaltyPrograms) {
            //   travelInfoContainer.style.height = "43.5rem";
            // }
          }
        }
      );

      element.classList.add("travel-info__selected-option");
    });
  }

  addChosenClass(travelDocuments);
  addChosenClass(loyaltyPrograms);
  addChosenClass(travelPreferences);
}

function addNewPassport() {
  travelInfoContainer.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches(".document__new-passport-icon")) {
      newPassportContainer.style.display = "block";
    }
  });
}

function removeNewPassportScreen() {
  passportClosedIcon.addEventListener("click", () => {
    newPassportContainer.style.display = "none";
  });

  //   submitButton.addEventListener("click", () => {
  //     newPassportContainer.style.display = "none";
  //   });
}

choseMenuOption();
removeNewPassportScreen();
addNewPassport();
