import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader, Zap } from 'lucide-react';

export const SchemeGenerator: React.FC = () => {
  const [tool, setTool] = useState('');
  const [mark, setMark] = useState('');
  const [generatedScheme, setGeneratedScheme] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tool || !mark) return;

    setIsLoading(true);
    setGeneratedScheme('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        You are a comedy writer for a movie like "Fun with Dick and Jane". 
        Create a short, hilarious, absurd, and petty criminal scheme (max 50 words) 
        that involves using a "${tool}" to get money from "${mark}". 
        The tone should be desperate but harmless, 1970s suburban style.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setGeneratedScheme(response.text || "The plan backfired. Try again!");
    } catch (error) {
      console.error("Error generating scheme:", error);
      setGeneratedScheme("The feds cut the line! (API Error)");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-mustard relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1F2024 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-offwhite border-4 border-charcoal shadow-retro p-8 md:p-12 rounded-sm transform md:rotate-1">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-charcoal text-mustard px-4 py-2 font-display text-lg mb-4 rounded-full">
              <Zap size={20} className="fill-mustard" />
              <span>AI-Powered Desperation</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">The Scheme Generator</h2>
            <p className="text-charcoal/70 font-medium">
              Stuck for ideas? Enter a household item and a target, and we'll cook up a foolproof* plan.
            </p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold text-charcoal uppercase tracking-wide text-sm">What do you have?</label>
                <input 
                  type="text" 
                  value={tool}
                  onChange={(e) => setTool(e.target.value)}
                  placeholder="e.g., A blender, Garden Hose" 
                  className="w-full bg-white border-2 border-charcoal p-4 font-bold text-lg focus:outline-none focus:shadow-retro-sm transition-all placeholder:text-charcoal/30"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-charcoal uppercase tracking-wide text-sm">Who is the mark?</label>
                <input 
                  type="text" 
                  value={mark}
                  onChange={(e) => setMark(e.target.value)}
                  placeholder="e.g., The Boss, Neighbors" 
                  className="w-full bg-white border-2 border-charcoal p-4 font-bold text-lg focus:outline-none focus:shadow-retro-sm transition-all placeholder:text-charcoal/30"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading || !tool || !mark}
              className="w-full bg-tomato text-white font-display text-2xl py-4 border-2 border-charcoal shadow-retro active:shadow-none active:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3 hover:bg-red-500"
            >
              {isLoading ? <Loader className="animate-spin" /> : <Sparkles className="fill-white" />}
              {isLoading ? 'Plotting...' : 'Cook Up A Plan'}
            </button>
          </form>

          {generatedScheme && (
            <div className="mt-8 relative animate-float">
              <div className="bg-yellow-100 p-6 border-2 border-charcoal/20 shadow-inner transform -rotate-1 font-mono text-charcoal text-lg leading-relaxed relative">
                <span className="absolute -top-3 -left-3 text-4xl text-charcoal opacity-20">"</span>
                {generatedScheme}
                <span className="absolute -bottom-6 -right-3 text-4xl text-charcoal opacity-20">"</span>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Results may vary. Prison time possible.</span>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};