const travelDocuments = document.getElementById("travel-documents");
const loyaltyPrograms = document.getElementById("loyalty-programs");
const travelPreferences = document.getElementById("travel-preferences");
const travelInfo = document.querySelector(".travel-info");
const travelInfoContainer = document.querySelector(".travel-info__container");
const newPassportIcon = document.querySelector(".document__new-passport-icon");
const newPassportContainer = document.querySelector(".new-passport-container");
const passportClosedIcon = document.querySelector(".new-passport__close");
const submitButton = document.querySelector(".form__submit");
const starsCheckBox = document.querySelector(".stars__checkbox");

function choseMenuOption() {
  const travelDocumentsDOM = `<div class="documents-container">
  <div class="document">
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
</div>
</div> `;

  const loyaltyProgramsDOM = ``;

  const travelPreferencesDOM = `              <div class="preference">
  <div class="preference__option-layout preference__airlines">
    <h3 class="title-primary preference__title">
      Preffered Airlines
    </h3>
    <select
      class="preference__airlines-drop-down input"
      name="airlines"
      id="airlines"
      required
    >
      <option value="" disabled selected>Add airlines</option>
      <option value="Singapore Airlines"
        >Singapore Airlines</option
      >
      <option value="Qatar Airways">Qatar Airways</option>
      <option value="ANA All Nippon Airways"
        >ANA All Nippon Airways</option
      >
    </select>
  </div>
  <div class="preference__chosen-options">
    <span class="preference__chosen-option"
      >Singapore Airlines</span
    >
    <span class="preference__chosen-option">Qatar Airways</span>
    <span class="preference__chosen-option"
      >ANA All Nippon Airways</span
    >
    <span class="preference__chosen-option">Emirates</span>
  </div>
</div>

<div class="preference">
  <div class="preference__option-layout preference__airlines">
    <h3 class="title-primary preference__title">
      Preferred Hotel Brands
    </h3>
    <select
      class="preference__airlines-drop-down input"
      name="airlines"
      id="airlines"
      required
    >
      <option value="" disabled selected>Add Hotel Brands</option>
      <option value="Hilton">Hilton</option>
      <option value="Qatar Airways">Westin</option>
      <option value="ANA All Nippon Airways">Westin</option>
    </select>
  </div>
  <div class="preference__chosen-options">
    <span class="preference__chosen-option">Hilton</span>
    <span class="preference__chosen-option">Westin</span>
    <span class="preference__chosen-option">Four Seasons</span>
    <span class="preference__chosen-option">Ritz-Carlton</span>
  </div>
</div>

<div class="preference">
  <div class="preference__option-layout-2">
    <h3 class="title-primary preference__title">
      Preferred by Stars
    </h3>
  </div>

  <div class="preference__chosen-stars">
    <div class="stars">
      <div class="stars__checkbox"></div>
      <div class="stars__container">
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
      </div>
    </div>

    <div class="stars">
      <div class="stars__checkbox"></div>
      <div class="stars__container">
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
      </div>
    </div>

    <div class="stars">
      <div class="stars__checkbox"></div>
      <div class="stars__container">
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
      </div>
    </div>

    <div class="stars">
      <div class="stars__checkbox"></div>
      <div class="stars__container">
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
      </div>
    </div>

    <div class="stars">
      <div class="stars__checkbox"></div>
      <div class="stars__container">
        <img
          src="./src/imgs/yellow-star.png"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
        <img
          src="./src/imgs/star.svg"
          alt="Star icon"
          class="star"
        />
      </div>
    </div>
  </div>
</div>`;

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
          if (el !== element) {
            removeChosenClass(el);
          } else {
            travelInfoContainer.innerHTML = ``;
            travelInfoContainer.innerHTML =
              travelInfoContainerHTMLOption[index];
            if (el === loyaltyPrograms) {
              travelInfo.style.height = "43.5rem";
            } else {
              travelInfo.style.height = null;
            }
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
}

function addCheckedBox() {
  travelInfoContainer.addEventListener("click", (event) => {
    if (event.target.matches(".stars__checkbox")) {
      event.target.classList.toggle("starst__checkbox-checked");
    }
  });
}

addCheckedBox();
choseMenuOption();
removeNewPassportScreen();
addNewPassport();
