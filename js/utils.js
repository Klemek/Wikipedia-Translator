/* exported utils, globals */

const utils = {
  get: (url, proxy = false) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (proxy) {
        const http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        url = http + '//cors-anywhere.herokuapp.com/' + url;
      }
      xhr.open('GET', url);
      xhr.onload = () => {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (ignored) {
          resolve(xhr.responseText);
        }
      };
      xhr.onerror = () => reject(xhr);
      xhr.send();
    });
  },
  createDocument: (html) => {
    return new DOMParser().parseFromString(html, 'text/html');
  }
};

const globals = {
  langs: [
    {n: 'English', v: 'en'},
    {n: 'Français', v: 'fr'},
    {n: 'Español', v: 'es'},
    {n: 'Deutsch', v: 'de'},
    {n: 'Italiano', v: 'it'},
    {n: 'Nederlands', v: 'nl'},
    {n: '日本語', v: 'ja'},
    {n: 'Polski', v: 'pl'},
    {n: 'Português', v: 'pt'},
    {n: 'Русский', v: 'ru'},
    {n: 'Sinugboanong Binisaya', v: 'ceb'},
    {n: 'Svenska', v: 'sv'},
    {n: 'Tiếng Việt', v: 'vi'},
    {n: 'Winaray', v: 'war'},
    {n: '中文', v: 'zh'},
  ]
};