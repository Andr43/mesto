export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
return {
    name: this._name.textContent,
    job: this._job.textContent
}
  }

  setUserInfo({userObject}) {
    this._name.textContent = userObject.name;
    this._job.textContent = userObject.job;
  }
}
