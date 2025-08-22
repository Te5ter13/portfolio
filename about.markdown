---
layout: page
title: About
permalink: /whoami/
---
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">


  <main class="container main-content">
    <div  class="social-media-icons">
    <a href="https://www.linkedin.com/in/manjil-neupane-623a681a4/" class="fa fa-linkedin"></a>
    <a href="https://x.com/Manjil1001" class="fa fa-twitter"></a>
    <a href="https://github.com/Te5ter13" class="fa fa-github"></a>
    </div>
        <!-- Home Section -->
    <section id="home" class="section">
        <div class="terminal-prompt">
            <div class="terminal-header">
                <div class="terminal-dots">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                </div>
                <div class="terminal-title">manjil@cybersec-research</div>
            </div>
            <div class="command-line">whoami</div> 
            <div class="terminal-output">Cybersecurity Researcher | Malware Analyst | CTF Player <br></div>
            <div class="command-line">ls -la recent_work/</div>
            <div class="terminal-output">
                drwxr-xr-x  5 manjil manjil  4096 Aug 19 2025 .<br>
                drwxr-xr-x 15 manjil manjil  4096 Aug 19 2025 ..<br>
                -rw-r--r--  1 manjil manjil  2048 Aug 10 2025 htb_machine_analysis.md<br>
                -rw-r--r--  1 manjil manjil  1024 Aug 17 2025 malware_sample_report.pdf<br>
                -rw-r--r--  1 manjil manjil  3072 Aug 16 2025 flareon_challenges.py<br>
                -r-r-----  1 root root  1800 Aug 08 2024 certificates<br>
            </div>
            <div class="command-line">jobs -l</div>
            <div class="terminal-output">
            <table>
                <tr>
                <th>Organization</th>
                <th>Designation</th>
                <th>Year</th>
                </tr>
                <tr>
                <td>Lübeck</td>
                <td>Research Assistant</td>
                <td>Present</td>
                </tr>
                <tr>
                <td>CryptoGen Nepal</td>
                <td>Associate SOC Engineer</td>
                <td>2023-2024</td>
                </tr>
                <tr>
                <td>PwnBOT Systems</td>
                <td>Web Pentester and QA</td>
                <td>2022-2023</td>
                </tr>
            </table>  
        </div>
        <div class="command-line">$ sudo cat recent_work/certificates</div>
        <div id="terminal">[sudo] password for manjil:<span class="loading" id="dot"></span>
        </div>
        <div id="table" class="hidden">
            <table>
                <tr>
                <th>Certification</th>
                <th>Vendor</th>
                <th>Issued</th>
                <th>Expires</th>
                <th>Link</th>
                </tr>
                <tr>
                <td>eCDFP(eLearn Certified Digital Forensic Professionals)</td>
                <td>INE Security</td>
                <td>May 3, 2024</td>
                <td>Never</td>
                <td><a href="https://certs.ine.com/fb951e24-aa1f-4d4d-9abb-2f9d0570e6fa">eCDFP</a></td>
                </tr>
                <tr>
                <td>CC (Certified In CyberSecurity)</td>
                <td>(ISC)2</td>
                <td>July 27,2023</td>
                <td>July 2024</td>
                <td>----</td>
                </tr>
                <tr>
                <td>CND (Certified Network Defender)</td>
                <td>EC-Council</td>
                <td>July 2022</td>
                <td>Jul 2025</td>
                <td><a href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=xsTcEv4MD8WAnXxp6IHfHSgorW9V3ZbiCaOVob/8oa0=">CND</a></td>
                </tr>
            </table>
            <br>
            <div class="command-line"><span class="loading"></span></div>
            <center> Investigate. Decode. Educate </center>
        </div>


<style>

