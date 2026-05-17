---
layout: page
title: "Whoami"
permalink: /whoami
---

<nav class="social-links" aria-label="Social profiles">
  <a href="https://www.linkedin.com/in/manjil-neupane-623a681a4/" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.97 1.97 1.97 1.08 0 1.97-.89 1.97-1.97A1.98 1.98 0 0 0 5.25 3Zm14.19 9.84c0-3.06-1.63-4.48-3.8-4.48-1.75 0-2.53.96-2.97 1.64V8.5H9.3V20h3.37v-5.7c0-1.5.29-2.96 2.15-2.96 1.83 0 1.86 1.72 1.86 3.06V20h3.38v-7.16Z"/></svg>
    <span>LinkedIn</span>
  </a>
  <a href="https://x.com/Manjil1001" aria-label="Twitter X">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.5 22H3.4l7.24-8.28L2.8 2h6.4l4.43 5.88L18.9 2Zm-1.1 18h1.73L8.26 3.9H6.4L17.8 20Z"/></svg>
    <span>Twitter / X</span>
  </a>
  <a href="https://github.com/Te5ter13" aria-label="GitHub">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.21.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.31 1.08 2.87.83.09-.64.35-1.08.63-1.32-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.52 9.52 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.21 2.4.1 2.65.64.69 1.02 1.58 1.02 2.67 0 3.82-2.34 4.67-4.57 4.92.36.3.67.9.67 1.82v2.7c0 .27.18.59.69.48A10 10 0 0 0 12 2Z"/></svg>
    <span>GitHub</span>
  </a>
</nav>

<section class="terminal-profile">
  <div class="terminal-window">
    <div class="terminal-bar">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="terminal-title">manjil@cybersec-research:~</span>
    </div>
    <div class="terminal-body">
      <p class="command-line">whoami</p>
      <p class="terminal-output">Cybersecurity Researcher | Malware Analyst | CTF Player</p>

      <p class="command-line">cat about.txt</p>
      <p class="terminal-output">I work on malware analysis, digital forensics, and SOC topics. This site is my working notebook: what I tested, what worked, what broke, and how I reached the result.</p>

      <p class="command-line">ls -la recent_work/</p>
      <pre class="terminal-output">drwxr-xr-x  5 manjil manjil 4096 recent_work
-rw-r--r--  1 manjil manjil 2048 htb_machine_analysis.md
-rw-r--r--  1 manjil manjil 1024 malware_sample_report.pdf
-rw-r--r--  1 manjil manjil 3072 flareon_challenges.py
-r--r-----  1 root   root   1800 certificates</pre>

      <p class="command-line">jobs -l</p>
      <table class="terminal-table">
        <thead>
          <tr>
            <th>Organization</th>
            <th>Role</th>
            <th>Period</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Lubeck</td><td>Research Assistant</td><td>Present</td></tr>
          <tr><td>CryptoGen Nepal</td><td>Associate SOC Engineer</td><td>2023-2024</td></tr>
          <tr><td>PwnBOT Systems</td><td>Web Pentester and QA</td><td>2022-2023</td></tr>
        </tbody>
      </table>

      <p class="command-line">sudo cat recent_work/certificates</p>
      <p id="cert-password" class="terminal-output">[sudo] password for manjil:<span class="loading-cursor"></span></p>
      <div id="certificates-output" class="certificates-output hidden">
        <table class="terminal-table">
          <thead>
            <tr>
              <th>Certification</th>
              <th>Provider</th>
              <th>Issued</th>
              <th>Validity</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>eCDFP</td><td>INE Security</td><td>03.05.2024</td><td>No expiration</td></tr>
            <tr><td>CC - Certified in Cybersecurity</td><td>ISC2</td><td>27.07.2023</td><td>2024</td></tr>
            <tr><td>CND - Certified Network Defender</td><td>EC-Council</td><td>07.2022</td><td>07.2025</td></tr>
          </tbody>
        </table>
        <p class="command-line"><span class="loading-cursor"></span></p>
      </div>
    </div>
  </div>
</section>

<p class="signature">Investigate. Decode. Educate</p>

<script>
  window.setTimeout(function () {
    var password = document.getElementById("cert-password");
    var output = document.getElementById("certificates-output");

    if (password) {
      password.innerHTML = "[sudo] password for manjil: ********";
    }

    if (output) {
      output.classList.remove("hidden");
    }
  }, 3000);
</script>
