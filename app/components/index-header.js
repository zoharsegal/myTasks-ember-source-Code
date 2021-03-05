import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import config from '../config/environment';

export default Component.extend({
  user: service(),
  store: service(),
  isLoggedIn:false,//need to fix it here when logg-in and logged-out
  routing: service("-routing"),
  didRender() {
    this.set('isLoggedIn', this.get('user').isLoggedIn);
  },
  init() {
    this._super(...arguments);
    this.errors = [];
    var data = new FormData();
    data.append( "_token", "{{ csrf_token() }" );
    //this.user.setLoggedIn(true,data.userName,data.uuid);
    var uuid=localStorage.getItem('uuid')
    fetch(config.rootURL + 'api/public/user/checkLogin', {
      method: 'POST',
      headers: {
        'uuid': uuid
      },
      body: data
    }).then(response => response.json())
      .then(data => {
        if (data.status!="OK") {
          this.get('user').setLoggedIn(false,null,null);
        } else {
          this.get('user').setLoggedIn(true,data.userName,data.uuid);
        }
        this.set('isLoggedIn', this.get('user').isLoggedIn);
      });
  },
  actions: {
    logout() {
      var data = new FormData();
      data.append( "_token", "{{ csrf_token() }" );
      fetch(config.rootURL + 'api/public/user/logout', {
        method: 'POST',
        headers: {
          'uuid': this.get('user').uuid
        },
        body: data
      }).then(response => response.json())
        .then(data => {
          if (data.status!="OK") {
            alert(data.status)
          } else {
            this.get('store').unloadAll()
            this.get('user').setLoggedIn(false,null,null);
            this.set('isLoggedIn', false);
            const currentRouteName = this.get("routing.currentRouteName")
            getOwner(this).lookup(`route:${currentRouteName}`).refresh();
          }
        });
    }
  }
});
