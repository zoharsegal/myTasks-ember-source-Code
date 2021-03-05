import Service from '@ember/service';

export default Service.extend({
  isLoggedIn: false,
  userName: "",
  uuid: "",
  setLoggedIn(val,userName,uuid) {
    if (val) {
      localStorage.setItem("uuid", uuid);
    } else {
      localStorage.removeItem("uuid")
    }
    this.isLoggedIn=val;
    this.userName=userName;
    this.uuid=uuid;
  },
  getLoggedIn() {
    return this.isLoggedIn;
  }
});
