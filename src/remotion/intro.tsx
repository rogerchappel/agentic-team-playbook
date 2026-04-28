import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const workflow = ['Branch', 'Commit', 'Verify', 'Review Pack'];

const commands = [
  'curl -fsSL https://raw.githubusercontent.com/',
  'rogerchappel/agentic-team-playbook/main/',
  'templates/AGENTS.md -o AGENTS.md',
  '',
  'mkdir -p .github',
  'curl -fsSL https://raw.githubusercontent.com/',
  'rogerchappel/agentic-team-playbook/main/',
  '.github/pull_request_template.md \\',
  '  -o .github/pull_request_template.md',
];

const docs = [
  ['Start Here', 'Quickstart, overview, operating model'],
  ['Templates', 'AGENTS.md, production, OSS, internal tooling'],
  ['Playbooks', 'Atomic commits, review packs, verification'],
  ['Risk Gates', 'Auth, billing, secrets, data, migrations'],
  ['Integrations', 'Codex, Claude Code, OpenClaw'],
];

const colors = {
  ink: '#101820',
  panel: '#17252c',
  panelSoft: '#1f343b',
  paper: '#f8f9fa',
  teal: '#2ec4b6',
  gold: '#f6c85f',
  red: '#e84855',
  muted: '#d7dee4',
};

const fadeIn = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const Intro = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const enter = fadeIn(frame, 0, 24);
  const exit = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], {
    easing: Easing.in(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const progress = enter * exit;
  const commandReveal = Math.floor(interpolate(frame, [24, 118], [1, commands.length], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));
  const docsOffset = interpolate(frame, [84, 132], [0, -70], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const lineProgress = interpolate(frame, [42, 126], [0, 1], {
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
            'linear-gradient(135deg, rgba(46,196,182,0.16), transparent 42%), linear-gradient(315deg, rgba(246,200,95,0.14), transparent 48%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 54,
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
          <div style={{ fontSize: 24, fontWeight: 800 }}>Agentic Team Playbook</div>
        </div>
        <div style={{ color: colors.muted, fontSize: 18 }}>
          {'copy -> install -> verify -> review'}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 82,
          top: 126,
          opacity: progress,
        }}
      >
        <div style={{ color: colors.teal, fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
          Install durable agent workflow in minutes.
        </div>
        <div style={{ fontSize: 54, lineHeight: 0.98, fontWeight: 900, letterSpacing: 0 }}>
          Copy the policy.
          <br />
          Ship reviewable work.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 82,
          top: 284,
          width: 650,
          height: 246,
          borderRadius: 16,
          border: '1px solid rgba(248,249,250,0.16)',
          background: colors.panel,
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.24)',
          opacity: fadeIn(frame, 12, 28),
        }}
      >
        <div
          style={{
            height: 42,
            background: colors.panelSoft,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            paddingLeft: 18,
          }}
        >
          {[colors.red, colors.gold, colors.teal].map((color) => (
            <div key={color} style={{ width: 10, height: 10, borderRadius: 999, background: color }} />
          ))}
          <div style={{ marginLeft: 10, color: colors.muted, fontSize: 15, fontWeight: 700 }}>
            terminal
          </div>
        </div>
        <div
          style={{
            padding: '18px 22px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            fontSize: 18,
            lineHeight: 1.36,
          }}
        >
          <div style={{ color: colors.gold }}>$ install-agent-playbook</div>
          {commands.slice(0, commandReveal).map((line, index) => (
            <div key={`${line}-${index}`} style={{ color: line ? colors.muted : 'transparent' }}>
              {line || '.'}
            </div>
          ))}
          <div style={{ color: colors.teal, opacity: fadeIn(frame, 116, 126) }}>
            done: AGENTS.md + PR template
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 82,
          top: 160,
          width: 365,
          height: 370,
          borderRadius: 18,
          border: '1px solid rgba(248,249,250,0.16)',
          background: 'rgba(248,249,250,0.08)',
          overflow: 'hidden',
          opacity: fadeIn(frame, 24, 42),
        }}
      >
        <div
          style={{
            padding: '24px 26px 18px',
            background: 'rgba(16,24,32,0.56)',
            borderBottom: '1px solid rgba(248,249,250,0.1)',
          }}
        >
          <div style={{ color: colors.gold, fontSize: 20, fontWeight: 900 }}>Docs Tour</div>
          <div style={{ color: colors.muted, fontSize: 15, marginTop: 6 }}>
            Usable knowledge base, not just a README.
          </div>
        </div>
        <div style={{ padding: 18, transform: `translateY(${docsOffset}px)` }}>
          {docs.map(([title, body], index) => (
            <div
              key={title}
              style={{
                borderRadius: 10,
                background: index === 1 ? 'rgba(46,196,182,0.14)' : 'rgba(248,249,250,0.08)',
                border: `1px solid ${index === 1 ? 'rgba(46,196,182,0.42)' : 'rgba(248,249,250,0.1)'}`,
                padding: '15px 16px',
                marginBottom: 12,
              }}
            >
              <div style={{ color: colors.paper, fontSize: 18, fontWeight: 850 }}>{title}</div>
              <div style={{ color: colors.muted, fontSize: 14, marginTop: 5, lineHeight: 1.32 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 82,
          right: 82,
          bottom: 58,
          opacity: fadeIn(frame, 38, 54),
        }}
      >
        <div style={{ height: 4, background: 'rgba(248,249,250,0.14)' }} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 4,
            width: `${lineProgress * 100}%`,
            background: colors.teal,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          {workflow.map((item, index) => (
            <div key={item} style={{ width: 210 }}>
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: fadeIn(frame, 48 + index * 18, 58 + index * 18) > 0.9
                    ? colors.teal
                    : colors.paper,
                  marginBottom: 10,
                }}
              />
              <div style={{ color: colors.paper, fontSize: 21, fontWeight: 850 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
