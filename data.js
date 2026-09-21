/* 本文件由 ~/macro_desk_build.py 自动生成 —— 不要手改。
   内容来自 ~/thesis/{macro,earnings,conferences}/ 的机器可读块,
   改内容请改卡片,然后重跑生成器。 */

export const meta = {
  "title": "宏观 & 财报事件台",
  "subtitle": "前瞻 · 靴子落地 · 倒计时",
  "updated": "2026-09-21 14:00 ET",
  "owner": "内部社群版",
  "disclaimer": "本站内容为个人研究记录，不构成投资建议。数据由 skill 卡片的机器可读块自动生成。"
};

export const markets = [
  {
    "label": "S&P 500",
    "value": "7,759.96",
    "chg": "+1.43%",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "纳斯达克100",
    "value": "30,410.6",
    "chg": "+2.59%",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "DXY",
    "value": "100.41",
    "chg": "+0.10%",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "黄金",
    "value": "4,381.30",
    "chg": "-0.33%",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "WTI 原油",
    "value": "92.27",
    "chg": "-1.81%",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "BTC",
    "value": "85,902",
    "chg": "+5.84%",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "VIX",
    "value": "14.99",
    "chg": "+0.18",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "US 10Y",
    "value": "4.97%",
    "chg": "-2.7bp",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "US 30Y",
    "value": "5.30%",
    "chg": "-2.7bp",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "US 2Y",
    "value": "4.67%",
    "chg": "-7.0bp",
    "dir": "down",
    "note": "as-of 2026-09-17 · 2s10s +25bp"
  },
  {
    "label": "10月加息概率",
    "value": "57%",
    "chg": "",
    "dir": "flat",
    "note": "ZQ 期货自算 · 2026-09-18 ⚠️"
  }
];

