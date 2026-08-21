import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as Icons from 'lucide-react';

interface InfoTooltipProps {
  title: string;
  description: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  ariaLabel?: string;
}

type TooltipPosition = {
  top: number;
  left: number;
  side: 'top' | 'bottom' | 'left' | 'right';
};

const VIEWPORT_MARGIN = 16;
const TOOLTIP_GAP = 10;

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  title,
  description,
  placement = 'top',
  ariaLabel = `More information about ${title}`,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [position, setPosition] = useState<TooltipPosition | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const tooltipId = useId();

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeTooltip = () => {
    clearCloseTimer();
    setIsOpen(false);
    setIsPinned(false);
    setPosition(null);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    if (!isPinned) {
      closeTimerRef.current = window.setTimeout(() => {
        setIsOpen(false);
        setPosition(null);
      }, 120);
    }
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!containerRef.current?.contains(target) && !tooltipRef.current?.contains(target)) {
        closeTooltip();
      }
    };
    const handleOpen = (event: Event) => {
      if ((event as CustomEvent<HTMLElement>).detail !== containerRef.current) {
        closeTooltip();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeTooltip();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('contextual-info-open', handleOpen);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearCloseTimer();
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('contextual-info-open', handleOpen);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openTooltip = () => {
    clearCloseTimer();
    window.dispatchEvent(new CustomEvent('contextual-info-open', { detail: containerRef.current }));
    setIsOpen(true);
  };

  useLayoutEffect(() => {
    if (!isOpen || !containerRef.current || !tooltipRef.current) return;

    const updatePosition = () => {
      const anchor = containerRef.current?.getBoundingClientRect();
      const tooltip = tooltipRef.current;
      if (!anchor || !tooltip) return;

      const width = tooltip.offsetWidth;
      const height = tooltip.offsetHeight;
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight;
      const candidates: TooltipPosition['side'][] = [
        placement,
        placement === 'top' ? 'bottom' : 'top',
        'right',
        'left',
      ];

      for (const side of candidates) {
        const fits =
          side === 'top'
            ? anchor.top >= height + TOOLTIP_GAP + VIEWPORT_MARGIN
            : side === 'bottom'
              ? viewportHeight - anchor.bottom >= height + TOOLTIP_GAP + VIEWPORT_MARGIN
              : side === 'left'
                ? anchor.left >= width + TOOLTIP_GAP + VIEWPORT_MARGIN
                : viewportWidth - anchor.right >= width + TOOLTIP_GAP + VIEWPORT_MARGIN;

        if (!fits && side !== candidates[candidates.length - 1]) continue;

        const unclampedLeft =
          side === 'left'
            ? anchor.left - width - TOOLTIP_GAP
            : side === 'right'
              ? anchor.right + TOOLTIP_GAP
              : anchor.left + (anchor.width - width) / 2;
        const unclampedTop =
          side === 'top'
            ? anchor.top - height - TOOLTIP_GAP
            : side === 'bottom'
              ? anchor.bottom + TOOLTIP_GAP
              : anchor.top + (anchor.height - height) / 2;

        setPosition({
          side,
          left: Math.max(VIEWPORT_MARGIN, Math.min(unclampedLeft, viewportWidth - width - VIEWPORT_MARGIN)),
          top: Math.max(VIEWPORT_MARGIN, Math.min(unclampedTop, viewportHeight - height - VIEWPORT_MARGIN)),
        });
        return;
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, placement, title, description]);

  const tooltip = isOpen
    ? createPortal(
        <span
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          className="fixed z-[100] box-border w-[min(320px,calc(100vw-32px))] max-h-[min(70vh,24rem)] overflow-y-auto rounded-lg border border-slate-200 bg-white p-3 text-left shadow-xl transition-opacity duration-150 dark:border-white/15 dark:bg-[#102A4C]"
          style={{
            top: position?.top ?? 0,
            left: position?.left ?? 0,
            opacity: position ? 1 : 0,
            visibility: position ? 'visible' : 'hidden',
            pointerEvents: position ? 'auto' : 'none',
            overflowWrap: 'anywhere',
            wordBreak: 'break-word',
          }}
        >
          <span className="block text-[11px] font-extrabold uppercase tracking-wide text-slate-900 dark:text-white">
            {title}
          </span>
          <span className="mt-1 block whitespace-normal text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </span>
        </span>,
        document.body
      )
    : null;

  return (
    <span
      ref={containerRef}
      className="relative inline-flex align-middle"
      onMouseEnter={openTooltip}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-describedby={isOpen ? tooltipId : undefined}
        onFocus={openTooltip}
        onBlur={scheduleClose}
        onClick={(event) => {
          event.stopPropagation();
          const nextPinned = !isPinned;
          setIsPinned(nextPinned);
          if (nextPinned) openTooltip();
          else closeTooltip();
        }}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#102A4C]"
      >
        <Icons.Info className="w-3.5 h-3.5 stroke-[1.8]" />
      </button>
      {tooltip}
    </span>
  );
};
