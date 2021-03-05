import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import config from '../config/environment';

export default Controller.extend({
  user: service(),
  actions: {
    submitRegisterForm(email,password,userName) {
      var data = new FormData();
      data.append( "email", email );
      data.append( "password", password );
      data.append( "userName", userName );
      data.append( "_token", "{{ csrf_token() }" );

      fetch(config.rootURL + 'api/public/user/register', {
        method: 'POST',
        headers: {
          'uuid': this.user.uuid
        },
        body: data
      }).then(response => response.json())
        .then(data => {
          if (data.status!="OK") {
            alert(data.status)
          } else {
            this.get('user').setLoggedIn(true,data.userName,data.uuid);
            getOwner(this).lookup(`route:register`).refresh();
          }
        });
    }
  }

});
