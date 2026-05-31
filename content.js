const CONTENT = {
  en: {
    name: "Pratyush Mohanty",
    tagline: "I love 3D, ML and AI",
    nav: {
      threeD: "3D / Game Dev",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      achievements: "Achievements",
      langSwitch: "日本語で見る",
      langSwitchHref: "profile_japanese.html"
    },
    social: {
      linkedin: "https://www.linkedin.com/in/pratyush-mohanty-8161b9222",
      instagram: "https://www.instagram.com/mohanty_pratyush_xo/",
      github: "https://github.com/pratyush532"
    },
    sections: {
      threeD: {
        id: "three-d",
        title: "3D & Game Development",
        subtitle: "Softwares: Blender · Unity · Godot · Aseprite",
        items: [
          {
            title: "3D Portfolio",
            description: "Art created using Blender and Godot.",
            link: "https://www.instagram.com/mohanty_pratyush_xo/",
            linkText: "View"
          },
          {
            title: "Procedural Planet Generation",
            description: "Node system for procedural planet generation made in Blender.",
            link: "http://github.com/pratyush532/3D-and-Blender/tree/main/Planet%20Creation",
            linkText: "View"
          },
          {
            title: "Physical Simulation",
            description: "Physics simulation using Blender Python API.",
            link: "https://www.linkedin.com/posts/pratyush-mohanty-8161b9222_python-apitesting-blender3d-activity-7043952169170976768-cuwx",
            linkText: "View"
          },
          {
            title: "3D Models on Web",
            description: "Project to embed 3D models interactively on a website.",
            link: "https://64b0c57266aafd0008d6ff0e--preeminent-rolypoly-6833f5.netlify.app/",
            linkText: "View"
          }
        ]
      },
      education: {
        id: "education",
        title: "Education",
        items: [
          {
            title: "Vellore Institute of Technology – Andhra Pradesh",
            sub: "B.Tech in Computer Science, Specialization in Artificial Intelligence",
            meta: "CGPA: 9.47 · Graduated September 2024"
          },
          {
            title: "CMR National Public School, Bengaluru",
            sub: "Class 12, PCMC, CBSE",
            meta: "93.6% · 2020"
          },
          {
            title: "Presidency School, Kasturinagar, Bengaluru",
            sub: "Class 10, CBSE",
            meta: "96.8% · 2018"
          }
        ]
      },
      experience: {
        id: "experience",
        title: "Experience",
        items: [
          {
            title: "Web Development Internship",
            org: "Human Resocia Co. Ltd. (Remote) · Tokyo, Japan",
            period: "Jan 2024 – Jun 2024",
            bullets: [
              "Prototype development for a report generation software.",
              "Converted install-based software to a SaaS platform with account creation, login, and report preview features for improved UX.",
              "Responsibilities included UI/UX development, tech stack research, and back-end file processing."
            ]
          },
          {
            title: "Data Analytics & Web Development Intern",
            org: "Chairman of Rasipuram Town · Amaravati, AP",
            period: "Jan 2023 – Jun 2023",
            bullets: [
              "Created the concept and front end for the official town website.",
              "Devised data collection strategies and implemented data cleaning procedures to enhance data quality.",
              "Website served as a comprehensive repository for public service announcements and local news."
            ]
          },
          {
            title: "UI/UX Design & 3D Development Intern",
            org: "Mukham, VIT AP Innovation & Incubation Center · Amaravati, AP",
            period: "May 2022 – Oct 2022",
            bullets: [
              "3D modelling and sculpting of campus in Blender to enable geo-tagging.",
              "UI/UX redesign of the Mukham app and full development of the companion MauTHN app."
            ]
          },
          {
            title: "Freelance Game & 3D Developer",
            org: "Fiverr · Instagram · Deviantart · Itch.io",
            period: "May 2019 – Nov 2020",
            bullets: [
              "Godot for level design, Unity for terrain/environment, Blender Python API and OpenGL for add-on development.",
              "Commissions for level design, concept design, and 3D rendering using Aseprite, Blender 3D, and Photoshop 3D.",
              "Leveraged Godot and Python to generate large environments with realistic corrosion effects."
            ]
          }
        ]
      },
      projects: {
        id: "projects",
        title: "Projects",
        items: [
          {
            title: "Agro Detect: Deep Learning for Paddy Disease Classification",
            tags: ["Python", "Keras", "Streamlit", "Android – Java"],
            bullets: [
              "Custom CNN architectures using Octave Convolution and Squeeze-Excitation Networks on the Paddy Doctor dataset. Final accuracy: 97.59%.",
              "Deployable ML pipeline for an Android app where users upload crop images to identify diseases."
            ],
            link: "https://drive.google.com/file/d/15kMXunLikw8A-FVX4otFSD8Hl3kWgDMh/view?usp=drive_link",
            linkText: "View Project"
          },
          {
            title: "Fragility Flow Plot Generation",
            tags: ["Python", "Numpy", "Keras", "Scikit-learn", "Streamlit"],
            bullets: [
              "AI solution to generate Fragility Flow plots from building structural data.",
              "Deployed web app with interactive real-time graph generation."
            ],
            link: "https://github.com/pratyush532",
            linkText: "View Project"
          },
          {
            title: "Smoother Quit (Patent Pending)",
            tags: ["Raspberry Pi", "Python", "Android – Java", "PHP", "Blender", "FreeCAD"],
            bullets: [
              "Full-stack IoT solution to track nicotine consumption and aid smoking cessation.",
              "Physical device with 3D-printed housing communicates with Android app to track device usage.",
              "Led team that built the Raspberry Pi device administering nicotine patches."
            ],
            link: "https://github.com/pratyush532",
            linkText: "View Project"
          },
          {
            title: "Diabetic Healthcare Data Analytics",
            tags: ["Research", "Machine Learning"],
            bullets: [
              "ML models to predict early onset diabetes using symptoms and complications like diabetic retinopathy.",
              "Published in the book: \"Data Modelling and Analytics for the Internet of Medical Things\"."
            ],
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jbrS_tYAAAAJ&citation_for_view=jbrS_tYAAAAJ:u5HHmVD_uO8C",
            linkText: "View Research"
          },
          {
            title: "Integrated Disability Support System",
            tags: ["Arduino", "C", "Android – Java", "PHP"],
            bullets: [
              "Physical support device for differently-abled people with obstacle detection and depth perception.",
              "Sensor-equipped walking stick communicates wirelessly; gait data displayed in the Android app."
            ],
            link: "https://drive.google.com/file/d/1Ll2frNCsTUrgBPxdlAU0DEuTQiFP1XWM/view?usp=drive_link",
            linkText: "View Project"
          }
        ]
      },
      certifications: {
        id: "certifications",
        title: "Certifications",
        items: [
          {
            title: "Master CAN protocol completely from Scratch (CAN + CAN-FD)",
            meta: "May 2025 · Udemy",
            link: "https://www.udemy.com/certificate/UC-0c3377df-dbf4-4b37-8400-412c9090db22/"
          },  
          {
            title: "NAT (Japanese Language Test) Q4",
            meta: "Sep 2024 · Senmon Kyouiku Publishing Co., Ltd.",
            link: "https://drive.google.com/file/d/1cf3PMImbRjtiVixjs5hL8KotTaM4rHgr/view?usp=sharing"
          },
          {
            title: "JLPT N5",
            meta: "Aug 2024 · The Japan Foundation",
            link: "https://drive.google.com/file/d/1XkGwWab65sm6gIsFrCqhguL6OPM_JEQa/view?usp=sharing"
          },
          {
            title: "Presenter Certificate – ICETSIS 2024",
            meta: "Feb 2024 · Applied Science University Bahrain · Paper: \"Presence Detection with Wi-Fi using ESP32\"",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7160282252805869568/"
          },
        //   {
        //     title: "IBM Artificial Intelligence Analyst",
        //     meta: "Jul 2023 · IBM Developer Skills Network",
        //     link: "https://courses.ibmcep.cognitiveclass.ai/certificates/b496c3da890f4dfa9c53f7fb9fd32521"
        //   },
        //   {
        //     title: "Fundamentals of Deep Learning",
        //     meta: "Sep 2022 · NVIDIA Deep Learning Institute",
        //     link: "https://courses.nvidia.com/certificates/ae21b59f8ac54bacac5221c3ab77f13a/"
        //   }
        ]
      },
      achievements: {
        id: "achievements",
        title: "Achievements",
        items: [
          {
            title: "5th Rank Holder – B.Tech CSE-AI 2024",
            meta: "VIT-AP University · Academic Excellence Award · CGPA 9.47",
            link: "https://drive.google.com/file/d/1JUqG6DID4MT_kL0zdQEv--m56U5IrCxj/view?usp=drive_link"
          },
          {
            title: "Best Contemporary Project – VITAP Engineering Clinics IoT",
            meta: "For Integrated Disability Support System",
            link: "https://www.linkedin.com/posts/pratyush-mohanty-8161b9222_team-androidapp-engineeringdesign-activity-7024057892177674240-6E8l"
          },
          {
            title: "Outstanding Capstone Project Award",
            meta: "For \"Agro Detect: Deep Learning for Paddy Disease Classification\"",
            link: "https://drive.google.com/file/d/123FNu-pcuJvU6n-fU72irf1M472Lznz1/view?usp=drive_link"
          }
        ]
      }
    },
    footer: "© 2025 Pratyush Mohanty. All rights reserved."
  },

  ja: {
    name: "プラトユシュ・モハンティ",
    tagline: "私は3D・ML・AIが大好きです",
    nav: {
      threeD: "3D・ゲーム開発",
      education: "教育",
      experience: "経験",
      projects: "プロジェクト",
      certifications: "認定",
      achievements: "業績",
      langSwitch: "English Site",
      langSwitchHref: "index.html"
    },
    social: {
      linkedin: "https://www.linkedin.com/in/pratyush-mohanty-8161b9222",
      instagram: "https://www.instagram.com/mohanty_pratyush_xo/",
      github: "https://github.com/pratyush532"
    },
    sections: {
      threeD: {
        id: "three-d",
        title: "私の3Dとゲーム開発プロジェクト",
        subtitle: "使ったソフトウェア: Blender · Unity Engine · Godot Engine · Aseprite",
        items: [
          {
            title: "3Dポートフォリオ",
            description: "BlenderやGodotを使って作ったアートです。",
            link: "https://www.instagram.com/mohanty_pratyush_xo/",
            linkText: "リンク"
          },
          {
            title: "プロシージャルな惑星生成ノードシステム",
            description: "Blenderで作成したプロシージャルな惑星生成ノードシステム。",
            link: "http://github.com/pratyush532/3D-and-Blender/tree/main/Planet%20Creation",
            linkText: "リンク"
          },
          {
            title: "物理シミュレーション",
            description: "Blender Python APIを使った物理シミュレーション。",
            link: "https://www.linkedin.com/posts/pratyush-mohanty-8161b9222_python-apitesting-blender3d-activity-7043952169170976768-cuwx",
            linkText: "リンク"
          },
          {
            title: "ウェブサイトに3Dモデルを表示するプロジェクト",
            description: "ウェブサイトに3つの3Dモデルをインタラクティブに表示するプロジェクト。",
            link: "https://64b0c57266aafd0008d6ff0e--preeminent-rolypoly-6833f5.netlify.app/",
            linkText: "リンク"
          }
        ]
      },
      education: {
        id: "education",
        title: "教育",
        items: [
          {
            title: "Vellore工科大学 – アーンドラ・プラデーシュ",
            sub: "コンピュータ科学B.Tech、人工知能専門",
            meta: "成績: 9.47 CGPA · 2024年9月卒業"
          },
          {
            title: "CMR国立パブリックスクール、ベンガルール",
            sub: "12学年（PCMC、CBSE）",
            meta: "93.6% · 2020年"
          },
          {
            title: "Presidency School、カストリーナガール、ベンガルール",
            sub: "10学年（CBSE）",
            meta: "96.8% · 2018年"
          }
        ]
      },
      experience: {
        id: "experience",
        title: "経験",
        items: [
          {
            title: "ウェブ開発インターンシップ",
            org: "ヒューマンリソシア株式会社（リモート勤務）· 東京、日本",
            period: "2024年1月 ～ 2024年6月",
            bullets: [
              "レポート生成ソフトウェアのプロトタイプ開発。",
              "インストール型ソフトウェアをSaaSプラットフォームに変換。アカウント作成・ログイン・レポートプレビュー機能を追加。",
              "UI/UX開発、技術スタックの調査、バックエンドでのファイル処理開発を担当。"
            ]
          },
          {
            title: "データ分析およびウェブ開発インターン",
            org: "ラシプラム町議会議長 · アマラヴァティ、AP",
            period: "2023年1月 ～ 2023年6月",
            bullets: [
              "ウェブサイトのコンセプトとフロントエンドを作成。",
              "効率的なデータ収集戦略を作成し、データクリーニング手順を実装してデータ品質を向上。",
              "公共サービスのお知らせや地域ニュースを提供する包括的なウェブサイトを構築。"
            ]
          },
          {
            title: "UI/UXデザインおよび3D開発インターン",
            org: "Mukham（VIT AP イノベーション＆インキュベーションセンター）· アマラヴァティ、AP",
            period: "2022年5月 ～ 2022年10月",
            bullets: [
              "Blenderを使用してキャンパスを3Dでモデリングおよびスカルプティングし、ジオタグ付けを可能に。",
              "MukhamアプリのUI/UX再設計および連動するMauTHNアプリの完全な開発。"
            ]
          },
          {
            title: "フリーランスゲーム開発者および3D開発者",
            org: "Fiverr · Instagram · Deviantart · Itch.io",
            period: "2019年5月 ～ 2020年11月",
            bullets: [
              "Godotを使用したレベルデザインとゲームプレイ、Unityを使用した地形および環境デザイン、Blender Python APIおよびOpenGLを使用したアドオン開発。",
              "Aesprite、Blender 3D、Photoshop 3Dを使用して環境モデリングを行い、ゲームレベルやコンセプトを開発。",
              "GodotゲームエンジンおよびPythonを活用し、リアルな腐食効果を備えた広大な環境を生成。"
            ]
          }
        ]
      },
      projects: {
        id: "projects",
        title: "プロジェクト",
        items: [
          {
            title: "Agro Detect: 深層学習による稲病気分類",
            tags: ["Python", "Keras", "Streamlit", "Android – Java"],
            bullets: [
              "Paddy DoctorデータセットでOctave ConvolutionやSqueeze-Excitation Networksを用いたカスタムCNNアーキテクチャ。最終精度: 97.59%。",
              "作物の病気を特定するために画像をアップロードできるAndroidアプリ用の展開可能なMLパイプラインを作成。"
            ],
            link: "https://drive.google.com/file/d/15kMXunLikw8A-FVX4otFSD8Hl3kWgDMh/view?usp=drive_link",
            linkText: "プロジェクトを見る"
          },
          {
            title: "Fragility Flowプロット生成",
            tags: ["Python", "Numpy", "Keras", "Scikit-learn", "Streamlit"],
            bullets: [
              "建物の構造情報からFragility Flowプロットを生成するAIソリューションを開発。",
              "インタラクティブなリアルタイムグラフ生成機能を備えた展開可能なWebアプリを作成。"
            ],
            link: "https://github.com/pratyush532",
            linkText: "プロジェクトを見る"
          },
          {
            title: "Smoother Quit（特許出願中）",
            tags: ["Raspberry Pi", "Python", "Android – Java", "PHP", "Blender", "FreeCAD"],
            bullets: [
              "喫煙習慣をやめるのを助けるためのニコチン消費を追跡するフルスタックIoTソリューション。",
              "3Dプリントハウジング付き物理デバイスがAndroidアプリケーションと通信し、デバイスの使用状況を追跡。",
              "3DプリントハウジングでニコチンパッチをRaspberry Piデバイスで管理するチームをリード。"
            ],
            link: "https://github.com/pratyush532",
            linkText: "プロジェクトを見る"
          },
          {
            title: "糖尿病ヘルスケアデータ分析とアプリケーション",
            tags: ["研究", "機械学習"],
            bullets: [
              "症状や糖尿病網膜症などの合併症を使用して早期糖尿病発症を予測するML。",
              "書籍「Data Modelling and Analytics for the Internet of Medical Things」に掲載。"
            ],
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jbrS_tYAAAAJ&citation_for_view=jbrS_tYAAAAJ:u5HHmVD_uO8C",
            linkText: "研究を見る"
          },
          {
            title: "統合障害支援システム",
            tags: ["Arduino", "C", "Android – Java", "PHP"],
            bullets: [
              "障害者が移動できるようにするための物理的支援デバイスで、障害物検知や深度認識機能を備えています。",
              "センサー付き歩行杖が無線通信を行い、Androidアプリで歩行データを表示。"
            ],
            link: "https://drive.google.com/file/d/1Ll2frNCsTUrgBPxdlAU0DEuTQiFP1XWM/view?usp=drive_link",
            linkText: "プロジェクトを見る"
          }
        ]
      },
      certifications: {
        id: "certifications",
        title: "認定資格",
        items: [
          {
            title: "CANプロトコルを基礎から完全にマスターする（CAN + CAN-FD）",
            meta: "2025年3月 · Udemy",
            link: "https://www.udemy.com/certificate/UC-0c3377df-dbf4-4b37-8400-412c9090db22/"
          }, 
          {
            title: "NAT（日本語能力試験）Q4",
            meta: "2024年9月 · 専門教育出版株式会社",
            link: "https://drive.google.com/file/d/1cf3PMImbRjtiVixjs5hL8KotTaM4rHgr/view?usp=sharing"
          },
          {
            title: "JLPT N5",
            meta: "2024年8月 · 日本財団",
            link: "https://drive.google.com/file/d/1XkGwWab65sm6gIsFrCqhguL6OPM_JEQa/view?usp=sharing"
          },
          {
            title: "プレゼンター認定証 – ICETSIS 2024",
            meta: "2024年2月 · Applied Science University Bahrain · 論文: 「Presence Detection with Wi-Fi using ESP32」",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7160282252805869568/"
          },
        //   {
        //     title: "IBM人工知能アナリスト",
        //     meta: "2023年7月 · IBM Developer Skills Network",
        //     link: "https://courses.ibmcep.cognitiveclass.ai/certificates/b496c3da890f4dfa9c53f7fb9fd32521"
        //   },
        //   {
        //     title: "深層学習の基礎",
        //     meta: "2022年9月 · NVIDIA Deep Learning Institute",
        //     link: "https://courses.nvidia.com/certificates/ae21b59f8ac54bacac5221c3ab77f13a/"
        //   }
        ]
      },
      achievements: {
        id: "achievements",
        title: "業績",
        items: [
          {
            title: "第5位 – B.Tech CSE-AI 2024",
            meta: "VIT-AP大学 · 学術優秀賞 · CGPA 9.47",
            link: "https://drive.google.com/file/d/1JUqG6DID4MT_kL0zdQEv--m56U5IrCxj/view?usp=drive_link"
          },
          {
            title: "VITAPエンジニアリングクリニック IoT部門 最優秀現代プロジェクト",
            meta: "統合障害支援システムにて受賞",
            link: "https://www.linkedin.com/posts/pratyush-mohanty-8161b9222_team-androidapp-engineeringdesign-activity-7024057892177674240-6E8l"
          },
          {
            title: "優秀なキャップストーンプロジェクト賞",
            meta: "「Agro Detect: 深層学習による稲病気分類」にて受賞",
            link: "https://drive.google.com/file/d/123FNu-pcuJvU6n-fU72irf1M472Lznz1/view?usp=drive_link"
          }
        ]
      }
    },
    footer: "© 2025 プラトユシュ・モハンティ. All rights reserved."
  }
};