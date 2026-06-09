import React, { useState, useEffect, useRef } from 'react';
import './MailerLiteForm.css';

/* ─── Particle System ─────────────────────────────────────────── */
const COLORS = ['#FFD700', '#FFA500', '#FF6B00', '#C1121F', '#FF4500', '#FFEC8B'];

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    const c = this.canvas;
    this.x = Math.random() * c.width;
    this.y = Math.random() * c.height;
    this.radius = Math.random() * 2.2 + 0.4;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = -(Math.random() * 0.8 + 0.3);
    this.opacity = Math.random() * 0.7 + 0.3;
    this.opacityDelta = (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1);
    this.life = 0;
    this.maxLife = Math.random() * 220 + 80;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life++;
    this.opacity += this.opacityDelta;
    if (this.opacity > 0.95) this.opacityDelta *= -1;
    if (this.opacity < 0.05) this.opacityDelta *= -1;
    if (
      this.life >= this.maxLife ||
      this.x < -10 ||
      this.x > this.canvas.width + 10 ||
      this.y < -10
    ) {
      this.reset();
      this.y = this.canvas.height + 5;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
  }
}

/* ─── Component ───────────────────────────────────────────────── */
const MailerLiteForm = () => {
  const [success, setSuccess] = useState(false);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  /* ── Particle animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const PARTICLE_COUNT = 140;
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => new Particle(canvas));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particlesRef.current) {
        p.update();
        p.draw(ctx);
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
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
      <div className="ml-section-content">
        <div
          id="mlb2-42371436"
          className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42371436"
        >
          <div className="ml-form-align-center">
            <div className="ml-form-embedWrapper embedForm">

              {!success ? (
                <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <div className="ml-form-embedContent">
                    <h4>Enter The Solaris Era</h4>
                    <p>
                      <span style={{ color: 'rgb(255, 215, 0)' }}>
                        <strong>Join the Codex initiative and receive:</strong>
                      </span>
                    </p>
                    <ul>
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
                    <h4>Thank you!</h4>
                    <p>You have successfully joined our subscriber list.</p>
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
