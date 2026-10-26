import React, { useRef } from 'react';
import { ColorPalette, FontOption } from '../types';
import { X, Upload, Check, Palette, Type, Image as ImageIcon, RotateCcw, Sparkles } from 'lucide-react';

interface ThemeCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeColor: ColorPalette;
  onColorChange: (color: ColorPalette) => void;
  activeFont: FontOption;
  onFontChange: (font: FontOption) => void;
  customLogoUrl: string | null;
  onLogoUpload: (url: string | null) => void;
}

export const ThemeCustomizerModal: React.FC<ThemeCustomizerModalProps> = ({
  isOpen,
  onClose,
  activeColor,
  onColorChange,
  activeFont,
  onFontChange,
  customLogoUrl,
  onLogoUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onLogoUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const palettes: { id: ColorPalette; name: string; description: string; colors: string[] }[] = [
    {
      id: 'rich-cobalt',
      name: 'Rich Cobalt & Imperial Gold (Recommended)',
      description: 'Lustrous, vibrant cobalt blue paired with rich navy and regal gold accents.',
      colors: ['#1D4ED8', '#0F172A', '#D97706']
    },
    {
      id: 'oxford-navy',
      name: 'Deep Oxford Navy & Sky Azure',
      description: 'Prestigious academic Oxford navy with brilliant sky-blue and silver highlights.',
      colors: ['#0B192C', '#0284C7', '#38BDF8']
    },
    {
      id: 'midnight-indigo',
      name: 'Midnight Indigo & Warm Amber',
      description: 'Regal deep indigo paired with sapphire depth and warm amber glow.',
      colors: ['#312E81', '#1E40AF', '#F59E0B']
    },
    {
      id: 'prussian-marine',
      name: 'Prussian Marine & Platinum',
      description: 'Authoritative deep maritime blue with crisp platinum and azure accents.',
      colors: ['#002D62', '#0369A1', '#E2E8F0']
    },
    {
      id: 'royal-sapphire',
      name: 'Royal Sapphire & Gold',
      description: 'Vibrant sapphire blue combined with rich slate and warm luxury gold.',
      colors: ['#2563EB', '#0F172A', '#F59E0B']
    },
    {
      id: 'crimson-navy',
      name: 'Crimson & Heritage Navy (Authentic Sairudra)',
      description: 'Matches Sairudra’s original official emblem with deep crimson, navy & warm gold.',
      colors: ['#991B1B', '#0F172A', '#D97706']
    },
    {
      id: 'emerald-gold',
      name: 'Emerald Healing & Warm Bronze',
      description: 'Organic healthcare & holistic nursing palette with forest emerald and bronze.',
      colors: ['#047857', '#064E3B', '#CA8A04']
    },
    {
      id: 'clinical-teal',
      name: 'Clinical Teal & Slate',
      description: 'Contemporary medical research style with clinical teal and dark slate.',
      colors: ['#0F766E', '#0F172A', '#14B8A6']
    }
  ];

  const fonts: { id: FontOption; name: string; sample: string; headingFont: string; bodyFont: string }[] = [
    {
      id: 'prestigious-serif',
      name: 'Classical Academic (Cinzel + Inter)',
      sample: 'SAIRUDRA COLLEGE OF NURSING',
      headingFont: 'Cinzel (Serif)',
      bodyFont: 'Inter (Sans-serif)'
    },
    {
      id: 'modern-sans',
      name: 'Clean Modern (Plus Jakarta Sans + Inter)',
      sample: 'Sairudra College of Nursing',
      headingFont: 'Plus Jakarta Sans',
      bodyFont: 'Inter'
    },
    {
      id: 'geometric-poppins',
      name: 'Contemporary Friendly (Poppins)',
      sample: 'Sairudra College of Nursing',
      headingFont: 'Poppins',
      bodyFont: 'Plus Jakarta Sans'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design & Branding Customizer</span>
            </div>
            <h2 id="customizer-modal-title" className="text-xl font-bold text-white">
              Website Appearance & Logo Settings
            </h2>
            <p className="text-xs text-slate-300">
              Customize institutional logo, color scheme, and typography in real time.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Section 1: Logo Upload & Presets */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-slate-700" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  1. Institution Logo
                </h3>
              </div>
              {customLogoUrl && (
                <button
                  type="button"
                  onClick={() => onLogoUpload(null)}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to Default Crest</span>
                </button>
              )}
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center gap-4">
              {/* Logo Preview */}
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-300 flex items-center justify-center p-1 overflow-hidden shrink-0 shadow-xs">
                {customLogoUrl ? (
                  <img src={customLogoUrl} alt="Institution logo preview" className="max-w-full max-h-full object-contain" />
                ) : (
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-500">Crest Icon</span>
                  </div>
                )}
              </div>

              {/* Upload Controls */}
              <div className="space-y-2 flex-1 text-center sm:text-left">
                <p className="text-xs font-semibold text-slate-800">
                  Upload your own Sairudra / College Logo file
                </p>
                <p className="text-[11px] text-slate-500">
                  Supported formats: PNG, JPG, SVG, WebP (Transparent background recommended)
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Logo Image</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onLogoUpload('/assets/aistudio/image_1074b2ab.png')}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <span>Use Original Sairudra Emblem</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Color Palette Options */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-slate-700" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                2. Select Color Combination
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {palettes.map((p) => {
                const isSelected = activeColor === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onColorChange(p.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 mb-2">
                      {p.colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-5 h-5 rounded-md border border-slate-200 shadow-2xs"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>

                    <h4 className="text-xs font-bold text-slate-900">{p.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">{p.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Typography / Font Pairings */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-slate-700" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                3. Select Font Style & Typography
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {fonts.map((f) => {
                const isSelected = activeFont === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => onFontChange(f.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                    )}
                    <h4 className="text-xs font-bold text-slate-900">{f.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Headings: {f.headingFont}</p>
                    <div className="mt-2 p-2 rounded-md bg-slate-100/80 border border-slate-200 text-slate-800 text-[11px] font-semibold truncate">
                      {f.sample}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Changes apply instantly across all pages and components.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Apply &amp; Done
          </button>
        </div>
      </div>
    </div>
  );
};
