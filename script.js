const CHAR_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const copyIcon = document.getElementById('copyIcon');
const lengthSlider = document.getElementById('lengthSlider');
const lengthInput = document.getElementById('lengthInput');
const uppercaseCb = document.getElementById('uppercase');
const lowercaseCb = document.getElementById('lowercase');
const numbersCb = document.getElementById('numbers');
const symbolsCb = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

// Slider ve Sayısal Input eşitlemesi
lengthSlider.addEventListener('input', () => {
  lengthInput.value = lengthSlider.value;
  generatePassword();
});

lengthInput.addEventListener('input', () => {
  let val = parseInt(lengthInput.value) || 4;
  if (val > 1500) val = 1500;
  if (val < 1) val = 1;
  lengthSlider.value = val;
  generatePassword();
});

// Şifre Üretme Fonksiyonu
function generatePassword() {
  let validChars = '';
  if (uppercaseCb.checked) validChars += CHAR_SETS.uppercase;
  if (lowercaseCb.checked) validChars += CHAR_SETS.lowercase;
  if (numbersCb.checked) validChars += CHAR_SETS.numbers;
  if (symbolsCb.checked) validChars += CHAR_SETS.symbols;

  if (validChars === '') {
    passwordInput.value = '';
    updateStrengthBar(0);
    return;
  }

  let password = '';
  const length = parseInt(lengthInput.value) || 16;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }

  passwordInput.value = password;
  evaluateStrength(password);
}

// Güvenlik Skoru Hesaplama
function evaluateStrength(password) {
  let score = 0;
  if (!password) {
    updateStrengthBar(0);
    return;
  }

  const len = password.length;
  if (len >= 8) score += 20;
  if (len >= 16) score += 20;
  if (len >= 32) score += 10;

  if (/[A-Z]/.test(password)) score += 12.5;
  if (/[a-z]/.test(password)) score += 12.5;
  if (/[0-9]/.test(password)) score += 12.5;
  if (/[^A-Za-z0-9]/.test(password)) score += 12.5;

  updateStrengthBar(score);
}

// Bar Renk Güncelleme
function updateStrengthBar(score) {
  strengthBar.style.width = score + '%';

  if (score === 0) {
    strengthBar.style.backgroundColor = '#e2e8f0';
    strengthText.textContent = 'Güvenlik: Seçim Yapın';
  } else if (score <= 40) {
    strengthBar.style.backgroundColor = '#ef4444';
    strengthText.textContent = 'Güvenlik: Zayıf';
  } else if (score <= 75) {
    strengthBar.style.backgroundColor = '#f59e0b';
    strengthText.textContent = 'Güvenlik: Orta';
  } else {
    strengthBar.style.backgroundColor = '#10b981';
    strengthText.textContent = 'Güvenlik: Çok Güçlü';
  }
}

// Kopyalama Mantığı ve İkon Değişimi
copyBtn.addEventListener('click', () => {
  if (!passwordInput.value) return;

  navigator.clipboard.writeText(passwordInput.value);
  
  copyIcon.className = 'bi bi-check-lg';
  setTimeout(() => {
    copyIcon.className = 'bi bi-clipboard';
  }, 1500);
});

[uppercaseCb, lowercaseCb, numbersCb, symbolsCb].forEach(cb => {
  cb.addEventListener('change', generatePassword);
});

generateBtn.addEventListener('click', generatePassword);

// Sayfa Yüklendiğinde Otomatik İlk Şifreyi Üret
generatePassword();
