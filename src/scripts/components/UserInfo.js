export class UserInfo {
  constructor({
    nameSelector,
    jobSelector,
    avatarSelector,
    avatarImageSelector,
  }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._avatarImage = document.querySelector(avatarImageSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo({ fieldName, fieldJob }) {
    this._name.textContent = fieldName;
    this._job.textContent = fieldJob;
  }

  setImageSource({ fieldSource }) {
    this._avatarImage.src = fieldSource;
  }

  hoverUserImage(imageBackground, editButton) {
    this._avatar.addEventListener("mouseover", () => {
      imageBackground.classList.add("visible");
      editButton.classList.add("visible");
    });
    this._avatar.addEventListener("mouseout", () => {
      imageBackground.classList.remove("visible");
      editButton.classList.remove("visible");
    });
  }
}