:root {
            /* Dark theme (default) */
            --bg-primary: #0d1117;
            --bg-secondary: #161b22;
            --bg-tertiary: #21262d;
            --text-primary: #f0f6fc;
            --text-secondary: #8b949e;
            --text-accent: #58a6ff;
            --border-color: #30363d;
            --success: #3fb950;
            --warning: #f85149;
            --highlight: #ffd700;
            --terminal-green: #39ff14;
            --terminal-cursor: #39ff14;
        }

        [data-theme="light"] {
            --bg-primary: #ffffff;
            --bg-secondary: #f6f8fa;
            --bg-tertiary: #f1f3f4;
            --text-primary: #24292f;
            --text-secondary: #656d76;
            --text-accent: #0969da;
            --border-color: #d0d7de;
            --success: #1a7f37;
            --warning: #d1242f;
            --highlight: #bf8700;
            --terminal-green: #0969da;
            --terminal-cursor: #0969da;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Fira Code', monospace;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            transition: all 0.3s ease;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        .header {
            background-color: var(--bg-secondary);
            border-bottom: 2px solid var(--border-color);
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--terminal-green);
            text-decoration: none;
        }

        .logo:before {
            content: "$ ";
            color: var(--text-accent);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 30px;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--terminal-green);
        }

        .theme-toggle {
            background: none;
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.3s;
        }

        .theme-toggle:hover {
            background-color: var(--bg-tertiary);
            border-color: var(--terminal-green);
        }

        /* Terminal prompt */
        .terminal-prompt {
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
            font-family: 'Share Tech Mono', monospace;
            position: relative;
        }

        .terminal-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border-color);
        }

        .terminal-dots {
            display: flex;
            gap: 6px;
            margin-right: 15px;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .dot.red { background-color: #ff5f56; }
        .dot.yellow { background-color: #ffbd2e; }
        .dot.green { background-color: #27ca3f; }

        .terminal-title {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .command-line {
            color: var(--terminal-green);
            margin-bottom: 10px;
        }

        .command-line:before {
            content: "manjil@cybersec:~$ ";
            color: var(--text-accent);
        }

        .terminal-output {
            color: var(--text-primary);
            margin-left: 20px;
        }

        /* Main content */
        .main-content {
            padding: 10px 10;
        }

        .hero {
            text-align: center;
            margin-bottom: 60px;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            color: var(--terminal-green);
            text-shadow: 0 0 10px var(--terminal-green);
        }

        .hero p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
        }

        /* Section styles */
        .section {
            margin-bottom: 50px;
        }

        .section-title {
            font-size: 2rem;
            color: var(--text-accent);
            margin-bottom: 30px;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 10px;
        }

        .section-title:before {
            content: "# ";
            color: var(--terminal-green);
        }

        /* Filter and search */
        .filter-section {
            margin-bottom: 30px;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            align-items: center;
        }

        .search-box {
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            padding: 10px 15px;
            border-radius: 6px;
            font-family: inherit;
            flex-grow: 1;
            min-width: 250px;
        }

        .search-box:focus {
            outline: none;
            border-color: var(--terminal-green);
            box-shadow: 0 0 0 2px var(--terminal-green)20;
        }

        .filter-tags {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tag {
            background-color: var(--bg-tertiary);
            color: var(--text-primary);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            border: 1px solid var(--border-color);
            cursor: pointer;
            transition: all 0.3s;
        }

        .tag:hover,
        .tag.active {
            background-color: var(--terminal-green);
            color: var(--bg-primary);
            border-color: var(--terminal-green);
        }

        /* Post grid */
        .posts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
        }

        .post-card {
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 25px;
            transition: all 0.3s;
            cursor: pointer;
        }

        .post-card:hover {
            border-color: var(--terminal-green);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .post-title {
            font-size: 1.2rem;
            color: var(--text-accent);
            margin-bottom: 10px;
            font-weight: 600;
        }

        .post-meta {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 15px;
        }

        .post-excerpt {
            color: var(--text-primary);
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .post-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .post-tag {
            background-color: var(--bg-tertiary);
            color: var(--terminal-green);
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            border: 1px solid var(--terminal-green)40;
        }

        /* About section */
        .about-content {
            background-color: var(--bg-secondary);
            padding: 30px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .stat-card {
            background-color: var(--bg-tertiary);
            padding: 20px;
            border-radius: 6px;
            text-align: center;
            border: 1px solid var(--border-color);
        }

        .stat-number {
            font-size: 2rem;
            color: var(--terminal-green);
            font-weight: 700;
        }

        .stat-label {
            color: var(--text-secondary);
            margin-top: 5px;
        }

        /* Footer */
        .footer {
            background-color: var(--bg-secondary);
            border-top: 2px solid var(--border-color);
            padding: 40px 0;
            margin-top: 80px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .footer-section h3 {
            color: var(--terminal-green);
            margin-bottom: 15px;
        }

        .footer-section a {
            color: var(--text-secondary);
            text-decoration: none;
            display: block;
            margin-bottom: 8px;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: var(--terminal-green);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav {
                flex-direction: column;
                gap: 20px;
            }

            .nav-links {
                gap: 20px;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .filter-section {
                flex-direction: column;
                align-items: stretch;
            }

            .posts-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Loading animation */
        .loading {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: var(--terminal-cursor);
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* Command prompt styling */
        .command-prompt {
            font-family: 'Share Tech Mono', monospace;
            background-color: var(--bg-tertiary);
            padding: 15px;
            border-radius: 6px;
            margin: 20px 0;
            border-left: 4px solid var(--terminal-green);
        }

        .command-prompt:before {
            content: "root@manjilneupane:~# ";
            color: var(--terminal-green);
            font-weight: bold;
        }

        /* Hidden class for filtering */
        .hidden {
            display: none !important;
        }







  
/* General styling for the social icons */
.fa {
  display: flex; /* Ensure content is aligned within the circle */
  justify-content: center; /* Center icon horizontally */
  align-items: center; /* Center icon vertically */
  padding: 0; /* No extra padding inside the icon container */
  font-size: 24px; /* Size of the Font Awesome icon */
  width: 50px; /* Fixed width for the circular container */
  height: 50px; /* Fixed height for the circular container */
  text-align: center;
  text-decoration: none;
  margin: 5px; /* Space between icons */
  border-radius: 50%; /* Circular shape */
  transition: all 0.3s ease; /* Smooth hover effects */
}

/* Hover effects for the icons */
.fa:hover {
  opacity: 0.8; /* Slight transparency */
  transform: scale(1.1); /* Enlarge slightly on hover */
}

/* Colors for individual icons */
.fa-linkedin {
  background: black; /* LinkedIn Blue */
  color: white;
}

.fa-twitter {
  background: black; /* Twitter Blue */
  color: white;
}
.fa-github {
  background: black;
  color: white;
}

/* Container styling */
.social-media-icons {
  display: flex; /* Align icons in a row */
  justify-content: left; /* Center the row */
  align-items: left; /* Vertically align icons */
  margin: 20px 0; /* Space around the container */
  gap: 15px; /* Space between icons */
}

/* Responsive styling for smaller screens */
@media (max-width: 768px) {
  .fa {
    font-size: 20px; /* Reduce icon size */
    width: 40px; /* Adjust circle size */
    height: 40px; /* Adjust circle size */
  }

  .social-media-icons {
    gap: 10px; /* Reduce spacing between icons */
  }
}
h1 {
    color: #b5e853;
}



      /* Hidden class for filtering */
      .hidden {
          display: none !important;
        }
      table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #555;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background-color: #333;
      color: #00ff00;
    }
    tr:nth-child(even) {
      background-color: #2a2a2a;
    }
  
</style>


<script>
  // For the job description to show after certain time
  setTimeout(() => {
    document.getElementById('dot').style.display = 'none';
    document.getElementById('table').classList.remove('hidden');
  }, 2000); // 2 seconds
</script>

