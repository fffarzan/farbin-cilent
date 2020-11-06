export function detectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) return true;
  else return false;
}

export function isLandscape() {
  if (window.innerWidth >= 812 && window.innerWidth <= 1024) return true;
}

export function detectTablet() {
  if (navigator.userAgent.match(/iPad/i)) return true;
  else return false;
}

export function getSmallImage(imageUrl) {
  if (imageUrl) {
    let temp = [];

    if (imageUrl.includes('/')) {
      if (!imageUrl.includes('\\')) temp = imageUrl.split('/');
    } else if (imageUrl.includes('\\')) {
      if (!imageUrl.includes('/')) temp = imageUrl.split('\\');
    } else if (imageUrl.includes('\\')) {
      if (imageUrl.includes('/')) temp = imageUrl.split('\\');
    }

    let tempLength = temp.length;
    temp.splice(tempLength - 1, 0, 'Small');

    if (imageUrl.includes('/')) {
      if (!imageUrl.includes('\\')) imageUrl = temp.join('/');
    } else if (imageUrl.includes('\\')) {
      if (!imageUrl.includes('/')) imageUrl = temp.join('\\');
    } else if (imageUrl.includes('\\')) {
      if (imageUrl.includes('/')) imageUrl = temp.join('\\');
    }

    return imageUrl;
  }
}