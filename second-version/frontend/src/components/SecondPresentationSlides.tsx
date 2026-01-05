import { motion } from 'framer-motion';
import { Cpu, HardDrive, MemoryStick, Zap, Fan, Usb, Speaker, Globe, Video, Database, CircuitBoard } from 'lucide-react';

const slideVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function TitleSlide() {
    return (
        <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            className="glass rounded-[3rem] p-16 text-center neon-border flex flex-col justify-center min-h-[600px] relative overflow-hidden"
        >
            <motion.div
                animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="flex justify-center mb-10"
            >
                <div className="p-8 glass rounded-full shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                    <Cpu className="w-28 h-28 text-cyan-400" />
                </div>
            </motion.div>
            <motion.h1
                variants={itemVariants}
                className="text-7xl font-black text-white mb-8 tracking-tight drop-shadow-2xl"
            >
                Computer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-400">Hardware</span> Ecosystem
            </motion.h1>
            <motion.p variants={itemVariants} className="text-3xl text-white/80 font-light mb-12 tracking-wide uppercase">
                Advanced Components & Architecture
            </motion.p>
            <motion.div variants={itemVariants} className="flex justify-center gap-4 text-white/50 text-sm font-bold tracking-[0.2em] uppercase">
                <span>OFPPT</span>
                <span className="text-cyan-500">•</span>
                <span>2025 Edition</span>
            </motion.div>
        </motion.div>
    );
}

