/* 本文件由 ~/macro_desk_build.py 自动生成 —— 不要手改。
   内容来自 ~/thesis/{macro,earnings,conferences}/ 的机器可读块,
   改内容请改卡片,然后重跑生成器。 */

export const meta = {
  "title": "宏观 & 财报事件台",
  "subtitle": "前瞻 · 靴子落地 · 倒计时",
  "updated": "2026-09-16 21:22 ET · ⚠️ 2 条告警: 会议日历 [ALERT] ocp-summit: 按 cadence 推算下一场…",
  "owner": "内部社群版",
  "disclaimer": "本站内容为个人研究记录，不构成投资建议。数据由 skill 卡片的机器可读块自动生成。"
};

export const markets = [
  {
    "label": "S&P 500",
    "value": "7,551.81",
    "chg": "-0.45%",
    "dir": "down",
    "note": "2026-09-16"
  },
  {
    "label": "纳斯达克100",
    "value": "28,945.1",
    "chg": "+0.02%",
    "dir": "up",
    "note": "2026-09-16"
  },
  {
    "label": "DXY",
    "value": "99.65",
    "chg": "+0.19%",
    "dir": "up",
    "note": "2026-09-15"
  },
  {
    "label": "黄金",
    "value": "4,332.80",
    "chg": "-0.44%",
    "dir": "down",
    "note": "2026-09-15"
  },
  {
    "label": "WTI 原油",
    "value": "105.83",
    "chg": "+4.38%",
    "dir": "up",
    "note": "2026-09-15"
  },
  {
    "label": "BTC",
    "value": "75,613",
    "chg": "-3.26%",
    "dir": "down",
    "note": "2026-09-15"
  },
  {
    "label": "VIX",
    "value": "17.71",
    "chg": "+0.51",
    "dir": "up",
    "note": "2026-09-16"
  },
  {
    "label": "US 10Y",
    "value": "5.00%",
    "chg": "+3.0bp",
    "dir": "up",
    "note": "as-of 2026-09-15"
  },
  {
    "label": "US 2Y",
    "value": "4.67%",
    "chg": "+2.0bp",
    "dir": "up",
    "note": "as-of 2026-09-15 · 2s10s +33bp"
  },
  {
    "label": "10月加息概率",
    "value": "48%",
    "chg": "",
    "dir": "flat",
    "note": "ZQ 期货自算 · 2026-09-15 ⚠️"
  }
];

