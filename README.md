# 🔐 Güvenli Şifre Oluşturucu & Güvenlik Analiz Aracı

![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-blue.svg)
![PR'lar Açık](https://img.shields.io/badge/PR'lar-kabul_edilir-brightgreen.svg)
![tech](https://img.shields.io/badge/tech-VanillaJS%20%7C%20CSS3%20%7C%20HTML5-orange)

Özelleştirilebilir parametrelerle 1500 karaktere kadar yüksek güvenlikli şifreler üreten, dinamik güvenlik analizi sunan ve Bootstrap Icons entegrasyonuna sahip açık kaynaklı web uygulaması.

---

## 📌 Bu Araç Ne İşe Yarar?

İhtiyacınıza uygun karmaşıklıkta şifreler üretmenizi ve şifrenizin dayanıklılığını anlık olarak ölçmenizi sağlar:

1. **Esnek Şifre Üretimi:** 4 ile 1500 karakter arasında slider veya sayısal girdi kutusu üzerinden tam kontrol imkanı sunar.
2. **Dinamik Güvenlik Analizi:** Karakter çeşitliliği (Büyük/Küçük harf, Sayı, Sembol) ve uzunluk kriterlerine göre şifrenin güvenlik derecesini (Zayıf, Orta, Çok Güçlü) anlık hesaplar.
3. **Karakter Seti Özelleştirme:**
   - **Büyük Harf:** `A-Z`
   - **Küçük Harf:** `a-z`
   - **Sayılar:** `0-9`
   - **Semboller:** `!@#$%^&*()_+-=[]{}|;:,.<>?`
4. **Tek Tıkla Kopyalama:** Üretilen şifreyi panoya kopyalar ve kullanıcıya ikon değişimiyle görsel geri bildirim sunar.

---

## ✨ Öne Çıkan Özellikler

- **1500 Karakter Desteği:** Standart sınırların ötesinde son derece uzun ve karmaşık şifre/anahtar üretimi.
- **Duyarlı (Responsive) Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumlu modern UI.
- **Sıfır Sunucu İsteği (Client-Side):** Şifre üretimi tamamen tarayıcı üzerinde gerçekleşir; verileriniz hiçbir sunucuya gönderilmez veya kaydedilmez.

---

## 📁 Proje Yapısı

```text
.
├── index.html   # Ana HTML yapısı ve Bootstrap Icons CDN
├── style.css    # Arayüz stilleri ve renk paleti
└── script.js    # Şifre üretim ve güvenlik analizi mantığı
