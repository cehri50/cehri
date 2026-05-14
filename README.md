# Köksal Usta'nın Teknoloji Notları 🛠️

Disketli günlerden Pardus'a uzanan teknoloji yolculuğumda aldığım usta işi notlar burada.

## 📁 Neler Var?
* **Pardus & Linux:** Sistem optimizasyonları ve karşılaşılan hataların çözümleri.
* **Waydroid:** Linux üzerinde Android çalıştırma maceraları.
* **IPTV:** Panel testleri ve M3U yönetimi üzerine geliştirdiğim araçlar.

## 🚀 Son Notlar
- Canva açılırken yaşanan donma sorunu ve tarayıcı GPU ayarları.
- GitHub VPN engeli ve giriş yöntemleri.
- Pardus alt panel ve bildirim simgeleri yönetimi.

---
*Çayımız taze, terminalimiz açık... İşimiz gücümüz teknoloji!*
# Köksal Usta'nın Pardus & Waydroid Teknoloji Notları 🛠️

Bu depo, Pardus 25 (KDE) üzerinde gerçekleştirdiğim sistem optimizasyonları, Waydroid kurulumları ve karşılaşılan sorunların çözümlerini içeren teknik bir günlük niteliğindedir.

---

## 🛠️ 1. Sistem Güncelleme ve Donanım Hazırlığı
Sistemi en güncel halde tutmak ve yeni nesil donanımlar için firmware depolarını eklemek için:

```bash
``` 
``` A. Tam Temizlik (Sıfırlama)
waydroid session stop
sudo systemctl stop waydroid-container
sudo rm -rf /var/lib/waydroid
sudo rm -rf ~/.local/share/waydroid
rm -rf ~/.local/share/applications/waydroid*
B. Kurulum ve GAPPS (Google Servisleri) Aktifleştirme
sudo apt update
sudo apt install curl ca-certificates lzip sqlite3 -y
curl -s [https://repo.waydro.id](https://repo.waydro.id) | sudo bash
sudo apt install waydroid -y

# Google Servisleri (GAPPS) ile başlat
sudo waydroid init -s GAPPS -f
C. Google Sertifikası (Cihaz Kaydı)
Köksal ustam, malzemeyi döktün masaya! Gerçekten tam bir "hayat kurtaranlar" listesi olmuş. Hem sistem güncelleme, hem o inatçı Waydroid'i yola getirme, hem de Cloudflare WARP (VPN) komutları... Hepsi pırlanta değerinde.

Şimdi ben bu karışık listeyi senin o GitHub sayfan (cehri50/cehri) için jilet gibi, kategorize edilmiş bir "Usta Rehberi" haline getirdim. Aşağıdaki metni kopyalayıp GitHub'daki README.md dosyanın içine, eski metni silerek veya altına ekleyerek yapıştırabilirsin.
📝 GitHub İçin Hazırladığım Yeni "Usta Rehberi" Taslağı:
Markdown

# Köksal Usta'nın Pardus & Waydroid Teknoloji Notları 🛠️

Bu depo, Pardus 25 (KDE) üzerinde gerçekleştirdiğim sistem optimizasyonları, Waydroid kurulumları ve karşılaşılan sorunların çözümlerini içeren teknik bir günlük niteliğindedir.

---

## 🛠️ 1. Sistem Güncelleme ve Donanım Hazırlığı
Sistemi en güncel halde tutmak ve yeni nesil donanımlar için firmware depolarını eklemek için:

```bash
# Paket listesini güncelle ve sistemi yükselt
sudo apt update && sudo apt full-upgrade -y

# Yeni nesil donanımlar için firmware deposunu ekle (Pardus 23/25)
echo "deb [http://depo.pardus.org.tr/experimental](http://depo.pardus.org.tr/experimental) yirmiuc-firmware non-free" | sudo tee /etc/apt/sources.list.d/experimental-yirmiuc-firmware.list
sudo apt update

🤖 2. Waydroid: Adım Adım Kurulum ve Temizlik

Eğer Waydroid çalışmazsa veya Facebook gibi uygulamalarda sorun çıkarsa sıfırdan temiz kurulum adımları:
A. Tam Temizlik (Sıfırlama)
Bash