export const events = [
  {
    "id": "msft-fy26q4-replay",
    "kind": "earnings",
    "ticker": "MSFT",
    "company": "MSFT",
    "title": "MSFT FY26Q4 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-07-29T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET · 回放卡(事后重建,非事前预测)",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "回放",
      "FY26Q4"
    ],
    "thesis": "隐含波动:数据缺口 —— 回放卡无法回溯取得财报前的期权链,§8.5 的「是否落在隐含区间内」这一项本卡不可判。 反应函数一句:MSFT 近 24 季 beat 率 96%、但 beat 却跌 13/23 次、只看 beat 的季度上涨率仅 43%、次日中位 -0.59% —— beat 是入场费不是彩票,定价权在 Azure 增速与 RPO 口径。 门槛配置:公司不给数字化 EPS 指引(MSFT 的指引在法说会 CFO Outlook 口述),故四条 bar 只有三条;买方 bar 按全样本 surprise 中位校准。 动作(四选一):回放卡不产生动作。 bear 允许 EPS beat:是 —— 上面 13/23 次「beat 却跌」就是依据。",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "4.24",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "4.52",
        "prior": "",
        "range": "vs 卖方一致 +6.6%",
        "note": ""
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "",
        "reaction": "次日 +5.50%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "",
        "reaction": "次日 +0.00%"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "25%",
        "trigger": "",
        "reaction": "次日 -5.50%"
      }
    ],
    "watch": [],
    "actual": [
      {
        "name": "下季 Azure 增速指引",
        "actual": "39",
        "consensus": "39",
        "prior": "",
        "surprise": "中性(落在预期附近)",
        "dir": "flat"
      },
      {
        "name": "本季 Azure 增速",
        "actual": "43",
        "consensus": "40",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "Microsoft Cloud 收入",
        "actual": "59.3",
        "consensus": "57.5",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "商业 RPO 同比",
        "actual": "84",
        "consensus": "60",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "Intelligent Cloud 收入",
        "actual": "39.3",
        "consensus": "37.5",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-1.52%",
        "d1": "+1.66%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "-2.06%",
        "d1": "+3.36%"
      },
      {
        "asset": "US 2Y",
        "d0": "-4bp",
        "d1": "+1bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+6bp",
        "d1": "+1bp"
      },
      {
        "asset": "DXY",
        "d0": "-0.57%",
        "d1": "-0.78%"
      }
    ],
    "verdict": "本卡是回放卡,不触发 thesis 卡更新、不触发 /equity-research 重跑。 它的用途只有一个:管线回归测试。改动 earnings_reconcile.py 后重跑本卡,",
    "history": [
      {
        "when": "2026-04-29",
        "what": "EPS 意外 +4.9% · 实际 4.27 vs 预期 4.07",
        "outcome": "次日 -3.93%（中 beat 2–5%）"
      },
      {
        "when": "2026-01-28",
        "what": "EPS 意外 +5.7% · 实际 4.14 vs 预期 3.92",
        "outcome": "次日 -9.99%（大 beat 5–10%）"
      },
      {
        "when": "2025-10-29",
        "what": "EPS 意外 +12.7% · 实际 4.13 vs 预期 3.66",
        "outcome": "次日 -2.92%（巨 beat >10%）"
      }
    ],
    "links": [
      {
        "label": "microsoft.com · press-release-webcast",
        "url": "https://www.microsoft.com/en-us/investor/earnings/FY-2026-Q4/press-release-webcast"
      }
    ],
    "consensus": {
      "eps": "$4.24",
      "rev": "$88.00B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $4.52"
    },
    "segments": [
      {
        "name": "下季 Azure 增速指引",
        "consensus": "39.0",
        "prior": "利好 42.0 / 利空 36.0",
        "note": "core · 权重 30%"
      },
      {
        "name": "本季 Azure 增速",
        "consensus": "40.0",
        "prior": "利好 42.0 / 利空 38.0",
        "note": "core · 权重 25%"
      },
      {
        "name": "Microsoft Cloud 收入",
        "consensus": "57.5",
        "prior": "利好 59.0 / 利空 56.0",
        "note": "权重 15%"
      },
      {
        "name": "商业 RPO 同比",
        "consensus": "60.0",
        "prior": "利好 75.0 / 利空 45.0",
        "note": "权重 20%"
      },
      {
        "name": "Intelligent Cloud 收入",
        "consensus": "37.5",
        "prior": "利好 39.0 / 利空 36.5",
        "note": "权重 10%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "下季 EPS 一致 $4.817",
      "note": "比较期间 FY27Q1"
    },
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$464.72"
      },
      {
        "name": "概率加权目标价",
        "value": "$499.00"
      },
      {
        "name": "压力调整底线",
        "value": "$440.07"
      },
      {
        "name": "安全边际",
        "value": "-5.30%"
      }
    ],
    "targets": {
      "low": "$342",
      "avg": "$499",
      "high": "$616",
      "n": "本站三情景加权 · 卖方一致 $558.64"
    },
    "afterHours": {
      "move": "+15.51%",
      "note": "- 实际次日反应 +15.51%(基准收盘 390.54 → 451.1) - 卡片内插预期 +3.85% vs 实际 +15.51%,误差 +11.66%(方向判对) - ⚠️ 实际反应落在同类历史 10–90 分位之外 —— 属尾部事件,不要用它去改反应函数(单次尾部 ≠ 制度变化)"
    }
  },
  {
    "id": "cpi-2026-07-rel2026-08-12",
    "kind": "macro",
    "title": "2026-07 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-08-12T08:30:00-04:00",
    "dateNote": "08:30 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "CPI"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-14",
        "what": "CPI（2026-06）",
        "outcome": "SPX +0.38% · 2Y -8bp"
      },
      {
        "when": "2026-06-10",
        "what": "CPI（2026-05）",
        "outcome": "SPX -1.62% · 2Y +0bp"
      },
      {
        "when": "2026-05-12",
        "what": "CPI（2026-04）",
        "outcome": "SPX -0.16% · 2Y +5bp"
      }
    ],
    "links": [
      {
        "label": "BLS CPI",
        "url": "https://www.bls.gov/cpi/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
      }
    ]
  },
  {
    "id": "nvda-fy27q2-replay",
    "kind": "earnings",
    "ticker": "NVDA",
    "company": "NVDA",
    "title": "NVDA FY27Q2 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-08-26T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET · 回放卡(事后重建,非事前预测)",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "回放",
      "FY27Q2"
    ],
    "thesis": "财报日 2026-08-26 AMC(SEC 受理 16:21:19 ET)｜基准收盘 $209.66｜隐含波动 ±5.05%(去时值) 反应函数:近 8 季 beat 率 100% 却只涨 2/8 次、均值 -2.78% —— beat 是入场费不是彩票,定价权在指引(surprise 与次日涨跌 |r|=0.27,几乎不解释)。 事前三情景期望值 = -0.56%(0.30×+8.30% + 0.40×-0.73% + 0.30×-9.20%), 即在本卡的概率标定下,这是一笔赔率略负的事件 —— 与该票「beat 却跌 8/20 次」一致。 实际落点:加权 S = +0.45(覆盖权重 100%),内插预期次日反应 +3.33%。 但 核心论点「毛利率指引」触及利空阈值 —— 按卡片定义,这一条使「纯利好」的读法作废。 > ⛔ 本卡为回放卡,预期值与利好/利空阈值 事后补写,「我错在哪」结构性无效。详见页首。",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "2.092",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "2.205",
        "prior": "",
        "range": "vs 卖方一致 +5.4%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "2.23",
        "prior": "",
        "range": "vs 卖方一致 +6.6%",
        "note": ""
      },
      {
        "name": "FY27Q3 收入指引(第一定价变量)",
        "consensus": "103.9",
        "prior": "",
        "range": "利好 107.0 / 利空 100.8",
        "note": "core · 权重 35%"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "",
        "reaction": "次日 +8.30%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "",
        "reaction": "次日 -0.73%"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "",
        "reaction": "次日 -9.20%"
      }
    ],
    "watch": [
      "中国数据中心收入口径是否松动 — 利好: 指引中恢复中国数据中心算力收入假设,或明确提及出口许可松动 — 利空: 继续整段排除中国,且新增出口管制/份额流失的负面表述",
      "FY27Q3 收入指引",
      "FY27Q3 毛利率指引",
      "中国口径措辞",
      "分部拆分",
      "非GAAP 口径变更"
    ],
    "actual": [
      {
        "name": "FY27Q3 收入指引(第一定价变量)",
        "actual": "108",
        "consensus": "103.9",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "FY27Q3 非GAAP 毛利率指引",
        "actual": "74",
        "consensus": "75",
        "prior": "",
        "surprise": "证伪(触及利空阈值)",
        "dir": "down"
      },
      {
        "name": "本季收入 vs 公司自家指引上沿(「打满指引」检验)",
        "actual": "96.2",
        "consensus": "92.82",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "数据中心收入",
        "actual": "89",
        "consensus": "84",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-0.02%",
        "d1": "+0.72%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+0.05%",
        "d1": "+1.43%"
      },
      {
        "asset": "US 2Y",
        "d0": "+2bp",
        "d1": "+1bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+2bp",
        "d1": "+1bp"
      },
      {
        "asset": "DXY",
        "d0": "+0.25%",
        "d1": "-0.01%"
      }
    ],
    "verdict": "我错在哪(整体):本卡是回放卡、没有事前下注,所以这一行答的是「规则设得对不对」。 三条:① 权重分配错了 —— 15% 给了一句大概率逐字重复的中国口径措辞(结果确实逐字未变、信息量为零、还造成 15% 覆盖缺口),而同一份 EX-99.2 里首次并表的担保 $108.5B / 承诺 $56B / 本季发债 $25.0B 拿到 0%,连 F 层都没有;② 论点集合只覆盖两段式对账的第一段 —— 本次第一定价变量(电话会 FY28 约 +70%)在第二段,已独立复核确认它在 EX-99.1 / EX-99.2 / 同日 10-Q(acc 0001045810-26-000075) 中均无一手出处;③ 对账窗口只有 T+1 —— 内插 +4.05% 在 T+1 差 +4.69pt,在 T+2(自算 209.43 → 217.31,+3.76%)只差 0.29pt,§8.5 的 🔴 背离与 §8.6 的「尾部事件」都只在 T+1 口径下成立。做对了的地方(必须一起记):把 35% 权重押在指引而不是 EPS —— EPS 在三条 bar 上 beat/beat/miss 却按设计不进 S 分,本次再次证明它不定价;以及股权浮盈与 SBC 的口径提醒真的渲染到了读者眼前(GAAP 2.46 里 7,771 是股权浮盈)。完整推演见 §11。 反应函数要不要改:幅度不改,窗口口径要改。 单季尾部不改反应函数(§8.6 已说明);但 sc.*.move 与 §8.4 / §8.6 应同时给 T+1 与 T+2 两列 —— 本次两个窗口给出方向相反的结论(T+1 背离 +4.69pt 判「尾部事件」/ T+2 只差 0.29pt 判「基本命中」),只报一个窗口会把结论讲反。另建议建卡时对定性论点做一次「上季原文 vs 本季」逐字差分预演,零变更概率高的降权或改成单侧论点(变了才算数)。⚠️ n=1,以上是规则建议,不是对标定值的修改。 是否同步 thesis 卡:已同步,本轮无需再动。 ~/thesis/NVDA.md v7(2026-08-28)催化剂归档已有 2026-08-26 行(事前预期 / 实际 / T+0 +8.74%、T+1 -4.37%、两日累计 +3.98% / 我错在哪),pillar 5「增量买家的信用由 NVDA 承担」已按本季 OCF/净利 0.4034、DSO 45→60、担保 $1,085 亿记为证伪加深。本 skill 不改目标价。⚠️ 值得记一笔:本卡 §11③(b) 与 thesis v7 的 pillar 5 是同一组事实 —— 前瞻卡漏了、thesis 卡抓到了,说明缺口在建卡时的论点构造,不在信息获取。",
    "history": [
      {
        "when": "2026-05-20",
        "what": "EPS 意外 +5.5% · 实际 1.87 vs 预期 1.77",
        "outcome": "次日 -1.77%（大 beat 5–10%）"
      },
      {
        "when": "2026-02-25",
        "what": "EPS 意外 +5.3% · 实际 1.62 vs 预期 1.54",
        "outcome": "次日 -5.46%（大 beat 5–10%）"
      },
      {
        "when": "2025-11-19",
        "what": "EPS 意外 +3.5% · 实际 1.3 vs 预期 1.26",
        "outcome": "次日 -3.15%（中 beat 2–5%）"
      }
    ],
    "links": [],
    "consensus": {
      "eps": "$2.092",
      "rev": "",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $2.205"
    },
    "segments": [
      {
        "name": "FY27Q3 非GAAP 毛利率指引",
        "consensus": "75.0",
        "prior": "利好 75.5 / 利空 74.5",
        "note": "core · 权重 20%"
      },
      {
        "name": "本季收入 vs 公司自家指引上沿(「打满指引」检验)",
        "consensus": "92.82",
        "prior": "利好 95.0 / 利空 91.0",
        "note": "权重 15%"
      },
      {
        "name": "数据中心收入",
        "consensus": "84.0",
        "prior": "利好 87.0 / 利空 81.0",
        "note": "权重 15%"
      }
    ],
    "guidance": {
      "company": "EPS ⏳ 待法说会",
      "street": "下季 EPS 一致 $2.367",
      "note": "vs 卖方一致 2.37（—）"
    },
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$227.98"
      },
      {
        "name": "概率加权目标价",
        "value": "$277.12"
      },
      {
        "name": "压力调整底线",
        "value": "$221.54"
      },
      {
        "name": "安全边际",
        "value": "-2.82%"
      }
    ],
    "targets": {
      "low": "$159",
      "avg": "$277",
      "high": "$406",
      "n": "本站三情景加权 · 卖方一致 $305.79"
    },
    "afterHours": {
      "move": "+8.74%",
      "note": "- 实际次日反应 +8.74%(基准收盘 209.66 → 227.98) - 卡片内插预期 +4.05% vs 实际 +8.74%,误差 +4.69%(方向判对) - ⚠️ 实际反应落在同类历史 10–90 分位之外 —— 属尾部事件,不要用它去改反应函数(单次尾部 ≠ 制度变化)"
    }
  },
  {
    "id": "nfp-2026-08-rel2026-09-04",
    "kind": "macro",
    "title": "2026-08 非农就业报告",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-09-04T08:30:00-04:00",
    "dateNote": "08:30 ET · 回放卡(事后重建,非事前预测)",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "回放",
      "NFP"
    ],
    "thesis": "这是一张回放卡——2026-09-04 的非农事前没有建卡,现在按当时可得的信息补建。当时的信息集指向的是「下修链第三次出现」:连着两份报告净下修 -74k、-103k,7 月印出 -23k,而联储 7/29 刚以 9–3 压住三张加息票。在这个信息集上,利率端方向明确向下,股指端是对冲、事前本就不可判;更重要的是五个资产的事前期望值全部小于各自噪声带 —— 这场非农本来就不值得当事件交易,这一条在事前就成立,与事后确实没动是两件独立的事。",
    "expectations": [
      {
        "name": "当月非农新增(k)",
        "consensus": "20.0",
        "prior": "-23",
        "range": "100.0 ~ -50.0",
        "note": "core · 权重 35%"
      },
      {
        "name": "前两月净修正(k)",
        "consensus": "-60.0",
        "prior": "",
        "range": "0.0 ~ -120.0",
        "note": "core · 权重 25%"
      },
      {
        "name": "失业率(%)",
        "consensus": "4.1%",
        "prior": "",
        "range": "4.0% ~ 4.3%",
        "note": "权重 18%"
      },
      {
        "name": "时薪环比(%)",
        "consensus": "0.3%",
        "prior": "",
        "range": "0.2% ~ 0.4%",
        "note": "权重 17%"
      },
      {
        "name": "劳动参与率(%)",
        "consensus": "61.4%",
        "prior": "",
        "range": "61.7% ~ 61.1%",
        "note": "权重 5%"
      }
    ],
    "pricing": [
      {
        "name": "SPX 事前 21 日 run-up",
        "value": "+0.31%",
        "note": "噪声带 ±0.79"
      },
      {
        "name": "2Y 事前 21 日 run-up",
        "value": "+16bp",
        "note": "噪声带 ±3.0"
      }
    ],
    "scenarios": [
      {
        "tag": "偏热",
        "tone": "hawk",
        "prob": "25%",
        "trigger": "当月非农新增(k) ≥ 100 或 前两月净修正(k) ≥ 0",
        "reaction": "2Y +9bp · 10Y +6bp · DXY +0.35% · SPX -0.60% · NDX -0.90%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "当月非农新增(k) 落在 -50 ~ 100 之间 且 前两月净修正(k) < 0",
        "reaction": "2Y -4bp · 10Y -3bp · DXY -0.15% · SPX -0.25% · NDX -0.35%"
      },
      {
        "tag": "偏冷",
        "tone": "dove",
        "prob": "30%",
        "trigger": "当月非农新增(k) ≤ -50 且 前两月净修正(k) < 0",
        "reaction": "2Y -11bp · 10Y -7bp · DXY -0.40% · SPX -0.70% · NDX -0.90%"
      }
    ],
    "watch": [
      "当月新增(k) · 预期 +20(三月均值代理,非一致预期) · 利好 ≥ +100 · 利空 ≤ -50",
      "前两月净修正(k) · 预期 -60(近两次 -74 / -103 向 0 收缩) · 利好 ≥ 0 · 利空 ≤ -120",
      "失业率(%) · 预期 4.1 · 利好 ≤ 4.0 · 利空 ≥ 4.3",
      "AHE 环比(%) · 预期 0.3 · 利好 ≤ 0.2 · 利空 ≥ 0.4",
      "参与率(%) · 预期 61.4 · 利好 ≥ 61.7 · 利空 ≤ 61.1"
    ],
    "actual": [
      {
        "name": "当月非农新增(k)",
        "actual": "162.0",
        "consensus": "20.0",
        "prior": "",
        "surprise": "利好",
        "dir": "up"
      },
      {
        "name": "前两月净修正(k)",
        "actual": "55.0",
        "consensus": "-60.0",
        "prior": "",
        "surprise": "利好",
        "dir": "up"
      },
      {
        "name": "失业率(%)",
        "actual": "4.1",
        "consensus": "4.1",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "时薪环比(%)",
        "actual": "0.3",
        "consensus": "0.3",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "劳动参与率(%)",
        "actual": "61.6",
        "consensus": "61.4",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-0.38%",
        "d1": "-0.58%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+0.21%",
        "d1": "-0.12%"
      },
      {
        "asset": "US 2Y",
        "d0": "+3bp",
        "d1": "+2bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+1bp",
        "d1": "+2bp"
      },
      {
        "asset": "DXY",
        "d0": "+0.16%",
        "d1": "-0.32%"
      }
    ],
    "verdict": "判定:就业数据偏热,但市场几乎没反应 —— 因为该涨的在数据出来前已经涨完了。 ① 数据确实强。 8 月新增非农就业 +16.2 万(高于 10 万这条「算强」的线),更重要的是前两个月还被上修了 5.5 万 ——修正值常被只看头条数字的人漏掉,但它和当月新增一样重要。 ② 可是短端利率只动了 3 个基点。 2 年期美债当天 +3.0bp,而事前对「数据偏热」这个情景的预估是 +9bp —— 实际只有预估的三分之一。 ③ 差在哪:提前定价。 数据发布前的 21 个交易日,2 年期已经涨了 16bp、10 年期涨了 14bp。而且 7 月 29 日那次会议已经有 3 位委员公开投票要求立刻加息。对这样一个联储,一份偏热的就业数据只是确认已知,不是新消息 ——所以没有新的钱进来买。 ④ 其余四个资产当天全在噪声范围内(10 年期 +1.0bp、美元指数 +0.16%、标普 -0.38%、纳指 +0.21%),按纪律一律不做解读。这场非农在五个资产上只产生了一个勉强能读的观测。 对市场什么意思: 这次没给出方向性信息。真正值得记住的是那个不对称 —— 数据强度和价格反应严重不成比例时,说明市场早已站在这一边,后续推动力要来自别处。 ⚠️ 这份判断的可信度边界: 那 +3.0bp 恰好压在历史噪声带的边缘(同类日子的中位数正好也是 3.0bp)。一次贴着判定线的方向命中,不能当成这套框架有预测力的证据。",
    "history": [
      {
        "when": "2026-08-07",
        "what": "非农就业报告（2026-07）",
        "outcome": "SPX +0.62% · 2Y -6bp"
      },
      {
        "when": "2026-07-02",
        "what": "非农就业报告（2026-06）",
        "outcome": "SPX +0.00% · 2Y -3bp"
      },
      {
        "when": "2026-06-05",
        "what": "非农就业报告（2026-05）",
        "outcome": "SPX -2.64% · 2Y +12bp"
      }
    ],
    "links": [
      {
        "label": "BLS Employment Situation",
        "url": "https://www.bls.gov/ces/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/empsit.htm"
      }
    ]
  },
  {
    "id": "cpi-2026-08-rel2026-09-11",
    "kind": "macro",
    "title": "2026-08 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-09-11T08:30:00-04:00",
    "dateNote": "08:30 ET · 回放卡(事后重建,非事前预测)",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "回放",
      "CPI"
    ],
    "thesis": "期望值(程序算):2Y -0.5bp / 10Y -0.15bp / DXY 0.0 / SPX -0.01% / NDX -0.035%",
    "expectations": [
      {
        "name": "核心 CPI 环比(%)",
        "consensus": "0.2%",
        "prior": "0.2%",
        "range": "0.1% ~ 0.3%",
        "note": "core · 权重 45%"
      },
      {
        "name": "headline CPI 环比(%)",
        "consensus": "0.1%",
        "prior": "",
        "range": "0.0% ~ 0.3%",
        "note": "权重 25%"
      },
      {
        "name": "核心 CPI 同比(%)",
        "consensus": "2.5%",
        "prior": "",
        "range": "2.3% ~ 2.7%",
        "note": "权重 15%"
      },
      {
        "name": "headline 同比(%)",
        "consensus": "3.4%",
        "prior": "",
        "range": "3.2% ~ 3.6%",
        "note": "权重 15%"
      }
    ],
    "pricing": [
      {
        "name": "SPX 事前 21 日 run-up",
        "value": "-1.77%",
        "note": "噪声带 ±0.47"
      },
      {
        "name": "2Y 事前 21 日 run-up",
        "value": "+34bp",
        "note": "噪声带 ±4.0"
      }
    ],
    "scenarios": [
      {
        "tag": "偏热",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "核心 CPI 环比(%) ≥ 0.3",
        "reaction": "2Y +8bp · 10Y +6bp · DXY +0.40% · SPX -0.90% · NDX -1.30%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "0.1 < 核心 CPI 环比(%) < 0.3",
        "reaction": "2Y -2bp · 10Y -1bp · DXY -0.10% · SPX +0.30% · NDX +0.40%"
      },
      {
        "tag": "偏冷",
        "tone": "dove",
        "prob": "25%",
        "trigger": "核心 CPI 环比(%) ≤ 0.1",
        "reaction": "2Y -8bp · 10Y -6bp · DXY -0.30% · SPX +0.50% · NDX +0.70%"
      }
    ],
    "watch": [
      "核心 CPI 环比 · 预期 0.2 · 利好 ≤0.1 · 利空 ≥0.3",
      "headline 环比 · 预期 0.1 · 利好 ≤0.0 · 利空 ≥0.3",
      "核心同比 · 预期 2.5 · 利好 ≤2.3 · 利空 ≥2.7",
      "headline 同比 · 预期 3.4 · 利好 ≤3.2 · 利空 ≥3.6"
    ],
    "actual": [
      {
        "name": "核心 CPI 环比(%)",
        "actual": "0.3",
        "consensus": "0.2",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      },
      {
        "name": "headline CPI 环比(%)",
        "actual": "0.4",
        "consensus": "0.1",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      },
      {
        "name": "核心 CPI 同比(%)",
        "actual": "2.4",
        "consensus": "2.5",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "headline 同比(%)",
        "actual": "3.4",
        "consensus": "3.4",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "+0.86%",
        "d1": "-0.48%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+0.91%",
        "d1": "-0.82%"
      },
      {
        "asset": "US 2Y",
        "d0": "+7bp",
        "d1": "+2bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+1bp",
        "d1": "+1bp"
      },
      {
        "asset": "DXY",
        "d0": "+0.03%",
        "d1": "+0.34%"
      }
    ],
    "verdict": "判定:通胀确实偏热,利率端老实认了,但股票反而涨 —— 因为股市在数据出来前已经先跌过一轮。 ① 数据热,没有疑问。 核心 CPI 环比 0.3%、另一口径 0.4%,双双踩到或超过「偏热」的门槛,把政策路径实打实往鹰的方向推了一档。 ② 利率端兑现得很标准。 2 年期美债 +7.0bp(当天的正常波动范围是 4.0bp,属于超出),而事前对热情景的预估是 +8bp —— 方向和量级都几乎命中。前端是纯粹的政策路径资产,当天没有别的力量跟它抢。 ③ 但股票整个判反了。 标普 +0.86%、纳指 +0.91%,双双超出正常波动;而事前预估是标普 -0.9% —— 幅度几乎猜得一模一样,符号完全相反。 这不是没算准,是机制搞错了。 ④ 真正的原因是仓位,不是数据。 进这份 CPI 之前的 21 个交易日,标普已经先跌了 1.77%、纳指跌了 1.43%,同时 2 年期涨了 34bp。也就是说,市场早就按「通胀会热」交易过了;数据真的落地时,反而成了利空出尽、空头回补。 对市场什么意思(这条对下次最有用): 判断股票会怎么反应通胀数据,光看数据热不热不够,必须先看进数据前市场已经跌了多少。跌透了的市场遇到热数据会涨,没跌过的才会跌。同一个读数,两种相反的结果。 ⚠️ 这次暴露的框架缺陷: 卡里本来有一股专门管「仓位已经反映了」的力量,但它的触发条件写反了方向(要求 2 年期下跌 20bp 才激活,而实际是上涨 34bp),所以它结构上永远点不着火。方向写反的条件不会报错,只会安静地永不触发——这类错误只能靠事后对账发现。",
    "history": [
      {
        "when": "2026-08-12",
        "what": "CPI（2026-07）",
        "outcome": "SPX +0.26% · 2Y -2bp"
      },
      {
        "when": "2026-07-14",
        "what": "CPI（2026-06）",
        "outcome": "SPX +0.38% · 2Y -8bp"
      },
      {
        "when": "2026-06-10",
        "what": "CPI（2026-05）",
        "outcome": "SPX -1.62% · 2Y +0bp"
      }
    ],
    "links": [
      {
        "label": "BLS CPI",
        "url": "https://www.bls.gov/cpi/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
      }
    ]
  },
  {
    "id": "fomc-2026-09-16",
    "kind": "macro",
    "title": "FOMC 议息决议",
    "subtitle": "含 SEP 与点阵图",
    "org": "Federal Reserve",
    "ticker": "",
    "company": "",
    "date": "2026-09-16T14:00:00-04:00",
    "dateNote": "14:00 ET · 回放卡(事后重建,非事前预测)",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "回放",
      "FOMC",
      "点阵图"
    ],
    "thesis": "加息本身已被 92% 定价,真正决定行情的是点阵图(委员们对未来利率的预测)与发布会措辞,不是「加不加」这个决定本身",
    "expectations": [
      {
        "name": "决议(bp,相对上次区间)",
        "consensus": "25.0bp",
        "prior": "0bp",
        "range": "0.0bp ~ 50.0bp",
        "note": "core · 权重 35%"
      },
      {
        "name": "2026 末点阵中位(%)",
        "consensus": "4.1%",
        "prior": "",
        "range": "3.8% ~ 4.4%",
        "note": "core · 权重 25%"
      },
      {
        "name": "异议票数",
        "consensus": "1.0 票",
        "prior": "",
        "range": "0.0 票 ~ 3.0 票",
        "note": "权重 10%"
      }
    ],
    "pricing": [
      {
        "name": "期货已定价(bp)",
        "value": "23",
        "note": "2026-09-15"
      },
      {
        "name": "SPX 事前 21 日 run-up",
        "value": "-2.57%",
        "note": "噪声带 ±0.75"
      },
      {
        "name": "2Y 事前 21 日 run-up",
        "value": "+50bp",
        "note": "噪声带 ±5.0"
      }
    ],
    "scenarios": [
      {
        "tag": "行动+鹰",
        "tone": "hawk",
        "prob": "45%",
        "trigger": "决议(bp,相对上次区间) > 0 且 (2026 末点阵中位(%) ≥ 4.2 或 声明措辞 diff(vs 7/29) 判为利空 或 发布会基调(第二段) 判为利空)",
        "reaction": "2Y +8bp · 10Y +6bp · DXY +0.40% · SPX -0.80% · NDX -1.20%"
      },
      {
        "tag": "行动+鸽",
        "tone": "dove",
        "prob": "40%",
        "trigger": "决议(bp,相对上次区间) > 0 且 2026 末点阵中位(%) < 4.2 且 声明措辞 diff(vs 7/29) ≠ 'bear' 且 发布会基调(第二段) ≠ 'bear'",
        "reaction": "2Y -4bp · 10Y -3bp · DXY -0.20% · SPX +0.60% · NDX +0.90%"
      },
      {
        "tag": "按兵+鹰",
        "tone": "hawk",
        "prob": "5%",
        "trigger": "决议(bp,相对上次区间) ≤ 0 且 (声明措辞 diff(vs 7/29) 判为利空 或 发布会基调(第二段) 判为利空)",
        "reaction": "2Y -6bp · 10Y -4bp · DXY -0.20% · SPX -0.30% · NDX -0.50%"
      },
      {
        "tag": "按兵+鸽",
        "tone": "dove",
        "prob": "10%",
        "trigger": "决议(bp,相对上次区间) ≤ 0 且 声明措辞 diff(vs 7/29) ≠ 'bear' 且 发布会基调(第二段) ≠ 'bear'",
        "reaction": "2Y -12bp · 10Y -8bp · DXY -0.50% · SPX +1.00% · NDX +1.40%"
      }
    ],
    "watch": [
      "声明措辞 diff(vs 7/29) — 利好: 删去「通胀风险偏上行/供给冲击推高价格」类表述,或新增「本次行动足以」类 — 利空: 新增「进一步收紧可能是适当的」「通胀进展停滞」类表述",
      "发布会基调(第二段) — 利好: 主席称本次加息后政策「处于良好位置/可以观望」,不预设下一步 — 利空: 主席明示「后续会议仍可能加息」或上调 2026 通胀判断",
      "决议(bp) · 预期 +25 · 利好 0(维持) · 利空 +50",
      "2026 末点阵中位 · 预期 4.1 · 利好 ≤3.8 · 利空 ≥4.4",
      "异议票数 · 预期 1 · 利好 0 · 利空 ≥3",
      "声明措辞 diff · 预期 定性 · 利好 删「通胀风险上行」类 · 利空 增「进一步收紧」类",
      "[14:30] 发布会基调 · 预期 定性 · 利好 「本次加息足够/观望」 · 利空 「后续仍需加息」"
    ],
    "actual": [
      {
        "name": "决议(bp,相对上次区间)",
        "actual": "25.0",
        "consensus": "25.0",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "2026 末点阵中位(%)",
        "actual": "4.1",
        "consensus": "4.1",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "异议票数",
        "actual": "0.0",
        "consensus": "1.0",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-0.45%",
        "d1": ""
      },
      {
        "asset": "纳斯达克100",
        "d0": "+0.02%",
        "d1": ""
      },
      {
        "asset": "DXY",
        "d0": "+0.66%",
        "d1": ""
      }
    ],
    "verdict": "判定:鹰派 —— 但鹰在「终点更高」,不在「这一次加得更多」。以下三条都可以自己核对。 ① 点阵把未来两年的利率路径整体抬高了 50 个基点。 委员们对 2027 年底政策利率的中位预测从 3.6% 升到 4.1%,2028 年从 3.4% 升到 3.9%,长期中枢从 3.1% 微升到 3.2%。而 2026 年底那一格没动(4.1%,与会前预期一致)——意思是委员会没有加快眼前的节奏,而是认为这轮紧缩要走得更远、停得更高。(「点阵」= 每位委员匿名标出自己预计的未来利率,取中位数看全局倾向。) ② 主席亲口说「现在还不算限制性」。 原话:\"I would be hard-pressed to describe broad financial conditions as restrictive … So we removed a dose of accommodation\"(很难说当前整体金融条件是限制性的……我们只是拿掉了一剂宽松)。含义:今天这 25bp 只是把油门松了一点,离踩刹车还有距离——后面还有。 ③ 声明删掉了给通胀找的那个借口。 被删的原句是「部分反映了能源等特定行业的供给冲击推动的价格上涨」。供给冲击是不需要加息的理由(货币政策管不了油价);把这句话拿掉,等于货币政策认领了这轮通胀。这是最容易被忽略、但方向最明确的一条。 为什么「加息本身」不是重点: 这 25bp 会前已被市场定价 92%,2 年期美债收益率在会前 21 个交易日已经上行 50bp。按常理靴子落地后短端该回吐一部分;但点阵把终点抬高 50bp 之后,那 50bp 的含义从「提前定价了这一次」变成「对后面几次还定价不足」,回吐的理由就没了。 对市场什么意思: 短端(2 年期)利率的上行压力没有解除;贴现率抬升对长久期资产(高估值成长股)的伤害大于对盈利型价值股。 ⚠️ 两个口径问题(影响这份判断的可信度,不影响方向): 其一,点阵中位系统性低估了委员会的鹰派程度——SEP 脚注写明只有 18 位参与者提交预测,主席明确表示自己没交(\"as in June—I have not offered a projection of my own\"),全场最鹰的那一票不在分布里。其二,12–0 全票通过不等于转鸽:7 月 29 日那次的 3 张异议票全部是要求加息的,这次归零是因为中心向鹰派靠拢、异议方消失,而非委员会变温和;主席自己把全票定义为决心(\"The committee's unanimous vote shows our resolve\")。",
    "history": [
      {
        "when": "2026-07-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.52% · 2Y -4bp"
      },
      {
        "when": "2026-06-17",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.21% · 2Y +15bp"
      },
      {
        "when": "2026-04-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -0.04% · 2Y +8bp"
      }
    ],
    "links": [
      {
        "label": "FOMC 官方日历",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      },
      {
        "label": "官方日程",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      },
      {
        "label": "美联储 · fomc",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomc.htm"
      },
      {
        "label": "美联储 · FOMCpresconf20260916",
        "url": "https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260916.pdf"
      }
    ]
  },
  {
    "id": "rebal-index-effective-2026-09-21-spx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "标普季度调仓·生效",
    "subtitle": "生效(被动需求已消失)·2026Q3",
    "org": "SPX",
    "date": "2026-09-21T16:00:00-04:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 2,
    "tags": [
      "index",
      "index_effective",
      "SPX"
    ],
    "thesis": "开盘前生效,但被动买盘在**上一个收盘**就已完成。历史上这天之后常见反向 —— **不许把「被纳入」当成这天的买入理由**。",
    "watch": [
      "生效日超额:12 例中位 -0.44%,仅 42% 为正",
      "⚠️ **反向不在生效日当天,在其后那一周**:生效后 5 日中位 -0.67%、只有 33% 为正,尾部到 -13.9%"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "conf-meta-connect-2026-09-23",
    "kind": "event",
    "title": "Meta Connect",
    "subtitle": "可穿戴出货与资本开支叙事、Llama 开源节奏",
    "org": "META",
    "ticker": "META",
    "company": "",
    "date": "2026-09-23T09:00:00-04:00",
    "dateNote": "不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "product",
      "QCOM",
      "NVDA"
    ],
    "thesis": "这场会对我意味着什么:Connect 从来不是 META 的财务事件(近五届次日涨跌绝对值中位仅 0.81%),但今年它第一次踩在一个刚刚上线、已经有价格标签的 AI 产品(Muse,9/8 上线,$20/$100 月费)之上 —— 真正的问题不是眼镜发什么,而是管理层会不会第一次给 Muse 一个数字。 主办方(META):会前不加。三条独立理由同向:① 期权已按 约 2.1%–2.9% 的事件跳空定价(自算,见 §2),是历史实现中位 0.81% 的 2.6–3.6 倍,买事件已无赔率;② RSI14 84.1 极度超买、价在 SMA20 上方 +12.6%;③ 这波 +16%(8/28 $578.02 → 9/15 $670.24)是 Muse 上线驱动的,已经把\"AI 能变现\"这件事提前买了,会上重复一遍等于零信息量。",
    "expectations": [
      {
        "name": "Keynote 由 Zuckerberg 主讲,主题为 AI / AI 眼镜 / VR",
        "consensus": "官方原话:\"Join Founder and CEO Mark Zuckerberg as he shares how Meta is building a future for everyone\";官方描述 \"showcasing our latest breakthroughs in AI technologies, AI glasses and VR\"(https://www.meta.com/connect/)",
        "prior": "A-(官方页面)",
        "range": "",
        "note": "已知"
      },
      {
        "name": "Project Phoenix(轻量 MR 头显)做舞台预览",
        "consensus": "Horizon OS 处方镜片固件包里泄出图像(UploadVR 发现,Road to VR 2026 报道);曾用代号 Puffin / Loma / Stanley;头部单元 <110 克;商用时点\"2027 上半年\"出自 Business Insider 拿到的内部备忘录,\"<$1,000\"出自 WSJ 2025 报道",
        "prior": "C(泄露 + 具名媒体)",
        "range": "",
        "note": "部分已知(VR 垂直媒体已充分报道,但未进入主流卖方叙事)"
      },
      {
        "name": "Muse / Muse Spark 的开发者接口与生态",
        "consensus": "官方开发者议程列有 Muse Spark 相关场次(vr.org 2026 整理);Muse 本体已于 2026-09-08 上线,分免费 / Power $20 月 / Maximum $100 月三档(TechCrunch、Axios、CNBC 2026-09-08)",
        "prior": "B(产品已上线,官方口径)",
        "range": "",
        "note": "高度已知,且已被买过一轮(9/9 盘中一度 +7.2%)"
      },
      {
        "name": "Ray-Ban Display 的软件能力扩展(Web Apps / Wearables Device Access Toolkit)",
        "consensus": "官方开发者议程(vr.org 2026-09 整理);CES 2026 Meta 已发过 Display 的 teleprompter 与神经手写(Meta Quest 官方博客,2026-01)",
        "prior": "B",
        "range": "",
        "note": "部分已知"
      },
      {
        "name": "Ray-Ban Display 国际上市重启",
        "consensus": "上一代节奏外推 + 台账里那条 missed 的承诺;2026-01-06 暂停时公司称在\"重新评估\"",
        "prior": "C(无任何新指引)",
        "range": "",
        "note": "未知 —— 这是本场最干净的二元事件(见 §7.1 Project Phoenix(轻量 MR 头显)做舞台预览)"
      },
      {
        "name": "AI 眼镜品类销量/产能数字",
        "consensus": "EssilorLuxottica 称 2025 年卖出 700 万副以上(CNBC 2026-02-11);IDC 给 Meta 在智能眼镜市场 69.2% 份额(2026 Q1);Bloomberg 报道双方在讨论把产能提到 2000 万副/年 —— 后者是报道不是承诺",
        "prior": "C(具名媒体)",
        "range": "",
        "note": "行业内已知,未量化进 META 估值"
      },
      {
        "name": "平价眼镜线的新款",
        "consensus": "本项预期应当调低:$299 起的 \"Meta Glasses\"(Adventurer / Fury / by Kylie,26 种组合、17 国)已在 2026-06-23 单独发布(Meta 官方博客),不是留给 Connect 的牌",
        "prior": "A-(官方博客)",
        "range": "",
        "note": "已知,已消化"
      },
      {
        "name": "财务口径(营收 / capex / Muse 收入)",
        "consensus": "无法建立预期 —— Connect 不给财务指引,2027 capex 口径的公司自述裁决点是 10 月底 Q3 财报",
        "prior": "—",
        "range": "",
        "note": "—"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "20%",
        "trigger": "Muse 拿到具名的可量化口径,或国际上市重启带具体国家与日期",
        "reaction": "META 上行,量级参照历史上沿(次日 +2% 一档);QCOM 温和偏多但被同期 Snapdragon Summit 污染,不可直接归因"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "55%",
        "trigger": "按既定节奏迭代:Phoenix 只给 preview、Display 只给软件扩展、Muse 不给数字、国际上市不提",
        "reaction": "会前买会后卖的常规兑现,量级落在历史中位附近(次日 ±1% 内);传导标的中性"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "25%",
        "trigger": "国际上市被静默删除;或 Phoenix 口径退到未来数年;或 Muse 回避变现同时放宽免费额度;或新硬件出现非高通方案",
        "reaction": "META 下行,但主要风险是把 10 月底 Q3 财报的 Pillar 2 判定推向 capex 仍无对价;QCOM 在份额类信号出现时偏空"
      }
    ],
    "watch": [
      "Muse 有没有数字 · 预期 没有 · 利好 管理层具名给出任一可量化采用/付费口径 · 利空 只演 demo,且同时放宽免费额度",
      "Ray-Ban Display 国际上市 · 预期 不提 · 利好 给出国家 + 日期 · 利空 全程不提且不解释暂停",
      "Project Phoenix · 预期 给 preview,不给价与开卖日 · 利好 给 <$1,000 与 2027 上半年确切窗口 + 开发者套件 · 利空 口径退到\"未来数年\"或完全不提",
      "芯片归属 · 预期 不点名(Meta 从不在 keynote 提供应商) · 利好 新品 spec 页/规格表确认 Snapdragon · 利空 出现 Meta 自研 SoC 或非高通方案",
      "品类销量/产能 · 预期 只给形容词 · 利好 首次给出具体出货数或确认 2000 万产能 · 利空 明确承认供给受限延续到 2027",
      "谁说的 · 预期 —— · 利好 —— · 利空 ——"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "官方页面",
        "url": "https://www.meta.com/blog/connect-2026-save-the-date/"
      },
      {
        "label": "meta.com · connect",
        "url": "https://www.meta.com/connect/"
      },
      {
        "label": "meta.com · agenda",
        "url": "https://www.meta.com/connect/agenda/"
      },
      {
        "label": "meta.com",
        "url": "https://www.meta.com/blog/connect-2025-day-one-keynote-ai-glasses-ray-ban-display-neural-band-metaverse-news/"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2026/01/06/meta-pauses-international-expansion-of-its-ray-ban-display-glasses/"
      },
      {
        "label": "cnbc.com · meta-ray-ban-display-ai-glasses-pause",
        "url": "https://www.cnbc.com/2026/01/06/meta-ray-ban-display-ai-glasses-pause.html"
      }
    ],
    "agenda": [
      {
        "when": "9/23(三)16:00 PT",
        "what": "Meta Connect Keynote —— Mark Zuckerberg(创始人兼 CEO)主讲"
      },
      {
        "when": "9/24(四)10:00 PT",
        "what": "Developer State of the Union —— Meta 多位专家,面向开发者的技术方向"
      },
      {
        "when": "9/24 起(点播)",
        "what": "开发者分场:Meta VR 与 AI 眼镜选型、游戏引擎 SDK、VR 上的 Android 应用、Web/WebXR 沉浸式体验、无手柄交互实践"
      }
    ],
    "readThrough": [
      {
        "name": "QCOM",
        "value": "新(本台账内 QCOM 无论点卡;相关既有承诺为 QCOM-ID2026-pac6b-fy29 —— Personal AI 且 Compute 含 XR/可穿戴,FY2029 $60 亿目标) · 偏多,但量级小 · 新硬件继续采用 Snapdragon(AR1 家族 / QCC 系列)+ 品类销量口径上修。参照系:高通器件占 Ray-Ban Display + Neural Band 物料 15.7%(TechInsights 拆解),按 $799 零售价倒推的芯片价值占比是个位数美元级,所以这条传导在 QCOM 的 FY29 $60 亿目标里只是\"故事验证\",不是\"营收兑现\"。⚠️ 归因污染:QCOM 自家 Snapdragon Summit 同在 9/22–24,QCOM 当周的涨跌不可直接归因于 Connect ｜ 同上 · 偏空(唯一的真风险) · 新品出现 Meta 自研 SoC,或 Phoenix 的计算单元(泄露显示为独立 compute puck)采用非高通方案。这是\"份额被拿走\"的一类信号,比销量数字重要一个量级"
      },
      {
        "name": "NVDA",
        "value": "Keynote 由 Zuckerberg 主讲,主题为 AI / AI 眼镜 / VR(数据中心需求) · 中性 —— 这一行的正确答案是\"零\" · Connect 是消费端与开发者会议,不给 capex、不给训练集群口径、不点名芯片供应商;Meta 的算力叙事只在财报电话会与 SEC 件里出现,本场会最可能的结果是 NVDA 一个字都不被提到。只有一种例外算触发:管理层在台上把某个模型的训练规模/集群规模具名量化(历史上极罕见)。把 Connect 的眼镜发布读成 NVDA 的利好或利空,都是判反"
      },
      {
        "name": "META(主办方自己)",
        "value": "Project Phoenix(轻量 MR 头显)做舞台预览(capex 有没有对价)/ Ray-Ban Display 国际上市重启(倍数不会自行修复) · 双向,权重集中在 Muse 一条上 · 见 §7.1 Keynote 由 Zuckerberg 主讲,主题为 AI / AI 眼镜 / VR。主办方在这场会里受影响最小这条通则今年不成立 —— 因为 Muse 是 META 自己的变现叙事,而眼镜的经济含义大部分落在 EssilorLuxottica(未持仓)与 QCOM 身上"
      },
      {
        "name": "(表外)EssilorLuxottica",
        "value": "未持仓,不建卡 · 偏多 · 品类销量/产能数字若被量化,受益最直接的是它而不是 META。留一行备查,不进动作"
      }
    ]
  },
  {
    "id": "rebal-flow-window-2026-09-30-all",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "季末再平衡窗口",
    "subtitle": "资金流窗口·2026Q3",
    "org": "全市场",
    "date": "2026-09-30T16:00:00-04:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 1,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。**方向不固定** —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ **不许默认「季末=买盘」**,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,**写「未取到」,不许编**"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "mu-fy26q4",
    "kind": "earnings",
    "ticker": "MU",
    "company": "MU",
    "title": "MU FY26Q4 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-09-30T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q4"
    ],
    "thesis": "隐含波动:±9.27%(去时值口径)/ ±10.91%(raw),盈亏平衡 825.46 / 1,027.64;到期日 2026-10-02(16 DTE),ATM 925,跨式中价 101.12,put/call 中价比 0.929(下跌保护反而更便宜) 期权贵不贵:近 8 季实际波动中位 ±9.12% → 比值 1.02× = 定价大致公允,方向性下注优于波动性下注 反应函数一句:MU 的 beat 是入场费不是彩票 —— 近 20 季 beat 率 90%、其中 beat 却跌 11 次,surprise 与次日涨跌相关系数仅 0.277(几乎不解释)。定价权在指引与毛利率斜率,不在当季 EPS。 门槛配置(表 ⑦ 裁决):买方 bar 35.912 ≥ 指引上沿 32.000(+12.2%) → 市场已按指引打满定价。未打满即实质 miss,即使名义 beat。 🔴 本卡最重要的一个发现:卖方一致不是独立的 bar,它就是公司指引本身。 动作(四选一):财报前不动 期望值 = +1.76% vs 隐含 ±9.27% → 赔率微正但远小于波动:方向性赌注的回报不足以覆盖两侧尾部 持有者 vs 空仓者(不许合并):",
    "expectations": [
      {
        "name": "公司指引中值",
        "consensus": "31",
        "prior": "",
        "range": "vs 卖方一致 -1.1%",
        "note": ""
      },
      {
        "name": "公司指引上沿",
        "consensus": "32",
        "prior": "",
        "range": "vs 卖方一致 +2.1%",
        "note": ""
      },
      {
        "name": "卖方一致",
        "consensus": "31.331",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "35.912",
        "prior": "",
        "range": "vs 卖方一致 +14.6%",
        "note": "市场已按指引打满定价,未打满上沿即实质 miss"
      },
      {
        "name": "卖方最高值",
        "consensus": "37.44",
        "prior": "",
        "range": "vs 卖方一致 +19.5%",
        "note": ""
      },
      {
        "name": "FQ1-27 非GAAP EPS 指引中值",
        "consensus": "37.0",
        "prior": "",
        "range": "利好 40.7 / 利空 34.0",
        "note": "core · 权重 28%"
      },
      {
        "name": "FQ1-27 收入指引中值(十亿美元)",
        "consensus": "59.0",
        "prior": "",
        "range": "利好 64.0 / 利空 55.0",
        "note": "权重 17%"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "28%",
        "trigger": "FQ4 收入 ≥ 61.9B(历史超指引模式复刻)且 FQ1-27 EPS 指引 ≥ 40.70(= 下季一致 34.875 × 买方 bar 溢价 1.1462)且 FQ1-27 GM 指引 ≥ 89%",
        "reaction": "+15.25% · 1,069.06"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "30%",
        "trigger": "FQ4 收入 55.0–61.9B、EPS 打穿买方 bar 35.912,但 FQ1-27 EPS 指引落在 34–40.70、GM 指引 86–89%",
        "reaction": "+3.19% · 957.19"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "42%",
        "trigger": "⚠️ 允许 EPS 大幅 beat:即使 EPS 打到 40+,只要 FQ1-27 EPS 指引 < 34.00(低于卖方一致),或 GM 指引 ≤ 86%(与 FQ4 持平 = 涨价停),或 FQ4 收入 beat < 10%(< 55.0B,sandbag 机制失效第一证据)",
        "reaction": "-8.26% · 850.98"
      }
    ],
    "watch": [
      "FY2027 capex 与 SCA 价格天花板的指引措辞 — 利好: 量化说明 SCA 天花板仅适用 existing products、HBM4/HBM4E/新制程不受价格上限约束(或给出 SCA 覆盖比例 × 加权 ASP 的可验证拆分); 或 FY27 净 capex 指引明确配供给纪律措辞(位元供给增速 ≤ 行业需求增速 / 新增产能已被 SCA 锁定) — 利空: 首次用「价格涨幅放缓 / 正常化 / 客户库存回补接近尾声」类表述解释 FQ1-27 指引; 或重申天花板锁在 CY2026Q2 市价且覆盖面继续扩大; 或 FY27 净 capex 大幅上调而不配供给纪律措辞",
      "买方在问 — ① SCA 的价格天花板,什么时候开始咬住 ASP? · 市场现在假设: SCA(Strategic Customer Agreements)是纯利好 —— take-or-pay + 客户押金,把周期股变成合约股。 · 利好: 管理层量化说明天花板只适用 existing products、HBM4/HBM4E/新制程产品不受限,或给出「SCA 覆盖比例 × 加权 ASP」的可验证拆分。 · 利空: 重申天花板锁定且覆盖面继续扩大,或首次用「价格涨幅正常化」解释 FQ1-27 指引。",
      "买方在问 — ② FY2027 净 capex 给多少 —— 它同时是需求信号和供给威胁 · 利好: FY27 净 capex 明确配供给纪律措辞(位元供给增速 ≤ 行业需求增速 / 新增产能已被 SCA 锁定)。 · 利空: 大幅上调而不配纪律措辞 —— 那会被读成 2028 供给悬崖提前定价,直接命中 MU.md 的 pillar 2(倍数压制,已证伪状态)。",
      "买方在问 — ③ 毛利率的二阶导 —— 涨价到底停没停 · 市场现在假设: FQ4 GM 约 86%(指引),FQ1-27 继续抬。 · 利好: FQ1-27 GM 指引 ≥ 89%;什么算利空:≤ 86%(= 与 FQ4 指引持平,MU.md 预承诺的「走平」档)。 · 利空: ≤ 86%(= 与 FQ4 指引持平,MU.md 预承诺的「走平」档)。",
      "FQ1-27 非GAAP EPS 指引中值(第一定价变量) · 预期 37.00 · 利好 ≥ 40.70(= 下季一致 34.875 × 1.1462) · 利空 < 34.00(低于卖方一致 34.875)",
      "FQ1-27 收入指引中值 · 预期 59.0B · 利好 ≥ 64.0B · 利空 < 55.0B(低于下季一致 56.656B)",
      "FQ1-27 非GAAP 毛利率指引 · 预期 87.5% · 利好 ≥ 89.0% · 利空 ≤ 86.0%(= 与 FQ4 指引持平,涨价停)",
      "FQ4-26 实际收入 · 预期 57,500(百万美元) · 利好 ≥ 61,900(历史超指引中位 +23.7% 复刻) · 利空 < 55,000(beat < 10%,MU.md 预承诺的 sandbag 失效第一证据)",
      "FQ4-26 实际非GAAP 毛利率 · 预期 88.5% · 利好 ≥ 90.0% · 利空 ≤ 86.5%(仅打平指引,前三季均超 +3.9~6.9pt)",
      "Cloud Memory BU 收入(AI/HBM 直读) · 预期 19,500(百万美元) · 利好 ≥ 22,000 · 利空 < 17,000",
      "*(定性)* FY2027 capex 与 SCA 天花板措辞 · 预期 见 §3.2 ①② · 利好 见 FQ1-27 收入指引中值(十亿美元) · 利空 见 FQ1-27 收入指引中值(十亿美元)"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-06-24",
        "what": "EPS 意外 +21.4% · 实际 25.11 vs 预期 20.69",
        "outcome": "次日 +15.74%（巨 beat >10%）"
      },
      {
        "when": "2026-03-18",
        "what": "EPS 意外 +33.2% · 实际 12.2 vs 预期 9.16",
        "outcome": "次日 -3.78%（巨 beat >10%）"
      },
      {
        "when": "2025-12-17",
        "what": "EPS 意外 +20.6% · 实际 4.78 vs 预期 3.96",
        "outcome": "次日 +10.21%（巨 beat >10%）"
      }
    ],
    "links": [
      {
        "label": "MU IR",
        "url": "https://investors.micron.com/news-releases"
      }
    ],
    "consensus": {
      "eps": "$31.331",
      "rev": "$50.79B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $35.912"
    },
    "segments": [
      {
        "name": "FQ1-27 非GAAP 毛利率指引",
        "consensus": "87.5",
        "prior": "利好 89.5 / 利空 86.0",
        "note": "core · 权重 15%"
      },
      {
        "name": "FQ4-26 实际收入(百万美元)",
        "consensus": "57500.0",
        "prior": "利好 61900.0 / 利空 55000.0",
        "note": "权重 12%"
      },
      {
        "name": "FQ4-26 实际非GAAP 毛利率",
        "consensus": "88.5",
        "prior": "利好 90.0 / 利空 86.5",
        "note": "权重 10%"
      },
      {
        "name": "Cloud Memory BU 收入(百万美元)",
        "consensus": "19500.0",
        "prior": "利好 22000.0 / 利空 17000.0",
        "note": "权重 8%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "下季 EPS 一致 $34.875",
      "note": "比较期间 FY27Q1"
    },
    "options": {
      "iv": "",
      "impliedMove": "±9.27%",
      "note": "盈亏平衡 $825.46 / $1027.64"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$823.03"
      },
      {
        "name": "概率加权目标价",
        "value": "$815.85"
      },
      {
        "name": "压力调整底线",
        "value": "$581.55"
      },
      {
        "name": "安全边际",
        "value": "-29.34%"
      }
    ],
    "targets": {
      "low": "$500",
      "avg": "$816",
      "high": "$1,200",
      "n": "本站三情景加权 · 卖方一致 $1,507.38"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "nfp-2026-09-rel2026-10-02",
    "kind": "macro",
    "title": "2026-09 非农就业报告",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-10-02T08:30:00-04:00",
    "dateNote": "08:30 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "NFP"
    ],
    "thesis": "这次非农是 10 月 28 日联储会议之前最后一份就业报告,而那场加息市场只给了大约五成概率 ——",
    "expectations": [
      {
        "name": "当月非农新增(k)",
        "consensus": "70.0",
        "prior": "162",
        "range": "160.0 ~ 0.0",
        "note": "core · 权重 35%"
      },
      {
        "name": "前两月净修正(k)",
        "consensus": "0.0",
        "prior": "",
        "range": "50.0 ~ -50.0",
        "note": "core · 权重 25%"
      },
      {
        "name": "失业率(%)",
        "consensus": "4.1%",
        "prior": "",
        "range": "4.0% ~ 4.3%",
        "note": "权重 18%"
      },
      {
        "name": "时薪环比(%)",
        "consensus": "0.3%",
        "prior": "",
        "range": "0.2% ~ 0.4%",
        "note": "权重 17%"
      },
      {
        "name": "劳动参与率(%)",
        "consensus": "61.6%",
        "prior": "",
        "range": "61.9% ~ 61.3%",
        "note": "权重 5%"
      }
    ],
    "pricing": [
      {
        "name": "SPX 事前 21 日 run-up",
        "value": "-2.50%",
        "note": "噪声带 ±0.79"
      },
      {
        "name": "2Y 事前 21 日 run-up",
        "value": "+50bp",
        "note": "噪声带 ±3.0"
      }
    ],
    "scenarios": [
      {
        "tag": "偏热",
        "tone": "hawk",
        "prob": "25%",
        "trigger": "当月非农新增(k) ≥ 160 或 当月非农新增(k) > 0 且 前两月净修正(k) ≥ 50",
        "reaction": "2Y +11bp · 10Y +7bp · DXY +0.45% · SPX -1.00% · NDX -1.40%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "0 < 当月非农新增(k) < 160 且 前两月净修正(k) < 50",
        "reaction": "2Y -3bp · 10Y -2bp · DXY -0.10% · SPX +0.30% · NDX +0.40%"
      },
      {
        "tag": "偏冷",
        "tone": "dove",
        "prob": "30%",
        "trigger": "当月非农新增(k) ≤ 0",
        "reaction": "2Y -11bp · 10Y -7bp · DXY -0.45% · SPX +0.40% · NDX +0.60%"
      }
    ],
    "watch": [
      "当月新增(k) · 预期 +70(三月均值 71.3 代理,非一致预期) · 利好 ≥ +160 · 利空 ≤ 0",
      "前两月净修正(k) · 预期 0 · 利好 ≥ +50 · 利空 ≤ -50",
      "失业率(%) · 预期 4.1 · 利好 ≤ 4.0 · 利空 ≥ 4.3",
      "时薪环比(%) · 预期 0.3 · 利好 ≤ 0.2 · 利空 ≥ 0.4",
      "劳动参与率(%) · 预期 61.6 · 利好 ≥ 61.9 · 利空 ≤ 61.3",
      "一次性因素/回复率 · 预期 无 · 利好 — · 利空 正文点名罢工/天气 ⇒ 本次就业疲软属一次性因素,「新增不及预期」的利空含义要打折"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-09-04",
        "what": "非农就业报告（2026-08）",
        "outcome": "SPX -0.38% · 2Y +3bp"
      },
      {
        "when": "2026-08-07",
        "what": "非农就业报告（2026-07）",
        "outcome": "SPX +0.62% · 2Y -6bp"
      },
      {
        "when": "2026-07-02",
        "what": "非农就业报告（2026-06）",
        "outcome": "SPX +0.00% · 2Y -3bp"
      }
    ],
    "links": [
      {
        "label": "BLS Employment Situation",
        "url": "https://www.bls.gov/ces/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/empsit.htm"
      }
    ]
  },
  {
    "id": "tsm-fy26q3",
    "kind": "earnings",
    "ticker": "TSM",
    "company": "TSM",
    "title": "TSM FY26Q3 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2026-10-14T07:00:00-04:00",
    "dateNote": "盘前 07:00 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q3"
    ],
    "thesis": "隐含波动:事件跳空 ±3.03%(由期限结构反解,见 §4), 反应函数一句:近 20 季 beat 率 100%、surprise 与次日涨跌相关系数只有 -0.12 —— 门槛配置:买方 bar 4.736 ≥ 指引隐含上沿 4.361(高 8.6%) —— 市场已按「打满指引」定价, 本票独有的结构:营收在财报前就基本公开了。TSMC 每月发营收,7 月 / 8 月已公布, 动作(四选一):财报前不动 期望值 = Σ(概率 × 涨跌) = -0.62% vs 事件隐含 ±3.03% → 赔率略负,但幅度小到不值得为它做方向性交易 持有者 vs 空仓者(不许合并):",
    "expectations": [
      {
        "name": "公司指引中值",
        "consensus": "4.235",
        "prior": "",
        "range": "vs 卖方一致 -5.1%",
        "note": ""
      },
      {
        "name": "公司指引上沿",
        "consensus": "4.361",
        "prior": "",
        "range": "vs 卖方一致 -2.2%",
        "note": ""
      },
      {
        "name": "卖方一致",
        "consensus": "4.461",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "4.736",
        "prior": "",
        "range": "vs 卖方一致 +6.2%",
        "note": "市场已按指引打满定价,未打满上沿即实质 miss"
      },
      {
        "name": "卖方最高值",
        "consensus": "4.72",
        "prior": "",
        "range": "vs 卖方一致 +5.8%",
        "note": ""
      },
      {
        "name": "4Q26 收入指引中值(美元十亿)",
        "consensus": "50.0",
        "prior": "",
        "range": "利好 52.0 / 利空 48.0",
        "note": "core · 权重 22%"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "3Q 毛利率 ≥69%(再超上沿 2pt)且 4Q 营业利益率指引 ≥60%(= 追平卖方隐含)或 FY26 全年口径从「slightly above 40%」上修",
        "reaction": "+5.62% · $441.2"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "35%",
        "trigger": "EPS 落在卖方一致 4.461 与买方 bar 4.736 之间;营收如期超指引上沿(10-08 已知);4Q 指引 OPM 57.5–59.5%、毛利率 65–67%,FY26 口径不动",
        "reaction": "-1.05% · $413.3"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "35%",
        "trigger": "允许 EPS beat ——即使 EPS > 4.461,只要 ① 4Q 营业利益率指引 ≤56.5%,或 ② 3Q 毛利率 ≤66.5%(未超指引上沿,三季来首次),或 ③ 2nm/海外厂稀释口径被上调",
        "reaction": "-5.55% · $394.5"
      }
    ],
    "watch": [
      "FY2026 全年口径与 2027 capex/定价的措辞 — 利好: EX-99.2「Future Outlook」页把 FY2026 美元营收增速口径从「slightly above 40%」上修(给出更高措辞或数字); 或十月就给出 2027 capex 早期区间且 >US$64B; 或首次在公开场合确认 2027 涨价幅度(路透 2026-07-21 报「至多 10%」——二手转述, 公司迄今未在任何备案里确认) — 利空: FY2026 口径一字不改维持「slightly above 40%」而九月营收已使全年跑赢该口径(= 暗示 Q4 减速); 或 2nm/海外厂的毛利率稀释区间被上调(如 3-4pt -> 4-5pt、2-3pt -> 更高或更长); 或被问 2027 时回避、首次出现「digestion / 消化 / 客户库存调整」类措辞",
      "4Q26 收入指引中值(US$B) · 预期 50.0 · 利好 ≥52.0 · 利空 ≤48.0",
      "4Q26 营业利益率指引中值(%) · 预期 58.0 · 利好 ≥60.0 · 利空 ≤56.5",
      "4Q26 毛利率指引中值(%) · 预期 66.5 · 利好 ≥68.0 · 利空 ≤65.0",
      "3Q26 实际毛利率(%) · 预期 67.5 · 利好 ≥69.0 · 利空 ≤66.5(= 未超指引上沿 67%,三季来首次)",
      "2nm 占晶圆收入比(%) · 预期 8 · 利好 ≥12 · 利空 ≤5"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-16",
        "what": "EPS 意外 +10.9% · 实际 4.31 vs 预期 3.89",
        "outcome": "次日 -2.32%（巨 beat >10%）"
      },
      {
        "when": "2026-04-15",
        "what": "EPS 意外 +4.7% · 实际 3.49 vs 预期 3.33",
        "outcome": "次日 -3.13%（中 beat 2–5%）"
      },
      {
        "when": "2026-01-15",
        "what": "EPS 意外 +5.5% · 实际 3.14 vs 预期 2.98",
        "outcome": "次日 +4.44%（大 beat 5–10%）"
      }
    ],
    "links": [
      {
        "label": "TSM IR",
        "url": "https://investor.tsmc.com/english/quarterly-results/teleconference"
      },
      {
        "label": "investor.tsmc.com · financial-calendar",
        "url": "https://investor.tsmc.com/english/financial-calendar"
      }
    ],
    "consensus": {
      "eps": "$4.461",
      "rev": "$0.00B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $4.736"
    },
    "segments": [
      {
        "name": "4Q26 营业利益率指引中值(%)",
        "consensus": "58.0",
        "prior": "利好 60.0 / 利空 56.5",
        "note": "core · 权重 24%"
      },
      {
        "name": "4Q26 毛利率指引中值(%)",
        "consensus": "66.5",
        "prior": "利好 68.0 / 利空 65.0",
        "note": "权重 14%"
      },
      {
        "name": "3Q26 实际毛利率(%)",
        "consensus": "67.5",
        "prior": "利好 69.0 / 利空 66.5",
        "note": "权重 12%"
      },
      {
        "name": "3Q26 实际美元营收(美元十亿)",
        "consensus": "46.6",
        "prior": "利好 47.5 / 利空 45.8",
        "note": "权重 8%"
      },
      {
        "name": "2nm 占晶圆收入比(%)",
        "consensus": "8.0",
        "prior": "利好 12.0 / 利空 5.0",
        "note": "权重 8%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "下季 EPS 一致 $4.966",
      "note": "比较期间 FY26Q4"
    },
    "options": {
      "iv": "",
      "impliedMove": "±3.03%",
      "note": "盈亏平衡 $405.06 / $430.38"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$422.49"
      },
      {
        "name": "概率加权目标价",
        "value": "$487.10"
      },
      {
        "name": "压力调整底线",
        "value": "$443.20"
      },
      {
        "name": "安全边际",
        "value": "+4.90%"
      }
    ],
    "targets": {
      "low": "$332",
      "avg": "$487",
      "high": "$602",
      "n": "本站三情景加权 · 卖方一致 $527.00"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "cpi-2026-09-rel2026-10-14",
    "kind": "macro",
    "title": "2026-09 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-10-14T08:30:00-04:00",
    "dateNote": "08:30 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "CPI"
    ],
    "thesis": "这一次通胀数据的看点不是「涨没涨」,而是汽油把总指数推高的同时,剔除能源和食品的那部分到底有没有继续降温 —— 因为美联储九月刚加了一次息,并且亲口把「停手」的条件定成「底层通胀确实在朝目标走」;十月底那场会议目前是五五开,这份数据就是最后一块拼图。总指数大概率难看,真正定胜负的是里子。",
    "expectations": [
      {
        "name": "核心 CPI 环比(%)",
        "consensus": "0.2%",
        "prior": "0.3%",
        "range": "0.1% ~ 0.3%",
        "note": "core · 权重 45%"
      },
      {
        "name": "headline CPI 环比(%)",
        "consensus": "0.4%",
        "prior": "",
        "range": "0.2% ~ 0.6%",
        "note": "权重 15%"
      },
      {
        "name": "shelter 环比(%)",
        "consensus": "0.2%",
        "prior": "",
        "range": "0.1% ~ 0.4%",
        "note": "权重 15%"
      },
      {
        "name": "supercore 环比(核心服务 ex 住房,派生)(%)",
        "consensus": "0.2%",
        "prior": "",
        "range": "0.1% ~ 0.4%",
        "note": "权重 10%"
      },
      {
        "name": "核心 CPI 同比 NSA(%)",
        "consensus": "2.4%",
        "prior": "",
        "range": "2.2% ~ 2.6%",
        "note": "权重 15%"
      }
    ],
    "pricing": [
      {
        "name": "SPX 事前 21 日 run-up",
        "value": "-2.50%",
        "note": "噪声带 ±0.47"
      },
      {
        "name": "2Y 事前 21 日 run-up",
        "value": "+50bp",
        "note": "噪声带 ±4.0"
      }
    ],
    "scenarios": [
      {
        "tag": "偏热",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "核心 CPI 环比(%) ≥ 0.3 或 (核心 CPI 环比(%) > 0.1 且 supercore 环比(核心服务 ex 住房,派生)(%) ≥ 0.4)",
        "reaction": "2Y +10bp · 10Y +7bp · DXY +0.45% · SPX -1.20% · NDX -1.70%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "0.1 < 核心 CPI 环比(%) < 0.3 且 supercore 环比(核心服务 ex 住房,派生)(%) < 0.4",
        "reaction": "2Y -3bp · 10Y -2bp · DXY -0.10% · SPX +0.40% · NDX +0.60%"
      },
      {
        "tag": "偏冷",
        "tone": "dove",
        "prob": "25%",
        "trigger": "核心 CPI 环比(%) ≤ 0.1",
        "reaction": "2Y -11bp · 10Y -8bp · DXY -0.50% · SPX +1.10% · NDX +1.60%"
      }
    ],
    "watch": [
      "核心 CPI 环比(公布一位小数) · 预期 0.2 · 利好 ≤0.1 · 利空 ≥0.3",
      "headline 环比 · 预期 0.4 · 利好 ≤0.2 · 利空 ≥0.6",
      "shelter 环比 · 预期 0.2 · 利好 ≤0.2 · 利空 ≥0.4",
      "supercore(派生,§2.2 公式) · 预期 0.2 · 利好 ≤0.2 · 利空 ≥0.4",
      "核心同比(NSA) · 预期 2.4 · 利好 ≤2.2 · 利空 ≥2.6"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-09-11",
        "what": "CPI（2026-08）",
        "outcome": "SPX +0.86% · 2Y +7bp"
      },
      {
        "when": "2026-08-12",
        "what": "CPI（2026-07）",
        "outcome": "SPX +0.26% · 2Y -2bp"
      },
      {
        "when": "2026-07-14",
        "what": "CPI（2026-06）",
        "outcome": "SPX +0.38% · 2Y -8bp"
      }
    ],
    "links": [
      {
        "label": "BLS CPI",
        "url": "https://www.bls.gov/cpi/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
      }
    ]
  },
  {
    "id": "conf-gtc-berlin-2026-10-20",
    "kind": "event",
    "title": "NVIDIA GTC Berlin",
    "subtitle": "欧洲主权 AI 订单、本地数据中心合作",
    "org": "NVDA",
    "ticker": "NVDA",
    "company": "",
    "date": "2026-10-20T09:00:00-04:00",
    "dateNote": "不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "product",
      "ASML",
      "SIE.DE"
    ],
    "thesis": "这场会对我意味着什么:这是一场到期前的最后一次公开露面——台账里目前仅有的两条 NVDA 承诺——也恰好都带 2026 年底期限(Rubin「2026 下半年经合作伙伴上市」、Mistral「2026 年扩展到多站点」)都在 12/31 到期,而 GTC Berlin 是它们到期前 NVDA 最后一场大型公开场合(下一场 GTC D.C. 在 11-30,已在 FQ3 财报之后)。这场会的信息量不在「发布什么」,在「还提不提」。 主办方(NVDA):会前不动。现价 $213.90(2026-09-16 收盘)已落进本卡 v7 的入场区 $208.09–214.60 上沿,相对压力调整底线 $221.54 的安全边际 +3.57%(v7 建卡时为 -2.83%)——但这个改善是价格跌出来的,与 GTC Berlin 无关,不要把它算进这场会的账。期权把这场会定价成 ±2.01% 的单日跳动,而 NVDA 的 ATR% 是 3.52% —— 事件溢价小于日常波动,不值得为它择时。要买就按 v7 的入场区买,理由写「回到入场区」,不要写「GTC 前布局」。",
    "expectations": [
      {
        "name": "欧洲主权 AI 合作方名单再扩容(国家/电信/云)",
        "consensus": "① 上代节奏外推:GTC Paris 2025 与 ISC 2026 两次都是「国家 + 电信 + NCP」三件套",
        "prior": "B(官方稿模式)",
        "range": "",
        "note": "已知,属基本盘。只扩名单 = 零信息量"
      },
      {
        "name": "Rubin 在欧洲的首批上线读数",
        "consensus": "② 管理层别处预告:CES 2026 稿写死 \"available from partners the second half of 2026\",Berlin(10/20)正落在这个窗口内",
        "prior": "B(官方新闻稿)",
        "range": "",
        "note": "部分已知。市场知道 2H26 这个口径,不知道有没有欧洲客户真的跑起来"
      },
      {
        "name": "工业 AI / Omniverse 的德国落地案例",
        "consensus": "① 上代节奏:2025-06 德国工业 AI 云点名 Ansys / Cadence / Siemens / Rescale + BMW/奔驰/舍弗勒/沃尔沃",
        "prior": "B",
        "range": "",
        "note": "部分已知"
      },
      {
        "name": "Feynman 架构的时间表",
        "consensus": "② GTC San Jose 2026(3/16–19)已公布 Feynman 世代(Rosa CPU / LP40 LPU / BlueField-5 / CX10),未给出货时点",
        "prior": "B(官方 blog)",
        "range": "",
        "note": "已知有这个东西,不知道时点。区域场给时点的概率低"
      },
      {
        "name": "新硅片发布",
        "consensus": "——",
        "prior": "——",
        "range": "",
        "note": "⛔ 无法建立预期。区域性 GTC 历史上不首发架构,不许因为「这是 GTC」就假设有新芯片"
      },
      {
        "name": "欧洲订单的金额/GW 数字",
        "consensus": "——",
        "prior": "——",
        "range": "",
        "note": "⛔ 无法建立预期。③ 具名供应链报道:本轮一条都没找到。不编"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "20%",
        "trigger": "Rubin 给出已上线欧洲客户与算力读数,且欧洲主权口径回连 3000 exaflops 那把尺子",
        "reaction": "NVDA 盘前正向但量级受限于期权定价的 ±2%;SIE.DE 与 VRT 的订单含义大于 NVDA 的估值含义"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "55%",
        "trigger": "名单扩容 + 架构复述 + 工业 AI 案例,Rubin 仍只说 in full production",
        "reaction": "零信息量,会前买会后卖的常规兑现;全线不动"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "25%",
        "trigger": "欧洲口径换成第三把尺子且不回连,或 Rubin 交付措辞后退,或 Mistral 多站点静默删除",
        "reaction": "NVDA 盘前负向且幅度可超过期权定价的 ±2%(这一档没被定价);传导标的跟跌但基本面未变"
      }
    ],
    "watch": [
      "Rubin 的措辞 · 预期 重申 \"in full production\",不给部署读数 · 利好 给出具名欧洲客户 + 已上线算力 · 利空 措辞退成「早期访问」「2027 广泛可得」,或完全不提 Rubin 交付状态",
      "欧洲主权算力口径 · 预期 只给新增名单,不做口径对齐 · 利好 用 exaflops 且回连 3,000 那把尺子给进度 · 利空 换第三个口径(GW / factories 数)且不回连",
      "Mistral · 预期 顺带提及模型合作 · 利好 明确报多站点扩展的站点数或时点 · 利空 全场不提 Mistral 的算力站点(只提模型不算)",
      "西门子 / 工业 AI · 预期 出现在伙伴 logo 墙 · 利好 给出可验证的客户数/产线数 · 利空 德国工业 AI 云整体不提",
      "「谁说的」 · 预期 —— · 利好 —— · 利空 任何「官方口径」数字先答三问:谁说的(姓名职务)/ 原话是什么 / 新披露还是复述。主持人提问、分析师转述、媒体标题不是公司承诺",
      "单位与口径 · 预期 —— · 利好 —— · 利空 判上修/下修前先核单位(exaflops 训练还是推理?GW 是 IT 还是 gross?),换单位会伪装成指引变化"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "官方页面",
        "url": "https://www.nvidia.com/en-eu/gtc/"
      },
      {
        "label": "nvidia.com · conference-schedule",
        "url": "https://www.nvidia.com/en-eu/gtc/conference-schedule/"
      },
      {
        "label": "nvidianews.nvidia.com · europe-ai-infrastructure",
        "url": "https://nvidianews.nvidia.com/news/europe-ai-infrastructure"
      },
      {
        "label": "nvidianews.nvidia.com",
        "url": "https://nvidianews.nvidia.com/news/nvidia-builds-worlds-first-industrial-ai-cloud-to-advance-european-manufacturing"
      },
      {
        "label": "nvidianews.nvidia.com",
        "url": "https://nvidianews.nvidia.com/news/europe-unveils-a-record-35-new-nvidia-ai-supercomputers"
      },
      {
        "label": "blogs.nvidia.com · gtc-2026-news",
        "url": "https://blogs.nvidia.com/blog/gtc-2026-news/"
      }
    ],
    "agenda": [
      {
        "when": "10-20(二) 全天",
        "what": "Workshops(注册 / 全天动手培训 / Workshop Lunch)。无 keynote"
      },
      {
        "when": "10-21(三) 07:00 CEST 起",
        "what": "注册开放"
      },
      {
        "when": "10-21(三) keynote 前",
        "what": "\"GTC Live Keynote Pregame\"(嘉宾暖场)"
      },
      {
        "when": "10-21(三) 11:00–13:00 CEST",
        "what": "Keynote —— 黄仁勋(创始人兼 CEO),地点 Tempodrom。免费直播,无需注册"
      },
      {
        "when": "10-21(三) 下午",
        "what": "展区开放 · 分论坛 · 培训认证 · 展区酒会"
      },
      {
        "when": "10-22(四) 全天",
        "what": "展区 · 上下午分论坛 · 培训认证"
      }
    ],
    "readThrough": [
      {
        "name": "SIE.DE(西门子)",
        "value": "新(无本地卡) · 偏多,传导里最实的一条 · 台上点名西门子软件栈跑在 NVIDIA 工业 AI 云 / Omniverse 上,且给出可验证的客户或产线数量。只出现 logo = 零信息量。现价 €258.80(2026-09-15 收盘,见 §8 坏行说明),RSI 25.62,SMA200 253.22 —— 位置低,赔率不对称"
      },
      {
        "name": "ASML",
        "value": "新(无本地卡) · ≈ 无传导。这是我对主数据的异议 · 光刻订单由 TSMC/三星/英特尔的 capex 决定,不由一场区域性 GTC 决定;GTC Berlin 议程里没有任何一条涉及制程设备。除非台上出现「欧洲本地先进制程产能」这类新增内容(概率极低),否则本卡判定 ASML 传导为弱,不据此动 ASML。现价 $1,602.22,RSI 35.39,距 52 周高 -19.8% —— 便宜是别的原因造成的,不要把它记到这场会头上"
      },
      {
        "name": "TSM",
        "value": "欧洲主权 AI 合作方名单再扩容(国家/电信/云)(先进制程垄断)· Rubin 在欧洲的首批上线读数(AI 需求结构性放量) · 中性偏多 · 仅当 Rubin 上线读数把「2H26 量产」坐实,才是 欧洲主权 AI 合作方名单再扩容(国家/电信/云)/Rubin 在欧洲的首批上线读数 的旁证(不是新证据)。欧洲订单不改 TSM 产能分配"
      },
      {
        "name": "MU",
        "value": "工业 AI / Omniverse 的德国落地案例(HBM 份额/价格) · 中性 · Rubin = HBM4 世代。台上给 Rubin 已上线机柜数才有边际信息;只讲架构不讲部署 = 对 MU 零信息量"
      },
      {
        "name": "AVGO",
        "value": "欧洲主权 AI 合作方名单再扩容(国家/电信/云)(AI XPU 放量) · 反向 · 若欧洲主权项目里出现非 NVIDIA 方案(自研/ASIC/竞品)占位,是 AVGO 的正面、NVDA Rubin 在欧洲的首批上线读数 的负面。但欧洲主权项目至今 90% 是 NVIDIA(ISC 2026 官方口径),先验极低"
      },
      {
        "name": "VRT",
        "value": "欧洲主权 AI 合作方名单再扩容(国家/电信/云)(DCPI 结构性需求) · 偏多 · 欧洲新增 AI factory 的电与热是 Vertiv 的直接口径。台上给欧洲新增 GW/MW 数才算触发。现价 $239.41,距 52 周高 -37.0%,RSI 41.03"
      },
      {
        "name": "NVDA(主办方)",
        "value": "欧洲主权 AI 合作方名单再扩容(国家/电信/云)(需求/capex)· Rubin 在欧洲的首批上线读数(份额) · 受影响最小 · NVDA 的估值本来就已经计入「它会赢」;欧洲占其营收比重不足以移动 欧洲主权 AI 合作方名单再扩容(国家/电信/云)。主办方是这张表里最不该动的那个"
      }
    ]
  },
  {
    "id": "gev-earnings-2026-10-21",
    "kind": "earnings",
    "ticker": "GEV",
    "company": "GEV",
    "title": "GEV 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2026-10-21T07:00:00-04:00",
    "dateNote": "盘前 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "tsla-earnings-2026-10-21",
    "kind": "earnings",
    "ticker": "TSLA",
    "company": "TSLA",
    "title": "TSLA 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-21T16:05:00-04:00",
    "dateNote": "盘后 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-22",
        "what": "EPS 意外 -38.4% · 实际 0.33 vs 预期 0.54",
        "outcome": "次日 -14.52%（miss >2%）"
      },
      {
        "when": "2026-04-22",
        "what": "EPS 意外 +17.1% · 实际 0.41 vs 预期 0.35",
        "outcome": "次日 -3.56%（巨 beat >10%）"
      },
      {
        "when": "2026-01-28",
        "what": "EPS 意外 +11.0% · 实际 0.5 vs 预期 0.45",
        "outcome": "次日 -3.45%（巨 beat >10%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$309.22"
      },
      {
        "name": "概率加权目标价",
        "value": "$218.48"
      },
      {
        "name": "压力调整底线",
        "value": "$161.23"
      },
      {
        "name": "安全边际",
        "value": "-47.86%"
      }
    ],
    "targets": {
      "low": "$130",
      "avg": "$218",
      "high": "$392",
      "n": "本站三情景加权 · 卖方一致 $399.45"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "msft-catalyst-2026-10-27",
    "kind": "earnings",
    "ticker": "MSFT",
    "company": "MSFT",
    "title": "MSFT 财报",
    "subtitle": "FQ1'27 财报(新裁决日)",
    "org": "",
    "date": "2026-10-27T16:05:00-04:00",
    "dateNote": "日期取自论点卡催化剂,未经公司确认",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "催化剂"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-29",
        "what": "EPS 意外 +11.8% · 实际 4.74 vs 预期 4.24",
        "outcome": "次日 +15.51%（巨 beat >10%）"
      },
      {
        "when": "2026-04-29",
        "what": "EPS 意外 +4.9% · 实际 4.27 vs 预期 4.07",
        "outcome": "次日 -3.93%（中 beat 2–5%）"
      },
      {
        "when": "2026-01-28",
        "what": "EPS 意外 +5.7% · 实际 4.14 vs 预期 3.92",
        "outcome": "次日 -9.99%（大 beat 5–10%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$464.72"
      },
      {
        "name": "概率加权目标价",
        "value": "$499.00"
      },
      {
        "name": "压力调整底线",
        "value": "$440.07"
      },
      {
        "name": "安全边际",
        "value": "-5.30%"
      }
    ],
    "targets": {
      "low": "$342",
      "avg": "$499",
      "high": "$616",
      "n": "本站三情景加权 · 卖方一致 $558.64"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "fomc-2026-10-28",
    "kind": "macro",
    "title": "FOMC 议息决议",
    "subtitle": "",
    "org": "Federal Reserve",
    "ticker": "",
    "company": "",
    "date": "2026-10-28T14:00:00-04:00",
    "dateNote": "14:00 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FOMC"
    ],
    "thesis": "9 月的点阵已经把答案写完了一半:年内还剩恰好一次加息,10 月和 12 月只能有一次。所以这场会不是\"加不加\"的会,是\"现在加还是等 12 月加\"的会——真正的新信息不在利率,在发布会上主席会不会说\"一次还不够\"。",
    "expectations": [
      {
        "name": "决议(bp,相对 3.75-4.00 区间)",
        "consensus": "0.0bp",
        "prior": "25bp",
        "range": "-25.0bp ~ 25.0bp",
        "note": "core · 权重 40%"
      },
      {
        "name": "鹰派异议票数(要求更高区间者)",
        "consensus": "1.0 票",
        "prior": "",
        "range": "0.0 票 ~ 3.0 票",
        "note": "权重 15%"
      }
    ],
    "pricing": [
      {
        "name": "本次会议隐含变动",
        "value": "+14bp",
        "note": "ZQ 自算 · 2026-09-18"
      },
      {
        "name": "P(加息 25bp)",
        "value": "57%",
        "note": "月末会议 N-d=3<7,价格噪声放大 10×;改用次月 2026-11 合约当 r_post"
      },
      {
        "name": "期货已定价(bp)",
        "value": "11",
        "note": "2026-09-16"
      },
      {
        "name": "SPX 事前 21 日 run-up",
        "value": "-2.50%",
        "note": "噪声带 ±0.75"
      },
      {
        "name": "2Y 事前 21 日 run-up",
        "value": "+50bp",
        "note": "噪声带 ±5.0"
      }
    ],
    "scenarios": [
      {
        "tag": "按兵+鹰",
        "tone": "hawk",
        "prob": "40%",
        "trigger": "决议(bp,相对 3.75-4.00 区间) ≤ 0 且 (声明措辞 diff(vs 2026-09-16) 判为利空 或 发布会基调(第二段,14:30) 判为利空)",
        "reaction": "2Y -3bp · 10Y -2bp · DXY -0.10% · SPX +0.10% · NDX +0.20%"
      },
      {
        "tag": "行动+鹰",
        "tone": "hawk",
        "prob": "26%",
        "trigger": "决议(bp,相对 3.75-4.00 区间) ≥ 25 且 (声明措辞 diff(vs 2026-09-16) 判为利空 或 发布会基调(第二段,14:30) 判为利空)",
        "reaction": "2Y +12bp · 10Y +7bp · DXY +0.50% · SPX -1.00% · NDX -1.40%"
      },
      {
        "tag": "按兵+鸽",
        "tone": "dove",
        "prob": "20%",
        "trigger": "决议(bp,相对 3.75-4.00 区间) ≤ 0 且 声明措辞 diff(vs 2026-09-16) ≠ 'bear' 且 发布会基调(第二段,14:30) ≠ 'bear'",
        "reaction": "2Y -15bp · 10Y -10bp · DXY -0.60% · SPX +1.20% · NDX +1.70%"
      },
      {
        "tag": "行动+鸽",
        "tone": "dove",
        "prob": "14%",
        "trigger": "决议(bp,相对 3.75-4.00 区间) ≥ 25 且 声明措辞 diff(vs 2026-09-16) ≠ 'bear' 且 发布会基调(第二段,14:30) ≠ 'bear'",
        "reaction": "2Y -2bp · 10Y -3bp · DXY -0.20% · SPX +0.50% · NDX +0.70%"
      }
    ],
    "watch": [
      "声明措辞 diff(vs 2026-09-16) — 利好: 给通胀句加上改善类限定(如 has eased / has moved down),或删弱 Today's policy action will support a timelier return 这种主动认领语气,或把 This Committee will deliver price stability 降格 — 利空: 新增 further firming / additional increases may be appropriate 类前瞻指引;或把 Inflation remains elevated 升级为未改善;或删去把通胀归因于外生因素的措辞(供给冲击/地缘/关税)--在本加息周期里删掉外生归因等于货币政策认领通胀,判 bear,不许照上一轮降息周期模板判为利好(这个方向盲区已踩过一次)",
      "发布会基调(第二段,14:30) — 利好: 主席表示他自设标准(underlying inflation moving to our objective, clearly 且 at sufficient speed)已被满足或接近满足;或明说 2026 年内不会再加;或首次给出结束加息的条件 — 利空: 主席表示 9 月点阵 4.1% 的年末中位是下限不是上限;或重申标准未被满足并把 12/09 描述成 live;或把商品/能源价格上行列为新的加息理由;或强调金融条件仍不具限制性",
      "决议(bp) · 预期 0(维持 3.75–4.00) · 利好 -25 · 利空 +25",
      "鹰派异议票数 · 预期 1 · 利好 0 · 利空 3",
      "声明措辞 diff(vs 9/16) · 预期 定性 · 利好 见 给通胀句加上改善类限定(如 has eased / has moved down),或删弱 Today's policy action will support a timelier return 这种主动认领语气,或把 This Committee will deliver price stability 降格 · 利空 见 新增 further firming / additional increases may be appropriate 类前瞻指引;或把 Inflation remains elevated 升级为未改善;或**删去把通胀归因于外生因素的措辞(供给冲击/地缘/关税)--在本加息周期里删掉外生归因等于货币政策认领通胀,判 bear,不许照上一轮降息周期模板判为利好(这个方向盲区已踩过一次)**",
      "[14:30] 发布会基调 · 预期 定性 · 利好 见 主席表示他自设标准(underlying inflation moving to our objective, clearly 且 at sufficient speed)已被满足或接近满足;或明说 2026 年内不会再加;或首次给出结束加息的条件 · 利空 见 主席表示 9 月点阵 4.1% 的年末中位是下限不是上限;或重申标准未被满足并把 12/09 描述成 live;或把商品/能源价格上行列为新的加息理由;或强调金融条件仍不具限制性",
      "(无 SEP)点阵/实体经济栏 · 预期 本次不发 · 利好 — · 利空 —",
      "资产负债表措辞 · 预期 无变化 · 利好 放缓/停止缩表 · 利空 加速"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.52% · 2Y -4bp"
      },
      {
        "when": "2026-06-17",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.21% · 2Y +15bp"
      },
      {
        "when": "2026-04-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -0.04% · 2Y +8bp"
      }
    ],
    "links": [
      {
        "label": "FOMC 官方日历",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      },
      {
        "label": "官方日程",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      }
    ]
  },
  {
    "id": "googl-earnings-2026-10-28",
    "kind": "earnings",
    "ticker": "GOOGL",
    "company": "GOOGL",
    "title": "GOOGL 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-28T16:05:00-04:00",
    "dateNote": "盘后 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-22",
        "what": "EPS 意外 +214.2% · 实际 9.11 vs 预期 2.9",
        "outcome": "次日 -7.13%（巨 beat >10%）"
      },
      {
        "when": "2026-04-29",
        "what": "EPS 意外 +91.6% · 实际 5.11 vs 预期 2.67",
        "outcome": "次日 +9.96%（巨 beat >10%）"
      },
      {
        "when": "2026-02-04",
        "what": "EPS 意外 +7.0% · 实际 2.82 vs 预期 2.64",
        "outcome": "次日 -0.54%（大 beat 5–10%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$319.74"
      },
      {
        "name": "概率加权目标价",
        "value": "$298.45"
      },
      {
        "name": "压力调整底线",
        "value": "$257.79"
      },
      {
        "name": "安全边际",
        "value": "-19.38%"
      }
    ],
    "targets": {
      "low": "$201",
      "avg": "$298",
      "high": "$390",
      "n": "本站三情景加权 · 卖方一致 $430.00"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "meta-earnings-2026-10-28",
    "kind": "earnings",
    "ticker": "META",
    "company": "META",
    "title": "META 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-28T16:05:00-04:00",
    "dateNote": "盘后 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-29",
        "what": "EPS 意外 -14.4% · 实际 6.18 vs 预期 7.22",
        "outcome": "次日 -7.95%（miss >2%）"
      },
      {
        "when": "2026-04-29",
        "what": "EPS 意外 +56.8% · 实际 10.44 vs 预期 6.66",
        "outcome": "次日 -8.55%（巨 beat >10%）"
      },
      {
        "when": "2026-01-28",
        "what": "EPS 意外 +8.0% · 实际 8.88 vs 预期 8.22",
        "outcome": "次日 +10.40%（大 beat 5–10%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$578.02"
      },
      {
        "name": "概率加权目标价",
        "value": "$647.70"
      },
      {
        "name": "压力调整底线",
        "value": "$535.96"
      },
      {
        "name": "安全边际",
        "value": "-7.28%"
      }
    ],
    "targets": {
      "low": "$450",
      "avg": "$648",
      "high": "$888",
      "n": "本站三情景加权 · 卖方一致 $754.84"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "lly-earnings-2026-10-29",
    "kind": "earnings",
    "ticker": "LLY",
    "company": "LLY",
    "title": "LLY 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2026-10-29T07:00:00-04:00",
    "dateNote": "盘前 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "aapl-earnings-2026-10-29",
    "kind": "earnings",
    "ticker": "AAPL",
    "company": "AAPL",
    "title": "AAPL 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-29T16:05:00-04:00",
    "dateNote": "盘后 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-30",
        "what": "EPS 意外 +6.7% · 实际 2.02 vs 预期 1.89",
        "outcome": "次日 -7.35%（大 beat 5–10%）"
      },
      {
        "when": "2026-04-30",
        "what": "EPS 意外 +3.5% · 实际 2.01 vs 预期 1.94",
        "outcome": "次日 +3.24%（中 beat 2–5%）"
      },
      {
        "when": "2026-01-29",
        "what": "EPS 意外 +6.3% · 实际 2.84 vs 预期 2.67",
        "outcome": "次日 +0.46%（大 beat 5–10%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$307.12"
      },
      {
        "name": "概率加权目标价",
        "value": "$279.95"
      },
      {
        "name": "压力调整底线",
        "value": "$238.08"
      },
      {
        "name": "安全边际",
        "value": "-22.48%"
      }
    ],
    "targets": {
      "low": "$205",
      "avg": "$280",
      "high": "$345",
      "n": "本站三情景加权 · 卖方一致 $321.57"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "amzn-earnings-2026-10-29",
    "kind": "earnings",
    "ticker": "AMZN",
    "company": "AMZN",
    "title": "AMZN 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-29T16:05:00-04:00",
    "dateNote": "盘后 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-30",
        "what": "EPS 意外 +215.0% · 实际 5.75 vs 预期 1.83",
        "outcome": "次日 +15.32%（巨 beat >10%）"
      },
      {
        "when": "2026-04-29",
        "what": "EPS 意外 +68.2% · 实际 2.78 vs 预期 1.65",
        "outcome": "次日 +0.77%（巨 beat >10%）"
      },
      {
        "when": "2026-02-05",
        "what": "EPS 意外 +0.2% · 实际 1.95 vs 预期 1.95",
        "outcome": "次日 -5.55%（小 beat 0–2%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$271.58"
      },
      {
        "name": "概率加权目标价",
        "value": "$273.97"
      },
      {
        "name": "压力调整底线",
        "value": "$208.21"
      },
      {
        "name": "安全边际",
        "value": "-23.33%"
      }
    ],
    "targets": {
      "low": "$175",
      "avg": "$274",
      "high": "$353",
      "n": "本站三情景加权 · 卖方一致 $330.00"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-flow-window-2026-10-30-all",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "月末再平衡窗口",
    "subtitle": "资金流窗口·2026-10",
    "org": "全市场",
    "date": "2026-10-30T16:00:00-04:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 1,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。**方向不固定** —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ **不许默认「季末=买盘」**,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,**写「未取到」,不许编**"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "amd-catalyst-2026-11-03",
    "kind": "earnings",
    "ticker": "AMD",
    "company": "AMD",
    "title": "AMD 财报",
    "subtitle": "Q3'26 财报 —— 本轮裁决点",
    "org": "",
    "date": "2026-11-03T16:05:00-05:00",
    "dateNote": "日期取自论点卡催化剂,未经公司确认",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "催化剂"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-08-04",
        "what": "EPS 意外 +3.2% · 实际 1.66 vs 预期 1.61",
        "outcome": "次日 -7.04%（中 beat 2–5%）"
      },
      {
        "when": "2026-05-05",
        "what": "EPS 意外 +5.8% · 实际 1.37 vs 预期 1.29",
        "outcome": "次日 +18.61%（大 beat 5–10%）"
      },
      {
        "when": "2026-02-03",
        "what": "EPS 意外 +16.0% · 实际 1.53 vs 预期 1.32",
        "outcome": "次日 -17.31%（巨 beat >10%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$505.74"
      },
      {
        "name": "概率加权目标价",
        "value": "$461.01"
      },
      {
        "name": "压力调整底线",
        "value": "$326.36"
      },
      {
        "name": "安全边际",
        "value": "-35.47%"
      }
    ],
    "targets": {
      "low": "$235",
      "avg": "$461",
      "high": "$646",
      "n": "本站三情景加权 · 卖方一致 $613.84"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "nfp-2026-10-rel2026-11-06",
    "kind": "macro",
    "title": "2026-10 非农就业报告",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-11-06T08:30:00-05:00",
    "dateNote": "08:30 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "NFP"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-10-02",
        "what": "非农就业报告（2026-09）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-09-04",
        "what": "非农就业报告（2026-08）",
        "outcome": "SPX -0.38% · 2Y +3bp"
      },
      {
        "when": "2026-08-07",
        "what": "非农就业报告（2026-07）",
        "outcome": "SPX +0.62% · 2Y -6bp"
      }
    ],
    "links": [
      {
        "label": "BLS Employment Situation",
        "url": "https://www.bls.gov/ces/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/empsit.htm"
      }
    ]
  },
  {
    "id": "cpi-2026-10-rel2026-11-10",
    "kind": "macro",
    "title": "2026-10 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-11-10T08:30:00-05:00",
    "dateNote": "08:30 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "CPI"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-10-14",
        "what": "CPI（2026-09）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-09-11",
        "what": "CPI（2026-08）",
        "outcome": "SPX +0.86% · 2Y +7bp"
      },
      {
        "when": "2026-08-12",
        "what": "CPI（2026-07）",
        "outcome": "SPX +0.26% · 2Y -2bp"
      }
    ],
    "links": [
      {
        "label": "BLS CPI",
        "url": "https://www.bls.gov/cpi/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
      }
    ]
  },
  {
    "id": "conf-msft-ignite-2026-11-17",
    "kind": "event",
    "title": "Microsoft Ignite",
    "subtitle": "企业 AI 商业化口径、Maia 自研芯片进度、Copilot 席位与定价",
    "org": "MSFT",
    "ticker": "MSFT",
    "company": "",
    "date": "2026-11-17T09:00:00-05:00",
    "dateNote": "不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "product",
      "NVDA",
      "AVGO",
      "MRVL"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "官方页面",
        "url": "https://www.moscone.com/events/microsoft-ignite-2026"
      }
    ],
    "agenda": [],
    "readThrough": [
      {
        "name": "传导标的",
        "value": "NVDA、AVGO、MRVL"
      }
    ]
  },
  {
    "id": "nvda-catalyst-2026-11-17",
    "kind": "earnings",
    "ticker": "NVDA",
    "company": "NVDA",
    "title": "NVDA 财报",
    "subtitle": "NVDA FQ3 FY27 财报（本卡最硬裁决点）",
    "org": "",
    "date": "2026-11-17T16:05:00-05:00",
    "dateNote": "日期取自论点卡催化剂,未经公司确认",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "催化剂"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-05-20",
        "what": "EPS 意外 +5.5% · 实际 1.87 vs 预期 1.77",
        "outcome": "次日 -1.77%（大 beat 5–10%）"
      },
      {
        "when": "2026-02-25",
        "what": "EPS 意外 +5.3% · 实际 1.62 vs 预期 1.54",
        "outcome": "次日 -5.46%（大 beat 5–10%）"
      },
      {
        "when": "2025-11-19",
        "what": "EPS 意外 +3.5% · 实际 1.3 vs 预期 1.26",
        "outcome": "次日 -3.15%（中 beat 2–5%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$227.98"
      },
      {
        "name": "概率加权目标价",
        "value": "$277.12"
      },
      {
        "name": "压力调整底线",
        "value": "$221.54"
      },
      {
        "name": "安全边际",
        "value": "-2.82%"
      }
    ],
    "targets": {
      "low": "$159",
      "avg": "$277",
      "high": "$406",
      "n": "本站三情景加权 · 卖方一致 $305.79"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "conf-gtc-dc-2026-11-30",
    "kind": "event",
    "title": "NVIDIA GTC Washington D.C.",
    "subtitle": "主权 AI 与美国政策口径、出口管制相关表态",
    "org": "NVDA",
    "ticker": "NVDA",
    "company": "",
    "date": "2026-11-30T09:00:00-05:00",
    "dateNote": "不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "product",
      "AVGO",
      "TSM",
      "INTC"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "官方页面",
        "url": "https://www.nvidia.com/gtc/dc/"
      }
    ],
    "agenda": [],
    "readThrough": [
      {
        "name": "传导标的",
        "value": "AVGO、TSM、INTC"
      }
    ]
  },
  {
    "id": "conf-aws-reinvent-2026-11-30",
    "kind": "event",
    "title": "AWS re:Invent",
    "subtitle": "Trainium/Graviton 自研进度与客户、容量与区域扩张、自研 vs 外购口径",
    "org": "AMZN",
    "ticker": "AMZN",
    "company": "",
    "date": "2026-11-30T09:00:00-05:00",
    "dateNote": "不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "product",
      "NVDA",
      "AVGO",
      "MRVL"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "官方页面",
        "url": "https://registration.awsevents.com/flow/awsevents/reinvent2026/eventcatalog/page/eventcatalog"
      }
    ],
    "agenda": [],
    "readThrough": [
      {
        "name": "传导标的",
        "value": "NVDA、AVGO、MRVL、TSM"
      }
    ]
  },
  {
    "id": "rebal-flow-window-2026-11-30-all",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "月末再平衡窗口",
    "subtitle": "资金流窗口·2026-11",
    "org": "全市场",
    "date": "2026-11-30T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 1,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。**方向不固定** —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ **不许默认「季末=买盘」**,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,**写「未取到」,不许编**"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "nfp-2026-11-rel2026-12-04",
    "kind": "macro",
    "title": "2026-11 非农就业报告",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-12-04T08:30:00-05:00",
    "dateNote": "08:30 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "NFP"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-11-06",
        "what": "非农就业报告（2026-10）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-10-02",
        "what": "非农就业报告（2026-09）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-09-04",
        "what": "非农就业报告（2026-08）",
        "outcome": "SPX -0.38% · 2Y +3bp"
      }
    ],
    "links": [
      {
        "label": "BLS Employment Situation",
        "url": "https://www.bls.gov/ces/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/empsit.htm"
      }
    ]
  },
  {
    "id": "rebal-index-announce-2026-12-04-spx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "标普季度调仓·成分变更公告",
    "subtitle": "成分名单公布·2026Q4",
    "org": "SPX",
    "date": "2026-12-04T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "index",
      "index_announce",
      "SPX"
    ],
    "thesis": "名单在**盘后**公布,被纳入的票当晚就跳;但**被动基金还没进场**,这一跳是主动资金抢跑。",
    "watch": [
      "纳入/剔除名单(盘后,S&P DJI 官网)",
      "⚠️ 冲击发生在**公告当晚盘后**:12 例实测拉升中位 +8.21%,11/12 为正",
      "⚠️ **次日开盘几乎从不超过盘后最高**(10/12 低于) —— 以盘后最高为基准,一周收益中位仅 +0.01%、5/11 为负。**影响力 ≠ 可获取收益**",
      "⚠️ 成分变更**不止这一天**:并购/破产引发的增删是临时公告,约提前 5 个交易日"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "conf-gev-investor-update-2026-12-08",
    "kind": "event",
    "title": "GE Vernova Investor Update",
    "subtitle": "多年营收/EBITDA 指引、分红与回购授权、分部 backlog",
    "org": "GEV",
    "ticker": "GEV",
    "company": "",
    "date": "2026-12-08T09:00:00-05:00",
    "dateNote": "日期按历年惯例推算,公司未官宣 · 不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "investor_day",
      "VRT",
      "ETN",
      "PWR"
    ],
    "thesis": "这场会对我意味着什么:2025 年那套 2028 目标已经被自己的执行力追上了, GEV:等会后再定,但真正的决策点在 10/28 Q3 财报而不是 12 月这场会(理由见 §6)。 真正该盯的票:VRT / ETN —— 电气化 backlog 目标若上调,是数据中心电力需求的 最可能被 price 错的事:FCF 暴涨 153% 而营收只涨 11%。市场在按「盈利能力跃升」",
    "expectations": [
      {
        "name": "上调 2028 营收/EBITDA 目标,或直接换成 2030 目标",
        "consensus": "三个目标已被追上(§3)",
        "prior": "[推断]",
        "range": "",
        "note": "部分已知"
      },
      {
        "name": "提高分红 / 扩大回购授权",
        "consensus": "2025 那场做过同样动作;2026 FCF $12B",
        "prior": "[推断]",
        "range": "",
        "note": "部分"
      },
      {
        "name": "燃机产能路径细化(30GW in 2030 的资本开支)",
        "consensus": "Q2 已给 2030 30GW 目标",
        "prior": "[事实]已承诺",
        "range": "",
        "note": "已知"
      },
      {
        "name": "电气化 backlog 新目标($60B 之后)",
        "consensus": "2025 承诺 $30B→$60B",
        "prior": "[推断]",
        "range": "",
        "note": "否"
      },
      {
        "name": "多年目标更新被推迟到 2027",
        "consensus": "CFO 交接(见 §5)",
        "prior": "[推断]",
        "range": "",
        "note": "否 ← 非共识"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "25%",
        "trigger": "2028 营收目标 >$58B 且 EBITDA 利润率目标 >22%(或给出完整 2030 财务框架),并主动拆分预付款对 FCF 的贡献",
        "reaction": "目标被实质抬高且质量说清;VRT/ETN 同步走强。空仓者会后确认再建仓,不追高"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "目标温和上调至 2028 营收 $54-57B、EBITDA 利润率 20-21%,FCF 口径继续不拆分",
        "reaction": "已 price in 大半(卖方 FY2027 一致已 $52.74B);中性。不动,等 Q4 财报看预付款流向"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "目标原样重申;或以 CFO 交接为由把多年目标更新推迟到 2027;或 FCF 暴增被确认为纯预付款",
        "reaction": "杀估值;VRT/ETN 同步回落。观察 $859-898 区(SMA200 减 1ATR 到 SMA200)"
      }
    ],
    "watch": [
      "2028(或 2030)营收目标 · 预期 上调至 $54–57B · 利好 >$58B · 利空 原样重申或不给",
      "2028 EBITDA 利润率目标 · 预期 20–21% · 利好 >22% · 利空 ≤20%(即不动)",
      "累计 FCF 目标的起算年 · 预期 明确为 2026–2028 · 利好 明确口径并大幅上调 · 利空 继续含糊",
      "预付款/合同负债对 FCF 的贡献 · 预期 不会主动披露 · 利好 主动拆分 · 利空 完全不提",
      "分红/回购 · 预期 再次提高 · 利好 回购授权 >$15B · 利空 不动",
      "谁讲多年财务目标 · 预期 Parks · 利好 McDonough 同台背书 · 利空 只有 Parks 讲且不提交接"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-22",
        "what": "燃机年化产能:2026Q3 达 20GW、2028 达 24GW、2030 达 30GW",
        "outcome": "open · 到期 2026-10-28"
      },
      {
        "when": "2026-07-22",
        "what": "YE2026 燃机在手合同至少 125GW(Q2 末为 116GW)",
        "outcome": "open · 到期 2027-02-15"
      }
    ],
    "links": [
      {
        "label": "gevernova.com · events",
        "url": "https://www.gevernova.com/investor-relations/events"
      },
      {
        "label": "gevernova.com · press-releases",
        "url": "https://www.gevernova.com/news/press-releases"
      },
      {
        "label": "SEC 备案",
        "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001996810&type=8-K"
      },
      {
        "label": "SEC 备案 · gev-20260825",
        "url": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000153/gev-20260825.htm"
      },
      {
        "label": "SEC 备案 · gev-20260630",
        "url": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000148/gev-20260630.htm"
      }
    ],
    "agenda": [],
    "readThrough": [
      {
        "name": "VRT",
        "value": "数据中心电力需求(新,无卡) · 正相关,弹性 > GEV · 电气化 backlog 目标自 $60B 再上调 ⇒ 第三方确认数据中心电力需求;GEV 已有 $176B backlog 托底,弹性反而小"
      },
      {
        "name": "ETN",
        "value": "电气设备订单(新,无卡) · 正相关,弹性 > GEV · 同上;若电气化目标只重申不上调,ETN 的隐含需求曲线跟着走平"
      },
      {
        "name": "PWR",
        "value": "输配电施工 backlog(新,无卡) · 正相关,滞后 1–2 季 · 燃机 30GW in 2030 配套的并网与输电投资被量化 ⇒ 施工量可见度;只给发电侧不给并网侧 = 不触发"
      },
      {
        "name": "CEG",
        "value": "既有核电/电力售价(新,无卡) · 反向 · 燃机产能大幅上修 = 2029+ 边际电力供给增加 ⇒ 对 CEG 的长期 PPA 定价是利空;产能路径下修反而利好"
      },
      {
        "name": "NVDA",
        "value": "数据中心电力作为算力的上游约束 · 弱正相关,信号价值 > 定价价值 · GEV 的燃机在手合同(电气化 backlog 新目标($60B 之后),YE2026 ≥125GW)是「电力够不够」的实物侧读数。上修 ⇒ 电力不是 2027-28 的硬约束;下修或静默删除 ⇒ 电力约束比市场认为的更紧,这对 NVDA 是久期风险而非当季风险。⚠ 本卡不改 NVDA 任何 pillar,越界交棒 /thesis-tracker"
      }
    ]
  },
  {
    "id": "fomc-2026-12-09",
    "kind": "macro",
    "title": "FOMC 议息决议",
    "subtitle": "含 SEP 与点阵图",
    "org": "Federal Reserve",
    "ticker": "",
    "company": "",
    "date": "2026-12-09T14:00:00-05:00",
    "dateNote": "14:00 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FOMC",
      "点阵图"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.52% · 2Y -4bp"
      },
      {
        "when": "2026-06-17",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.21% · 2Y +15bp"
      },
      {
        "when": "2026-04-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -0.04% · 2Y +8bp"
      }
    ],
    "links": [
      {
        "label": "FOMC 官方日历",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      },
      {
        "label": "官方日程",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      }
    ]
  },
  {
    "id": "cpi-2026-11-rel2026-12-10",
    "kind": "macro",
    "title": "2026-11 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-12-10T08:30:00-05:00",
    "dateNote": "08:30 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "CPI"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-11-10",
        "what": "CPI（2026-10）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-10-14",
        "what": "CPI（2026-09）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-09-11",
        "what": "CPI（2026-08）",
        "outcome": "SPX +0.86% · 2Y +7bp"
      }
    ],
    "links": [
      {
        "label": "BLS CPI",
        "url": "https://www.bls.gov/cpi/"
      },
      {
        "label": "官方日程",
        "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
      }
    ]
  },
  {
    "id": "avgo-earnings-2026-12-10",
    "kind": "earnings",
    "ticker": "AVGO",
    "company": "AVGO",
    "title": "AVGO 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-12-10T16:05:00-05:00",
    "dateNote": "盘后 · 日期按历史排期推算,公司未官宣",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-06-03",
        "what": "EPS 意外 +1.7% · 实际 2.44 vs 预期 2.4",
        "outcome": "次日 -12.59%（小 beat 0–2%）"
      },
      {
        "when": "2026-03-04",
        "what": "EPS 意外 +1.3% · 实际 2.05 vs 预期 2.02",
        "outcome": "次日 +4.80%（小 beat 0–2%）"
      },
      {
        "when": "2025-12-11",
        "what": "EPS 意外 +4.4% · 实际 1.95 vs 预期 1.87",
        "outcome": "次日 -11.43%（中 beat 2–5%）"
      }
    ],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$344.72"
      },
      {
        "name": "概率加权目标价",
        "value": "$367.89"
      },
      {
        "name": "压力调整底线",
        "value": "$282.89"
      },
      {
        "name": "安全边际",
        "value": "-17.94%"
      }
    ],
    "targets": {
      "low": "$240",
      "avg": "$368",
      "high": "$471",
      "n": "本站三情景加权 · 卖方一致 $521.41"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-index-announce-2026-12-11-ndx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "纳指100·年度重构公告",
    "subtitle": "成分名单公布·2026 年度",
    "org": "NDX",
    "date": "2026-12-11T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "index",
      "index_announce",
      "NDX"
    ],
    "thesis": "名单在**盘后**公布,被纳入的票当晚就跳;但**被动基金还没进场**,这一跳是主动资金抢跑。",
    "watch": [
      "纳入/剔除名单(盘后,S&P DJI 官网)",
      "⚠️ 冲击发生在**公告当晚盘后**:12 例实测拉升中位 +8.21%,11/12 为正",
      "⚠️ **次日开盘几乎从不超过盘后最高**(10/12 低于) —— 以盘后最高为基准,一周收益中位仅 +0.01%、5/11 为负。**影响力 ≠ 可获取收益**",
      "⚠️ 成分变更**不止这一天**:并购/破产引发的增删是临时公告,约提前 5 个交易日"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-index-trade-2026-12-18-spx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "标普季度调仓·再平衡交易日(三巫日)",
    "subtitle": "被动盘落地·2026Q4",
    "org": "SPX",
    "date": "2026-12-18T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "index",
      "index_trade",
      "SPX"
    ],
    "thesis": "指数基金在**收盘集合竞价**一次性成交 —— 这才是被动买盘真正落地的那一刻,全年成交量最大的几个收盘之一。",
    "watch": [
      "收盘集合竞价成交量(量比中位 7.14x)",
      "⚠️ 纳指100 这天做的是**权重再平衡**,不是成分大换血;集中度封顶写在**年度重构**那一轮",
      "⚠️ 标普与纳指100 是两套规则,不许混着说"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-index-trade-2026-12-18-ndx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "纳指100·季度再平衡",
    "subtitle": "被动盘落地·2026Q4",
    "org": "NDX",
    "date": "2026-12-18T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "index",
      "index_trade",
      "NDX"
    ],
    "thesis": "指数基金在**收盘集合竞价**一次性成交 —— 这才是被动买盘真正落地的那一刻,全年成交量最大的几个收盘之一。",
    "watch": [
      "收盘集合竞价成交量(量比中位 7.14x)",
      "⚠️ 纳指100 这天做的是**权重再平衡**,不是成分大换血;集中度封顶写在**年度重构**那一轮",
      "⚠️ 标普与纳指100 是两套规则,不许混着说"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-index-effective-2026-12-21-spx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "标普季度调仓·生效",
    "subtitle": "生效(被动需求已消失)·2026Q4",
    "org": "SPX",
    "date": "2026-12-21T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 2,
    "tags": [
      "index",
      "index_effective",
      "SPX"
    ],
    "thesis": "开盘前生效,但被动买盘在**上一个收盘**就已完成。历史上这天之后常见反向 —— **不许把「被纳入」当成这天的买入理由**。",
    "watch": [
      "生效日超额:12 例中位 -0.44%,仅 42% 为正",
      "⚠️ **反向不在生效日当天,在其后那一周**:生效后 5 日中位 -0.67%、只有 33% 为正,尾部到 -13.9%"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-index-effective-2026-12-21-ndx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "纳指100·年度重构生效",
    "subtitle": "生效(被动需求已消失)·2026 年度",
    "org": "NDX",
    "date": "2026-12-21T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 2,
    "tags": [
      "index",
      "index_effective",
      "NDX"
    ],
    "thesis": "开盘前生效,但被动买盘在**上一个收盘**就已完成。历史上这天之后常见反向 —— **不许把「被纳入」当成这天的买入理由**。",
    "watch": [
      "生效日超额:12 例中位 -0.44%,仅 42% 为正",
      "⚠️ **反向不在生效日当天,在其后那一周**:生效后 5 日中位 -0.67%、只有 33% 为正,尾部到 -13.9%"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-flow-window-2026-12-31-all",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "季末再平衡窗口",
    "subtitle": "资金流窗口·2026Q4",
    "org": "全市场",
    "date": "2026-12-31T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 1,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。**方向不固定** —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ **不许默认「季末=买盘」**,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,**写「未取到」,不许编**"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "标普指数方法论",
        "url": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      {
        "label": "纳斯达克100 方法论",
        "url": "https://indexes.nasdaqomx.com/docs/methodology_NDX.pdf"
      }
    ],
    "consensus": {},
    "segments": {},
    "guidance": {},
    "options": {},
    "valuation": [],
    "targets": {},
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "fomc-2027-01-27",
    "kind": "macro",
    "title": "FOMC 议息决议",
    "subtitle": "",
    "org": "Federal Reserve",
    "ticker": "",
    "company": "",
    "date": "2027-01-27T14:00:00-05:00",
    "dateNote": "14:00 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FOMC"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "2026-07-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.52% · 2Y -4bp"
      },
      {
        "when": "2026-06-17",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.21% · 2Y +15bp"
      },
      {
        "when": "2026-04-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -0.04% · 2Y +8bp"
      }
    ],
    "links": [
      {
        "label": "FOMC 官方日历",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      },
      {
        "label": "官方日程",
        "url": "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
      }
    ]
  },
  {
    "id": "conf-gtc-sj-2027-03-15",
    "kind": "event",
    "title": "NVIDIA GTC (San Jose 主场)",
    "subtitle": "下一代架构与量产时间、NVLink/机架形态、CoWoS 与 HBM 用量、客户站台名单",
    "org": "NVDA",
    "ticker": "NVDA",
    "company": "",
    "date": "2027-03-15T09:00:00-04:00",
    "dateNote": "不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "product",
      "AVGO",
      "TSM",
      "MRVL"
    ],
    "thesis": "",
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "watch": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "官方页面",
        "url": "https://www.nvidia.com/gtc/"
      }
    ],
    "agenda": [],
    "readThrough": [
      {
        "name": "传导标的",
        "value": "AVGO、TSM、MRVL、AMKR、ASX、MU、VRT、GEV、光模块"
      }
    ]
  }
];
