/**
 * NOVA ENTERPRISE - Authentication & SSO Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('auth-form-container')) return;
  initAuth();
});

function initAuth() {
  const tabLogin = document.getElementById('tab-btn-login');
  const tabSignup = document.getElementById('tab-btn-signup');
  const loginForm = document.getElementById('form-login');
  const signupForm = document.getElementById('form-signup');
  const pwdInput = document.getElementById('signup-password');
  const pwdStrengthFill = document.getElementById('pwd-strength-meter');
  const pwdStrengthText = document.getElementById('pwd-strength-label');

  // Toggle Tabs
  tabLogin?.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  });

  tabSignup?.addEventListener('click', () => {
    tabSignup.classList.add('active');
    tabLogin.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  });

  // Password Strength Calculation
  if (pwdInput && pwdStrengthFill && pwdStrengthText) {
    pwdInput.addEventListener('input', (e) => {
      const val = e.target.value;
      let score = 0;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      if (val.length === 0) {
        pwdStrengthFill.style.width = '0%';
        pwdStrengthText.textContent = '';
      } else if (score <= 1) {
        pwdStrengthFill.style.width = '25%';
        pwdStrengthFill.style.backgroundColor = 'var(--color-error)';
        pwdStrengthText.textContent = 'Weak';
        pwdStrengthText.style.color = 'var(--color-error)';
      } else if (score === 2) {
        pwdStrengthFill.style.width = '50%';
        pwdStrengthFill.style.backgroundColor = 'var(--color-warning)';
        pwdStrengthText.textContent = 'Fair';
        pwdStrengthText.style.color = 'var(--color-warning)';
      } else if (score === 3) {
        pwdStrengthFill.style.width = '75%';
        pwdStrengthFill.style.backgroundColor = 'var(--color-info)';
        pwdStrengthText.textContent = 'Strong';
        pwdStrengthText.style.color = 'var(--color-info)';
      } else {
        pwdStrengthFill.style.width = '100%';
        pwdStrengthFill.style.backgroundColor = 'var(--color-success)';
        pwdStrengthText.textContent = 'Enterprise Grade';
        pwdStrengthText.style.color = 'var(--color-success)';
      }
    });
  }

  // Handle Login Submission
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
      showToast('Please enter both corporate email and password', 'error');
      return;
    }

    const btn = loginForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = 'Authenticating via Secure SSO Gateway...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Sign In to Console';

      const mockUser = {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        company: 'Enterprise Partner'
      };

      window.store.setUser(mockUser);
      showToast(`Welcome back, ${mockUser.name}! Authentication verified.`, 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    }, 1200);
  });

  // Handle Signup Submission
  signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const company = document.getElementById('signup-company').value.trim();
    const password = document.getElementById('signup-password').value;

    if (!name || !email || !company || !password) {
      showToast('Please complete all corporate onboarding fields', 'error');
      return;
    }

    const btn = signupForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = 'Provisioning Enterprise Tenant...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Create Enterprise Account';

      const newUser = {
        name: name,
        email: email,
        company: company
      };

      window.store.setUser(newUser);
      showToast(`Account successfully created for ${company}!`, 'success');
      setTimeout(() => {
        window.location.href = 'shop.html';
      }, 1000);
    }, 1400);
  });

  // Social / SSO Handlers
  document.querySelectorAll('.btn-sso-provider').forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.getAttribute('data-provider');
      showToast(`Redirecting to ${provider} Identity Provider...`, 'info');
      setTimeout(() => {
        const mockUser = {
          name: 'Executive Partner',
          email: `partner@${provider.toLowerCase().replace(/\s+/g, '')}-mesh.corp`,
          company: `${provider} Federated Account`
        };
        window.store.setUser(mockUser);
        showToast(`SSO Handshake verified via ${provider}!`, 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      }, 1200);
    });
  });
}
