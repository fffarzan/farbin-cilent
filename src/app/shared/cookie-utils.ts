export class CookieUtils {
  static setCookie(name: string, value: string, expireDays: number = 0, path: string = '') {
    let expires: string = '';
    let cpath: string = path ? `; path=${path}` : '';
    
    if (expireDays) {
      let date: Date = new Date();
      date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
      expires = `expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  static getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let cArrayLength: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < cArrayLength; i++) {
      c = ca[i].replace(/^\s+/g, '');
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(cookieName) === 0) return c.substring(cookieName.length, c.length);
    }

    return '';
  }

  static deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }
}