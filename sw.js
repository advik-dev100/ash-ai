*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0a0f;
  --surface: #12121a;
  --surface2: #1a1a26;
  --border: rgba(255,255,255,0.07);
  --border2: rgba(255,255,255,0.13);
  --text: #f0f0f8;
  --text2: #8888aa;
  --text3: #55556a;
  --accent: #6c63ff;
  --accent2: #a78bfa;
  --teal: #22d3a8;
  --amber: #fbbf24;
  --coral: #f87171;
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --r: 14px;
  --r-lg: 20px;
}

html, body {
  height: 100%;
  width: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
}

/* header */
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 12px;
  flex-shrink: 0;
}
#logo {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--text);
}
#logo span { color: var(--accent2); }
#header-right { display: flex; align-items: center; gap: 10px; }
#tts-toggle, #clear-btn {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border2);
  color: var(--text2);
  font-size: 16px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
#tts-toggle.on { color: var(--teal); border-color: rgba(34,211,168,0.4); }
#clear-btn:hover { color: var(--coral); border-color: rgba(248,113,113,0.4); }

/* chat */
#chat {
  flex: 1;
  overflow-y: auto;
  padding: 8px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-behavior: smooth;
}
#chat::-webkit-scrollbar { width: 3px; }
#chat::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }

.msg { display: flex; flex-direction: column; max-width: 86%; animation: fadeUp 0.25s ease; }
@keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
.msg.user { align-self: flex-end; align-items: flex-end; }
.msg.bot  { align-self: flex-start; align-items: flex-start; }

.bubble {
  padding: 11px 15px;
  border-radius: var(--r-lg);
  font-size: 14.5px;
  line-height: 1.65;
}
.msg.user .bubble {
  background: var(--accent);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.msg.bot .bubble {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  border-bottom-left-radius: 4px;
}

.badge {
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.6px; text-transform: uppercase;
  padding: 3px 8px; border-radius: 6px;
  margin-bottom: 5px; display: inline-block;
}
.b-weather { background: rgba(34,211,168,0.12); color: var(--teal); }
.b-joke    { background: rgba(251,191,36,0.12);  color: var(--amber); }
.b-toss    { background: rgba(108,99,255,0.15);  color: var(--accent2); }
.b-tips    { background: rgba(251,191,36,0.12);  color: var(--amber); }
.b-search  { background: rgba(248,113,113,0.12); color: var(--coral); }
.b-answer  { background: rgba(108,99,255,0.15);  color: var(--accent2); }

.msg-time {
  font-size: 10px; color: var(--text3);
  margin-top: 4px; padding: 0 4px;
}

/* typing dots */
#typing-indicator {
  align-self: flex-start;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  border-bottom-left-radius: 4px;
  padding: 14px 18px;
  display: none;
  gap: 5px;
}
#typing-indicator.show { display: flex; }
.dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--text3);
  animation: bounce 1.3s infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce { 0%,60%,100%{transform:translateY(0);opacity:0.4} 30%{transform:translateY(-5px);opacity:1} }

/* chips */
#chips-wrap {
  padding: 4px 16px 8px;
  flex-shrink: 0;
  overflow-x: auto;
  display: flex;
  gap: 8px;
  scrollbar-width: none;
}
#chips-wrap::-webkit-scrollbar { display: none; }
.chip {
  display: flex; align-items: center; gap: 6px;
  white-space: nowrap;
  padding: 7px 13px;
  border-radius: 20px;
  background: var(--surface2);
  border: 1px solid var(--border2);
  color: var(--text2);
  font-size: 12.5px; font-weight: 500;
  cursor: pointer;
  transition: all 0.18s;
  flex-shrink: 0;
}
.chip:hover { background: var(--surface); color: var(--text); border-color: rgba(255,255,255,0.2); }
.chip-icon { font-size: 14px; }

/* bottom bar */
#bottom {
  padding: 10px 14px 20px;
  flex-shrink: 0;
}
#input-row {
  display: flex; align-items: center; gap: 10px;
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 28px;
  padding: 6px 6px 6px 16px;
  transition: border-color 0.2s;
}
#input-row:focus-within { border-color: rgba(108,99,255,0.5); }
#txt {
  flex: 1; background: transparent; border: none; outline: none;
  color: var(--text); font-size: 14.5px;
  font-family: var(--font-body);
  caret-color: var(--accent2);
}
#txt::placeholder { color: var(--text3); }
#mic-btn, #send-btn {
  width: 40px; height: 40px; border-radius: 50%;
  border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 17px;
  transition: all 0.18s;
  flex-shrink: 0;
}
#mic-btn {
  background: var(--surface2);
  color: var(--text2);
  border: 1px solid var(--border2);
}
#mic-btn:hover { color: var(--teal); border-color: rgba(34,211,168,0.4); }
#mic-btn.listening {
  background: rgba(34,211,168,0.15);
  color: var(--teal);
  border-color: rgba(34,211,168,0.5);
  animation: micPulse 1.2s infinite;
}
@keyframes micPulse { 0%,100%{box-shadow:0 0 0 0 rgba(34,211,168,0.3)} 50%{box-shadow:0 0 0 8px rgba(34,211,168,0)} }
#send-btn { background: var(--accent); color: #fff; }
#send-btn:hover { background: var(--accent2); }
#send-btn:active { transform: scale(0.95); }

/* orb */
#orb-area {
  display: flex; flex-direction: column; align-items: center;
  padding: 6px 0 2px;
  flex-shrink: 0;
  min-height: 70px;
}
#orb-canvas { width: 64px; height: 64px; cursor: pointer; }
#orb-svg { width: 64px; height: 64px; }
#orb-ring { transform-origin: center; }
#orb-ring.spin { animation: spinRing 2s linear infinite; }
@keyframes spinRing { to { transform: rotate(360deg); } }
#orb-status {
  font-size: 11px; color: var(--text3);
  margin-top: 3px; letter-spacing: 0.3px;
  min-height: 16px; text-align: center;
}

/* welcome */
#welcome {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 20px; text-align: center;
  flex: 1;
}
#welcome h2 {
  font-family: var(--font-display);
  font-size: 28px; font-weight: 700;
  letter-spacing: -0.5px; margin-bottom: 8px;
}
#welcome h2 span { color: var(--accent2); }
#welcome p {
  font-size: 14px; color: var(--text2);
  max-width: 280px; line-height: 1.6;
}

/* coin */
.coin-result {
  font-size: 42px; display: inline-block;
  animation: coinFlip 0.7s ease-out;
}
@keyframes coinFlip {
  0%   { transform: rotateY(0deg) scale(0.5); opacity: 0; }
  60%  { transform: rotateY(540deg) scale(1.1); }
  100% { transform: rotateY(720deg) scale(1); opacity: 1; }
}

/* toast */
#toast {
  position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
  background: var(--surface2); border: 1px solid var(--border2);
  color: var(--text); font-size: 13px;
  padding: 8px 18px; border-radius: 20px;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s; z-index: 99;
}
#toast.show { opacity: 1; }

@media (max-height: 600px) {
  #orb-area { min-height: 50px; }
  #orb-canvas { width: 48px; height: 48px; }
}
