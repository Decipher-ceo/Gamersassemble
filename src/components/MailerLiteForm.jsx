import React, { useState, useEffect, useRef } from 'react';
import './MailerLiteForm.css';

/* ─── Particle System ─────────────────────────────────────────── */
const COLORS = ['#FFD700', '#FFA500', '#FF3300', '#FF5500', '#FFCC00', '#FFFFA0'];

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    const c = this.canvas;
    this.x = Math.random() * c.width;
    this.y = Math.random() * c.height; // Spawns all over the section
    // 1.8x size scale to satisfy "*1.7 of its present size"
    this.radius = (Math.random() * 2.2 + 0.4) * 1.8;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.speedX = (Math.random() - 0.5) * 0.8;
    // Slight upward bias, but floats in all directions for ambient distribution
    this.speedY = (Math.random() - 0.5) * 0.6 - 0.2;
    this.opacity = Math.random() * 0.4 + 0.6; // Brighter opacity: 0.6 to 1.0
    this.opacityDelta = (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1);
    this.life = 0;
    this.maxLife = Math.random() * 240 + 100;
    // Organic wave parameters
    this.waveFreq = Math.random() * 0.015 + 0.005;
    this.waveAmp = Math.random() * 0.35 + 0.1;
  }

  update(mouse) {
    // 1. Apply primary velocities + sine wave drift for floating effect
    this.x += this.speedX + Math.sin(this.life * this.waveFreq) * this.waveAmp;
    this.y += this.speedY;
    this.life++;

    // 2. Cursor repulsion interaction
    if (mouse && mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const threshold = mouse.radius || 120;
      if (distance < threshold) {
        // Stronger repulsion close to cursor, fading out towards the edge
        const force = (threshold - distance) / threshold;
        const angle = Math.atan2(dy, dx);
        
        // Push particles away smoothly
        this.x += Math.cos(angle) * force * 5;
        this.y += Math.sin(angle) * force * 5;
      }
    }

    this.opacity += this.opacityDelta;
    if (this.opacity > 0.95) this.opacityDelta *= -1;
    if (this.opacity < 0.45) this.opacityDelta *= -1; // Maintain bright visibility

    // Screen wrapping instead of resetting only at the bottom
    const pad = 30;
    if (this.x < -pad) this.x = this.canvas.width + pad;
    if (this.x > this.canvas.width + pad) this.x = -pad;
    if (this.y < -pad) this.y = this.canvas.height + pad;
    if (this.y > this.canvas.height + pad) this.y = -pad;

    if (this.life >= this.maxLife) {
      this.life = 0;
      this.maxLife = Math.random() * 240 + 100;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 12; // Extra glow for larger particles
    ctx.fill();
    ctx.restore();
  }
}

/* ─── Component ───────────────────────────────────────────────── */
const MailerLiteForm = () => {
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: 120 });
  const containerRef = useRef(null);

  /* ── Particle animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const PARTICLE_COUNT = 220; // Increased particle population
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => new Particle(canvas));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      for (const p of particlesRef.current) {
        p.update(mouse);
        p.draw(ctx);
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const ro = new ResizeObserver(resize);
    if (parent) {
      ro.observe(parent);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  /* ── Scroll Trigger Observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is in viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  /* ── MailerLite scripts ── */
  useEffect(() => {
    window.ml_webform_success_42371436 = () => setSuccess(true);

    const script = document.createElement('script');
    script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    const trackFetch = async () => {
      try {
        await fetch('https://assets.mailerlite.com/jsonp/2418801/forms/189769851065075711/takel', {
          mode: 'no-cors',
        });
      } catch (err) {
        console.warn('MailerLite view tracking failed', err);
      }
    };
    trackFetch();

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      delete window.ml_webform_success_42371436;
    };
  }, []);

  return (
    <div className="ml-section-wrapper">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="ml-particle-canvas" aria-hidden="true" />

      {/* Dark vignette overlay */}
      <div className="ml-section-overlay" />

      {/* Centered form card */}
      <div className="ml-section-content" ref={containerRef}>
        <div
          id="mlb2-42371436"
          className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42371436"
        >
          <div className="ml-form-align-center">
            <div className={`ml-form-embedWrapper embedForm ${isVisible ? 'ml-form-bounce-in' : 'ml-form-hidden'}`}>

              {!success ? (
                <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <div className="ml-form-embedContent">
                    <h4 className="ml-text-glow">Enter The Solaris Era</h4>
                    <p className="ml-redesign-subtitle">
                      <span>
                        <strong>Join the Codex initiative and receive:</strong>
                      </span>
                    </p>
                    <ul className="ml-redesign-list">
                      <li>Episode release</li>
                      <li>Development updates</li>
                      <li>Exclusive lore</li>
                      <li>Early demo access</li>
                      <li>Future beta invitations</li>
                    </ul>
                  </div>

                  <form
                    className="ml-block-form"
                    action="https://assets.mailerlite.com/jsonp/2418801/forms/189769851065075711/subscribe"
                    data-code=""
                    method="post"
                    target="_blank"
                  >
                    <div className="ml-form-formContent">
                      <div className="ml-form-fieldRow ml-last-item">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <label>Email address:</label>
                          <input
                            aria-label="email"
                            aria-required="true"
                            type="email"
                            className="form-control"
                            data-inputmask=""
                            name="fields[email]"
                            placeholder=""
                            autoComplete="email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />

                    <div className="ml-form-embedSubmit">
                      <button type="submit" className="primary">
                        Join the Initiative
                      </button>
                      <button
                        disabled
                        style={{ display: 'none' }}
                        type="button"
                        className="loading"
                      >
                        <div className="ml-form-embedSubmitLoad" />
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="ml-form-successBody row-success">
                  <div className="ml-form-successContent">
                    <h4 className="ml-text-glow">Thank you!</h4>
                    <p className="ml-redesign-subtitle">You have successfully joined our subscriber list.</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailerLiteForm;
