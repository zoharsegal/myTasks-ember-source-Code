import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import config from '../config/environment';

export default Controller.extend({
 user: service(),
  routing: service("-routing"),
  actions: {
    submitLoginForm(userData) {
      var data = new FormData();
      data.append( "email", userData.email );
      data.append( "password", userData.password );
      data.append( "_token", "{{ csrf_token() }" );
      fetch(config.rootURL + 'api/public/user/login', {
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
            this.get('user').setLoggedIn(true,data.userName,data.uuid);
            const currentRouteName = this.get("routing.currentRouteName")
            getOwner(this).lookup(`route:${currentRouteName}`).refresh();
          }
        });
    }
  }

});
