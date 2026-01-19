"use client";

interface VideoPlayerProps {
  src: string;
  caption?: string;
}

export default function VideoPlayer({ src, caption }: VideoPlayerProps) {
  return (
    <div className="glass rounded-2xl overflow-hidden my-8">
      <div className="aspect-[9/16] max-h-[500px] bg-black/50 flex items-center justify-center">
        <video
          controls
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={src} type="video/mp4" />
          Nettleseren din støtter ikke videoavspilling.
        </video>
      </div>
      {caption && (
        <div className="p-4 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-secondary)]">{caption}</p>
        </div>
      )}
    </div>
  );
}
