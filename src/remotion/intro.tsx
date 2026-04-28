import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const workflow = ['Brief', 'Branch', 'Commit', 'Verify', 'Review Pack'];

const colors = {
  ink: '#101820',
  paper: '#f8f9fa',
  teal: '#2ec4b6',
  gold: '#f6c85f',
  red: '#e84855',
  muted: '#d7dee4',
};

export const Intro = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const enter = interpolate(frame, [0, 35], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exit = interpolate(frame, [durationInFrames - 25, durationInFrames], [1, 0], {
    easing: Easing.in(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const progress = enter * exit;

  const titleY = interpolate(progress, [0, 1], [28, 0]);
  const lineProgress = interpolate(frame, [32, 118], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: colors.ink,
        color: colors.paper,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 74% 24%, rgba(46,196,182,0.24), transparent 28%), radial-gradient(circle at 20% 80%, rgba(246,200,95,0.16), transparent 30%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 68,
          left: 76,
          right: 76,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          opacity: progress,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: colors.paper,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div style={{ width: 26, display: 'grid', gap: 5 }}>
              <div style={{ height: 5, background: colors.gold }} />
              <div style={{ height: 5, background: colors.teal }} />
              <div style={{ height: 5, background: colors.red }} />
            </div>
          </div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Agentic Team Playbook</div>
        </div>
        <div style={{ color: colors.muted, fontSize: 18 }}>{'branch -> verify -> review'}</div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 82,
          top: 190,
          width: 700,
          transform: `translateY(${titleY}px)`,
          opacity: progress,
        }}
      >
        <div
          style={{
            color: colors.teal,
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          Run AI coding agents like an engineering team.
        </div>
        <div
          style={{
            fontSize: 70,
            lineHeight: 0.95,
            fontWeight: 800,
            letterSpacing: 0,
          }}
        >
          Not like a slot machine.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 82,
          right: 82,
          bottom: 116,
          height: 130,
          opacity: interpolate(frame, [24, 48], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 52,
            left: 0,
            right: 0,
            height: 4,
            background: 'rgba(248,249,250,0.16)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 52,
            left: 0,
            width: `${lineProgress * 100}%`,
            height: 4,
            background: colors.teal,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {workflow.map((item, index) => {
            const itemStart = 30 + index * 16;
            const itemIn = interpolate(frame, [itemStart, itemStart + 14], [0, 1], {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <div
                key={item}
                style={{
                  width: 170,
                  transform: `translateY(${(1 - itemIn) * 16}px)`,
                  opacity: itemIn,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: itemIn > 0.98 ? colors.teal : colors.paper,
                    marginBottom: 20,
                    border: `4px solid ${colors.ink}`,
                    boxShadow: '0 0 0 2px rgba(248,249,250,0.26)',
                  }}
                />
                <div style={{ fontWeight: 800, fontSize: 24 }}>{item}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 86,
          top: 210,
          width: 310,
          borderRadius: 22,
          border: '1px solid rgba(248,249,250,0.16)',
          background: 'rgba(248,249,250,0.08)',
          padding: 26,
          opacity: interpolate(frame, [52, 80], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <div style={{ color: colors.gold, fontSize: 20, fontWeight: 800, marginBottom: 14 }}>
          Review Pack
        </div>
        {['Summary', 'Commits', 'Verification', 'Risk', 'Rollback'].map((item, index) => (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 12,
              color: colors.muted,
              fontSize: 18,
              opacity: interpolate(frame, [66 + index * 7, 76 + index * 7], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 99, background: colors.teal }} />
            {item}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
