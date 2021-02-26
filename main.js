new Vue({
  el: '#app',
  data: {
  keyword: '',
  users: [
  {
    id: 1,
    name: 'イルカ',
    imageUrl: 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875__480.jpg' 
  },
  {
    id: 2,
    name: 'ゾウ',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg' 
  },
  {
    id: 3,
    name: 'キツネ',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658__480.jpg' 
  },
  {
    id: 4,
    name: 'ヒツジ',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088__480.jpg' 
  },
          ]
      },
      computed: {
          filteredUsers: function() {

              var users = [];

              for(var i in this.users) {

                  var user = this.users[i];

                  if(user.name.indexOf(this.keyword) !== -1 ||
                      user.name.indexOf(this.keyword) !== -1) {

                      users.push(user);

                  }

              }

              return users;

          }
      }
  });