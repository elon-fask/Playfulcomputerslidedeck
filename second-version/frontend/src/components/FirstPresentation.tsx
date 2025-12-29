import { Home } from 'lucide-react';

export default function FirstPresentation() {
    const goToDashboard = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen gradient-bg-animated flex flex-col items-center justify-center p-8">
            <div className="glass rounded-3xl p-12 max-w-4xl text-center">
                <h1 className="text-6xl font-bold text-white mb-6">
                    First Presentation
                </h1>
                <p className="text-2xl text-white/90 mb-4">
                    Playful Computers
                </p>
                <p className="text-lg text-white/70 mb-8">
                    This presentation is available in the main project directory.
                    <br />
                    Navigate back to the root to view the full interactive presentation.
                </p>
                <div className="glass rounded-xl p-6 mb-8">
                    <p className="text-white/90">
                        📁 Location: <code className="bg-white/20 px-3 py-1 rounded">/src/App.tsx</code>
                    </p>
                </div>
                <button
                    onClick={goToDashboard}
                    className="btn btn-white inline-flex items-center gap-2"
                >
                    <Home className="w-5 h-5" />
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}
