/**
 * NOVA ENTERPRISE & DIGITAL COMMERCE SUITE
 * Comprehensive Data Repository
 */

const NOVA_DATA = {
  company: {
    name: "NOVA Enterprise",
    tagline: "Empowering Next-Generation Digital Enterprises & Modern Commerce",
    founded: 2018,
    headquarters: "San Francisco, CA",
    supportEmail: "support@novaenterprise.io",
    salesEmail: "sales@novaenterprise.io",
    phone: "+1 (800) 555-NOVA",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      youtube: "https://youtube.com"
    }
  },

  products: [
    {
      id: "prod-001",
      name: "Nova Quantum Edge AI Server",
      slug: "nova-quantum-edge-ai-server",
      category: "Servers & Cloud",
      badge: "Best Seller",
      price: 4999.00,
      originalPrice: 5499.00,
      rating: 4.9,
      reviewCount: 142,
      inStock: 18,
      sku: "NV-QNT-01",
      shortDesc: "Ultra-low latency inference server equipped with dual neural tensor units for real-time edge processing.",
      description: "The Nova Quantum Edge AI Server delivers unprecedented computational density in a sleek 2U rack-optimized chassis. Engineered for mission-critical industrial AI, autonomous logistics, and hybrid cloud orchestration, it combines military-grade hardware encryption with 128 TFLOPS of sustained INT8 throughput.",
      features: [
        "Dual 64-Core Tensor Accelerated Processors",
        "512GB ECC DDR5 5600MHz High-Bandwidth Memory",
        "4x 3.84TB Enterprise NVMe Gen5 U.2 SSD in RAID 10",
        "Dual 100GbE QSFP28 Network Interface with hardware offload",
        "Redundant 1200W Titanium 80+ Hot-swappable Power Units",
        "Integrated Hardware Root-of-Trust & Zero-Trust Telemetry"
      ],
      specs: {
        "Form Factor": "2U Rackmount (Depth: 680mm)",
        "Processor": "Dual Nova Quantum Tensor V3 (128 Cores Total)",
        "Memory": "512GB DDR5 ECC Registered",
        "Storage": "15.36TB Raw NVMe Gen5 SSD",
        "Cooling": "Smart Liquid-Vapor Chamber + 6x High-CFM Fan Array",
        "Power Supply": "Dual 1200W Titanium Hot-Swap (1+1 Redundancy)",
        "Certifications": "SOC 2 Type II, ISO 27001, CE, FCC Class A, RoHS"
      },
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-002",
      name: "Nova CyberShield 100G Firewall",
      slug: "nova-cybershield-100g-firewall",
      category: "Cybersecurity",
      badge: "Enterprise Pick",
      price: 3299.00,
      originalPrice: 3899.00,
      rating: 4.8,
      reviewCount: 98,
      inStock: 25,
      sku: "NV-CS-100G",
      shortDesc: "Next-gen zero-day threat prevention firewall appliance with 100Gbps stateful inspection and deep packet AI.",
      description: "Designed for hyperscale datacenters and financial networks, CyberShield 100G inspects encrypted traffic wire-speed without latency degradation. Features autonomous zero-day heuristic defense and automated quarantine playbooks.",
      features: [
        "100 Gbps Stateful & 45 Gbps Threat Prevention Throughput",
        "AI-Driven Encrypted Traffic Analysis without SSL Decrypt Overhead",
        "Automated Multi-Cloud Micro-Segmentation Gateway",
        "Built-in Hardware Cryptographic Acceleration (Quantum Resistant)",
        "Integrated SIEM/SOAR Direct Webhook Telemetry"
      ],
      specs: {
        "Form Factor": "1U Rackmount",
        "Ports": "4x 100GbE QSFP28 + 8x 25GbE SFP28",
        "Max Concurrent Sessions": "30,000,000",
        "New Sessions / Sec": "750,000",
        "Power Consumption": "380W Typical",
        "Compliance": "FIPS 140-3 Level 2, Common Criteria EAL4+"
      },
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-003",
      name: "ApexPro 8K Enterprise Workstation",
      slug: "apexpro-8k-enterprise-workstation",
      category: "Workstations",
      badge: "Flagship",
      price: 6499.00,
      originalPrice: 7200.00,
      rating: 5.0,
      reviewCount: 64,
      inStock: 12,
      sku: "NV-APX-8K",
      shortDesc: "Flagship creative and computational workstation built for 3D simulation, spatial computing, and neural model training.",
      description: "Housed in aerospace-grade acoustic aluminum, the ApexPro 8K provides uncompromised compute power with WhisperQuiet active acoustic cooling under 22dB even under 100% full thermal load.",
      features: [
        "96-Core Multi-threaded Workstation Processor",
        "Dual 48GB Professional Neural Visual Accelerators",
        "256GB Octa-Channel DDR5 RAM",
        "8TB PCIe 5.0 High-Speed Scratch Disk (14,000 MB/s)",
        "Triple 8K DisplayPort 2.1 & Thunderbolt 5 Multi-dock"
      ],
      specs: {
        "Chassis": "Acoustic Billet Anodized Aluminum",
        "Operating System": "Enterprise Linux / Windows 11 Enterprise Pro",
        "Noise Profile": "< 22 dB at peak load",
        "Warranty": "5-Year 24/7 On-Site White Glove Support"
      },
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-004",
      name: "Nova Mesh-X Industrial IoT Hub",
      slug: "nova-mesh-x-industrial-iot-hub",
      category: "IoT & Smart Devices",
      badge: "Popular",
      price: 899.00,
      originalPrice: 999.00,
      rating: 4.7,
      reviewCount: 81,
      inStock: 40,
      sku: "NV-MSH-X",
      shortDesc: "Ruggedized multi-protocol edge gateway supporting 5G private networks, Zigbee, LoRaWAN, and Industrial Modbus.",
      description: "Built for factories, renewable energy grids, and autonomous warehouses, the Mesh-X withstands extreme temperatures (-40C to 85C) and vibrations while aggregating over 10,000 telemetry points per second.",
      features: [
        "Dual SIM 5G Redundant Cellular + Satellite Fallback",
        "LoRaWAN 15km Long-Range Sensor Protocol",
        "IP68 Waterproof and Dust-tight Die-cast Enclosure",
        "Hardware-enforced TPM 2.0 Identity Management",
        "Battery backup lasts up to 72 hours during blackouts"
      ],
      specs: {
        "Ingress Protection": "IP68 Certified",
        "Operating Temperature": "-40°C to +85°C",
        "Wireless Protocols": "5G NR, LoRaWAN 868/915MHz, Wi-Fi 6E, Bluetooth 5.4, Thread",
        "Power Input": "9-48V DC or PoE+ 802.3at"
      },
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-005",
      name: "Horizon 49-Inch Curved Enterprise Monitor",
      slug: "horizon-49-curved-enterprise-monitor",
      category: "Workstations",
      badge: "New Release",
      price: 1599.00,
      originalPrice: 1799.00,
      rating: 4.9,
      reviewCount: 115,
      inStock: 30,
      sku: "NV-HRZ-49",
      shortDesc: "Dual QHD 144Hz OLED curved workspace display with 90W USB-C power delivery and integrated KVM switch.",
      description: "Replace dual monitor clutter with the Horizon 49. Featuring true 10-bit color accuracy, 1800R ergonomic curvature, and one-touch KVM switching between laptop and desktop workstations.",
      features: [
        "5120 x 1440 Dual QHD Ultrawide Resolution",
        "OLED Technology with 0.03ms Response Time & Infinite Contrast",
        "Built-in Multi-host KVM with PiP/PbP split views",
        "Dual 10W Spatial Audio Speakers with Noise-canceling Mic array",
        "Integrated ambient light auto-dimming sensor"
      ],
      specs: {
        "Screen Size": "49 inches (32:9 Aspect Ratio)",
        "Panel": "QD-OLED 144Hz",
        "Brightness": "1000 nits Peak (HDR True Black 400)",
        "Connectivity": "2x HDMI 2.1, 1x DP 1.4, 2x USB-C (90W PD), 4x USB-A 3.2"
      },
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-006",
      name: "Synapse Biometric Security Key (5-Pack)",
      slug: "synapse-biometric-security-key-5pack",
      category: "Cybersecurity",
      badge: "High Security",
      price: 249.00,
      originalPrice: 299.00,
      rating: 4.9,
      reviewCount: 230,
      inStock: 120,
      sku: "NV-SYN-KEY5",
      shortDesc: "FIDO2 and WebAuthn hardware security keys with capacitive fingerprint sensors and NFC tap authentication.",
      description: "Eliminate account takeovers and credential phishing forever. The Synapse Key requires physical fingerprint verification before granting zero-trust credential handshake tokens.",
      features: [
        "Sub-second On-chip Capacitive Fingerprint Recognition",
        "Universal FIDO2, FIDO U2F, WebAuthn & PIV Support",
        "Dual USB-C and Contactless NFC Connectivity",
        "Waterproof, Crush-proof Zinc Alloy Casing",
        "Centralized Enterprise Identity Fleet Provisioning Console"
      ],
      specs: {
        "Security Certifications": "FIDO Alliance L2, Common Criteria EAL6+",
        "Interface": "USB Type-C + NFC (13.56MHz)",
        "Fingerprint Capacity": "Up to 5 Fingerprints per key",
        "Dimensions": "44mm x 18mm x 4mm | 12 grams"
      },
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-007",
      name: "StrataCloud Hybrid SAN Storage Unit",
      slug: "stratacloud-hybrid-san-storage-unit",
      category: "Servers & Cloud",
      badge: "Enterprise",
      price: 8499.00,
      originalPrice: 9400.00,
      rating: 4.8,
      reviewCount: 52,
      inStock: 8,
      sku: "NV-STR-SAN",
      shortDesc: "High-density all-flash enterprise storage array delivering 1.2M IOPS with seamless S3 cloud tiering.",
      description: "StrataCloud is the heartbeat of enterprise databases. Features active-active dual controllers, automated predictive failover, and inline compression/deduplication achieving 4:1 storage efficiency.",
      features: [
        "1.2 Million IOPS with sub-0.5ms latency",
        "Active-Active Dual Hot-swappable Controller Modules",
        "Automated tiering to AWS S3, Google Cloud, and Azure Blob",
        "Instant Snapshot & Clones with Zero Performance Penalty",
        "Zero-Ransomware Immutable Snapshots Lock"
      ],
      specs: {
        "Capacity": "48TB All-Flash NVMe (Expandable to 1.5PB)",
        "Host Interfaces": "8x 32Gb Fibre Channel or 8x 25GbE iSCSI",
        "Availability": "99.9999% (Six Nines) Guaranteed SLA",
        "Form Factor": "3U Chassis"
      },
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-008",
      name: "Vanguard Executive ANC Headset",
      slug: "vanguard-executive-anc-headset",
      category: "Accessories",
      badge: "Trending",
      price: 389.00,
      originalPrice: 450.00,
      rating: 4.6,
      reviewCount: 184,
      inStock: 65,
      sku: "NV-VNG-HD",
      shortDesc: "Studio-grade wireless conferencing headset with AI deep-neural background isolation and 40-hour battery life.",
      description: "Engineered for executive leaders and remote professionals. Filters out all background noise, from open office chatter to barking dogs, ensuring voice clarity during high-stakes board calls.",
      features: [
        "Quad-core AI Voice Isolator mic array",
        "Hybrid Adaptive Active Noise Cancellation (-42dB)",
        "Multipoint Bluetooth 5.4 + Low Latency USB-C Dongle",
        "Memory foam earcups wrapped in supple vegan leather",
        "Quick charge: 15 minutes gives 8 hours playback"
      ],
      specs: {
        "Driver": "40mm Custom Bio-Cellulose Dynamic Drivers",
        "Frequency Response": "10Hz - 40,000Hz (Hi-Res Audio Certified)",
        "Battery": "40 Hours ANC On / 60 Hours ANC Off",
        "Weight": "245g"
      },
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-009",
      name: "Aura Smart Conference Room Bar",
      slug: "aura-smart-conference-room-bar",
      category: "IoT & Smart Devices",
      badge: "Collaboration",
      price: 1899.00,
      originalPrice: 2199.00,
      rating: 4.9,
      reviewCount: 77,
      inStock: 22,
      sku: "NV-AUR-BAR",
      shortDesc: "All-in-one 4K PTZ video bar with acoustic beamforming microphones, auto-framing, and whiteboard live-capture.",
      description: "Upgrade any boardroom into a Microsoft Teams & Zoom Rooms certified hybrid sanctuary. Features dual 4K wide-angle optics with autonomous speaker tracking and live in-meeting transcription support.",
      features: [
        "Dual 4K HDR Camera Array with 120-Degree Field of View",
        "AI Auto-Framing & Real-Time Active Speaker Spotlight",
        "8-Element Beamforming Microphone Array (8m Reach)",
        "Studio Soundbar with Stereo Acoustic Chamber",
        "One-touch wireless screen mirroring for iOS, Android & Windows"
      ],
      specs: {
        "Video Resolution": "4K Ultra HD at 60fps",
        "Audio Pickup": "8 meters (26.2 ft) with Acoustic Echo Cancellation",
        "Mounting": "Wall Mount, Display Clamp, or Table Stand included",
        "Platform Certified": "Zoom Rooms, Teams Rooms, Google Meet"
      },
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-010",
      name: "Nova DockStation Pro Thunderbolt 5",
      slug: "nova-dockstation-pro-thunderbolt-5",
      category: "Accessories",
      badge: "Essential",
      price: 349.00,
      originalPrice: 399.00,
      rating: 4.7,
      reviewCount: 160,
      inStock: 58,
      sku: "NV-DCK-TB5",
      shortDesc: "16-in-1 Thunderbolt 5 hub supporting dual 8K displays, 140W fast host charging, and 10Gbps Ethernet.",
      description: "One single cable to connect your entire enterprise setup. Features high-grade CNC milled aluminum body that acts as an efficient passive heatsink to prevent throttling.",
      features: [
        "Next-gen Thunderbolt 5 bandwidth up to 120Gbps",
        "140W USB-C Power Delivery 3.1 for powerful laptops",
        "Dual 8K@60Hz or Triple 4K@144Hz video output",
        "10GbE High-speed LAN port for low-latency network transfers",
        "High-fidelity 3.5mm DAC audio jack + UHS-II SD 4.0 card reader"
      ],
      specs: {
        "Ports": "3x TB5, 2x DP 2.1, 1x HDMI 2.1, 1x 10GbE, 4x USB-A 10Gbps, SD/TF, Audio",
        "Chassis": "Space Gray Anodized CNC Aluminum",
        "Power Adapter": "240W GaN Desktop Power Brick Included"
      },
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-011",
      name: "Nova Kinetic Ergonomic Task Chair",
      slug: "nova-kinetic-ergonomic-task-chair",
      category: "Workstations",
      badge: "Ergonomics",
      price: 899.00,
      originalPrice: 1050.00,
      rating: 4.8,
      reviewCount: 140,
      inStock: 35,
      sku: "NV-KNT-CHR",
      shortDesc: "Dynamic posture-correcting chair with self-adjusting lumbar suspension, 4D armrests, and breathable cooling mesh.",
      description: "Engineered in collaboration with leading orthopedic surgeons, the Nova Kinetic automatically responds to micro-shifts in your spinal curvature to eradicate sitting fatigue.",
      features: [
        "Dynamic Weight-sensing Synchro-Tilt mechanism",
        "Tri-zone Adaptive Lumbar Matrix",
        "Breathable German Aeromesh engineered for 12+ hour sitting",
        "4-Dimensional Armrests with 360-degree rotation",
        "Polished die-cast aluminum wheelbase with quiet rollerblade casters"
      ],
      specs: {
        "Weight Capacity": "Up to 350 lbs (158 kg)",
        "Adjustability": "Seat depth, tilt limiter, height, lumbar tension",
        "Warranty": "12-Year Structural Warranty"
      },
      image: "https://images.unsplash.com/photo-1580481077195-c3a82da91883?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1580481077195-c3a82da91883?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: "prod-012",
      name: "ShieldDesk Enterprise Security Gateway",
      slug: "shielddesk-enterprise-security-gateway",
      category: "Cybersecurity",
      badge: "Zero Trust",
      price: 1199.00,
      originalPrice: 1399.00,
      rating: 4.9,
      reviewCount: 45,
      inStock: 28,
      sku: "NV-SHD-GW",
      shortDesc: "Branch office SASE connector with automated WireGuard VPN tunnels, SD-WAN failover, and local DNS filtering.",
      description: "Connect remote offices and regional branch locations securely into the corporate zero-trust mesh in under 5 minutes without manual configuration.",
      features: [
        "Multi-WAN Gigabit failover with cellular dual-backup",
        "Zero-touch cloud provisioning from centralized dashboard",
        "Integrated DNS over HTTPS & Malware Shield",
        "WireGuard VPN speeds up to 1.8 Gbps crypto throughput",
        "Silent fanless thermal conduction architecture"
      ],
      specs: {
        "Ports": "2x 2.5GbE WAN, 6x Gigabit LAN (4x PoE+)",
        "Throughput": "SASE 2.5Gbps / Threat Prevention 1.5Gbps",
        "Dimensions": "220mm x 160mm x 35mm"
      },
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ],

  services: [
    {
      id: "srv-01",
      title: "Cloud Infrastructure Modernization",
      icon: "cloud",
      category: "Cloud & DevSecOps",
      highlight: "99.999% SLA",
      summary: "Transform legacy infrastructure into elastic, multi-cloud Kubernetes clusters with automated GitOps pipelines.",
      features: [
        "Multi-cloud architecture (AWS, GCP, Azure)",
        "Zero-downtime database migration",
        "Automated Terraform infrastructure as code",
        "FinOps cost optimization up to 35%"
      ],
      deliverables: "Architecture blueprints, CI/CD pipelines, 24/7 runbooks, security audit certificates."
    },
    {
      id: "srv-02",
      title: "Enterprise AI & Predictive Analytics",
      icon: "cpu",
      category: "Data & AI",
      highlight: "Custom Models",
      summary: "Harness proprietary enterprise data with secure private LLMs, vector search, and predictive demand modeling.",
      features: [
        "Private LLM deployment with air-gapped security",
        "Real-time customer churn and inventory prediction",
        "Vector RAG search engines for institutional knowledge",
        "MLOps pipelines with drift detection"
      ],
      deliverables: "Trained neural models, API endpoints, executive visualization dashboards."
    },
    {
      id: "srv-03",
      title: "Zero-Trust Cybersecurity & Compliance",
      icon: "shield",
      category: "Security",
      highlight: "SOC 2 & FedRAMP",
      summary: "Continuous security posture monitoring, automated penetration testing, and enterprise identity federation.",
      features: [
        "Zero-Trust Architecture (ZTA) implementation",
        "24/7 Managed SOC & Incident Response",
        "SOC 2, ISO 27001, HIPAA & GDPR compliance readiness",
        "Employee red-team simulation exercises"
      ],
      deliverables: "Audit compliance packages, automated SIEM pipelines, vulnerability heatmaps."
    },
    {
      id: "srv-04",
      title: "Omnichannel Digital Commerce Architecture",
      icon: "shopping-bag",
      category: "E-Commerce",
      highlight: "High Conversion",
      summary: "High-scale headless e-commerce platforms engineered for global multi-currency and B2B wholesale transactions.",
      features: [
        "Headless checkout with sub-second page loads",
        "Multi-warehouse real-time inventory synchronization",
        "Custom B2B quotation & tiered volume pricing",
        "ERP integration (SAP, NetSuite, Salesforce)"
      ],
      deliverables: "Custom storefronts, order management sync connectors, payment gateway integrations."
    },
    {
      id: "srv-05",
      title: "IoT & Industrial Smart Automation",
      icon: "activity",
      category: "Automation",
      highlight: "Edge Compute",
      summary: "Connect physical assets, factory equipment, and logistics fleets into an intelligent telemetry network.",
      features: [
        "Predictive equipment maintenance algorithms",
        "Digital twin modeling for factory lines",
        "Supply chain asset tracking with geofencing",
        "Ultra-low latency edge decision compute"
      ],
      deliverables: "Hardware firmware, MQTT telemetry broker, operational digital twin panels."
    },
    {
      id: "srv-06",
      title: "24/7 White-Glove Managed SRE Support",
      icon: "headphones",
      category: "Operations",
      highlight: "15-Min Response",
      summary: "Dedicated site reliability engineering teams guarding your critical services around the clock.",
      features: [
        "Guaranteed 15-minute response time SLA",
        "Chaos engineering resilience drills",
        "Quarterly disaster recovery testing",
        "Dedicated Enterprise Technical Account Manager"
      ],
      deliverables: "Monthly SLA uptime reports, automated incident retrospectives, capacity forecasting."
    }
  ],

  testimonials: [
    {
      id: "test-01",
      name: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Apex Global Financial",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content: "NOVA Enterprise replaced our fragmented legacy infrastructure with a unified edge computing mesh in under 90 days. Our checkout latency dropped by 64%, and holiday peak traffic sailed through with zero hitches.",
      rating: 5,
      metric: "64% Latency Reduction"
    },
    {
      id: "test-02",
      name: "Elena Rostova",
      role: "VP of Global Supply Chain",
      company: "Nordic Logistics Group",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      content: "The Nova Mesh-X IoT gateways transformed our refrigerated fleet visibility. We tracked 2.4 million shipments across 18 countries without losing a single packet of telemetry data. Truly extraordinary engineering.",
      rating: 5,
      metric: "99.999% Telemetry Uptime"
    },
    {
      id: "test-03",
      name: "David Chen",
      role: "Chief Information Security Officer",
      company: "Synthetix BioPharma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content: "In pharma research, zero-trust is not a buzzword—it is our legal lifeline. CyberShield 100G and the Synapse Biometric Keys passed every rigorous penetration test our defense partners threw at it.",
      rating: 5,
      metric: "100% Audit Compliance"
    }
  ],

  team: [
    {
      name: "Dr. Jonathan Vance",
      role: "Chief Executive Officer & Founder",
      bio: "Former Principal Architect at Google Cloud, PhD in Distributed Systems from Stanford University.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr. Soraya Morales",
      role: "Chief Technology Officer",
      bio: "Pioneer in Edge AI computing and neural architectures, 15+ patents in distributed tensor networking.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Aiden Takahashi",
      role: "Head of Product & Design",
      bio: "Obsessed with creating ergonomic enterprise hardware and intuitive commerce interfaces with zero friction.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Claire Dupont",
      role: "VP of Global Customer Success",
      bio: "12 years leading enterprise customer engineering for Fortune 100 enterprise deployments.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com"
    }
  ],

  faqs: [
    {
      q: "What makes NOVA Enterprise hardware and services different from commercial consumer tech?",
      a: "Every NOVA product is engineered specifically for mission-critical commercial deployments: featuring ECC memory, dual redundant hot-swappable power supplies, hardware zero-trust security modules (TPM 2.0 / FIPS 140-3), and guaranteed 5-year availability lifecycle with enterprise SLAs."
    },
    {
      q: "Do you offer custom B2B enterprise procurement and invoicing?",
      a: "Yes. In addition to our instant credit card and digital checkout, we provide Net 30/60 corporate invoicing, volume tier discounting, customized master service agreements (MSAs), and dedicated procurement account managers."
    },
    {
      q: "What are your shipping and deployment turnaround times?",
      a: "Standard in-stock enterprise units ship within 24 to 48 hours with priority insured air freight. Custom rackmount builds and pre-configured server clusters typically deploy within 7 to 10 business days."
    },
    {
      q: "How does the 30-Day Enterprise Trial program work?",
      a: "Qualified enterprise customers can request loaner hardware evaluation units or a 30-day proof-of-concept software sandbox with direct engineering support and zero upfront financial obligation."
    },
    {
      q: "Are NOVA systems compliant with healthcare and financial regulations?",
      a: "Yes. All NOVA systems and cloud architectures are certified or compliant with SOC 2 Type II, ISO 27001, HIPAA Security Rule, PCI-DSS Level 1, and GDPR international standards."
    }
  ],

  offices: [
    {
      city: "San Francisco",
      country: "United States",
      type: "Global Headquarters & R&D",
      address: "500 Howard Street, Suite 1400, San Francisco, CA 94105",
      phone: "+1 (415) 890-NOVA",
      email: "sf@novaenterprise.io"
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "EMEA Regional Hub",
      address: "100 Bishopsgate, Level 24, London EC2N 4AG",
      phone: "+44 20 7946 0991",
      email: "emea@novaenterprise.io"
    },
    {
      city: "Singapore",
      country: "Singapore",
      type: "APAC Regional Hub",
      address: "1 Marina Boulevard, #28-00 One Marina Boulevard, Singapore 018989",
      phone: "+65 6789 0123",
      email: "apac@novaenterprise.io"
    },
    {
      city: "Frankfurt",
      country: "Germany",
      type: "European Cloud & Security Center",
      address: "Mainzer Landstraße 180, 60327 Frankfurt am Main",
      phone: "+49 69 1234 5678",
      email: "frankfurt@novaenterprise.io"
    }
  ]
};

// Export for node or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NOVA_DATA;
}
