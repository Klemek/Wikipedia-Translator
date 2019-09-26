/* exported app */

let app = {
  el: '#app',
  data: {
    sample: 'Wikipedia translator'
  },
  methods: {},
  'mounted': {},
  'created': {}
};

window.onload = () => {
  app = new Vue(app);
};