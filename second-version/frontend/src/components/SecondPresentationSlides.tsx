import { Cpu, HardDrive, MemoryStick, Zap, Fan, Cable, Usb, Monitor as MonitorIcon } from 'lucide-react';

interface SlideProps {
    onNext?: () => void;
    onPrev?: () => void;
}

export function TitleSlide() {
    return (
        <div className="glass rounded-3xl p-12 text-center fade-in-up min-h-[600px] flex flex-col justify-center">
            <div className="flex justify-center mb-6">
                <Cpu className="w-24 h-24 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
                Computer Components & Connectors
            </h1>
            <p className="text-2xl text-white/90 mb-8">
                A comprehensive guide to internal and external computer hardware
            </p>
            <div className="text-white/70 text-lg">
                <p>OFPPT - Technical Presentation</p>
                <p className="mt-2">{new Date().getFullYear()}</p>
            </div>
        </div>
    );
}

export function ExpansionCardsSlide() {
    const cards = [
        { name: 'Carte Son', icon: '🔊', desc: 'Sound Card for audio processing' },
        { name: 'Carte Réseau', icon: '🌐', desc: 'Ethernet/Wi-Fi Network Card' },
        { name: 'Carte Capture Vidéo', icon: '📹', desc: 'Video Capture Card' },
        { name: 'Carte Contrôleur RAID', icon: '💾', desc: 'RAID Controller Card' },
        { name: 'Carte USB Additionnelle', icon: '🔌', desc: 'Additional USB Card' }
    ];

    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <h2 className="text-5xl font-bold text-white mb-8 text-center">
                🎴 Cartes d'Extension
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="glass glass-hover rounded-xl p-6 text-center"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        <div className="text-5xl mb-4">{card.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
                        <p className="text-white/70 text-sm">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function CPUSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <div className="flex items-center gap-4 mb-8">
                <Cpu className="w-16 h-16 text-white" />
                <h2 className="text-5xl font-bold text-white">CPU (Processeur)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Architecture</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• x86 / x86-64</li>
                        <li>• ARM</li>
                        <li>• Cores & Threads</li>
                        <li>• Cache Levels (L1, L2, L3)</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Modèles</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• Intel Core i3/i5/i7/i9</li>
                        <li>• AMD Ryzen 3/5/7/9</li>
                        <li>• Intel Xeon</li>
                        <li>• AMD Threadripper</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Socket</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• LGA 1700 (Intel)</li>
                        <li>• AM5 (AMD)</li>
                        <li>• LGA 1200 (Intel)</li>
                        <li>• AM4 (AMD)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function RAMSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <div className="flex items-center gap-4 mb-8">
                <MemoryStick className="w-16 h-16 text-white" />
                <h2 className="text-5xl font-bold text-white">RAM (Mémoire)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Types</h3>
                    <ul className="text-white/80 space-y-2 text-lg">
                        <li>• DDR3 (Legacy)</li>
                        <li>• DDR4 (Current)</li>
                        <li>• DDR5 (Modern)</li>
                        <li>• SO-DIMM (Laptops)</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Capacité</h3>
                    <ul className="text-white/80 space-y-2 text-lg">
                        <li>• 4 GB - Basic</li>
                        <li>• 8 GB - Standard</li>
                        <li>• 16 GB - Gaming</li>
                        <li>• 32 GB+ - Professional</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Fréquence</h3>
                    <ul className="text-white/80 space-y-2 text-lg">
                        <li>• 2133-2666 MHz (DDR4)</li>
                        <li>• 3200-3600 MHz (DDR4)</li>
                        <li>• 4800-6000 MHz (DDR5)</li>
                        <li>• CL (CAS Latency)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function MotherboardSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <h2 className="text-5xl font-bold text-white mb-8 text-center">🔧 Carte Mère</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Chipset</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• Intel Z790, B760</li>
                        <li>• AMD X670, B650</li>
                        <li>• Controls I/O</li>
                        <li>• PCIe lanes</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Format</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• ATX (305 × 244 mm)</li>
                        <li>• Micro-ATX (244 × 244 mm)</li>
                        <li>• Mini-ITX (170 × 170 mm)</li>
                        <li>• E-ATX (Extended)</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Socket</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• CPU compatibility</li>
                        <li>• LGA vs PGA</li>
                        <li>• Gen support</li>
                        <li>• Upgrade path</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function StorageSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <div className="flex items-center gap-4 mb-8">
                <HardDrive className="w-16 h-16 text-white" />
                <h2 className="text-5xl font-bold text-white">Disque Dur</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">HDD</h3>
                    <ul className="text-white/80 space-y-3 text-lg">
                        <li>✓ Mechanical drive</li>
                        <li>✓ 500 GB - 20 TB</li>
                        <li>✓ 5400-7200 RPM</li>
                        <li>✓ Lower cost/GB</li>
                        <li>✗ Slower (80-160 MB/s)</li>
                        <li>✗ Moving parts</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">SSD</h3>
                    <ul className="text-white/80 space-y-3 text-lg">
                        <li>✓ Solid-state (No moving parts)</li>
                        <li>✓ 120 GB - 8 TB</li>
                        <li>✓ SATA: ~550 MB/s</li>
                        <li>✓ NVMe: 3000-7000 MB/s</li>
                        <li>✓ M.2 form factor</li>
                        <li>✓ Lower latency</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function GPUSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <h2 className="text-5xl font-bold text-white mb-8 text-center">🎮 Carte Graphique</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">GPU</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• NVIDIA GeForce RTX</li>
                        <li>• AMD Radeon RX</li>
                        <li>• CUDA Cores / Stream Processors</li>
                        <li>• Ray Tracing</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">VRAM</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• GDDR6 / GDDR6X</li>
                        <li>• 4 GB - Entry Level</li>
                        <li>• 8-12 GB - Gaming</li>
                        <li>• 16-24 GB - Professional</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Modèles</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• RTX 4090, 4080, 4070</li>
                        <li>• RX 7900 XTX, 7800 XT</li>
                        <li>• Professional: Quadro, Radeon Pro</li>
                        <li>• TDP: 150-450W</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function PowerSupplySlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <div className="flex items-center gap-4 mb-8">
                <Zap className="w-16 h-16 text-white" />
                <h2 className="text-5xl font-bold text-white">Alimentation (PSU)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Puissance</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• 450-550W: Basic</li>
                        <li>• 650-750W: Gaming</li>
                        <li>• 850W+: High-end</li>
                        <li>• Modular cables</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Certification</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• 80+ Bronze (82-85%)</li>
                        <li>• 80+ Gold (87-90%)</li>
                        <li>• 80+ Platinum (90-92%)</li>
                        <li>• 80+ Titanium (92-94%)</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Connecteurs</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• 24-pin ATX (Motherboard)</li>
                        <li>• 8-pin CPU (4+4)</li>
                        <li>• 6/8-pin PCIe (GPU)</li>
                        <li>• SATA / Molex</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function CoolingSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <div className="flex items-center gap-4 mb-8">
                <Fan className="w-16 h-16 text-white" />
                <h2 className="text-5xl font-bold text-white">Refroidissement</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Ventilateurs</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• Case fans (120mm, 140mm)</li>
                        <li>• CPU cooler fan</li>
                        <li>• GPU fans</li>
                        <li>• PWM control</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Radiateurs</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• Heatsinks (passive)</li>
                        <li>• Tower coolers</li>
                        <li>• Aluminum / Copper</li>
                        <li>• Heat pipes</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Watercooling</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• AIO (All-in-One)</li>
                        <li>• Custom loops</li>
                        <li>• Radiator sizes</li>
                        <li>• Better cooling</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function InternalConnectorsSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <div className="flex items-center gap-4 mb-8">
                <Cable className="w-16 h-16 text-white" />
                <h2 className="text-5xl font-bold text-white">Ports Internes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="glass rounded-xl p-5">
                    <h3 className="text-xl font-bold text-white mb-3">PCI Express</h3>
                    <ul className="text-white/80 space-y-1 text-sm">
                        <li>• x1, x4, x8, x16</li>
                        <li>• Gen 3, 4, 5</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-5">
                    <h3 className="text-xl font-bold text-white mb-3">SATA</h3>
                    <ul className="text-white/80 space-y-1 text-sm">
                        <li>• Data connector</li>
                        <li>• Power connector</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-5">
                    <h3 className="text-xl font-bold text-white mb-3">Power</h3>
                    <ul className="text-white/80 space-y-1 text-sm">
                        <li>• 24-pin ATX</li>
                        <li>• 8-pin CPU</li>
                        <li>• PCIe power</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-5">
                    <h3 className="text-xl font-bold text-white mb-3">Headers</h3>
                    <ul className="text-white/80 space-y-1 text-sm">
                        <li>• USB 2.0 / 3.0</li>
                        <li>• Audio (HD Audio)</li>
                        <li>• Fan headers</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-5 md:col-span-2 lg:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-3">M.2 Slots</h3>
                    <ul className="text-white/80 space-y-1 text-sm">
                        <li>• M.2 2280 (SATA): 6 Gbps</li>
                        <li>• M.2 NVMe (PCIe Gen 3): ~3500 MB/s</li>
                        <li>• M.2 NVMe (PCIe Gen 4): ~7000 MB/s</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function ExternalPortsSlide() {
    return (
        <div className="glass rounded-3xl p-12 fade-in-up min-h-[600px]">
            <div className="flex items-center gap-4 mb-8">
                <Usb className="w-16 h-16 text-white" />
                <h2 className="text-5xl font-bold text-white">Ports Externes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">USB</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• Type A, B, C</li>
                        <li>• USB 2.0: 480 Mbps</li>
                        <li>• USB 3.0/3.1: 5-10 Gbps</li>
                        <li>• USB 3.2/4: 20-40 Gbps</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Vidéo</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• HDMI: 4K@60Hz, 8K@60Hz</li>
                        <li>• DisplayPort: 4K@144Hz</li>
                        <li>• VGA: Legacy analog</li>
                        <li>• DVI: Digital/Analog</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Audio & Réseau</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• Jack 3.5mm (Mic, Line, Headphones)</li>
                        <li>• SPDIF (Optical/Coaxial)</li>
                        <li>• RJ45 Ethernet (1 Gbps, 2.5 Gbps)</li>
                    </ul>
                </div>
                <div className="glass rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Autres</h3>
                    <ul className="text-white/80 space-y-2">
                        <li>• Thunderbolt 3/4 (40 Gbps)</li>
                        <li>• eSATA (External SATA)</li>
                        <li>• PS/2 (Keyboard/Mouse - Legacy)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function ConclusionSlide() {
    return (
        <div className="glass rounded-3xl p-12 text-center fade-in-up min-h-[600px] flex flex-col justify-center">
            <h2 className="text-6xl font-bold text-white mb-8">Conclusion</h2>
            <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                    Understanding computer components and connectors is essential for building,
                    upgrading, and troubleshooting modern computers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="glass rounded-xl p-4">
                        <Cpu className="w-12 h-12 text-white mx-auto mb-2" />
                        <p className="text-white text-sm">CPU</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                        <MemoryStick className="w-12 h-12 text-white mx-auto mb-2" />
                        <p className="text-white text-sm">RAM</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                        <HardDrive className="w-12 h-12 text-white mx-auto mb-2" />
                        <p className="text-white text-sm">Storage</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                        <MonitorIcon className="w-12 h-12 text-white mx-auto mb-2" />
                        <p className="text-white text-sm">Display</p>
                    </div>
                </div>
                <p className="text-xl text-white/80">
                    Merci pour votre attention! 🎓
                </p>
            </div>
        </div>
    );
}

export function QASlide() {
    return (
        <div className="glass rounded-3xl p-12 text-center fade-in-up min-h-[600px] flex flex-col justify-center">
            <div className="text-8xl mb-8">❓</div>
            <h2 className="text-6xl font-bold text-white mb-8">Questions & Answers</h2>
            <p className="text-3xl text-white/90">
                Feel free to ask any questions!
            </p>
        </div>
    );
}
