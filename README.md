# 🛠️ Köksal Usta'nın Pardus & Waydroid Teknoloji Notları

Disketli günlerden Pardus'a uzanan teknoloji yolculuğumda aldığım **usta işi notlar** burada.

> *"Çayımız taze, terminalimiz açık... İşimiz gücümüz teknoloji!"*

---

## 📁 İçindekiler

1. [Sistem Güncelleme ve Donanım Hazırlığı](#1-sistem-güncelleme-ve-donanim-hazirliği)
2. [Waydroid: Kurulum ve Temizlik](#2-waydroid-kurulum-ve-temizlik)
3. [Ağ ve VPN Yönetimi (Cloudflare WARP)](#3-ağ-ve-vpn-yönetimi-cloudflare-warp)
4. [Sistem Temizliği (BleachBit, System Maid)](#4-sistem-temizliği)
5. [NumLock Ayarı ve Klavye Donması](#5-numlock-ayarı-ve-klavye-donması)
6. [DNS ve Depo Güncelleme Sorunları](#6-dns-ve-depo-güncelleme-sorunları)
7. [Faydalı Kısa Komutlar](#7-faydalı-kısa-komutlar)

---

## 1. Sistem Güncelleme ve Donanım Hazırlığı

Sistemi en güncel halde tutmak ve yeni nesil donanımlar için gerekli depolar:

```bash
# Paket listesini güncelle ve sistemi yükselt
sudo apt update && sudo apt full-upgrade -y

# Yeni nesil donanımlar için firmware deposunu ekle (Pardus 23/25)
echo "deb http://depo.pardus.org.tr/experimental yirmiuc-firmware non-free" | sudo tee /etc/apt/sources.list.d/experimental-yirmiuc-firmware.list
sudo apt update
2. Waydroid: Kurulum ve Temizlik
A. Tam Temizlik (Sıfırlama)
bash

waydroid session stop
sudo systemctl stop waydroid-container
sudo rm -rf /var/lib/waydroid
sudo rm -rf ~/.local/share/waydroid
rm -rf ~/.local/share/applications/waydroid*

B. Kurulum ve GAPPS (Google Servisleri) Aktifleştirme
bash

sudo apt update
sudo apt install curl ca-certificates lzip sqlite3 -y
curl -s https://repo.waydro.id | sudo bash
sudo apt install waydroid -y

# Google Servisleri (GAPPS) ile başlat
sudo waydroid init -s GAPPS -f

C. Google Sertifikası (Cihaz Kaydı)

Waydroid içinde Play Store'un çalışması için Android ID alınır ve Google Uncertified adresine kaydedilir:
bash

sudo waydroid shell
sqlite3 /data/data/com.google.android.gsf/databases/gservices.db "select * from main where name = 'android_id';"

📌 Usta Notu (9 Mayıs 2026)

    Facebook açılmama sorunu, Vendor type kontrolü ve Google hesap izinlerinin (3. taraf uygulama izinleri) temizlenmesiyle çözülmüştür.

3. Ağ ve VPN Yönetimi (Cloudflare WARP)

VPN bağlantısını terminalden yönetmek için:
bash

# Bağlan
warp-cli connect

# Bağlantıyı Kes
warp-cli disconnect

# Durum Kontrol
warp-cli status

# Test
curl https://www.cloudflare.com/cdn-cgi/trace | grep warp

4. Sistem Temizliği
🧹 Seviye 1: Hafif Temizlik (Önbellek ve Geçici Dosyalar)
bash

# 1. Paket yöneticisi önbelleğini temizle
sudo apt clean

# 2. Kullanılmayan bağımlılıkları temizle
sudo apt autoremove

# 3. KDE önbelleğini temizle
rm -rf ~/.cache/*

# 4. Thumbnail (küçük resim) önbelleğini temizle
rm -rf ~/.thumbnails/*

# 5. Geçici dosyaları temizle
rm -rf /tmp/*

🧽 Seviye 2: Tam Temizlik (BleachBit)
bash

sudo apt install bleachbit -y

    Uyarı: BleachBit'i root yetkisiyle çalıştırırken "Yerelleştirme" (localization) seçeneğini işaretleme. Yoksa Türkçe dil paketleri silinir.

⚡ En Sade ve En Temiz Yol (Tek Seferlik Kombinasyon)
bash

# 1. Önbellekleri temizle
sudo apt clean && sudo apt autoremove -y

# 2. KDE'nin çöplerini at
rm -rf ~/.cache/* ~/.thumbnails/*

# 3. Gereksiz logları temizle
sudo journalctl --rotate
sudo journalctl --vacuum-time=3d

# 4. Çöp kutusunu boşalt
rm -rf ~/.local/share/Trash/*

5. NumLock Ayarı ve Klavye Donması
NumLock’u Her Açılışta Aktif Et
bash

# NumLockX aracını kur
sudo apt install numlockx -y

# KDE için kalıcı ayar
kwriteconfig6 --file ~/.config/kwinrc --group ModifierOnlyShortcuts --key Meta "org.kde.plasmashell,/PlasmaShell,org.kde.PlasmaShell,activateLauncherMenu"
kwriteconfig6 --file ~/.config/kcminputrc --group Keyboard --key NumLock 1

    Sistem Ayarları → Giriş Aygıtları → Klavye → Gelişmiş → "NumLock'u Başlangıçta Aç"

6. DNS ve Depo Güncelleme Sorunları

Eğer sudo apt update'te bağlantı hatası alıyorsan, DNS ayarlarını elle gir:
bash

# 1. DNS ayar dosyasını yedekleyip yenile
sudo mv /etc/resolv.conf /etc/resolv.conf.yedek
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
echo "nameserver 1.1.1.1" | sudo tee -a /etc/resolv.conf

# 2. Depo önbelleğini temizle
sudo rm -rf /var/lib/apt/lists/*

# 3. Depoları güncelle
sudo apt update   # Artık çalışıyor ✅

7. Faydalı Kısa Komutlar
bash

# Modem Üzerinden Dosya Paylaşımı (SMB)
smb://192.168.1.1

# Yazılım Merkezi
gnome-software

# Waydroid UI
waydroid show-full-ui

# Waydroid Servis Başlatma
sudo systemctl start waydroid-container.service

# Cloudflare DNS test
ping 1.1.1.1

🙏 Hazırlayan: Köksal Usta (cehri50)

    "Disketli günlerden Pardus'a, emekle büyüyen bir rehber."

GitHub: github.com/cehri50/cehri
İletişim ve katkılar için pull request gönderebilirsiniz.

📌 Son Güncelleme: Mayıs 2026
🎯 Kapsam: Pardus 25 (KDE) | Waydroid GAPPS | Cloudflare WARP | Sistem Optimizasyonu
text


---

## ✍️ YAPMAN GEREKEN

1. **Yukarıdaki kodu kopyala** (Üstteki kutu içindeki her şeyi seç, `Ctrl+C` yap).
2. GitHub'da deponun içinde `README.md` dosyasını aç (yoksa "Add file" → "Create new file" deyip adını `README.md` yaz).
3. **Yapıştır** (`Ctrl+V`).
4. **Commit changes** (değişiklikleri kaydet).

**İşte bitti.** Artık depona giren herkes bu yakışıklı, düzenli, çalıştırılabilir komutlarla dolu rehberi görür.

---

*
