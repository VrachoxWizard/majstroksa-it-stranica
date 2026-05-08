import { useState } from 'react';
import Icon from './Icon';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  fallbackLabel: string;
  height?: string;
  width?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  imageClassName = '',
  fallbackLabel,
  height,
  width,
  loading,
  fetchPriority,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div aria-label={alt} className={`${className} relative bg-sage-50`} role={failed ? 'img' : undefined}>
      {(!loaded || failed) && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(235,229,217,0.9),rgba(248,246,241,0.65))]" />
          <div className="relative grid max-w-xs justify-items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-moss-100 text-primary">
              <Icon name="computer" className="h-6 w-6" />
            </span>
            <p className="text-sm font-bold leading-6 text-primary">{fallbackLabel}</p>
          </div>
        </div>
      )}

      {!failed && (
        <img
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imageClassName}`}
          fetchPriority={fetchPriority}
          height={height}
          loading={loading}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          src={src}
          width={width}
        />
      )}
    </div>
  );
}
