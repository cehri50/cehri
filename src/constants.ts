export interface Note {
  id: string;
  title: string;
  category: string;
  content: string;
  isCode?: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'Hepsi', icon: 'Layout' },
  { id: 'system', name: 'Sistem & Güncelleme', icon: 'Cpu' },
  { id: 'waydroid', name: 'Waydroid & Android', icon: 'Smartphone' },
  { id: 'vpn', name: 'VPN & Warp', icon: 'ShieldCheck' },
  { id: 'settings', name: 'Ayarlar & Masaüstü', icon: 'Settings' },
  { id: 'cleaning', name: 'Temizlik & Bakım', icon: 'Trash2' },
  { id: 'network', name: 'Ağ & Bağlantı', icon: 'Network' },
];

export const NOTES: Note[] = [
  {
    id: '1',
    title: 'Sistem Güncelleme Komutları',
    category: 'system',
    isCode: true,
    content: `sudo apt update
# Depolardaki güncel paket listesini indirir.

sudo apt full-upgrade -y
# Tüm paketleri ve bağımlılıkları günceller.`
  },
  {
    id: '2',
    title: 'Pardus Firmware Deposu Ekleme',
    category: 'system',
    isCode: true,
    content: `echo "deb http://depo.pardus.org.tr/experimental yirmiuc-firmware non-free" | sudo tee /etc/apt/sources.list.d/experimental-yirmiuc-firmware.list && sudo apt update`
  },
  {
    id: '3',
    title: 'Waydroid Temizleme',
    category: 'waydroid',
    isCode: true,
    content: `# Waydroid'i tamamen temizle
waydroid session stop
sudo systemctl stop waydroid-container
sudo rm -rf /var/lib/waydroid
sudo rm -rf ~/.local/share/waydroid
rm -rf ~/.local/share/applications/waydroid*`
  },
  {
    id: '4',
    title: 'Waydroid GAPPS Kurulumu (Stabil)',
    category: 'waydroid',
    isCode: true,
    content: `# 1. Bağımlılıkları kur
sudo apt install -y lzip sqlite3

# 2. GAPPS'li Waydroid kur (Android 11)
sudo waydroid init -f -s GAPPS

# 3. Servisi başlat
sudo systemctl start waydroid-container
waydroid session start

# 4. Arayüzü göster
waydroid show-full-ui`
  },
  {
    id: '5',
    title: 'Cloudflare WARP Yönetimi',
    category: 'vpn',
    isCode: true,
    content: `# Durumu kontrol et
warp-cli status

# Bağlan
warp-cli connect

# Bağlantıyı kes
warp-cli disconnect

# Bağlantıyı test et
curl https://www.cloudflare.com/cdn-cgi/trace | grep warp`
  },
  {
    id: '6',
    title: 'Waydroid Google Sertifikası (Android ID)',
    category: 'waydroid',
    isCode: true,
    content: `sudo waydroid shell
apt update && apt install sqlite3 -y
sqlite3 /data/data/com.google.android.gsf/databases/gservices.db "select * from main where name = 'android_id';"
exit
# Çıkan ID'yi buraya kaydet: https://www.google.com/android/uncertified/`
  },
  {
    id: '7',
    title: 'NumLock Başlangıç Ayarı',
    category: 'settings',
    isCode: true,
    content: `# NumLock'un her açılışta aktif olması için
sudo apt install numlockx -y

# KDE Config komutları
kwriteconfig6 --file ~/.config/kwinrc --group ModifierOnlyShortcuts --key Meta "org.kde.plasmashell,/PlasmaShell,org.kde.PlasmaShell,activateLauncherMenu"
kwriteconfig6 --file ~/.config/kcminputrc --group Keyboard --key NumLock 1`
  },
  {
    id: '8',
    title: 'Sistem Temizlik (Seviye 1: Hafif)',
    category: 'cleaning',
    isCode: true,
    content: `sudo apt clean
sudo apt autoremove
rm -rf ~/.cache/*
rm -rf ~/.thumbnails/*
rm -rf /tmp/*`
  },
  {
    id: '9',
    title: 'Sistem Temizlik (Seviye 2: BleachBit)',
    category: 'cleaning',
    isCode: true,
    content: `sudo apt install bleachbit -y
# Uygulama menüsünden açıp Sistem/KDE/Firefox bölümlerini temizleyin.`
  },
  {
    id: '10',
    title: 'DNS & Depo Hızlandırma Çözümü',
    category: 'network',
    isCode: true,
    content: `# 1. DNS ayar dosyasını yenile
sudo mv /etc/resolv.conf /etc/resolv.conf.cehri50
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
echo "nameserver 1.1.1.1" | sudo tee -a /etc/resolv.conf

# 2. Depo listelerini temizle ve güncelle
sudo rm -rf /var/lib/apt/lists/*
sudo apt update`
  },
  {
    id: '11',
    title: 'USB / Ağ Paylaşımı Bağlan',
    category: 'network',
    isCode: false,
    content: `Dosya yöneticisi adres çubuğuna yazın: smb://192.168.1.1`
  },
  {
    id: '12',
    title: 'Facebook Waydroid Çözümü Notu',
    category: 'waydroid',
    isCode: false,
    content: `Tarih: 9 Mayıs 2026
Sorun: Facebook açılmıyordu (Vendor: Mainline).
Çözüm: 
1. Waydroid resetlendi (GAPPS ile init).
2. Android ID kaydedildi.
3. Google Hesap Güvenliği'nden eski 3. taraf izinleri (Facebook dahil) temizlendi.
Sonuç: Stabil çalışma sağlandı.`
  },
  {
    id: '13',
    title: 'Sistem Kaynaklarını Canlı İzle',
    category: 'system',
    isCode: true,
    content: `# htop yoksa kur
sudo apt install htop -y

# İşlemci, Ram ve süreçleri izle
htop`
  },
  {
    id: '14',
    title: 'Hangi Klasör Ne Kadar Yer Kaplıyor?',
    category: 'cleaning',
    isCode: true,
    content: `# Bulunduğun klasördeki boyutları sıralı listele
du -sh * | sort -h

# Sisteki en büyük 10 dosyayı bul
sudo find / -type f -printf "%s %p\n" | sort -rn | head -n 10`
  },
  {
    id: '15',
    title: 'Açık Portları ve Bağlantıları Gör',
    category: 'network',
    isCode: true,
    content: `# Hangi program hangi portu kullanıyor?
sudo ss -tunlp`
  },
  {
    id: '16',
    title: 'RAM Önbelleğini (Cache) Zorla Boşalt',
    category: 'cleaning',
    isCode: true,
    content: `# Önce verileri diske yaz, sonra ram cache temizle (Root haklarıyla)
sync; echo 3 | sudo tee /proc/sys/vm/drop_caches`
  },
  {
    id: '17',
    title: 'Donanım Bilgilerini Al',
    category: 'system',
    isCode: true,
    content: `# USB cihazları listele
lsusb

# PCI cihazları (Ekran kartı vb.) listele
lspci

# İşlemci detaylarını gör
lscpu`
  },
  {
    id: '18',
    title: 'Journal Loglarını Temizle',
    category: 'cleaning',
    isCode: true,
    content: `# 500MB'tan büyük eski logları siler
sudo journalctl --vacuum-size=500M

# 2 günden eski logları siler
sudo journalctl --vacuum-time=2d`
  },
  {
    id: '19',
    title: 'Disk Sağlığını Kontrol Et',
    category: 'system',
    isCode: true,
    content: `# smartmontools yoksa kur
sudo apt install smartmontools -y

# Disk sağlığı özetini gör (sda yerine kendi diskini yaz)
sudo smartctl -H /dev/sda`
  }
];
