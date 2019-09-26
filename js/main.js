/* exported app */

let app = {
  el: '#app',
  data: {
    globals: globals,
    lang: 'en',
    query: '',
    res: {}
  },
  methods: {
    'doQuery': () => {
      const self = app;
      self.res = '';
      if (self.query.length) {
        const url = `https://${self.lang}.wikipedia.org/w/index.php?search=${encodeURIComponent(self.query)}`;
        utils.get(url, true).then((res) => {
          const doc = utils.createDocument(res);
          const text = doc.getElementsByClassName('mw-parser-output');
          self.res = {
            title: doc.title.split(/[-—]/g)[0].trim(),
            link: url,
            extract: text[0] ? text[0].innerText.split('\n')[0] + '...' : undefined,
          };
          app.doc = doc; //TODO temp
        });
      }
    }
  }
};

window.onload = () => {
  app = new Vue(app);
};