---
layout: page
title: "Über mich"
permalink: /whoami
---
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<nav class="social-links" aria-label="Social profiles">
  <a href="https://www.linkedin.com/in/manjil-neupane-623a681a4/" class="fa fa-linkedin"></a>
  <a href="https://x.com/Manjil1001"  class="fa fa-twitter"></a>
  <a href="https://github.com/Te5ter13"  class="fa fa-github"></a>
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
      <p class="terminal-output" data-lang-de="Cybersecurity Researcher | Malware Analyst | CTF Player" data-lang-en="Cybersecurity Researcher | Malware Analyst | CTF Player">Cybersecurity Researcher | Malware Analyst | CTF Player</p>

      <p class="command-line">cat about.txt</p>
      <p class="terminal-output" data-lang-de="Ich arbeite an Malware-Analyse, Digital Forensics und SOC-Themen. Diese Seite ist mein Arbeitsnotizbuch: was ich getestet habe, was funktioniert hat, was kaputt ging und wie ich zum Ergebnis gekommen bin." data-lang-en="I work on malware analysis, digital forensics, and SOC topics. This site is my working notebook: what I tested, what worked, what broke, and how I reached the result.">Ich arbeite an Malware-Analyse, Digital Forensics und SOC-Themen. Diese Seite ist mein Arbeitsnotizbuch: was ich getestet habe, was funktioniert hat, was kaputt ging und wie ich zum Ergebnis gekommen bin.</p>

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
            <th data-lang-de="Organisation" data-lang-en="Organization">Organisation</th>
            <th data-lang-de="Rolle" data-lang-en="Role">Rolle</th>
            <th data-lang-de="Zeitraum" data-lang-en="Period">Zeitraum</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Lübeck</td><td>Research Assistant</td><td>Present</td></tr>
          <tr><td>CryptoGen Nepal</td><td>Associate SOC Engineer</td><td>2023-2024</td></tr>
          <tr><td>PwnBOT Systems</td><td data-lang-de="Web Pentester und QA" data-lang-en="Web Pentester and QA">Web Pentester und QA</td><td>2022-2023</td></tr>
        </tbody>
      </table>

      <p class="command-line">sudo cat recent_work/certificates</p>
      <p id="cert-password" class="terminal-output">[sudo] password for manjil:<span class="loading-cursor"></span></p>
      <div id="certificates-output" class="certificates-output hidden">
        <table class="terminal-table">
          <thead>
            <tr>
              <th data-lang-de="Zertifizierung" data-lang-en="Certification">Zertifizierung</th>
              <th data-lang-de="Anbieter" data-lang-en="Provider">Anbieter</th>
              <th data-lang-de="Ausgestellt" data-lang-en="Issued">Ausgestellt</th>
              <th data-lang-de="Gültigkeit" data-lang-en="Validity">Gültigkeit</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>eCDFP</td><td>INE Security</td><td>03.05.2024</td><td data-lang-de="Kein Ablaufdatum" data-lang-en="No expiration">Kein Ablaufdatum</td></tr>
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
  }, 6500);
</script>