export const events = [
  {
    "id": "cpi-2026-06-rel2026-07-14",
    "kind": "macro",
    "title": "2026-06 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-07-14T08:30:00-04:00",
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /cpi-event",
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
        "when": "2026-06-10",
        "what": "CPI（2026-05）",
        "outcome": "SPX -1.62% · 2Y +0bp"
      },
      {
        "when": "2026-05-12",
        "what": "CPI（2026-04）",
        "outcome": "SPX -0.16% · 2Y +5bp"
      },
      {
        "when": "2026-04-10",
        "what": "CPI（2026-03）",
        "outcome": "SPX -0.11% · 2Y +3bp"
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
    "id": "fomc-2026-07-29",
    "kind": "macro",
    "title": "FOMC 议息决议",
    "subtitle": "",
    "org": "Federal Reserve",
    "ticker": "",
    "company": "",
    "date": "2026-07-29T14:00:00-04:00",
    "dateNote": "14:00 ET · 无前瞻卡 → 跑 /fomc-event",
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
        "when": "2026-06-17",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.21% · 2Y +15bp"
      },
      {
        "when": "2026-04-29",
        "what": "FOMC 议息决议",
        "outcome": "SPX -0.04% · 2Y +8bp"
      },
      {
        "when": "2026-03-18",
        "what": "FOMC 议息决议",
        "outcome": "SPX -1.36% · 2Y +8bp"
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
      "FY26Q4",
      "核心"
    ],
    "thesis": "隐含波动:数据缺口 —— 回放卡无法回溯取得财报前的期权链,§8.5 的「是否落在隐含区间内」这一项本卡不可判。 反应函数一句:MSFT 近 24 季 beat 率 96%、但 beat 却跌 13/23 次、只看 beat 的季度上涨率仅 43%、次日中位 -0.59% —— beat 是入场费不是彩票,定价权在 Azure 增速与 RPO 口径。 门槛配置:公司不给数字化 EPS 指引(MSFT 的指引在法说会 CFO Outlook 口述),故四条 bar 只有三条;买方 bar 按全样本 surprise 中位校准。 动作(四选一):回放卡不产生动作。 bear 允许 EPS beat:是 —— 上面 13/23 次「beat 却跌」就是依据。",
    "expectations": [],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 +5.50%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 +0.00%"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "25%",
        "trigger": "见卡片三情景表",
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
    "verdict": "名义 beat 但实质 miss? 否 ——(程序判定,依据见 §8.1) 事件定价失败? 不可判 —— 卡片无 implied_move(隐含区间数据缺口),不得渲染成「否」",
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
        "prior": "",
        "note": "法说会讲稿 TranscriptFY26Q4.docx(IR 资产包, CDN 直链可下)。原文:「In Azure, we expect revenue growth of approximately 45% in constant currency」。⚠️ 2026-08-13 更正:此前两次误判为「书面件拿不到、只能人工」并标了 probe_na —— 错的。指引在讲稿里逐项念出、完整可解析"
      },
      {
        "name": "本季 Azure 增速",
        "consensus": "40.0",
        "prior": "",
        "note": "EX-99.1「Revenue in Intelligent Cloud」段的 bullet"
      },
      {
        "name": "Microsoft Cloud 收入",
        "consensus": "57.5",
        "prior": "",
        "note": "EX-99.1 分部段首句"
      },
      {
        "name": "商业 RPO 同比",
        "consensus": "60.0",
        "prior": "",
        "note": "EX-99.1 同上句后半段"
      },
      {
        "name": "Intelligent Cloud 收入",
        "consensus": "37.5",
        "prior": "",
        "note": "EX-99.1「Revenue in Intelligent Cloud was」"
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
      },
      {
        "name": "综合分",
        "value": "72.8"
      },
      {
        "name": "象限动作",
        "value": "买入/持有"
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
    "id": "nfp-2026-07-rel2026-08-07",
    "kind": "macro",
    "title": "2026-07 非农就业报告",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-08-07T08:30:00-04:00",
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /nfp-event",
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
        "when": "2026-07-02",
        "what": "非农就业报告（2026-06）",
        "outcome": "SPX +0.00% · 2Y -3bp"
      },
      {
        "when": "2026-06-05",
        "what": "非农就业报告（2026-05）",
        "outcome": "SPX -2.64% · 2Y +12bp"
      },
      {
        "when": "2026-05-08",
        "what": "非农就业报告（2026-04）",
        "outcome": "SPX +0.84% · 2Y -2bp"
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
    "id": "cpi-2026-07-rel2026-08-12",
    "kind": "macro",
    "title": "2026-07 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-08-12T08:30:00-04:00",
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /cpi-event",
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
    "id": "amat-fy26q3",
    "kind": "earnings",
    "ticker": "AMAT",
    "company": "AMAT",
    "title": "AMAT FY26Q3 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-08-13T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET",
    "dateConfirmed": true,
    "importance": 2,
    "tags": [
      "FY26Q3"
    ],
    "thesis": "隐含波动:±6.92%(去时值口径)/ ±8.14%(raw)。盈亏平衡 $482.83 / $568.39 反应函数:近 8 季 beat 率 100%,却平均下跌 3.77%、只涨 2/8 次 —— beat 是入场费不是彩票 门槛配置:买方 bar ≥ 指引上沿(三口径重合于 $3.56)—— 市场已按「指引打满」定价 动作(四选一):等财报后再定 持有者(若有仓位):对冲成本处于公允区(隐含/实际 1.04×),",
    "expectations": [
      {
        "name": "FQ4 non-GAAP EPS 指引中值",
        "consensus": "3.68",
        "prior": "",
        "range": "3.75 / 3.55",
        "note": "EX-99.1「Business Outlook」表(上季原文: Non-GAAP diluted EPS $ 3.36 +/- $ 0.20)"
      },
      {
        "name": "FQ4 收入指引中值(百万美元)",
        "consensus": "9500.0",
        "prior": "",
        "range": "9800.0 / 9200.0",
        "note": "EX-99.1「Business Outlook」表(上季原文: Total revenue $ 8,950 +/- $ 500)"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "25%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 +9.00%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 -4.00%"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "35%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 -11.00%"
      }
    ],
    "watch": [
      "FY27 WFE 口径 — 利好: 给出 FY27 WFE 量化口径且不低于中性(即不低于 UBS 145B 与 Mizuho 190B 的中位 167B) — 利空: 回避 FY27 只谈 FY26, 或措辞由「强劲」转向「审慎/能见度有限」",
      "FQ4 收入/EPS 指引 · 预期 收入 ~$9.5B、EPS ~$3.68 · 利好 中值 ≥ 一致且区间不放宽 · 利空 中值 < 一致,或区间异常放宽",
      "FQ3 non-GAAP EPS · 预期 $3.46(一致与买方 bar 之间) · 利好 ≥ $3.56 · 利空 < $3.39",
      "FQ3 收入 · 预期 $9.05B · 利好 ≥ $9.20B(卖方最高) · 利空 < $8.95B(指引中值)",
      "中国收入占比 · 预期 ~27% · 利好 持平或回升 · 利空 跌破 25% 且无解释",
      "FY27 WFE 表述 · 预期 定性正面、不给数字 · 利好 给出量化口径且 ≥ 中性 · 利空 回避或转向谨慎措辞"
    ],
    "actual": [],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "+0.65%",
        "d1": "-0.17%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+1.15%",
        "d1": "-0.13%"
      },
      {
        "asset": "US 2Y",
        "d0": "-5bp",
        "d1": "+2bp"
      },
      {
        "asset": "US 10Y",
        "d0": "-5bp",
        "d1": "+5bp"
      },
      {
        "asset": "DXY",
        "d0": "-0.05%",
        "d1": "-0.29%"
      }
    ],
    "verdict": "事件定价失败? 否",
    "history": [
      {
        "when": "2026-05-14",
        "what": "EPS 意外 +6.5% · 实际 2.86 vs 预期 2.69",
        "outcome": "次日 -0.89%（大 beat 5–10%）"
      },
      {
        "when": "2026-02-12",
        "what": "EPS 意外 +7.9% · 实际 2.38 vs 预期 2.21",
        "outcome": "次日 +8.08%（大 beat 5–10%）"
      },
      {
        "when": "2025-11-13",
        "what": "EPS 意外 +3.6% · 实际 2.17 vs 预期 2.09",
        "outcome": "次日 +1.25%（中 beat 2–5%）"
      }
    ],
    "links": [
      {
        "label": "AMAT IR",
        "url": "https://ir.appliedmaterials.com/"
      },
      {
        "label": "触发本次对账的 SEC 备案",
        "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMAT&type=8-K&dateb=&owner=include&count=10"
      }
    ],
    "consensus": {
      "eps": "$3.394",
      "rev": "$9.00B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $3.561"
    },
    "segments": [
      {
        "name": "FQ3 实际收入(百万美元)",
        "consensus": "9050.0",
        "prior": "",
        "note": "EX-99.1 结果表首行(上季原文: Revenue $ 7,910 $ 7,100 11%)"
      },
      {
        "name": "FQ3 non-GAAP 毛利率",
        "consensus": "50.0",
        "prior": "",
        "note": "EX-99.1 Non-GAAP Results 表(上季 50.0%, 去年同期 49.2%)"
      },
      {
        "name": "中国收入(百万美元)",
        "consensus": "2444.0",
        "prior": "",
        "note": "EX-99.1 地域收入表(上季原文: China $ 2,087 $ 1,774, 紧随其后 % of Total 27%; 2087/7910=26.4%)。probe「China」全文仅命中 1 行, 故不需段锚"
      }
    ],
    "guidance": {
      "company": "EPS ⏳ 待法说会",
      "street": "下季 EPS 一致 $3.679",
      "note": "vs 卖方一致 3.68（—）"
    },
    "options": {
      "iv": "",
      "impliedMove": "±6.92%",
      "note": "盈亏平衡 $482.83 / $568.39"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$421.17"
      },
      {
        "name": "概率加权目标价",
        "value": "$406.37"
      },
      {
        "name": "压力调整底线",
        "value": "$328.97"
      },
      {
        "name": "安全边际",
        "value": "-21.89%"
      },
      {
        "name": "综合分",
        "value": "57.3"
      },
      {
        "name": "象限动作",
        "value": "等待企稳分批 —— 但安全边际-21.89%为负,本版沿用v2与INTC先例刻意不设价格型入场区(理由见§14)"
      }
    ],
    "targets": {
      "low": "$216",
      "avg": "$406",
      "high": "$586",
      "n": "本站三情景加权 · 卖方一致 $650.00"
    },
    "afterHours": {
      "move": "-5.12%",
      "note": "- 实际次日反应 -5.12%(基准收盘 534.54 → 507.17) - 隐含区间 ±6.9%(482.83 / 568.39) → 实际 落在区间内"
    }
  },
  {
    "id": "baba-fy27q1",
    "kind": "earnings",
    "ticker": "BABA",
    "company": "BABA",
    "title": "BABA FY27Q1 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2026-08-20T07:00:00-04:00",
    "dateNote": "盘前 07:00 ET",
    "dateConfirmed": true,
    "importance": 2,
    "tags": [
      "FY27Q1"
    ],
    "thesis": "隐含波动:±5.75%(去时值;raw ±6.77%),盈亏平衡 $113.89 / $130.43 —— 实际/隐含 1.27×,期权偏便宜(买波动占优,卖波动无超额) 反应函数一句:BABA 的财报日是「叙事日」不是「业绩日」 —— surprise 与当日涨跌相关系数 -0.009,20 季里 beat 却跌 6 次、miss 却涨 2 次(上次就是 EPS -89.2% 却 +8.2%)。EPS 在这只票上不定价,云增速与即时零售亏损曲线才定价。 门槛配置:四条 bar 只有三条(阿里不给指引)。且两个买方 bar 分居卖方一致两侧(11.187 / 10.355)、近 8 季 beat 率仅 38% 已使近期口径按 E-05 失效 —— 买方 bar 无法收敛,本身就是「EPS 不是本次的杆」的第三重证据。 动作(四选一):财报前不动(不减不加) 期望值 ≈ +0.22% vs 隐含 ±5.75% → 这笔事件的赔率约等于零。不值得为它加仓,也不值得为它减仓。 持有者 vs 空仓者动作分列:",
    "expectations": [],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 +10.36%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 -1.84%"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "25%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 -8.23%"
      }
    ],
    "watch": [
      "三年 AI+云 capex 口径(是否上修总盘子) — 利好: 维持「超支 3800 亿但可控」口径, 且单季 capex 环比持平或微增 — 利空: 明确上修三年总盘子(如传闻的 US$69bn 版本), 致 FCF 负值延长、估值锚被迫由 P/E 换成 EV/Sales",
      "云智能集团收入 / 外部增速(指引等价物,第一定价变量) · 预期 RMB 48.4bn / +45%(Citi bar);上季一手 41,626mn / 外部 +40% · 利好 ≥48.4bn 且外部 ≥45%;≥50% 为大利好 · 利空 <40% = 增速见顶,AI 溢价失去支点",
      "云 adjusted EBITA margin · 预期 11.5%(Citi);上季一手 3,796mn / 9.1% · 利好 ≥11.5% = 增长与盈利同时改善 · 利空 <9.1%(环比倒退)= 增长靠贴钱买",
      "即时零售 / 中国电商分部 adjusted EBITA · 预期 亏损环比收窄;上季中国电商 EBITA -40% 至 RMB 24,010mn,集团 EBITA 5,102mn(-84%) · 利好 集团 adjusted EBITA 环比回升至 >RMB 10bn · 利空 集团 EBITA 仍 <RMB 6bn 或口径改成「继续投入换份额」",
      "单季 capex 与三年 3,800 亿口径 · 预期 单季 ~RMB 27–35bn(上季 26,887mn;FY26 累计 126,063mn) · 利好 环比持平/微增 + 维持「超支但可控」 · 利空 明确上修三年总盘子(如传闻的 US$69bn 版本)→ 估值锚被迫从 P/E 换成 EV/Sales",
      "自由现金流(FCF) · 预期 仍为负但收窄;上季 -RMB 17,300mn,FY26 全年 -46,609mn · 利好 亏损收窄至 -10bn 以内,或转正 · 利空 继续 -15bn 以上 → 「FCF 何时转正」无法回答"
    ],
    "actual": [],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-0.87%",
        "d1": "+0.43%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "-0.72%",
        "d1": "+0.33%"
      },
      {
        "asset": "US 2Y",
        "d0": "+0bp",
        "d1": "+5bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+4bp",
        "d1": "+5bp"
      },
      {
        "asset": "DXY",
        "d0": "+0.07%",
        "d1": "-0.10%"
      }
    ],
    "verdict": "事件定价失败? 否",
    "history": [],
    "links": [
      {
        "label": "BABA IR",
        "url": "https://www.alibabagroup.com/en-US/ir-financial-reports-quarterly-results"
      }
    ],
    "consensus": {
      "eps": "$10.728",
      "rev": "$268.34B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $11.187"
    },
    "segments": [
      {
        "name": "云智能集团收入同比增速(指引等价物, 阿里不给数字指引)",
        "consensus": "43.0",
        "prior": "",
        "note": "新闻稿 Cloud Intelligence Group 分部段 + 电话会 Q&A"
      },
      {
        "name": "云 adjusted EBITA margin",
        "consensus": "10.3",
        "prior": "",
        "note": "报表不直接给云 EBITA margin(只给 EBITA 与收入)。由 derived「云EBITA率」= F5/F4*100 算出(上季 3796/41626 = 9.12%, 与卡片记的 9.1% 一致), 落地时用 --actual P2=<该值> 传入"
      },
      {
        "name": "集团 adjusted EBITA(RMB million)",
        "consensus": "8000.0",
        "prior": "",
        "note": "季度段「Adjusted EBITA , a non-GAAP measurement, decreased 84% year-over-year to RMB5,102」。⚠️ 2026-08-13 lint 修:原 unit=num + probe「adjusted EBITA was」抽出 -138(错值), 现与 F2 同口径"
      },
      {
        "name": "自由现金流(RMB million, 负值为流出)",
        "consensus": "-13000.0",
        "prior": "",
        "note": "季度段。⚠️ 2026-08-13 lint 修:原配置抽到 -46,609(FY26 全年数) 属跨期串数;加季度段锚后取 -17,300。标签「Free cash flow ,」结尾换行故 offset=1"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "",
      "note": "比较期间"
    },
    "options": {
      "iv": "",
      "impliedMove": "±5.75%",
      "note": "盈亏平衡 $113.89 / $130.43"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$119.34"
      },
      {
        "name": "概率加权目标价",
        "value": "$118.25"
      },
      {
        "name": "压力调整底线",
        "value": "$75.09"
      },
      {
        "name": "安全边际",
        "value": "-37.08%"
      },
      {
        "name": "综合分",
        "value": "44.9"
      },
      {
        "name": "象限动作",
        "value": "回避"
      }
    ],
    "targets": {
      "low": "$53",
      "avg": "$118",
      "high": "$180",
      "n": "本站三情景加权 · 卖方一致 $188.09"
    },
    "afterHours": {
      "move": "+1.26%",
      "note": "- 实际次日反应 +1.26%(基准收盘 128.9 → 130.52) - 隐含区间 ±5.8%(113.89 / 130.43) → 实际 落在区间内"
    }
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
      "FY27Q2",
      "核心"
    ],
    "thesis": "财报日 2026-08-26 AMC(SEC 受理 16:21:19 ET)｜基准收盘 $209.66｜隐含波动 ±5.05%(去时值) 反应函数:近 8 季 beat 率 100% 却只涨 2/8 次、均值 -2.78% —— beat 是入场费不是彩票,定价权在指引(surprise 与次日涨跌 |r|=0.27,几乎不解释)。 事前三情景期望值 = -0.56%(0.30×+8.30% + 0.40×-0.73% + 0.30×-9.20%), 即在本卡的概率标定下,这是一笔赔率略负的事件 —— 与该票「beat 却跌 8/20 次」一致。 实际落点:加权 S = +0.45(覆盖权重 100%),内插预期次日反应 +3.33%。 但 core 论点 P2(毛利率指引)触及利空阈值 —— 按卡片定义,这一条使「纯利好」的读法作废。 > ⛔ 本卡为回放卡,expect/bull_at/bear_at 事后补写,「我错在哪」结构性无效。详见页首。",
    "expectations": [
      {
        "name": "FY27Q3 收入指引(第一定价变量)",
        "consensus": "103.9",
        "prior": "",
        "range": "107.0 / 100.8",
        "note": "EX-99.1 Outlook 段。expect = 卖方对 FY27Q3 的一致收入预期 103.896B(43 家),财报前已存在;阈值规则 = 一致 ±3%(103.9×1.03=107.0 / ×0.97=100.8),规则先于答案设定"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 +8.30%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 -0.73%"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "见卡片三情景表",
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
    "actual": [],
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
    "verdict": "事件定价失败? 不可判 —— 卡片无 implied_move(隐含区间数据缺口),不得渲染成「否」",
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
        "prior": "",
        "note": "EX-99.1 Outlook 段。expect = 本季实际非GAAP 毛利率 75.0%(即「维持」),阈值 = ±50bp,恰为公司自己指引区间的半宽"
      },
      {
        "name": "本季收入 vs 公司自家指引上沿(「打满指引」检验)",
        "consensus": "92.82",
        "prior": "",
        "note": "EX-99.1 首段。expect = FQ1 给出的 FQ2 指引上沿 = 91.0×1.02 = 92.82B;bear_at = 指引中值 91.0(只打到中值 = 没有超预期)"
      },
      {
        "name": "数据中心收入",
        "consensus": "84.0",
        "prior": "",
        "note": "EX-99.1 标题要点行。expect = 指引中值 91.0B × 上季 DC 收入占比 92.2%(75.246/81.615)= 83.9 ≈ 84.0 [推断]"
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
      },
      {
        "name": "综合分",
        "value": "70.8"
      },
      {
        "name": "象限动作",
        "value": "买入/持有（本卡读作『持有不加』—— 安全边际 -2.83% 为负，矩阵允许的『买入』一档被安全边际否决）"
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
      "note": "- 实际次日反应 +8.74%(基准收盘 209.66 → 227.98)"
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
    "thesis": "一句话:这是一张回放卡——2026-09-04 的非农事前没有建卡,现在按当时可得的信息补建。当时的信息集指向的是「下修链第三次出现」:连着两份报告净下修 -74k、-103k,7 月印出 -23k,而联储 7/29 刚以 9–3 压住三张加息票。在这个信息集上,利率端方向明确向下,股指端是对冲、事前本就不可判;更重要的是五个资产的事前期望值全部小于各自噪声带 —— 这场非农本来就不值得当事件交易,这一条在事前就成立,与事后确实没动是两件独立的事。 2Y:- 一致(agree 1.0,mass 5.0)· 主导 f_rev_neg, f_priced_in · 被压制 无 · 翻转条件:P2 >= 25(下修链断,改由 f_rev_pos 主导) 10Y:- 一致(agree 1.0,mass 5.0)· 主导 f_rev_neg, f_priced_in · 被压制 无 · 翻转条件:同 2Y DXY:- 一致(agree 1.0,mass 4.0)· 主导 f_rev_neg, f_priced_in · 被压制 无 · 翻转条件:同 2Y",
    "expectations": [
      {
        "name": "当月非农新增(k)",
        "consensus": "20.0",
        "prior": "-23",
        "range": "100.0 ~ -50.0",
        "note": "Table B-1 Total nonfarm 1-month change"
      },
      {
        "name": "前两月净修正(k)",
        "consensus": "-60.0",
        "prior": "",
        "range": "0.0 ~ -120.0",
        "note": "新闻稿正文 revised 句 / vintage diff"
      },
      {
        "name": "失业率(%)",
        "consensus": "4.1%",
        "prior": "",
        "range": "4.0% ~ 4.3%",
        "note": "Table A-1"
      },
      {
        "name": "时薪环比(%)",
        "consensus": "0.3%",
        "prior": "",
        "range": "0.2% ~ 0.4%",
        "note": "Table B-3"
      },
      {
        "name": "劳动参与率(%)",
        "consensus": "61.4%",
        "prior": "",
        "range": "61.7% ~ 61.1%",
        "note": "Table A-1"
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
        "trigger": "P1 >= 100 or P2 >= 0",
        "reaction": "2Y +9bp · 10Y +6bp · DXY +0.35% · SPX -0.60% · NDX -0.90%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "P1 in (-50,100) and P2 < 0",
        "reaction": "2Y -4bp · 10Y -3bp · DXY -0.15% · SPX -0.25% · NDX -0.35%"
      },
      {
        "tag": "偏冷",
        "tone": "dove",
        "prob": "30%",
        "trigger": "P1 <= -50 and P2 < 0",
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
    "verdict": "先说这段的身份:§1–§7 是事后按当时信息集重建的,所以下面这段不是「我当初判对/判错了什么」,而是「当时的信息集,配上这套力量表,会得出什么;它和市场实际发生的差在哪」。两者不是一回事,别混读。 主导为何赢 —— 而且赢得几乎没有信息量。 实际读数代入后,2Y 上只有 f_head_beat(+162k ≥ 100k 阈)与 f_rev_pos(+55k ≥ 25k 阈)激活,票 +4 / mass 6 / agree 0.67,方向为正;2Y 当日 +3.0bp,方向对上了。但这是一次贴着噬声带边缘的胜利:面板 NFP 同日 |Δ2Y| 中位正好是 3.0bp,程序判「超带」靠的是 abs(m) < noise 这个严格小于号。一次落在判定线上的方向命中,不该被当成力量表有预测力的证据。其余四个资产(10Y +1.0bp、DXY +0.162%、SPX -0.376%、NDX +0.21%)全部落在噬声带内,按 M-16 一律不裁 —— 这场非农在五个资产上只产生了一个勉强可裁的观测。 被压制的那股,才是真正解释了当天的那股。 程序按方向把 f_priced_in 归进「被压制」(它在 2Y 上投负,而 2Y 收正)。但把幅度放进来看,结论是反的:P1 高出趋势代理 142k、P2 高出 115k,同时落进 hot 情景,面板里热意外的 2Y p90 是 +13.0bp,事前 sc.hot 也写了 +9bp —— 实际只给了 +3.0bp,不到事前热情景的三分之一。吃掉那 6bp 的,正是 f_priced_in 所描述的东西:发布前 21 个交易日 2Y 已经涨了 16bp、10Y 涨了 14bp,短端涨得比长端多,曲线走平,加息预期在这三周里已经付过钱;7/29 那次 9–3 里已经摆着三张主张立刻加息的票。一个偏热的就业数据对这样一个联储只是确认已知,不是新信息。这里暴露的是框架本身的一个结构性盲区:compose 只投方向、不投幅度,所以一股「把反应压扁」的力量,在方向记分板上永远只能被记成「被压制」,哪怕它才是当天的主角。 这条记在 §9,不改本卡任何 strength/activate(M-12 与事后不许 fit 的纪律)。 「我没列」:残差在噬声带内。 程序四类归类没有给出任何 unlisted 标记 —— 2Y 方向与力量表一致,另外四个资产都在噪声带里,按定义不产生残差。因此本条按规定写死:残差在噬声带内,本次没有需要命名的表外力量。 上一段那个「反应被压扁」的观察是幅度维度的,而四类归类只在方向维度上判残差,它构不成程序意义上的「我没列」;我刻意不把它写进 force-library,因为那个台账的语义是「同一股力量两次被程序判为残差就纳入默认表」,拿一条程序没判出来的观察去占一格,会污染那个计数器。它先留在 §9 当待办。 对了的地方,也要说清为什么对。 事前这张卡唯一真正站住的结论不是方向,是那句「本次不值得当事件交易」:五个资产的事前期望值(2Y -2.85bp / 10Y -1.95bp / DXY -0.1 / SPX -0.47% / NDX -0.65%)全部小于各自噬声带,而事后五个资产里四个落在噬声带内、第一个贴着边。这一条之所以对,和方向判断完全无关 —— 它来自「概率加权后的期望幅度 vs 历史同日噪声」这个纯量级比较,输入只有情景概率、面板分位和 run-up,一个都不依赖对读数的预判。这套方法真正可迁移的部分在这里,不在方向票上。 事前中心情形错在哪。 事前把权重压在「下修链第三次出现」(P2.expect -60,近两次净修正 -74k / -103k),实际是 +55k 上修,偏离 115k;P1 偏离 142k。两根 core 同时被向上证伪。加权 S = 0.633 这个数看着温和,是因为 P1/P2 的 s 都被 截断在 +1.0:打分函数区分不了「刚过阈」和「打穿阈值两三倍」,S 在这种大幅偏离下会系统性低估偏离程度。别拿 S = 0.633 当「大体判对」的证据。 两条口径警告,顺着 §0 往下读。 一、P1 的「证实(bull)」只意味着大幅高于趋势代理(+20k),bar_consensus 是 na,本卡无权说它「超了卖方一致多少」;§8.1 那行 prior +185.0 是相对 -23k 的前值差,也不是 surprise。二、P2 的 +55k 来自新闻稿正文 revised 句(6 月 +20k→+31k、7 月 -23k→+21k,合计 +55k),走的是 M-04 允许的「新闻稿 revised 句」通道,不是 vintage diff —— 因为这场事件事前没落 pre vintage,这本身就是「没建前瞻卡」的直接代价。 regime 不改。 tightening_bias 事前锁死,事后不动(M-12);而且这次读数与它一致(热就业 + 上修,对应 9/16 的加息路径),没有需要复议的地方。",
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
        "note": "Table A All items less food and energy SA 1-mo"
      },
      {
        "name": "headline CPI 环比(%)",
        "consensus": "0.1%",
        "prior": "",
        "range": "0.0% ~ 0.3%",
        "note": "Table A All items SA 1-mo"
      },
      {
        "name": "核心 CPI 同比(%)",
        "consensus": "2.5%",
        "prior": "",
        "range": "2.3% ~ 2.7%",
        "note": "Table A unadjusted 12-mo"
      },
      {
        "name": "headline 同比(%)",
        "consensus": "3.4%",
        "prior": "",
        "range": "3.2% ~ 3.6%",
        "note": "Table A unadjusted 12-mo"
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
        "trigger": "P1 >= 0.3",
        "reaction": "2Y +8bp · 10Y +6bp · DXY +0.40% · SPX -0.90% · NDX -1.30%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "45%",
        "trigger": "0.1 < P1 < 0.3",
        "reaction": "2Y -2bp · 10Y -1bp · DXY -0.10% · SPX +0.30% · NDX +0.40%"
      },
      {
        "tag": "偏冷",
        "tone": "dove",
        "prob": "25%",
        "trigger": "P1 <= 0.1",
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
    "verdict": "2Y +7.0bp,噪声带 4.0bp —— 超带、方向与力量表一致,程序判「赢了 f_core_hot(2Y)」。 这一条对了,而且量级也对:hot 情景事前写死 sc.hot.move.2Y = 8,实际 7.0。为什么对 —— P1 0.3 正好踩上 bear_at = 0.3 与 sc.hot.trigger: P1 >= 0.3,读数把政策路径实打实往鹰推了一档;而前端是纯政策路径资产,当天没有第二股力量跟 f_core_hot 抢它。 但 f_core_hot 的 dir 一共押了五个格子,只有 2Y 这一个真的成立:10Y +1.0(带 5.0)、DXY +0.03(带 0.28),两个都在噪声区,按 M-16 不裁。[事实] SPX +0.86%(带 0.47)、NDX +0.91%(带 0.79),双双超带,双双与 f_core_hot 的 SPX:- NDX:- 相反。情景表 sc.hot.move.SPX = -0.9,实际 +0.86 —— 幅度几乎完全猜中,符号整个反了。这不是没算准,是机制搞错了:情景表把 hot 的股票端冲击量级定对了,却假定它一定往下。[事实] 压制它的是入场仓位,不是读数。程序盖章的 21 日 run-up:2Y +34.0bp、SPX -0.0177、NDX -0.0143(⚠️ 口径:runup21d 对股指/DXY 存的是小数,而 §8.4 的 actual 存的是百分数,两列不能直接相减 —— 换算后即 SPX 进数据前 21 日已跌 -1.77%、NDX -1.43%)。也就是说:市场进这份 CPI 之前,前端已经卖掉 34bp、股指已经按「热」跌掉一个半点。0.3 的核心环比只是确认了这份定价,并没有超过它。当天 SPX 收回了 run-up 的约一半、NDX 约三分之二。[推断] NDX 收得比 SPX 多,和长端没跟是同一件事:久期股的贴现率锚在 10Y,而 10Y 留在噪声带里。曲线当天是熊平(2Y +7.0 / 10Y +1.0),市场重定价的是政策路径,不是长期通胀。(10Y 单独看在带内不可裁,所以这条只能是 [推断],不作为裁决依据。) f_headline_div 差一档就没抓到:headline 0.4 vs core 0.3,abs(P2-P1) = 0.1,而 activate 要 >= 0.2。本次 headline 比 core 热是能源驱动、市场惯例是看穿的,方向上恰好也在帮股票端。0.2 这个阈值对一位小数的 CPI 偏宽 —— 一位小数下 0.1 就是一个刻度,阈值 0.2 等于要求背离到两个刻度才算数。建议下卡降到 0.15。[推断] 本卡只有 5 股力量,而 SKILL 默认 10 股;缺的 f_shelter_lag / f_supercore / f_base 恰好就是「市场信不信这个热读数」那一族。P3 核心同比 2.4(低于 expect 2.5)被程序按权重 0.15 判「中性」(s=0.5),但媒体标题打的正是这个数 —— 「核心同比继续降」与「核心环比 0.3」当天同时为真,而卡里没有任何一股力量负责表达这个张力。这是股票端判反的第二层结构原因,和 ③ 是同一个病灶的两种表现:这张卡把「热不热」建模得很完整,把「热了市场认不认」整个漏掉了。[推断]",
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
    "thesis": "期望值(程序算):2Y +0.5bp / 10Y +0.5bp / DXY +0.04 / SPX -0.035% / NDX -0.065% 加息本身已被 92% 定价,定价变量在点阵(P2)与发布会(P5),不在决议(P1)",
    "expectations": [
      {
        "name": "决议(bp,相对上次区间)",
        "consensus": "25.0bp",
        "prior": "0bp",
        "range": "0.0bp ~ 50.0bp",
        "note": "声明第 2 段 decided to raise/lower/maintain … by X percentage point"
      },
      {
        "name": "2026 末点阵中位(%)",
        "consensus": "4.1%",
        "prior": "",
        "range": "3.8% ~ 4.4%",
        "note": "SEP Table 1 Median 行 Federal funds rate 2026 列"
      },
      {
        "name": "异议票数",
        "consensus": "1.0 票",
        "prior": "",
        "range": "0.0 票 ~ 3.0 票",
        "note": "声明投票行(两种格式)"
      }
    ],
    "pricing": [
      {
        "name": "本次会议隐含变动",
        "value": "+23bp",
        "note": "ZQ 自算 · 2026-09-15"
      },
      {
        "name": "P(加息 25bp)",
        "value": "92%",
        "note": ""
      },
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
        "trigger": "P1 > 0 and (P2 >= 4.2 or P4.verdict == 'bear' or P5.verdict == 'bear')",
        "reaction": "2Y +8bp · 10Y +6bp · DXY +0.40% · SPX -0.80% · NDX -1.20%"
      },
      {
        "tag": "行动+鸽",
        "tone": "dove",
        "prob": "40%",
        "trigger": "P1 > 0 and P2 < 4.2 and P4.verdict != 'bear' and P5.verdict != 'bear'",
        "reaction": "2Y -4bp · 10Y -3bp · DXY -0.20% · SPX +0.60% · NDX +0.90%"
      },
      {
        "tag": "按兵+鹰",
        "tone": "hawk",
        "prob": "5%",
        "trigger": "P1 <= 0 and (P4.verdict == 'bear' or P5.verdict == 'bear')",
        "reaction": "2Y -6bp · 10Y -4bp · DXY -0.20% · SPX -0.30% · NDX -0.50%"
      },
      {
        "tag": "按兵+鸽",
        "tone": "dove",
        "prob": "10%",
        "trigger": "P1 <= 0 and P4.verdict != 'bear' and P5.verdict != 'bear'",
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
      }
    ],
    "verdict": "主导:SEP 的外段路径上移,不是这一次的 25bp。fed funds 中位 2027 3.6→4.1(+50bp)、2028 3.4→3.9(+50bp)、长期中枢 3.1→3.2(+10bp);发布会主席原话「I would be hard-pressed to describe broad financial conditions as restrictive … So we removed a dose of accommodation」——今天只是拿掉一剂宽松,离限制性还有距离。鹰在终点,不在这一步。 被压制:f_priced_in(靴子落地、买事实回补)。加息 92% 被定价、2Y 21 日 run-up 已跑 50bp,按卡片设计这次该是短端回吐;但点阵把终点抬高 50bp 之后,那 50bp 的含义从「提前定价这一次」变成「对后面几次定价不足」,回补的燃料被抽走。同时被压制的还有 f_dissent_split(12–0,不激活)。 我没列到的(表外力量一)点阵外段:P2 的 probe 只取 dots_2026,而 2026 中位 4.1 恰好等于预期值 ⇒ 程序判中性,整条 50bp 的外段上移在卡里无处落地。补:f_dots_outyear,activate = dots_2027 - prev.dots_2027 >= 25 or dots_lr - prev.dots_lr >= 10,dir 2Y:+ 10Y:++ DXY:+ SPX:- NDX:-,strength 3,horizon W(长期中枢那一格打的是 10Y,不是 2Y)。 我没列到的(表外力量二)主席不交点:SEP 脚注写明只有 18 位参与者提交,主席原话「as in June—I have not offered a projection of my own」——两个独立来源互证。全场最鹰的那一票不在分布里,点阵中位系统性低估委员会鹰派程度,而 P2 是 core 论点,带着这个口径缺口在跑。 我没列到的(框架错,不是遗漏)P3 只数票不看方向:7/29 的 3 张异议票全是要求加息的,它们归零是因为中心向鹰派投降,不是委员会转鸽——主席还主动把它定义成决心(「The committee's unanimous vote shows our resolve」)。卡里 P3.bull_at: 0 是从降息周期模板继承来的,方向写反了;同一个方向盲区在 B-9(情景命名)已记过一次,fomc_members.md 的「异议方向」列有这个字段,论点层把它丢了。 定性两条都指向鹰,但 P4 照卡片预写规则会判反:bull_if 写的是「删去供给冲击类表述=利好」,而今天删掉的正是「in part reflecting supply shocks that have driven price increases in certain sectors, including energy」——供给冲击语言是不加息的借口,删掉它等于货币政策认领这轮通胀,实质是 bear。P5 裁 bear(依据见下,证据边界也见下)。",
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
    "id": "conf-qcom-snapdragon-summit-2026-09-22",
    "kind": "event",
    "title": "Snapdragon Summit",
    "subtitle": "旗舰 SoC 制程与代工归属、PC/汽车扩张",
    "org": "QCOM",
    "ticker": "QCOM",
    "company": "",
    "date": "2026-09-22T09:00:00-04:00",
    "dateNote": "不发 8-K,无可编程触发,证据上限 B · 无会前卡 → 跑 /conference-preview",
    "dateConfirmed": true,
    "importance": 1,
    "tags": [
      "product",
      "TSM",
      "ARM",
      "AAPL"
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
        "url": "https://www.qualcomm.com/company/events/snapdragon-summit"
      }
    ],
    "agenda": [],
    "readThrough": [
      {
        "name": "传导标的",
        "value": "TSM、ARM、AAPL"
      }
    ]
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
    "dateNote": "不发 8-K,无可编程触发,证据上限 B · 无会前卡 → 跑 /conference-preview",
    "dateConfirmed": true,
    "importance": 1,
    "tags": [
      "product",
      "QCOM",
      "NVDA"
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
        "url": "https://www.meta.com/blog/connect-2026-save-the-date/"
      }
    ],
    "agenda": [],
    "readThrough": [
      {
        "name": "传导标的",
        "value": "QCOM、NVDA"
      }
    ]
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
    "dateNote": "盘后 16:05 ET · 卡片状态 pending",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q4",
      "核心"
    ],
    "thesis": "隐含波动:±9.27%(去时值口径)/ ±10.91%(raw),盈亏平衡 825.46 / 1,027.64;到期日 2026-10-02(16 DTE),ATM 925,跨式中价 101.12,put/call 中价比 0.929(下跌保护反而更便宜) 期权贵不贵:近 8 季实际波动中位 ±9.12% → 比值 1.02× = 定价大致公允,方向性下注优于波动性下注 反应函数一句:MU 的 beat 是入场费不是彩票 —— 近 20 季 beat 率 90%、其中 beat 却跌 11 次,surprise 与次日涨跌相关系数仅 0.277(几乎不解释)。定价权在指引与毛利率斜率,不在当季 EPS。 门槛配置(表 ⑦ 裁决):买方 bar 35.912 ≥ 指引上沿 32.000(+12.2%) → 市场已按指引打满定价。未打满即实质 miss,即使名义 beat。 🔴 本卡最重要的一个发现:卖方一致不是独立的 bar,它就是公司指引本身。 动作(四选一):财报前不动 期望值 = +1.76% vs 隐含 ±9.27% → 赔率微正但远小于波动:方向性赌注的回报不足以覆盖两侧尾部 持有者 vs 空仓者(不许合并):",
    "expectations": [
      {
        "name": "FQ1-27 非GAAP EPS 指引中值",
        "consensus": "37.0",
        "prior": "",
        "range": "40.7 / 34.0",
        "note": "EX-99.1「Business Outlook」表(上季原文两列: GAAP $30.73 +/- $1.00 | 非GAAP $31.00 +/- $1.00)。标签与数值不同行故用 value_line_offset 1; 该行四个数 [30.73, 1.00, 31.00, 1.00], pick max 取非GAAP 中值 —— 非GAAP EPS 恒高于 GAAP(SBC 加回)且高于半宽, 该口径对 FQ1-26/FQ2-26 的「8.19 +/- 0.20 | 8.42 +/- 0.20」旧版式同样成立(取 8.42), 跨版式稳健。⚠️ lint 会对本条报「命中行是区间式, pick 应为 first」—— 这条警告在 MU 上是错的, 不许照做: 该行是 GAAP 与非GAAP 两组「中值 +/- 半宽」并排, pick first 取到的是 GAAP 30.73(低 0.27), 不是我们要的非GAAP 31.00"
      },
      {
        "name": "FQ1-27 收入指引中值(十亿美元)",
        "consensus": "59.0",
        "prior": "",
        "range": "64.0 / 55.0",
        "note": "EX-99.1「Business Outlook」表(上季原文: Revenue $50.0 billion +/- $1.0 billion, GAAP 与非GAAP 同值)。收入两列相同故 pick first 即可; 不用 max —— 旧版式「$18.70 billion +/- $400 million」里 400 会被 usd_b 误判"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "28%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 +15.25%"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "30%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 +3.19%"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "42%",
        "trigger": "见卡片三情景表",
        "reaction": "次日 -8.26%"
      }
    ],
    "watch": [
      "FY2027 capex 与 SCA 价格天花板的指引措辞 — 利好: 量化说明 SCA 天花板仅适用 existing products、HBM4/HBM4E/新制程不受价格上限约束(或给出 SCA 覆盖比例 × 加权 ASP 的可验证拆分); 或 FY27 净 capex 指引明确配供给纪律措辞(位元供给增速 <= 行业需求增速 / 新增产能已被 SCA 锁定) — 利空: 首次用「价格涨幅放缓 / 正常化 / 客户库存回补接近尾声」类表述解释 FQ1-27 指引; 或重申天花板锁在 CY2026Q2 市价且覆盖面继续扩大; 或 FY27 净 capex 大幅上调而不配供给纪律措辞",
      "FQ1-27 非GAAP EPS 指引中值(第一定价变量) · 预期 37.00 · 利好 ≥ 40.70(= 下季一致 34.875 × 1.1462) · 利空 < 34.00(低于卖方一致 34.875)",
      "FQ1-27 收入指引中值 · 预期 59.0B · 利好 ≥ 64.0B · 利空 < 55.0B(低于下季一致 56.656B)",
      "FQ1-27 非GAAP 毛利率指引 · 预期 87.5% · 利好 ≥ 89.0% · 利空 ≤ 86.0%(= 与 FQ4 指引持平,涨价停)",
      "FQ4-26 实际收入 · 预期 57,500(百万美元) · 利好 ≥ 61,900(历史超指引中位 +23.7% 复刻) · 利空 < 55,000(beat < 10%,MU.md 预承诺的 sandbag 失效第一证据)",
      "FQ4-26 实际非GAAP 毛利率 · 预期 88.5% · 利好 ≥ 90.0% · 利空 ≤ 86.5%(仅打平指引,前三季均超 +3.9~6.9pt)",
      "Cloud Memory BU 收入(AI/HBM 直读) · 预期 19,500(百万美元) · 利好 ≥ 22,000 · 利空 < 17,000",
      "*(定性)* FY2027 capex 与 SCA 天花板措辞 · 预期 见 §3.2 ①② · 利好 见 P7 bull_if · 利空 见 P7 bear_if"
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
        "prior": "",
        "note": "EX-99.1「Business Outlook」表(上季原文: Approximately 86% | Approximately 86%)。pick max 跨版式稳健: 旧版式「67.0% +/- 1.0% | 68.0% +/- 1.0%」取 68.0 = 非GAAP。bear_at 86.0 = MU.md 事前写死的「走平」档上沿, 与长期卡对齐不另起炉灶。⚠️ 旧版式下 lint 会报「区间式应 pick first」, 同 P1 是误报: pick first 取到 GAAP 67.0, 要的是非GAAP 68.0"
      },
      {
        "name": "FQ4-26 实际收入(百万美元)",
        "consensus": "57500.0",
        "prior": "",
        "note": "EX-99.1「Quarterly Financial Results」表首行(上季原文: Revenue $ 41,456 $ 23,860 $ 9,301 $ 41,456 ... GAAP 与非GAAP 同值故 pick first)。⚠️ probe 必须带尾部的 $: 裸「Revenue」会被同段的「Percent of revenue 84.6 %」按「标签到数字距离」抢走(1 字符 vs 3 字符), lint 实测抽出 84.6 —— 静默把收入换成毛利率。bear_at 55000 = 指引 50,000 的 +10%, 即 MU.md 预承诺的「FQ4 beat <10% = sandbag 机制失效第一证据」—— 该阈值允许名义大幅 beat 仍判 bear, 是 bear_allows_eps_beat 的直接体现"
      },
      {
        "name": "FQ4-26 实际非GAAP 毛利率",
        "consensus": "88.5",
        "prior": "",
        "note": "EX-99.1「Quarterly Financial Results」表第一个 Percent of revenue 行(= 毛利率; 第二个是营业利润率, 靠 section_lines 10 截断在窗口外)。上季原文 84.6 | 74.4 | 37.7 | 84.9 | 74.9 | 39.0 -> pick max 取非GAAP 本季 84.9(非GAAP 毛利率恒 >= GAAP, 且上行周期本季 > 历史季)"
      },
      {
        "name": "Cloud Memory BU 收入(百万美元)",
        "consensus": "19500.0",
        "prior": "",
        "note": "EX-99.1「Quarterly Business Unit Financial Results」-> Cloud Memory Business Unit -> Revenue(上季 $ 13,769 $ 7,749 $ 3,386, 环比 +77.7%)。⚠️ 同一份新闻稿内 BU 版式不一致: CMBU 的 Revenue 与数值同行, 而 CDBU/MCBU/AEBU 的在下一行 —— 若 FQ4 改成下一行版式, 本条会报低置信并要求人工填 value_line_offset, 不会静默取错数(E-32)"
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
      },
      {
        "name": "综合分",
        "value": "58.4"
      },
      {
        "name": "象限动作",
        "value": "等待企稳分批"
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
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /nfp-event",
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
    "id": "cpi-2026-09-rel2026-10-14",
    "kind": "macro",
    "title": "2026-09 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-10-14T08:30:00-04:00",
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /cpi-event",
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
    "id": "tsm-earnings-2026-10-14",
    "kind": "earnings",
    "ticker": "TSM",
    "company": "TSM",
    "title": "TSM 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-14T16:05:00-04:00",
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-15),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
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
      },
      {
        "name": "综合分",
        "value": "73.8"
      },
      {
        "name": "象限动作",
        "value": "等待企稳分批"
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
    "id": "conf-gtc-berlin-2026-10-20",
    "kind": "event",
    "title": "NVIDIA GTC Berlin",
    "subtitle": "欧洲主权 AI 订单、本地数据中心合作",
    "org": "NVDA",
    "ticker": "NVDA",
    "company": "",
    "date": "2026-10-20T09:00:00-04:00",
    "dateNote": "不发 8-K,无可编程触发,证据上限 B · 无会前卡 → 跑 /conference-preview",
    "dateConfirmed": true,
    "importance": 1,
    "tags": [
      "product",
      "ASML",
      "SIE.DE"
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
        "value": "ASML、SIE.DE"
      }
    ]
  },
  {
    "id": "nflx-earnings-2026-10-20",
    "kind": "earnings",
    "ticker": "NFLX",
    "company": "NFLX",
    "title": "NFLX 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-20T16:05:00-04:00",
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-21),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
        "when": "2026-07-16",
        "what": "EPS 意外 +1.4% · 实际 0.8 vs 预期 0.79",
        "outcome": "次日 -7.26%（小 beat 0–2%）"
      },
      {
        "when": "2026-04-16",
        "what": "EPS 意外 -1.4% · 实际 1.23 vs 预期 1.25",
        "outcome": "次日 -9.72%（小 miss 0–2%）"
      },
      {
        "when": "2026-01-20",
        "what": "EPS 意外 +1.4% · 实际 0.56 vs 预期 0.55",
        "outcome": "次日 -2.18%（小 beat 0–2%）"
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
        "value": "$71.71"
      },
      {
        "name": "概率加权目标价",
        "value": "$79.72"
      },
      {
        "name": "压力调整底线",
        "value": "$70.01"
      },
      {
        "name": "安全边际",
        "value": "-2.37%"
      },
      {
        "name": "综合分",
        "value": "52.8"
      },
      {
        "name": "象限动作",
        "value": "回避"
      }
    ],
    "targets": {
      "low": "$50",
      "avg": "$80",
      "high": "$115",
      "n": "本站三情景加权 · 卖方一致 $85.00"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
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
    "dateNote": "盘前 · 按历史排期推算(基准 2025-10-22),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期",
      "核心"
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
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-22),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "31.7"
      },
      {
        "name": "象限动作",
        "value": "双弱-回避/清仓"
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
    "id": "nok-catalyst-2026-10-22",
    "kind": "earnings",
    "ticker": "NOK",
    "company": "NOK",
    "title": "NOK 财报",
    "subtitle": "Q3'26 财报(v3 核心裁决日)",
    "org": "",
    "date": "2026-10-22T16:05:00-04:00",
    "dateNote": "取自论点卡催化剂,日期未确认 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
    "history": [],
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$10.56"
      },
      {
        "name": "概率加权目标价",
        "value": "$8.88"
      },
      {
        "name": "压力调整底线",
        "value": "$7.51"
      },
      {
        "name": "安全边际",
        "value": "-28.88%"
      },
      {
        "name": "综合分",
        "value": "56.5"
      },
      {
        "name": "象限动作",
        "value": "反弹观望/减持"
      }
    ],
    "targets": {
      "low": "$6",
      "avg": "$9",
      "high": "$12",
      "n": "本站三情景加权 · 卖方一致 $12.03"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "intc-earnings-2026-10-22",
    "kind": "earnings",
    "ticker": "INTC",
    "company": "INTC",
    "title": "INTC 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-22T16:05:00-04:00",
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-23),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
        "when": "2026-07-23",
        "what": "EPS 意外 +92.5% · 实际 0.42 vs 预期 0.22",
        "outcome": "次日 -7.89%（巨 beat >10%）"
      },
      {
        "when": "2026-04-23",
        "what": "EPS 意外 +2108.7% · 实际 0.29 vs 预期 0.01",
        "outcome": "次日 +23.60%（巨 beat >10%）"
      },
      {
        "when": "2026-01-22",
        "what": "EPS 意外 +81.5% · 实际 0.15 vs 预期 0.08",
        "outcome": "次日 -17.03%（巨 beat >10%）"
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
        "value": "$97.82"
      },
      {
        "name": "概率加权目标价",
        "value": "$83.25"
      },
      {
        "name": "压力调整底线",
        "value": "$63.09"
      },
      {
        "name": "安全边际",
        "value": "-35.50%"
      },
      {
        "name": "综合分",
        "value": "59.0"
      },
      {
        "name": "象限动作",
        "value": "回避"
      }
    ],
    "targets": {
      "low": "$42",
      "avg": "$83",
      "high": "$129",
      "n": "本站三情景加权 · 卖方一致 $115.17"
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
    "dateNote": "取自论点卡催化剂,日期未确认 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "催化剂",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "72.8"
      },
      {
        "name": "象限动作",
        "value": "买入/持有"
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
    "dateNote": "14:00 ET · 无前瞻卡 → 跑 /fomc-event",
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
    "id": "googl-earnings-2026-10-28",
    "kind": "earnings",
    "ticker": "GOOGL",
    "company": "GOOGL",
    "title": "GOOGL 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-28T16:05:00-04:00",
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-29),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "50.4"
      },
      {
        "name": "象限动作",
        "value": "回避(双弱象限:基本面60<65且技术面28<60)"
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
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-29),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "53.2"
      },
      {
        "name": "象限动作",
        "value": "回避"
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
    "dateNote": "盘前 · 按历史排期推算(基准 2025-10-30),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期",
      "核心"
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
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-30),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "58.4"
      },
      {
        "name": "象限动作",
        "value": "回避/减持"
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
    "dateNote": "盘后 · 按历史排期推算(基准 2025-10-30),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "推算日期",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "63.7"
      },
      {
        "name": "象限动作",
        "value": "基本面 61(<65 弱)+ 技术面 70(>=60 强) -> 反弹观望/减持:仓位上限由 6 折降至 4 折,反弹至 277.8-278.6 阻力带为减持位,271.58 以上一股不加;回踩 236-247 三均线收敛带才分批,跌破 226 止损重估"
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
    "id": "amd-catalyst-2026-11-03",
    "kind": "earnings",
    "ticker": "AMD",
    "company": "AMD",
    "title": "AMD 财报",
    "subtitle": "Q3'26 财报 —— 本轮裁决点",
    "org": "",
    "date": "2026-11-03T16:05:00-05:00",
    "dateNote": "取自论点卡催化剂,日期未确认 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "催化剂",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "66.6"
      },
      {
        "name": "象限动作",
        "value": "买入/持有(象限机械结论;安全边际 -35.5% 触发强制降级, 实际动作为持有不加仓)"
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
    "id": "duol-catalyst-2026-11-04",
    "kind": "earnings",
    "ticker": "DUOL",
    "company": "DUOL",
    "title": "DUOL 财报",
    "subtitle": "Q3 2026 财报——最关键的单一事件",
    "org": "",
    "date": "2026-11-04T16:05:00-05:00",
    "dateNote": "取自论点卡催化剂,日期未确认 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
    "id": "hood-catalyst-2026-11-04",
    "kind": "earnings",
    "ticker": "HOOD",
    "company": "HOOD",
    "title": "HOOD 财报",
    "subtitle": "Q3 2026 财报——最关键的单一事件",
    "org": "",
    "date": "2026-11-04T16:05:00-05:00",
    "dateNote": "取自论点卡催化剂,日期未确认 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
    "id": "abnb-catalyst-2026-11-05",
    "kind": "earnings",
    "ticker": "ABNB",
    "company": "ABNB",
    "title": "ABNB 财报",
    "subtitle": "Q3 2026 财报——最关键的单一事件",
    "org": "",
    "date": "2026-11-05T16:05:00-05:00",
    "dateNote": "取自论点卡催化剂,日期未确认 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
    "id": "nfp-2026-10-rel2026-11-06",
    "kind": "macro",
    "title": "2026-10 非农就业报告",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-11-06T08:30:00-05:00",
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /nfp-event",
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
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /cpi-event",
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
    "dateNote": "不发 8-K,无可编程触发,证据上限 B · 无会前卡 → 跑 /conference-preview",
    "dateConfirmed": true,
    "importance": 1,
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
    "dateNote": "取自论点卡催化剂,日期未确认 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 3,
    "tags": [
      "催化剂",
      "核心"
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
      },
      {
        "name": "综合分",
        "value": "70.8"
      },
      {
        "name": "象限动作",
        "value": "买入/持有（本卡读作『持有不加』—— 安全边际 -2.83% 为负，矩阵允许的『买入』一档被安全边际否决）"
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
    "dateNote": "不发 8-K,无可编程触发,证据上限 B · 无会前卡 → 跑 /conference-preview",
    "dateConfirmed": true,
    "importance": 1,
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
    "dateNote": "不发 8-K,无可编程触发,证据上限 B · 无会前卡 → 跑 /conference-preview",
    "dateConfirmed": true,
    "importance": 1,
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
    "id": "nfp-2026-11-rel2026-12-04",
    "kind": "macro",
    "title": "2026-11 非农就业报告",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2026-12-04T08:30:00-05:00",
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /nfp-event",
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
    "id": "conf-gev-investor-update-2026-12-08",
    "kind": "event",
    "title": "GE Vernova Investor Update",
    "subtitle": "多年营收/EBITDA 指引、分红与回购授权、分部 backlog",
    "org": "GEV",
    "ticker": "GEV",
    "company": "",
    "date": "2026-12-08T09:00:00-05:00",
    "dateNote": "日期按历年惯例推算,公司未官宣 · 不发 8-K,无可编程触发,证据上限 B",
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
        "value": "数据中心电力作为算力的上游约束 · 弱正相关,信号价值 > 定价价值 · GEV 的燃机在手合同(C4,YE2026 ≥125GW)是「电力够不够」的实物侧读数。上修 ⇒ 电力不是 2027-28 的硬约束;下修或静默删除 ⇒ 电力约束比市场认为的更紧,这对 NVDA 是久期风险而非当季风险。⚠ 本卡不改 NVDA 任何 pillar,越界交棒 /thesis-tracker"
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
    "dateNote": "14:00 ET · 无前瞻卡 → 跑 /fomc-event",
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
    "dateNote": "08:30 ET · 无前瞻卡 → 跑 /cpi-event",
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
    "dateNote": "盘后 · 按历史排期推算(基准 2025-12-11),公司未官宣 → 跑 /earnings-preview 建卡",
    "dateConfirmed": false,
    "importance": 2,
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
      },
      {
        "name": "综合分",
        "value": "48.0"
      },
      {
        "name": "象限动作",
        "value": "回避"
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
    "id": "fomc-2027-01-27",
    "kind": "macro",
    "title": "FOMC 议息决议",
    "subtitle": "",
    "org": "Federal Reserve",
    "ticker": "",
    "company": "",
    "date": "2027-01-27T14:00:00-05:00",
    "dateNote": "14:00 ET · 无前瞻卡 → 跑 /fomc-event",
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
    "dateNote": "不发 8-K,无可编程触发,证据上限 B · 无会前卡 → 跑 /conference-preview",
    "dateConfirmed": true,
    "importance": 1,
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
