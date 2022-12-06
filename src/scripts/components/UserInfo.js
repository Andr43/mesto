export class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;
    }

    getUserInfo(fieldName, fieldJob) {
        fieldName.value = this._name.textContent;
        fieldJob.value = this._job.textContent;
    }

    setUserInfo(fieldName, fieldJob) {
        this._name.textContent = fieldName.value;
        this._job.textContent = fieldJob.value;
    }
}