export function ExpansionCardsSlide() {
    const cards = [
        { name: 'Carte Son', icon: <Speaker className="w-10 h-10" />, color: 'cyan' },
        { name: 'Carte Réseau', icon: <Globe className="w-10 h-10" />, color: 'blue' },
        { name: 'Capture Vidéo', icon: <Video className="w-10 h-10" />, color: 'purple' },
        { name: 'Ctrl RAID', icon: <Database className="w-10 h-10" />, color: 'pink' },
        { name: 'USB Extra', icon: <Usb className="w-10 h-10" />, color: 'red' }
    ];

    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <motion.h2 variants={itemVariants} className="text-5xl font-black text-white mb-12 text-center flex items-center justify-center gap-4">
                <CircuitBoard className="w-12 h-12 text-cyan-400" />
                Expansion Interface
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
                        className="glass glass-hover rounded-3xl p-8 text-center border-t border-white/20"
                    >
                        <div className={`text-${card.color}-400 mb-6 flex justify-center`}>{card.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{card.name}</h3>
                        <div className="h-1 w-12 bg-white/20 mx-auto rounded-full" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function CPUSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <div className="flex items-center gap-6 mb-12">
                <div className="p-4 glass rounded-2xl">
                    <Cpu className="w-16 h-16 text-cyan-400" />
                </div>
                <h2 className="text-5xl font-black text-white tracking-tight">CPU Architecture</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Core Logic', items: ['x86 / ARM', '64-bit Pipelines', 'Hyperthreading', 'L1/L2/L3 Cache'] },
                    { title: 'Market Leaders', items: ['Intel Core (i3-i9)', 'AMD Ryzen (3-9)', 'Apple Silicon (M-series)', 'Workstation Tier'] },
                    { title: 'Standard Sockets', items: ['LGA 1700 (Intel)', 'AM5 (AMD Next-Gen)', 'Zero Insertion Force', 'PGA Legacy'] }
                ].map((block, i) => (
                    <motion.div key={i} variants={itemVariants} className="glass rounded-3xl p-8 border-l-4 border-cyan-500/50">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-6 uppercase tracking-widest">{block.title}</h3>
                        <ul className="space-y-4">
                            {block.items.map((item, j) => (
                                <li key={j} className="text-white/80 text-lg flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function RAMSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <div className="flex items-center gap-6 mb-12">
                <div className="p-4 glass rounded-2xl">
                    <MemoryStick className="w-16 h-16 text-purple-400" />
                </div>
                <h2 className="text-5xl font-black text-white tracking-tight">Memory Density</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Evolution', items: ['DDR3 (Vintage)', 'DDR4 (Mainstream)', 'DDR5 (State-of-art)', 'ECC Memory'] },
                    { title: 'Thresholds', items: ['8GB - Minimal', '16GB - Enthusiast', '32GB - Creator', '128GB - Enterprise'] },
                    { title: 'Frequency', items: ['3200MHz (Sweet spot)', '6000MHz+ (OC)', 'JEDEC Standards', 'XMP Profiles'] }
                ].map((block, i) => (
                    <motion.div key={i} variants={itemVariants} className="glass rounded-3xl p-8 border-l-4 border-purple-500/50">
                        <h3 className="text-2xl font-bold text-purple-400 mb-6 uppercase tracking-widest">{block.title}</h3>
                        <ul className="space-y-4">
                            {block.items.map((item, j) => (
                                <li key={j} className="text-white/80 text-lg flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_purple]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function MotherboardSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px] overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-5xl font-black text-white mb-8">System Integration Hub</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { title: 'Logic Control', items: ['Chipset (Z/B/X)', 'VRM Cooling', 'BIOS/UEFI'] },
                            { title: 'Form Factors', items: ['Standard ATX', 'Micro-ATX', 'Mini-ITX'] },
                            { title: 'Physical Interface', items: ['Socket Pinout', 'I/O Shielding', 'PCIe Routing'] }
                        ].map((block, i) => (
                            <motion.div key={i} variants={itemVariants} className="glass rounded-2xl p-6 shadow-2xl bg-gradient-to-b from-white/10 to-transparent">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-cyan-400 rounded-full" />
                                    {block.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {block.items.map((item, j) => (
                                        <span key={j} className="text-white/70 text-sm font-medium border border-white/10 px-3 py-1 rounded-lg bg-white/5">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="w-full lg:w-1/2 h-[500px] glass rounded-[2.5rem] overflow-hidden neon-border relative shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <iframe
                        title="Motherboard Interactive View"
                        className="w-full h-full relative z-10"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        src="https://sketchfab.com/models/4e0834261b66497e936a30476fb2f660/embed?dnt=1&autostart=1&transparent=1"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export function StorageSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <div className="flex items-center gap-6 mb-12">
                <div className="p-4 glass rounded-2xl">
                    <HardDrive className="w-16 h-16 text-blue-400" />
                </div>
                <h2 className="text-5xl font-black text-white tracking-tight">Non-Volatile Storage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div variants={itemVariants} className="glass rounded-[2rem] p-10 border-t border-white/20 bg-blue-900/10">
                    <h3 className="text-4xl font-black text-white mb-8 border-b border-white/10 pb-4">Hard Disk (HDD)</h3>
                    <div className="space-y-4 text-xl text-white/80">
                        <p className="flex justify-between"><span>Throughput</span> <span className="text-blue-400 font-bold">160 MB/s</span></p>
                        <p className="flex justify-between"><span>Mechanism</span> <span className="opacity-60">Platter Spin</span></p>
                        <p className="flex justify-between"><span>Reliability</span> <span className="opacity-60">Moving Parts</span></p>
                        <div className="mt-8 p-4 glass rounded-xl text-sm italic opacity-60">Ideal for massive archival (20TB+)</div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="glass rounded-[2rem] p-10 border-t border-cyan-400/30 bg-cyan-900/10 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                    <h3 className="text-4xl font-black text-white mb-8 border-b border-cyan-400/20 pb-4">Solid State (SSD)</h3>
                    <div className="space-y-4 text-xl text-white/80">
                        <p className="flex justify-between"><span>SATA Interface</span> <span className="text-cyan-400 font-bold">550 MB/s</span></p>
                        <p className="flex justify-between"><span>NVMe Gen 4/5</span> <span className="text-cyan-400 font-bold">7-12 GB/s</span></p>
                        <p className="flex justify-between"><span>Latency</span> <span className="text-cyan-400 font-bold">Near Zero</span></p>
                        <div className="mt-8 p-4 glass rounded-xl text-sm font-bold text-cyan-400 bg-cyan-400/10">Flash NAND Technology</div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export function GPUSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <h2 className="text-5xl font-black text-white mb-16 text-center">Visual Compute & Render</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Core Specs', items: ['Tensor Cores', 'RT Cores (Ray Tracing)', 'Compute Units', 'TDP (Watts)'] },
                    { title: 'Memory Pipe', items: ['GDDR6X Capacity', 'Memory Bandwidth', 'Memory Bus (bit)', 'Bandwidth Speed'] },
                    { title: 'Series', items: ['NVIDIA RTX 40-Series', 'AMD Radeon RX 7000', 'Workstation Quadro', 'Arc Graphics'] }
                ].map((block, i) => (
                    <motion.div key={i} variants={itemVariants} className="glass rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-all group-hover:scale-150" />
                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{block.title}</h3>
                        <ul className="space-y-3 relative z-10">
                            {block.items.map((item, j) => (
                                <li key={j} className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-white/30" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function PowerSupplySlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <div className="flex items-center gap-6 mb-12">
                <div className="p-4 glass rounded-2xl">
                    <Zap className="w-16 h-16 text-yellow-400" />
                </div>
                <h2 className="text-5xl font-black text-white tracking-tight">Power Delivery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                    { label: 'Rating', value: '450W - 1600W+', desc: 'Calculated by Component Load' },
                    { label: 'Efficiency', value: '80+ Titanium', desc: '94% Efficiency Target' },
                    { label: 'Module', value: 'Fully Modular', desc: 'Optimal Cable Management' }
                ].map((box, i) => (
                    <motion.div key={i} variants={itemVariants} className="glass rounded-3xl p-8 border-b-4 border-yellow-500/30 shadow-xl">
                        <div className="text-yellow-400 uppercase tracking-widest text-sm mb-4 font-black">{box.label}</div>
                        <div className="text-4xl font-black text-white mb-4">{box.value}</div>
                        <div className="text-white/40 text-sm">{box.desc}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function CoolingSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <div className="flex items-center gap-6 mb-12">
                <div className="p-4 glass rounded-2xl">
                    <Fan className="w-16 h-16 text-cyan-300" />
                </div>
                <h2 className="text-5xl font-black text-white tracking-tight">Thermal Dynamics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Air Cooling', items: ['TDP Capacity', 'RPM Control', 'Static Pressure', 'Heat Pipe Physics'] },
                    { title: 'Liquid AIO', items: ['240mm/360mm Rads', 'Pump Flow Rate', 'Leak Prevention', 'Thermal Paste'] },
                    { title: 'Custom Loop', items: ['Reservoir Design', 'Hard/Soft Tubing', 'Blocks & Fittings', 'Coolant Chemistry'] }
                ].map((block, i) => (
                    <motion.div key={i} variants={itemVariants} className="glass rounded-3xl p-8 bg-white/5 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-2">{block.title}</h3>
                        <ul className="space-y-4">
                            {block.items.map((item, j) => (
                                <li key={j} className="text-white/70 flex items-center gap-2">
                                    <div className="w-3 h-3 border border-white/20 rounded-sm" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function InternalConnectorsSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <h2 className="text-5xl font-black text-white mb-16 text-center">System Interconnects</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: 'PCI Express', specs: ['Gen 5.0 Speed', 'x16 for GPU'] },
                    { title: 'SATA Array', specs: ['Standard 6Gbps', 'Data/Power'] },
                    { title: 'Power ATX', specs: ['24-pin Main', '8-pin CPU'] },
                    { title: 'Headers', specs: ['USB 3.2 Gen 2', 'PWM Fan'] },
                    { title: 'M.2 Slots', specs: ['Key M (NVMe)', 'Key B (SATA)'] }
                ].map((icon, i) => (
                    <motion.div key={i} variants={itemVariants} className="glass rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                        <h3 className="text-xl font-black text-white mb-2">{icon.title}</h3>
                        {icon.specs.map((s, idx) => (
                            <p key={idx} className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{s}</p>
                        ))}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function ExternalPortsSlide() {
    return (
        <motion.div variants={slideVariants} initial="hidden" animate="visible" className="glass rounded-[3rem] p-12 min-h-[600px]">
            <h2 className="text-5xl font-black text-white mb-16 text-center">Input / Output Perimeter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { type: 'Universal Serial Bus', details: ['Type-C (Thunderbolt 4)', 'Type-A (USB 3.2)', 'Power Delivery (100W)'] },
                    { type: 'Display Interface', details: ['DisplayPort 2.1 (8K)', 'HDMI 2.1 (4K/120Hz)', 'VGA/DVI (Legacy)'] },
                    { type: 'Connectivity', details: ['2.5G/10G Ethernet', 'Wi-Fi 7 Antenna', 'PS/2 Peripheral'] },
                    { type: 'Acoustics', details: ['3.5mm Analog', 'S/PDIF Optical', 'Balanced Output'] }
                ].map((p, i) => (
                    <motion.div key={i} variants={itemVariants} className="glass rounded-3xl p-8 bg-gradient-to-r from-white/5 to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-4 italic opacity-90">{p.type}</h3>
                        <div className="flex flex-wrap gap-2">
                            {p.details.map((d, j) => (
                                <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white/50 border border-white/10">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function ConclusionSlide() {
    return (
        <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            className="glass rounded-[3rem] p-16 text-center flex flex-col justify-center min-h-[600px]"
        >
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl mb-8"
            >
                🏁
            </motion.div>
            <h2 className="text-7xl font-black text-white mb-10 tracking-tighter">Mission Accomplished</h2>
            <p className="text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.3em] font-light">
                Hardware <span className="text-cyan-400 font-black">Knowledge</span> Mastered
            </p>
            <div className="mt-16 flex justify-center gap-8 opacity-20">
                <Cpu className="w-12 h-12 text-white" />
                <Zap className="w-12 h-12 text-white" />
                <HardDrive className="w-12 h-12 text-white" />
            </div>
        </motion.div>
    );
}

export function QASlide() {
    return (
        <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            className="glass rounded-[3rem] p-16 text-center neon-border flex flex-col justify-center min-h-[600px]"
        >
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-9xl mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
                🛰️
            </motion.div>
            <h2 className="text-6xl font-black text-white mb-6">Open Frequency</h2>
            <p className="text-xl text-cyan-400 font-bold uppercase tracking-[0.5em]">Any Queries?</p>
            <div className="mt-20 text-white/30 text-xs font-black uppercase tracking-widest">
                End of Transmission
            </div>
        </motion.div>
    );
}
