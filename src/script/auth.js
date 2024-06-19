
export function initNetlifyIdentity() {
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => console.log('init', user));
      window.netlifyIdentity.on('login', user => console.log('login', user));
      window.netlifyIdentity.on('logout', () => console.log('Logged out'));
      window.netlifyIdentity.on('error', err => console.error('Error', err));
      window.netlifyIdentity.on('open', () => console.log('Widget opened'));
      window.netlifyIdentity.on('close', () => console.log('Widget closed'));

      window.netlifyIdentity.init();
    }
  }

  export function openLoginModal() {
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.open();
    }
  }

  export function logout() {
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.logout();
    }
  }
