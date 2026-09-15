type LogoProps = {
  tone?: "dark" | "light";
  size?: number;
  className?: string;
};

/** Mark 01 — Builder's Square: a carpenter's square whose inner void reads as a J. */
export function LogoMark({ tone = "dark", size = 34, className }: LogoProps) {
  const path = tone === "dark" ? "#f4f1ea" : "#072424";
  const block = tone === "dark" ? "#d98e3e" : "#b96f2a";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="JMK Constructions" className={className}>
      <path d="M8 4 H40 V12 H18 V30 H28 V20 H36 V32 A12 12 0 0 1 24 44 H16 V36 H24 A4 4 0 0 0 28 32 H8 Z" fill={path} />
      <rect x="30" y="4" width="10" height="8" fill={block} />
    </svg>
  );
}

type LogoWordmarkProps = LogoProps & {
  withWordmark?: boolean;
  withSubline?: boolean;
  /** Compact header variant: smaller wordmark, tight gap, no divider/subline. */
  compact?: boolean;
};

export function Logo({
  tone = "dark",
  size,
  withWordmark = true,
  withSubline = false,
  compact = false,
  className,
}: LogoWordmarkProps) {
  const textColor = tone === "dark" ? "text-paper" : "text-ink";
  const dividerColor = tone === "dark" ? "border-paper/[0.18]" : "border-ink/[0.18]";
  const sublineColor = tone === "dark" ? "text-paper/55" : "text-ink/55";
  const markSize = size ?? (compact ? 30 : 34);
  const showDivider = withSubline && !compact;

  return (
    <span className={`inline-flex items-center ${compact ? "gap-2.5" : "gap-[clamp(1rem,3vw,1.75rem)]"} ${className ?? ""}`}>
      <LogoMark tone={tone} size={markSize} />
      {withWordmark && (
        <span className="inline-flex items-center gap-[clamp(1rem,3vw,1.75rem)]">
          {showDivider && <span aria-hidden className={`hidden min-h-[46px] w-px sm:block ${dividerColor} border-l`} />}
          <span className="flex flex-col">
            <span
              className={`font-display whitespace-nowrap font-extrabold tracking-[-0.025em] ${textColor} ${
                compact ? "text-[1.05rem]" : "text-[clamp(1.4rem,3.4vw,2rem)]"
              }`}
            >
              JMK <span className="text-amber">Constructions</span>
            </span>
            {withSubline && !compact && (
              <span className={`text-[0.625rem] font-bold uppercase tracking-[0.3em] ${sublineColor}`}>
                Edmonton · Alberta
              </span>
            )}
          </span>
        </span>
      )}
    </span>
  );
}
