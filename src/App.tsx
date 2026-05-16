import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Copy, 
  Check, 
  Cpu, 
  Smartphone, 
  ShieldCheck, 
  Settings, 
  Trash2, 
  Network, 
  Layout,
  ExternalLink,
  ChevronRight,
  Terminal,
  BookOpen
} from 'lucide-react';
import { NOTES, CATEGORIES, Note } from './constants';

const IconMap: Record<string, any> = {
  Cpu,
  Smartphone,
  ShieldCheck,
  Settings,
  Trash2,
  Network,
  Layout
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredNotes = useMemo(() => {
    return NOTES.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          note.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-300 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0a0a0bc0] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Terminal className="text-emerald-500 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-zinc-100 leading-tight">cehri50'nin Not Defteri</h1>
              <p className="text-xs text-zinc-500 font-mono">Pardus & Waydroid Mastery</p>
            </div>
          </div>

          <div className="flex-1 max-w-md relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text"
              placeholder="Komut veya not ara..."
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Sistem Aktif
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text"
              placeholder="Komut veya not ara..."
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Categories */}
        <aside className="lg:w-64 flex-shrink-0 space-y-1">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-3 mb-4">Kategoriler</p>
          {CATEGORIES.map((cat) => {
            const Icon = IconMap[cat.icon];
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group ${
                  isActive 
                    ? 'bg-emerald-500/10 text-emerald-400 font-medium' 
                    : 'hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-emerald-400/70'}`} />
                {cat.name}
              </button>
            );
          })}
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-bold text-zinc-100">
                {CATEGORIES.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-xs bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full font-mono">
                {filteredNotes.length}
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            <AnimatePresence mode="popLayout">
              {filteredNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/70 bg-emerald-500/5 px-2 py-0.5 rounded">
                             {CATEGORIES.find(c => c.id === note.category)?.name}
                           </span>
                        </div>
                        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                          {note.title}
                        </h3>
                      </div>
                      
                      {note.isCode && (
                        <button 
                          onClick={() => handleCopy(note.content, note.id)}
                          className={`p-2 rounded-lg border transition-all ${
                            copiedId === note.id 
                            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500' 
                            : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50'
                          }`}
                          title="Kopyala"
                        >
                          {copiedId === note.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                    </div>

                    {note.isCode ? (
                      <div className="relative">
                        <pre className="bg-black/40 border border-zinc-800 rounded-xl p-4 overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300">
                          <code>{note.content}</code>
                        </pre>
                        <div className="absolute top-2 right-2 flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-500/20" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                          <div className="w-2 h-2 rounded-full bg-green-500/20" />
                        </div>
                      </div>
                    ) : (
                      <div className="bg-zinc-800/10 border border-zinc-800 p-4 rounded-xl text-sm leading-relaxed text-zinc-400 whitespace-pre-line">
                        {note.content}
                      </div>
                    )}
                  </div>
                  
                  <div className="px-6 py-3 bg-zinc-900/50 border-t border-zinc-800 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                       <Terminal className="w-3 h-3 text-emerald-500/50" />
                       Bash / Terminal
                     </div>
                     <button className="text-[10px] font-bold text-zinc-600 hover:text-emerald-500 flex items-center gap-1 transition-colors">
                       DETAY <ChevronRight className="w-3 h-3" />
                     </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredNotes.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <Search className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                <h3 className="text-zinc-500 font-medium">Aradığınız kriterlere uygun not bulunamadı.</h3>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                  className="mt-4 text-emerald-500 hover:underline text-sm"
                >
                  Filtreleri temizle
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center font-mono text-xs font-bold text-emerald-500">
               C50
             </div>
             <p className="text-sm text-zinc-500 leading-none">
               © 2026 cehri50. Selametle ustam. 👊
             </p>
          </div>
          <div className="flex items-center gap-6">
             <a href="https://www.google.com/android/uncertified/" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-emerald-500 flex items-center gap-1.5 transition-colors">
               Android Sertifikası <ExternalLink className="w-3 h-3" />
             </a>
             <a href="#" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">
               Destek
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

