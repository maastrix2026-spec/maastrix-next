import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0d0f12',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.15), transparent 50%)',
          padding: '80px',
        }}
      >
        {/* Top Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ color: '#3b82f6', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Maastrix Solutions Pvt Ltd
          </span>
        </div>

        {/* Core Main Title */}
        <h1 style={{ fontSize: '64px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0, maxWidth: '900px' }}>
          Enterprise Systems Architecture & Software Engineering
        </h1>

        {/* Subtext Description */}
        <p style={{ fontSize: '24px', color: '#94a3b8', fontWeight: 500, marginTop: '24px', marginBottom: 'auto', maxWidth: '800px' }}>
          Engineering low-latency Node.js backends, scalable relational data systems, and cross-platform React Native frameworks.
        </p>

        {/* Footer Brand Indicator */}
        <div style={{ display: 'flex', width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px' }}>
          <span style={{ fontSize: '22px', color: '#ffffff', fontWeight: 'bold' }}>
            maastrixsolutions.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}