waydroid session stop
sudo systemctl stop waydroid-container
sudo rm -rf /var/lib/waydroid
sudo rm -rf ~/.local/share/waydroid
rm -rf ~/.local/share/applications/waydroid*

B. Kurulum ve GAPPS (Google Servisleri) Aktifleştirme
Bash

sudo apt update
sudo apt install curl ca-certificates lzip sqlite3 -y
curl -s [https://repo.waydro.id](https://repo.waydro.id) | sudo bash
sudo apt install waydroid -y

# Google Servisleri (GAPPS) ile başlat
sudo waydroid init -s GAPPS -f

C. Google Sertifikası (Cihaz Kaydı)
Waydroid içinde Google Play Store'un çalışması için Android ID'yi alıp Google Uncertified adresine ekleyin:
sudo waydroid shell
sqlite3 /data/data/com.google.android.gsf/databases/gservices.db "select * from main where name = 'android_id';"
Köksal ustam, malzemeyi döktün masaya! Gerçekten tam bir "hayat kurtaranlar" listesi olmuş. Hem sistem güncelleme, hem o inatçı Waydroid'i yola getirme, hem de Cloudflare WARP (VPN) komutları... Hepsi pırlanta değerinde.

Şimdi ben bu karışık listeyi senin o GitHub sayfan (cehri50/cehri) için jilet gibi, kategorize edilmiş bir "Usta Rehberi" haline getirdim. Aşağıdaki metni kopyalayıp GitHub'daki README.md dosyanın içine, eski metni silerek veya altına ekleyerek yapıştırabilirsin.
📝 GitHub İçin Hazırladığım Yeni "Usta Rehberi" Taslağı:
Markdown

# Köksal Usta'nın Pardus & Waydroid Teknoloji Notları 🛠️

Bu depo, Pardus 25 (KDE) üzerinde gerçekleştirdiğim sistem optimizasyonları, Waydroid kurulumları ve karşılaşılan sorunların çözümlerini içeren teknik bir günlük niteliğindedir.

---

## 🛠️ 1. Sistem Güncelleme ve Donanım Hazırlığı
Sistemi en güncel halde tutmak ve yeni nesil donanımlar için firmware depolarını eklemek için:

```bash
# Paket listesini güncelle ve sistemi yükselt
sudo apt update && sudo apt full-upgrade -y

# Yeni nesil donanımlar için firmware deposunu ekle (Pardus 23/25)
echo "deb [http://depo.pardus.org.tr/experimental](http://depo.pardus.org.tr/experimental) yirmiuc-firmware non-free" | sudo tee /etc/apt/sources.list.d/experimental-yirmiuc-firmware.list
sudo apt update

🤖 2. Waydroid: Adım Adım Kurulum ve Temizlik

Eğer Waydroid çalışmazsa veya Facebook gibi uygulamalarda sorun çıkarsa sıfırdan temiz kurulum adımları:
A. Tam Temizlik (Sıfırlama)
Bash

waydroid session stop
sudo systemctl stop waydroid-container
sudo rm -rf /var/lib/waydroid
sudo rm -rf ~/.local/share/waydroid
rm -rf ~/.local/share/applications/waydroid*

B. Kurulum ve GAPPS (Google Servisleri) Aktifleştirme
Bash

sudo apt update
sudo apt install curl ca-certificates lzip sqlite3 -y
curl -s [https://repo.waydro.id](https://repo.waydro.id) | sudo bash
sudo apt install waydroid -y

# Google Servisleri (GAPPS) ile başlat
sudo waydroid init -s GAPPS -f

C. Google Sertifikası (Cihaz Kaydı)

Waydroid içinde Google Play Store'un çalışması için Android ID'yi alıp Google Uncertified adresine ekleyin:
Bash

sudo waydroid shell
sqlite3 /data/data/com.google.android.gsf/databases/gservices.db "select * from main where name = 'android_id';"

🌐 3. Ağ ve VPN Yönetimi (Cloudflare WARP)

VPN bağlantısını terminalden yönetmek için:

    Bağlan: warp-cli connect

    Bağlantıyı Kes: warp-cli disconnect

    Durum Kontrol: warp-cli status

    Test: curl https://www.cloudflare.com/cdn-cgi/trace | grep warp
Köksal ustam, malzemeyi döktün masaya! Gerçekten tam bir "hayat kurtaranlar" listesi olmuş. Hem sistem güncelleme, hem o inatçı Waydroid'i yola getirme, hem de Cloudflare WARP (VPN) komutları... Hepsi pırlanta değerinde.

Şimdi ben bu karışık listeyi senin o GitHub sayfan (cehri50/cehri) için jilet gibi, kategorize edilmiş bir "Usta Rehberi" haline getirdim. Aşağıdaki metni kopyalayıp GitHub'daki README.md dosyanın içine, eski metni silerek veya altına ekleyerek yapıştırabilirsin.
📝 GitHub İçin Hazırladığım Yeni "Usta Rehberi" Taslağı:
Markdown

# Köksal Usta'nın Pardus & Waydroid Teknoloji Notları 🛠️

Bu depo, Pardus 25 (KDE) üzerinde gerçekleştirdiğim sistem optimizasyonları, Waydroid kurulumları ve karşılaşılan sorunların çözümlerini içeren teknik bir günlük niteliğindedir.

---

## 🛠️ 1. Sistem Güncelleme ve Donanım Hazırlığı
Sistemi en güncel halde tutmak ve yeni nesil donanımlar için firmware depolarını eklemek için:

```bash
# Paket listesini güncelle ve sistemi yükselt
sudo apt update && sudo apt full-upgrade -y

# Yeni nesil donanımlar için firmware deposunu ekle (Pardus 23/25)
echo "deb [http://depo.pardus.org.tr/experimental](http://depo.pardus.org.tr/experimental) yirmiuc-firmware non-free" | sudo tee /etc/apt/sources.list.d/experimental-yirmiuc-firmware.list
sudo apt update

🤖 2. Waydroid: Adım Adım Kurulum ve Temizlik

Eğer Waydroid çalışmazsa veya Facebook gibi uygulamalarda sorun çıkarsa sıfırdan temiz kurulum adımları:
A. Tam Temizlik (Sıfırlama)
Bash

waydroid session stop
sudo systemctl stop waydroid-container
sudo rm -rf /var/lib/waydroid
sudo rm -rf ~/.local/share/waydroid
rm -rf ~/.local/share/applications/waydroid*

B. Kurulum ve GAPPS (Google Servisleri) Aktifleştirme
Bash

sudo apt update
sudo apt install curl ca-certificates lzip sqlite3 -y
curl -s [https://repo.waydro.id](https://repo.waydro.id) | sudo bash
sudo apt install waydroid -y

# Google Servisleri (GAPPS) ile başlat
sudo waydroid init -s GAPPS -f

C. Google Sertifikası (Cihaz Kaydı)

Waydroid içinde Google Play Store'un çalışması için Android ID'yi alıp Google Uncertified adresine ekleyin:
Bash

sudo waydroid shell
sqlite3 /data/data/com.google.android.gsf/databases/gservices.db "select * from main where name = 'android_id';"

🌐 3. Ağ ve VPN Yönetimi (Cloudflare WARP)

VPN bağlantısını terminalden yönetmek için:

    Bağlan: warp-cli connect

    Bağlantıyı Kes: warp-cli disconnect

    Durum Kontrol: warp-cli status

    Test: curl https://www.cloudflare.com/cdn-cgi/trace | grep warp

📂 4. Faydalı Kısa Komutlar

    Modem Üzerinden Dosya Paylaşımı (SMB): smb://192.168.1.1

    Yazılım Merkezi Çalıştırma: gnome-software

    Waydroid UI Başlatma: waydroid show-full-ui

    Servis Başlatma: sudo systemctl start waydroid-container.service
Usta Notu (9 Mayıs 2026): Facebook açılmama sorunu, "Vendor type" kontrolü ve Google hesap izinlerinin temizlenmesiyle (3. taraf uygulama izinleri) çözülmüştür.
Hazırlayan: Köksal Usta (cehri50) 👊
