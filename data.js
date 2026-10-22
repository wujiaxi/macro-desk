/* 本文件由 ~/macro_desk_build.py 自动生成 —— 不要手改。
   内容来自 ~/thesis/{macro,earnings,conferences}/ 的机器可读块,
   改内容请改卡片,然后重跑生成器。 */

export const meta = {
  "title": "宏观 & 财报事件台",
  "subtitle": "前瞻 · 靴子落地 · 倒计时",
  "updated": "2026-10-22 14:00 ET · ⚠️ 22 条告警: NFP 日历只剩 43 天(<60),跑 macro_calendar.py -…",
  "owner": "内部社群版",
  "disclaimer": "本站内容为个人研究记录，不构成投资建议。数据由 skill 卡片的机器可读块自动生成。"
};

export const markets = [
  {
    "label": "S&P 500",
    "value": "7,653.26",
    "chg": "-1.34%",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "纳斯达克100",
    "value": "28,980.2",
    "chg": "-2.80%",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "DXY",
    "value": "101.61",
    "chg": "+0.01%",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "黄金",
    "value": "4,061.10",
    "chg": "-1.12%",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "WTI 原油",
    "value": "99.89",
    "chg": "+1.39%",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "BTC",
    "value": "81,100",
    "chg": "-3.48%",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "VIX",
    "value": "18.90",
    "chg": "+2.22",
    "dir": "up",
    "note": "实时 14:00 ET"
  },
  {
    "label": "US 10Y",
    "value": "4.97%",
    "chg": "-18.1bp",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "US 30Y",
    "value": "5.30%",
    "chg": "-13.8bp",
    "dir": "down",
    "note": "实时 14:00 ET"
  },
  {
    "label": "US 2Y",
    "value": "4.79%",
    "chg": "+2.0bp",
    "dir": "up",
    "note": "as-of 2026-10-20 · 2s10s +32bp"
  },
  {
    "label": "10月加息概率",
    "value": "16%",
    "chg": "一周前 22%",
    "dir": "flat",
    "note": "ZQ 期货自算 · 2026-10-21 ⚠️"
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
        "d1": "+1.14%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+0.02%",
        "d1": "+1.73%"
      },
      {
        "asset": "US 2Y",
        "d0": "+7bp",
        "d1": "-7bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+1bp",
        "d1": "-7bp"
      },
      {
        "asset": "DXY",
        "d0": "+0.66%",
        "d1": "-0.09%"
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
    "id": "conf-meta-connect-2026-09-23",
    "kind": "event",
    "title": "Meta Connect",
    "subtitle": "可穿戴出货与资本开支叙事、Llama 开源节奏",
    "org": "META",
    "ticker": "META",
    "company": "",
    "date": "2026-09-23T19:00:00-04:00",
    "dateEnd": "2026-09-23T21:00:00-04:00",
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
    "actual": [
      {
        "name": "Muse 会不会第一次拿到一个数字",
        "actual": "Muse 没有任何采用/付费/收入数字,只有形容词;宣布 Muse 上 AI 眼镜,时间只说 in the coming months(不算时间表);未见放宽免费额度。新增硬件 Muse Charm(口袋设备,later this year 再说)",
        "consensus": "只讲能力、生态与 Muse Spark 开发者接口,不给任何订阅用户数、付费转化或收入口径(与 9/8 上线时一致:仅披露定价档位与免费额度,未给采用数据)",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "Ray-Ban Display 国际上市:上次承诺过,这次如果不提就是坏消息",
        "actual": "Ray-Ban Display 首次可网购;英国 £749、加拿大 CA$1,149 当日开卖;法/意/德 €899 当日预订、10 月 13 日上市。比原承诺(法意加英)多了德国",
        "consensus": "不提。2026-01-06 暂停后至今未给新日期,本场也未在官方议程里预告国际市场环节",
        "prior": "",
        "surprise": "利好",
        "dir": "up"
      },
      {
        "name": "Project Phoenix 给到哪一步",
        "actual": "Project Phoenix 以 Meta VR Glasses 发布:2027 年春、$1,299.99、约 100 克、分体计算单元。给了价格与窗口(超出事前「只 preview」),但没有开放开发者套件申请(没达到事前写的利好条件),且价格高于此前报道的 1,000 美元以下 —— 两个方向相抵,判中性",
        "consensus": "台上做 preview,不给零售价与开卖日。注意:2027 上半年出自 Business Insider 的内部备忘录、<$1000 出自 WSJ 2025 报道,两者都不是管理层公开承诺,故事前预期不含任何官方时间表",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "AI 眼镜品类的量:会不会第一次被量化",
        "actual": "没有任何出货数或产能数字;只有 world's best-selling 形容词与「年底前 100+ 款式」;Meta Glasses 新进新加坡/韩国/墨西哥(当日)、巴西/阿联酋(即将)。未承认供给受限",
        "consensus": "只给势头形容词,不给具体出货数。现有公开锚点全部来自第三方:EssilorLuxottica 称 2025 年售出 700 万副以上(CNBC 2026-02-11)、IDC 给 Meta 2026Q1 智能眼镜份额 69.2%",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "芯片归属有没有变",
        "actual": "官方材料确认 Meta VR Glasses 采用高通新款 Snapdragon Reality Elite;其余新眼镜(Ray-Ban Meta Gen 3 / Audio)的芯片本场材料未写",
        "consensus": "keynote 不点名芯片供应商(Meta 历来不提),归属只能靠会后规格页与拆解确认。现状:Ray-Ban Display 用 Snapdragon AR1 Gen 1、Neural Band 用 QCC5100-001,高通器件占该系统物料 15.7%(TechInsights 拆解)",
        "prior": "",
        "surprise": "利好",
        "dir": "up"
      }
    ],
    "reaction": [
      {
        "asset": "META",
        "d0": "+1.02%",
        "d1": "+4.50%"
      },
      {
        "asset": "QCOM",
        "d0": "-0.52%",
        "d1": "-1.51%"
      },
      {
        "asset": "NVDA",
        "d0": "-1.47%",
        "d1": "-0.41%"
      },
      {
        "asset": "QQQ",
        "d0": "-0.84%",
        "d1": "-0.01%"
      }
    ],
    "verdict": "判定:偏利好,但利好不在最关键的问题上。 硬件这边的执行比我预期的好:Ray-Ban Display 终于在海外开卖,VR 眼镜给出了价格和上市时间,眼镜产品线扩到 100 多款。但对估值最重要的「Muse 能不能赚钱」,这场会仍然没有给出任何数字。 凭哪几个数: ① Ray-Ban Display 在加拿大、英国当天开卖(£749 / 1,149 加元),法国、意大利、德国 10 月 13 日上市(899 欧元)—— 去年承诺的是「2026 年初」,晚了约 9 个月,但多了德国;② 新的 Meta VR Glasses 定在 2027 年春、1,299.99 美元,比此前媒体报道的「1,000 美元以下」贵约 30%;③ Muse 只有「反响非常好」这类形容词,没有用户数、付费数或收入;④ 会后第一个交易日(9/24)META 收涨 4.5%,纳指 100 ETF 基本持平。 对市场什么意思: 这场会证明了眼镜和 VR 硬件在按计划推进,但「巨额 AI 投入有没有回报」这个核心问题,要等 10 月底的三季度财报。高通的新芯片被 Meta VR 眼镜官方确认采用,但高通自己的年度峰会同一时间在开,它 9/24 跌 1.5% 分不清是哪场会的影响。 可信度边界: 所有信息来自 Meta 官方博客(公司署名,不是具名高管的原话),证据等级 B,不进 SEC 备案。另外 META 在会前的 9/21 已经单日大涨 11%,原因我还没核实;9/24 的 4.5% 里有多少是这场会带来的,目前无法区分。",
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
    "importance": 3,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "本次季末偏「卖股买债」,但量级大约只有 6 月季末的一半;对个人仓位不构成操作理由。",
    "watch": [
      "9/28–9/30 最后三天股债相对表现有没有反转:若股票大跌、债券大涨,超配会收窄甚至反向,「卖股买债」的压力随之变小",
      "9/30 收盘集合竞价的成交量(季末同时是月末,放量不等于养老金在卖)",
      "事后有没有卖方或媒体补出本季资金流估算原文 —— 有就补进 §5,并写明是事后补的",
      "历史参照:股票超配的季末,最后三天股票相对债券平均只少 0.10 个百分点(61 次,统计上与零无区别)—— 不要把方向判断当成交易信号",
      "⚠️ 不许默认「季末=买盘」,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,写「未取到」,不许编"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [
      {
        "name": "季末前 3 日 · 股减债",
        "actual": "-0.52pp",
        "consensus": "卖股买债(股票相对偏弱)",
        "prior": "",
        "surprise": "符合",
        "dir": "down"
      },
      {
        "name": "季末前 3 日 · 标普",
        "actual": "-1.13%",
        "consensus": "",
        "prior": "",
        "surprise": "",
        "dir": "down"
      },
      {
        "name": "季初 3 日 · 标普",
        "actual": "+1.60%",
        "consensus": "",
        "prior": "",
        "surprise": "",
        "dir": "up"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-0.25%",
        "d1": "+0.19%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+0.23%",
        "d1": "+0.31%"
      },
      {
        "asset": "US 2Y",
        "d0": "-1bp",
        "d1": "-10bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+3bp",
        "d1": "-5bp"
      },
      {
        "asset": "DXY",
        "d0": "+0.08%",
        "d1": "+0.64%"
      }
    ],
    "verdict": "判定:方向判对了,量级判错了;「不参与」这个动作事后看仍然对。 季末前最后三天股票确实跑输债券,方向和「卖股买债」一致;但我说「量级只有 6 月一半」,而事后能找到的唯一一份美元估算把这次排在 2000 年以来前 2%。这次真正主导的是股票、债券两条腿同向推高股票占比这股机械力量;被压制的是我事前担心的「方向是公开常识、早被提前交易掉」—— 最后三天的相对走势照样出现了,没有被提前吃光。我原来没列到的是债券大跌对养老金的分量:我用 60/40 组合的相对涨跌来量「要卖多少」,而美国确定给付型养老金债券占比高得多,债券跌 3%、长债跌 7% 对它们的冲击比对 60/40 大;另外 9/30 盘后 MU 财报、10/2 非农都落在季末后三天里,我事前只笼统写了「叠着别的力量」,没点名。 凭的数(全部引自 rebal_drift.py 2026-10-16 14:20 生成的 2026-09-30 一行,以及两张同期卡片的程序区):9/25 收盘 → 9/30 收盘,标普 500 ETF 跌 1.13%,股票相对债券少 0.52 个百分点(事前历史同组平均少 0.10、一半季末为负);季末后三个交易日(到 10/5)标普 ETF 涨 1.60%,股票相对债券多 1.68 个百分点。60/40 股票超配仍是事前那个 +1.53 个百分点。资金流规模:Reuters 10/1 转述高盛 9/28 报告,美国养老金季末前后约卖出 $330 亿股票、买入债券,按美元计排在 2000 年以来第 98 百分位(二手转述,没见报告原文)。同一窗口的其他事:MU 9/30 盘后财报,10/1 收盘自算 -3.24%(MU 卡程序区);10/2 非农当天 SPX +0.73%,落在噪声带内(非农卡程序区)。 对市场什么意思:季末再平衡这股力量方向可以靠算术提前知道,为什么方向对也很简单 —— 本季股票涨、债券跌,两边一起把股票占比推高,这不是预测,是记账;季初调回目标权重的组合季末只能往回卖。但知道方向不等于能赚钱:这次 -0.52 个百分点只是一次抽样,历史上同组 62 个季末(已含本次)平均只少 0.11 个百分点、t 值 -0.72,与零没有区别;6 月那次超配更大,最后三天股票反而跑赢债券约 2 个百分点。季末后的反弹(+1.68 个百分点)和历史上「季末后三天股票偏强」的形态同向,但那个形态本身也不显著,而且这三天里还有非农和 MU 财报,分不开是谁推的。 可信度边界:量级上我和卖方用的是两把不同的尺子 —— 我的是 60/40 相对漂移,高盛的是按养老金实际资产规模与配置推的美元数,而且美元百分位会被资产规模逐年变大往上推,两者谁更贴近真实下单量,一手数据回答不了。$330 亿是 Reuters 的二手转述;6 月那次 $1650 亿是摩根大通的全球口径,与这次范围不同,不能拿来比大小。价格检验只看股债 ETF 相对涨跌,季末同时是月末、季度期权到期,还叠着 9/16 加息后的债市下跌,分不开是谁在推。",
    "history": [
      {
        "when": "n=91",
        "what": "全部的季末",
        "outcome": "季末前 3 日:标普 +0.03%(上涨 54%)· 股减债 -0.14pp(t -0.79)· 季初 3 日标普 +0.38%"
      },
      {
        "when": "n=62",
        "what": "股票超配(应卖股)的季末",
        "outcome": "季末前 3 日:标普 +0.02%(上涨 50%)· 股减债 -0.11pp(t -0.72)· 季初 3 日标普 +0.29%"
      },
      {
        "when": "n=29",
        "what": "股票低配(应买股)的季末",
        "outcome": "季末前 3 日:标普 +0.06%(上涨 62%)· 股减债 -0.22pp(t -0.46)· 季初 3 日标普 +0.56%"
      },
      {
        "when": "n=17",
        "what": "大幅超配 ≥2.0pp的季末",
        "outcome": "季末前 3 日:标普 +0.18%(上涨 53%)· 股减债 -0.02pp(t -0.09)· 季初 3 日标普 +0.32%"
      },
      {
        "when": "n=7",
        "what": "大幅低配 ≤-2.0pp的季末",
        "outcome": "季末前 3 日:标普 -1.17%(上涨 29%)· 股减债 -1.72pp(t -1.65)· 季初 3 日标普 +1.01%"
      },
      {
        "when": "2026-09-30",
        "what": "股票超配 +1.53pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -1.13% · 股减债 -0.52pp · 季初 3 日标普 +1.60%"
      },
      {
        "when": "2026-06-30",
        "what": "股票超配 +2.70pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +1.70% · 股减债 +1.97pp · 季初 3 日标普 +0.60%"
      },
      {
        "when": "2026-03-31",
        "what": "股票超配 -1.10pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +0.81% · 股减债 +0.08pp · 季初 3 日标普 +1.32%"
      },
      {
        "when": "2025-12-31",
        "what": "股票超配 +0.66pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -1.22% · 股减债 -1.05pp · 季初 3 日标普 +1.45%"
      },
      {
        "when": "2025-09-30",
        "what": "股票超配 +1.14pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +1.24% · 股减债 +0.98pp · 季初 3 日标普 +0.46%"
      },
      {
        "when": "2025-06-30",
        "what": "股票超配 +1.81pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +1.77% · 股减债 +1.37pp · 季初 3 日标普 +1.21%"
      },
      {
        "when": "2025-03-31",
        "what": "股票超配 -1.14pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -1.62% · 股减债 -2.34pp · 季初 3 日标普 -4.06%"
      },
      {
        "when": "2024-12-31",
        "what": "股票超配 +1.96pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -2.54% · 股减债 -2.60pp · 季初 3 日标普 +1.58%"
      }
    ],
    "readThrough": [
      {
        "name": "凭的数",
        "value": "本季至今(6/30 → 9/25)标普 500 ETF 含息涨 3.55%,美国综合债 ETF 跌 2.91%,股票跑赢债券约 6.5 个百分点。一个季初刚调回 60/40 的组合,现在股票占比漂到约 61.5%,超配约 1.5 个百分点;上一季(二季度)同口径是 3.2 个百分点。"
      },
      {
        "name": "历史上怎么走",
        "value": "2004 年以来有 61 个季末在最后三个交易日前也是股票超配,那三天股票相对债券平均只少 0.10 个百分点,上涨与下跌几乎各半,统计上和「没有规律」分不开;超配 2 个百分点以上的 17 次也一样。"
      },
      {
        "name": "对市场什么意思",
        "value": "按目标权重操作的养老金与目标日期基金,季末前后大概率要卖一部分股票、买一部分债券。压力方向是确定的,但比 6 月那次小。"
      },
      {
        "name": "可信度边界",
        "value": "本轮没取到任何卖方针对这次季末的资金流规模估算,所以「要卖多少钱」本卡不给数。历史检验只看股债价格,季末同时是月末,还叠着期权到期等别的力量,分不出是谁在推。各家的再平衡规则(按日历还是按阈值、月度还是季度)差别很大,最后三个交易日的涨跌也会改变偏离幅度。"
      }
    ],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "pricing": "程序数字 · 本季漂移(每日收盘后更新)",
      "history": "03 — 历史同类回看 · 季末(程序算;|t|<2 视为与零无区别;价格现象,不是资金流测量)",
      "actCols": {
        "a": "项目",
        "b": "实际",
        "c": "事前方向判断",
        "d": "—",
        "e": "方向对不对"
      },
      "readThrough": "前瞻判定 · 卡片原文(2026-10-17 00:30 写;数字以程序表为准)"
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
    "thesis": "隐含波动:事件跳空 ±6.94%(期限结构反解)/ ±8.54%(raw),盈亏平衡 989.85 / 1,174.71;到期日 2026-10-02(7 DTE),ATM 1,080,跨式中价 92.42,put/call 中价比 0.911(下跌保护反而更便宜) 期权贵不贵:近 8 季实际波动中位 ±9.12% → 比值 0.76× = 期权偏便宜(<0.85),买波动的结构占优于方向性股票仓位(只说结构,非投资建议) 反应函数一句:MU 的 beat 是入场费不是彩票 —— 近 20 季 beat 率 90%、其中 beat 却跌 11 次,surprise 与次日涨跌相关系数仅 0.277(几乎不解释)。定价权在指引与毛利率斜率,不在当季 EPS。 门槛配置(表 ⑦ 裁决):买方 bar 36.213 ≥ 指引上沿 32.000(+13.2%) → 市场已按指引打满定价。未打满即实质 miss,即使名义 beat。 🔴 本卡最重要的一个发现:卖方一致不是独立的 bar,它就是公司指引本身。 动作(四选一):财报前不动 期望值 = +0.76% vs 事件隐含 ±6.94% → 赔率近零:方向性赌注的回报不足以覆盖两侧尾部 持有者 vs 空仓者(不许合并):",
    "expectations": [
      {
        "name": "公司指引中值",
        "consensus": "31",
        "prior": "",
        "range": "vs 卖方一致 -1.9%",
        "note": ""
      },
      {
        "name": "公司指引上沿",
        "consensus": "32",
        "prior": "",
        "range": "vs 卖方一致 +1.3%",
        "note": ""
      },
      {
        "name": "卖方一致",
        "consensus": "31.594",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "36.213",
        "prior": "",
        "range": "vs 卖方一致 +14.6%",
        "note": "市场已按指引打满定价,未打满上沿即实质 miss"
      },
      {
        "name": "卖方最高值",
        "consensus": "37.44",
        "prior": "",
        "range": "vs 卖方一致 +18.5%",
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
        "prob": "22%",
        "trigger": "FQ4 收入 ≥ 61.9B 且 FQ1-27 EPS 指引 ≥ 40.70 且 FQ1-27 GM 指引 ≥ 89%",
        "reaction": "+20.80% · 1,307.39"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "33%",
        "trigger": "FQ4 收入 55.0-61.9B、EPS 打穿买方 bar 36.213, 但 FQ1-27 EPS 指引落在 34-40.70、GM 指引 86-89%",
        "reaction": "-0.19% · 1,080.22"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "45%",
        "trigger": "允许 EPS 大幅 beat: FQ1-27 EPS 指引 < 34.00, 或 GM 指引 ≤ 86%, 或 FQ4 收入 < 55.0B",
        "reaction": "-8.35% · 991.91"
      }
    ],
    "watch": [
      "FY2027 capex 与 SCA 价格天花板的指引措辞 — 利好: 量化说明 SCA 天花板仅适用 existing products、HBM4/HBM4E/新制程不受价格上限约束(或给出 SCA 覆盖比例 × 加权 ASP 的可验证拆分); 或 FY27 净 capex 指引明确配供给纪律措辞(位元供给增速 ≤ 行业需求增速 / 新增产能已被 SCA 锁定) — 利空: 首次用「价格涨幅放缓 / 正常化 / 客户库存回补接近尾声」类表述解释 FQ1-27 指引; 或重申天花板锁在 CY2026Q2 市价且覆盖面继续扩大; 或 FY27 净 capex 大幅上调而不配供给纪律措辞",
      "买方在问 — ① SCA 的价格天花板,什么时候开始咬住 ASP? · 市场现在假设: SCA(Strategic Customer Agreements)是纯利好 —— take-or-pay + 客户押金,把周期股变成合约股。 · 利好: 管理层量化说明天花板只适用 existing products、HBM4/HBM4E/新制程产品不受限,或给出「SCA 覆盖比例 × 加权 ASP」的可验证拆分。 · 利空: 重申天花板锁定且覆盖面继续扩大,或首次用「价格涨幅正常化」解释 FQ1-27 指引。",
      "买方在问 — ② FY2027 净 capex 给多少 —— 它同时是需求信号和供给威胁 · 利好: FY27 净 capex 明确配供给纪律措辞(位元供给增速 ≤ 行业需求增速 / 新增产能已被 SCA 锁定)。 · 利空: 大幅上调而不配纪律措辞 —— 那会被读成 2028 供给悬崖提前定价,直接命中 MU.md 的 pillar 2(倍数压制,已证伪状态)。",
      "买方在问 — ③ 毛利率的二阶导 —— 涨价到底停没停 · 市场现在假设: FQ4 GM 约 86%(指引),FQ1-27 继续抬。 · 利好: FQ1-27 GM 指引 ≥ 89%;什么算利空:≤ 86%(= 与 FQ4 指引持平,MU.md 预承诺的「走平」档)。 · 利空: ≤ 86%(= 与 FQ4 指引持平,MU.md 预承诺的「走平」档)。",
      "FQ1-27 非GAAP EPS 指引中值(第一定价变量) · 预期 37.00 · 利好 ≥ 40.70(建卡时 = 下季一致 34.875 × 1.1462) · 利空 < 34.00(建卡时低于一致 34.875;9/25 一致 35.455,阈值锁死未随动)",
      "FQ1-27 收入指引中值 · 预期 59.0B · 利好 ≥ 64.0B · 利空 < 55.0B(建卡时低于一致 56.656B;9/25 一致 57.287B,阈值锁死)",
      "FQ1-27 非GAAP 毛利率指引 · 预期 87.5% · 利好 ≥ 89.0% · 利空 ≤ 86.0%(= 与 FQ4 指引持平,涨价停)",
      "FQ4-26 实际收入 · 预期 57,500(百万美元) · 利好 ≥ 61,900(历史超指引中位 +23.7% 复刻) · 利空 < 55,000(beat < 10%,MU.md 预承诺的 sandbag 失效第一证据)",
      "FQ4-26 实际非GAAP 毛利率 · 预期 88.5% · 利好 ≥ 90.0% · 利空 ≤ 86.5%(仅打平指引,前三季均超 +3.9~6.9pt)",
      "Cloud Memory BU 收入(AI/HBM 直读) · 预期 19,500(百万美元) · 利好 ≥ 22,000 · 利空 < 17,000",
      "*(定性)* FY2027 capex 与 SCA 天花板措辞 · 预期 见 §3.2 ①② · 利好 见 FQ1-27 收入指引中值(十亿美元) · 利空 见 FQ1-27 收入指引中值(十亿美元)"
    ],
    "actual": [
      {
        "name": "FQ1-27 非GAAP EPS 指引中值",
        "actual": "38.15",
        "consensus": "37",
        "prior": "",
        "surprise": "中性偏好",
        "dir": "up"
      },
      {
        "name": "FQ1-27 收入指引中值(十亿美元)",
        "actual": "61.5",
        "consensus": "59",
        "prior": "",
        "surprise": "中性偏好",
        "dir": "up"
      },
      {
        "name": "FQ1-27 非GAAP 毛利率指引",
        "actual": "86.25",
        "consensus": "87.5",
        "prior": "",
        "surprise": "中性偏差",
        "dir": "flat"
      },
      {
        "name": "FQ4-26 实际收入(百万美元)",
        "actual": "54,229",
        "consensus": "57,500",
        "prior": "",
        "surprise": "证伪(触及利空阈值)",
        "dir": "down"
      },
      {
        "name": "FQ4-26 实际非GAAP 毛利率",
        "actual": "87",
        "consensus": "88.5",
        "prior": "",
        "surprise": "中性偏差",
        "dir": "flat"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-0.25%",
        "d1": "+0.19%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+0.23%",
        "d1": "+0.31%"
      },
      {
        "asset": "US 2Y",
        "d0": "-1bp",
        "d1": "-10bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+3bp",
        "d1": "-5bp"
      },
      {
        "asset": "DXY",
        "d0": "+0.08%",
        "d1": "+0.64%"
      }
    ],
    "verdict": "我错在哪(整体):基本面读对了,收盘方向读反了。① 判定:这是一次「名义超预期、实质不及」的财报 —— 本季每股收益 33.42 美元,比卖方一致高 5.78%,但比市场实际交易的门槛(按过去 8 季超预期幅度推算的 36.21)低 7.71%;收入 542.29 亿美元只比公司自己的指引高约 8.5%,前三季是 +9%~+28%,「每季大幅冲出自家指引」的模式断了;下季毛利率指引 86.25% 低于本季实际 87.0%,是这一轮上涨以来第一次环比下调。这三处我事前都押对了方向。② 但收盘不跟:按我事前写死的各项加权,预期次日约 -1.66%;10/01 收盘 1,097.39 美元、+3.03%(自算日线,与 MU.md v4 一致),方向错、差约 4.7 个百分点。⚠️ 本卡程序区 §8.0a/§8.6 印的 -3.24%/-3.26%(1,030.64/1,030.39)是 10/01 美东约 10:22 的盘中价(自动对账在开盘一小时内跑的),不是收盘价,不能当作「方向判对」的依据;程序区按要求未改动,修正命令见本节末。③ 主导力量:板块与利率带来的估值抬升压过了个股的实质不及 —— 当日费城半导体 +1.6%、美光相对仅多涨约 1.4 个百分点,10 年期美债从近 20 年高位回落、AI 买方融资叙事(Anthropic IPO、博通融资)推动芯片股反弹(归因来自 MU.md v4,未逐条核实);公司下季指引比卖方一致高约 7.6% 是唯一站在多头一边的基本面数,它让「实质不及」没法演变成抛售。被压制的力量:实质不及本身 —— 它不是不存在,10/01 开盘 -1.0%、盘中最低 1,022.90(约 -4%)正是它,只是到收盘被板块行情盖过;10/02 收盘回落到 1,074.89,相对板块再度走弱。④ 我原来没列到的:(a)当天的宏观/板块因子 —— 卡里所有加权项都是公司自身数字,没有一条能感受到利率与板块,而同类历史配置(大超预期 × 财报前一个月大涨,24 季)的中位数是 +2.14%,面板这次比我的论点集合更准;(b)第四财季是 14 周、下季回到 13 周,同样的指引按周折算环比更强;(c)电话会把毛利率下调解释为约 10 亿美元一次性薪酬成本、称下季是全年毛利率的底,书面件读不出这层;(d)云内存(HBM)业务单元毛利率 83% 已是四块里最低、增速也最慢,卡里只追了它的收入。⑤ 预期对了的部分为什么对:下季指引落在我事前给的区间里,是因为我用了「卖方一致」与「上次指引高出一致的幅度」两个锚取中点再为价格天花板打折 —— 指引高出一致的幅度确实从上次约 17% 减半到约 7.6%;毛利率和超指引幅度的方向判对,是因为管理层 6 月已经说过「涨价速度明显放缓」,这一条证据我用在了方向上,却没用在预期水平上(收入仍按超指引 +15% 去设),这是本次唯一可归咎于我的判断错误。可信度边界:收盘方向的归因是二手叙事加相对表现,只有一天样本,不能证明是哪一个宏观变量。 反应函数要不要改:不改,但记一笔观察。「超预期是入场费,定价看指引与毛利率斜率」这次在基本面层面再次成立(超预期 5.78% 却算实质不及),不成立的是「次日收盘只由公司自身数字决定」—— 这是单季、且由板块与利率当日行情驱动,按规则单季不改;若 12 月下一季财报再出现「个股实质不及、收盘仍随板块上涨」,就把板块/利率当日变动作为一条正式论点进卡。另记两条流程修正(不属于反应函数):① 预期水平要跟着自己手里的反证走,不能只用来定方向;② 自动对账不能在收盘前用盘中价判次日反应 —— 这是「盘中价冒充收盘价」的同型错误,应进 earnings-preview 已知坑台账。 是否同步 thesis 卡:已同步,本卡不再动长期卡。 MU.md 已在 10/01(v3)和 10/02(v4)两次消费这场财报:催化剂归档表已回填、旧版「涨价斜率支撑超预期」按其事前阈值(超指引不足 10%)判为证伪、新版五根论点 0 根新证伪、方向维持「多(观望;只减不加)」、信心度低。本卡事前写死的后续动作也核对过:两根核心论点(下季每股收益指引、下季毛利率指引)都没有跌破利空线,不触发「转交清仓评估」;毛利率指引 86.25% 仅高于利空线 0.25 个百分点,属贴线。⚠️ 一处残留待下次 /thesis-tracker 更新时顺手改:MU.md 催化剂归档表 9/30 那一行的「股价反应」仍写「10/1 盘中约 0% ~ -1%」,应改为收盘 +3.03%(其 v4 表头已是收盘口径)。目标价不归本卡管。",
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
      },
      {
        "label": "触发本次对账的 SEC 备案",
        "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MU&type=8-K&dateb=&owner=include&count=10"
      }
    ],
    "consensus": {
      "eps": "$31.594",
      "rev": "$51.24B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $36.213"
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
      "company": "EPS 38.15",
      "street": "下季 EPS 一致 $35.455",
      "note": "vs 卖方一致 35.45（+7.60%）"
    },
    "options": {
      "iv": "",
      "impliedMove": "±6.94%",
      "note": "盈亏平衡 $989.85 / $1174.71"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$1,097.39"
      },
      {
        "name": "概率加权目标价",
        "value": "$1,077.59"
      },
      {
        "name": "压力调整底线",
        "value": "$880.69"
      },
      {
        "name": "安全边际",
        "value": "-19.75%"
      }
    ],
    "targets": {
      "low": "$763",
      "avg": "$1,078",
      "high": "$1,471",
      "n": "本站三情景加权 · 卖方一致 $1,545.00"
    },
    "afterHours": {
      "move": "-3.26%",
      "note": "- 实际次日反应 -3.26%(基准收盘 1065.11 → 1030.39) - 隐含区间 ±6.9%(989.85 / 1174.71) → 实际 落在区间内 - 卡片内插预期 -1.66% vs 实际 -3.26%,误差 -1.60%(方向判对)"
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
    "thesis": "这次非农是 10 月 28 日联储会议之前最后一份就业报告,而那场加息市场现在给了约七成概率(建卡时约五成)——",
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
        "value": "+0.88%",
        "note": "噪声带 ±0.79"
      },
      {
        "name": "2Y 事前 21 日 run-up",
        "value": "+70bp",
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
    "actual": [
      {
        "name": "当月非农新增(k)",
        "actual": "29.0",
        "consensus": "70.0",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "前两月净修正(k)",
        "actual": "-60.0",
        "consensus": "0.0",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      },
      {
        "name": "失业率(%)",
        "actual": "4.2",
        "consensus": "4.1",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      },
      {
        "name": "时薪环比(%)",
        "actual": "0.1",
        "consensus": "0.3",
        "prior": "",
        "surprise": "利好",
        "dir": "up"
      },
      {
        "name": "劳动参与率(%)",
        "actual": "61.8",
        "consensus": "61.6",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "+0.73%",
        "d1": "+0.66%"
      },
      {
        "asset": "纳斯达克100",
        "d0": "+1.00%",
        "d1": "+0.87%"
      },
      {
        "asset": "US 2Y",
        "d0": "+5bp",
        "d1": "+1bp"
      },
      {
        "asset": "US 10Y",
        "d0": "+4bp",
        "d1": "+3bp"
      },
      {
        "asset": "DXY",
        "d0": "-0.17%",
        "d1": "+0.24%"
      }
    ],
    "verdict": "先说这段能裁什么、不能裁什么。 程序区收盘段是 2026-10-02 16:10 ET 回填的:2Y / 10Y / DXY 三格写着「无当日收盘,反应层待次交易日」,之后没有人重跑。所以这张卡的利率与美元方向 —— 也就是事前力量表里分量最重的那一半 —— 至今没有被对账。下面凡是涉及利率端的句子都只是「力量表怎么投的票」,不是「市场怎么走的」。补救办法见文末;本段按要求不改程序区,也不另算一套利率反应。 读数的名义与实质。 P1 = +29k,按本卡自己的刻度(趋势代理 70,热阈 160、冷阈 0)落在 inline 区,程序判「中性」;但相对卖方一致 +90k 是 -61k,相对前值 +162k 是 -133k(§8.1)。再叠上 P2 = -60k 的前两月净下修(证伪 bear)、失业率 4.2(证伪 bear)、时薪环比 0.1(证实 bull,远低于 0.2 的鸽阈)。名义上是「符合趋势」,实质上是一份全面偏软的报告:当月新增明显低于一致、8 月那根 +162k 的鹰派含量被下修抽走一部分、时薪环比跌出事前卡记录的近 6 个月区间 0.16–0.27。加权 S = -0.432 这个数之所以没有更负,是因为 P1 的 s 只有 -0.586 —— 它是相对趋势代理 70 算的,而不是相对一致 90。 主导的是哪股力量。 实际读数代入后只激活三股:f_rev_neg(P2 -60 ≤ -50)、f_ur_denom(P3 4.2 ≥ 4.2 且 P5 61.8 ≥ 61.8)、f_priced_in(run-up 2Y +70bp);f_inline_drift 因 P2 越出 (-50,50) 未激活。程序给的主导:利率与美元端是 f_rev_neg + f_priced_in(票负、agree 1.0),股指端是 f_ur_denom + f_priced_in(票正、agree 1.0)。股指实际 SPX +0.734%、NDX +1.004%,方向与票一致,但两者都在噬声带内(0.79 / 1.21),按 M-16 不裁、不计命中 —— 所以「股指主导力量赢了」在程序意义上不成立,只能说没被证伪。真正在分析层主导这一天的,是 修正值:P1 本身没触发任何一股 headline 力量(29 不在 f_head_miss 的 activate P1 <= 0,也差 4k 没进 partial (0,25]),是 P2 的 -60k 把 strength 3 的 f_rev_neg 拉进场。这正是老师那句「前两月修正值与当月新增同样重要」在这张卡上的具体兑现 —— 如果卡上只有 P1,这一天在力量表里就只剩 strength 1 的机械项。 被压制的是哪股力量。 程序在全部五个资产上都写「被压制 —」:激活的四股在方向上没有互相打架,没有反向票。事前名单里有资格被压制的两股都没出现而不是被压制:f_head_beat(P1 29 远低于 160)与 f_lfpr_drain(P5 61.8 反向上升,activate P5 <= 61.4 不成立)。要说「被压」,只能说的是 增长下修那条腿:f_rev_neg 与 f_head_miss 的股指方向事前写 ?,含义是「路径松动」与「增长下修」两条腿谁大事前不可判;当天股指收涨,与「路径松动那条腿大于增长下修」一致 —— 但同样在噬声带内,n=1、不裁,只能作为下一张卡把 ? 改成具体符号的弱证据,不能当结论。 对了的地方,为什么对。 三条站住了,而且都不依赖对读数的猜测: 1. 「方差事件不是方向事件」:事前五个概率加权落点(§8.2 程序值)全部小于噬声带的零头;事后两个能裁的资产都在带内(SPX 0.734 < 0.79、NDX 1.004 < 1.21)。连续第二张非农卡在这一条上成立 —— 它来自「概率加权期望幅度 vs 历史同日噪声」的量级比较,和方向判断无关,这是这套方法可迁移的部分。 2. f_ur_denom 把失业率 4.2 正确地读成了分母效应而不是走弱:参与率从 61.6 升到 61.8,失业率跟着上 0.1,正是阈值上调后它该捕捉的情形;§0-1 也事先写了「4.2 是 Reuters 的一致,别读成意外」,§0-3 写了 Sahm 实算 0.00、单月推不到 0.50。结果是 f_sahm 没出现、没有任何一股力量把 4.2 当衰退信号 —— 这一处防的是一个最容易犯的误读,防住了。 3. 情景划分:trigger 是穷举互斥的,读数落进 inline 不需要任何人工裁量;cool 的 P1 <= 0 没触发,所以 cool 情景里「股指正号是本卡最可能被打脸的假设」这一条未被检验,不能算对。 我错在哪(整体)。 一、P1 的刻度锚在趋势代理上,一致预期到了以后刻度没跟着变 —— 这是遵守锁死纪律的必然结果(P1.expect 70 当初就声明是趋势代理),但代价是一个 -61k 的一致预期落空在 §8.1 只被记成「中性」。下一张卡在有一致的情况下,f_head_miss 的 activate 应写成相对一致的形式,而不是只认绝对阈值。二、f_head_miss 的 partial 下沿 25 太窄:29 与 25 之差远小于单月 σ 110k,读数落在阈值旁 4k 而整股力量不在场,这是阈值假精度。三、收盘段缺根以后没人补跑,利率端 —— 本卡事前最有把握的那半(2Y/10Y/DXY 票负、agree 1.0)—— 两周后仍是空白。这不是方向错,是管线没闭环,比方向错更糟,因为它不报错。 我原来没列到的是什么。 程序层面:四类归类在五个资产上没有给出任何「我没列」标记 —— 利率端没有数据可判,股指端在噬声带内,按定义残差在噬声带内。分析层面,有一股力量是这张卡结构性漏掉的,程序输出里看得见它的痕迹:P4 时薪环比 0.1 被判「证实(bull)」,却没有任何一股力量消费这个读数。原因是 f_ahe 只写了热侧 P4 >= 0.4(事前认定它是「唯一能越过就业数据直接改路径的变量」),冷侧完全空着 —— 也就是说,工资这条通道在本卡里只能把路径往鹰的方向推,不能往鸽的方向拉。考虑到本次加息周期里联储自述的理由是通胀而不是增长,这一侧的缺失是不对称的。命名为 f_ahe_cool(工资降温 → 10/28 加息理由被削弱):dir 2Y:- 10Y:- DXY:- SPX:+ NDX:+,activate P4 <= 0.2,strength 2,evidence B,conflicts f_ahe,f_lfpr_drain。它当天会与 f_rev_neg 同向投票,不会改变任何资产的方向票,只会增加 mass —— 所以它不是「解释了残差」,而是「本该在场却不在表上」。已登记进 force-library-nfp.md,并注明它不是程序残差判出,下一张卡建卡时按此补冷侧。另一处事前登记的盲区(f_positioning 只看 SPX、NDX run-up 已 +4.7%)只对热读数有意义,这次没落 hot,未被检验,继续挂着。 regime 不改。 tightening_bias 事前锁死(M-12)。本次没有证据推翻它:没有任何读数显示联储会转向降息,软读数最多把 10/28 的加息推后,这正是 regime_reason 写的「弱就业只能把加息从 10/28 推到 12/09」。股指在软读数上收涨看起来像 bad-news-is-good-news,但在噬声带内,且与 tightening_bias 下「路径松动那条腿」的解释等价,不需要改制度声明。 是否同步其它卡。 程序 §8.5 无持仓层命中(没有超噬声带资产),不进重估队列。10/28 FOMC 卡的 priced_path 已被这份报告改写,应跑 /fomc-event 模式 P,不跨卡改数。利率端对账补救:由程序重跑 python3 ~/.claude/skills/macro-common/scripts/macro_reconcile.py ~/thesis/macro/NFP_2026-09_rel2026-10-02.md --stage close --write 补 10/02 收盘的 2Y/10Y/DXY,补完后若利率端出现超带且与票相反,本段「主导/被压制」要重写。",
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
    "actual": [
      {
        "name": "4Q26 收入指引中值(美元十亿)",
        "actual": "53.3",
        "consensus": "50",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "4Q26 营业利益率指引中值(%)",
        "actual": "57.5",
        "consensus": "58",
        "prior": "",
        "surprise": "中性偏差",
        "dir": "flat"
      },
      {
        "name": "4Q26 毛利率指引中值(%)",
        "actual": "66",
        "consensus": "66.5",
        "prior": "",
        "surprise": "中性偏差",
        "dir": "flat"
      },
      {
        "name": "3Q26 实际毛利率(%)",
        "actual": "66.4",
        "consensus": "67.5",
        "prior": "",
        "surprise": "证伪(触及利空阈值)",
        "dir": "down"
      },
      {
        "name": "3Q26 实际美元营收(美元十亿)",
        "actual": "46.72",
        "consensus": "46.6",
        "prior": "",
        "surprise": "中性(落在预期附近)",
        "dir": "flat"
      },
      {
        "name": "2nm 占晶圆收入比(%)",
        "actual": "8",
        "consensus": "8",
        "prior": "",
        "surprise": "中性(落在预期附近)",
        "dir": "flat"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-1.11%",
        "d1": ""
      },
      {
        "asset": "纳斯达克100",
        "d0": "-2.02%",
        "d1": ""
      }
    ],
    "verdict": "我错在哪(整体):主导的是板块下跌,不是这份财报。真正的反应日是 10-15(卡片误写 10-14,程序算的 -3.40% 是公布前一天的涨跌),当天 TSM -1.80%,在期权隐含的 ±3.03% 以内;两天合计 -4.04%,同期半导体指数 SOX -4.68%,扣掉板块后 TSM 自身的反应约为零。原因是两股力量互相抵消:量超预期(Q4 收入指引比卖方一致高 6.26%,全年增速改为约 +44%),但利润率进入平台期(Q3 毛利率 66.4%,三季来第一次没超过指引上沿;Q4 利润率指引几乎不动)。被压住的是量的超预期。我没列到的:板块 beta(卡里没有任何相对 SOX 的衡量)、建卡后股价已涨 6.5% 把门槛重新抬高、几条论点其实是同一件事被重复计权。对的地方:「财报前不动」、营收被月报提前锁死、上季一次性利得消失、名义 beat 实质 miss 的机制,这几条都判对了。但按相对板块的口径看,本卡整体偏悲观。 反应函数要不要改:要改,但改的是衡量口径,不改系数。本次 T0 -1.80% 不是尾部事件(在 ±3.03% 以内),但 §5 的 beat 却跌名单里已有 2026-04-15、2026-07-16,加上这次 10-15,连续三季绝对口径都是 beat 却跌,满足「连续两季同向偏差」。具体改三处:① §5 依据全样本 70% 上涨率得出的「TSM 的 beat 有 AVGO 级信息量」降级,近三季 0/3 上涨;② 下一张卡(4Q26,2027-01 中旬)的反应函数必须并列相对 SOX 的涨跌。这次相对 +0.64pp 说明绝对口径的「beat 却跌」混进了板块 beta,前两季的相对表现回补核实后再决定是否改系数;③ 定价变量由「毛利率是否超上沿」改为「利润率平台期内,营收超指引还能不能被定价」。建卡纪律另加一条:相关论点要么合并,要么只计一次权重(「Q4 收入指引」与「全年增速口径」是同一件事;「2nm 占比」与「本季毛利率」是同一条因果链)。 是否同步 thesis 卡:已同步,本卡不再改 TSM.md。/thesis-tracker 于 2026-10-16 自动重估,TSM.md 升到 v4(commit 0035a25):催化剂归档已有 2026-10-15 一行(T0/T+1 与相对 SOX 都已记入);pillar 1「先进制程垄断+定价权」由 ↑ 改为 →(兑现,但顶部转入平台期);pillar 4「地缘/关税折价可控」→ ↓(海外厂稀释扩大);零根证伪。本卡的结论与之一致,没有需要改动的 pillar 状态。目标价不归本 skill 管。⚠️ §9.3 那句「仓库里没有 v4」是建卡日(09-16)的事实,现在已过时:v4 是 10-16 生成的,和 memory 里那条「v4 / 09-02」不是同一版。",
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
      "company": "EPS ⏳ 待法说会",
      "street": "下季 EPS 一致 $4.966",
      "note": "vs 卖方一致 4.97（—）"
    },
    "options": {
      "iv": "",
      "impliedMove": "±3.03%",
      "note": "盈亏平衡 $405.06 / $430.38"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$412.61"
      },
      {
        "name": "概率加权目标价",
        "value": "$491.87"
      },
      {
        "name": "压力调整底线",
        "value": "$430.71"
      },
      {
        "name": "安全边际",
        "value": "+4.39%"
      }
    ],
    "targets": {
      "low": "$299",
      "avg": "$492",
      "high": "$630",
      "n": "本站三情景加权 · 卖方一致 $557.50"
    },
    "afterHours": {
      "move": "-3.40%",
      "note": "- 实际次日反应 -3.40%(基准收盘 445.12 → 430.0) - 隐含区间 ±3.0%(405.06 / 430.38) → 实际 落在区间外 → 🔴 事件定价失败,必须追问是哪个变量没被 price in - 卡片内插预期 -1.13% vs 实际 -3.40%,误差 -2.27%(方向判对)"
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
        "actual": "0.6",
        "consensus": "0.4",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      },
      {
        "name": "核心 CPI 同比 NSA(%)",
        "actual": "2.6",
        "consensus": "2.4",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      }
    ],
    "reaction": [
      {
        "asset": "S&P 500",
        "d0": "-1.11%",
        "d1": ""
      },
      {
        "asset": "纳斯达克100",
        "d0": "-2.02%",
        "d1": ""
      }
    ],
    "verdict": "读数(§8.1):P1 核心环比 0.3(预期 0.2,bear_at 0.3 踩线)、P2 headline 0.6(预期 0.4)、P5 核心同比 2.6(预期 2.4),三条全部证伪(bear),加权 S = -1.0。P1 相对 bar:prior +0.0、nowcast +0.1。落进 hot。 SPX -1.108%(带 0.47)、NDX -2.024%(带 0.79),双双超带,方向与 f_core_hot 的 SPX:- NDX:- 一致,程序判「赢了 f_core_hot」。NDX 跌幅约为 SPX 的 1.8 倍,与 hot 情景 NDX/SPX 的久期比(1.7/1.2)同向且更陡,NDX 已略越过面板 p10(-1.98%)。[事实] 为什么对:这是 10/28 FOMC 之前最后一份 CPI,事前 ZQ 隐含 10/28 加息概率 0.48 —— 硬币面意味着重定价空间在两个方向都最大(§1「本次的特殊性」)。主席 9/16 把停手标准写成「underlying inflation 确实在朝目标走」,0.3 的核心环比让 f_stop_rule(P1 <= 0.2 and ...)直接失活,股票端失去了基准情形下唯一的托底力量,而 f_core_hot 没有对手。事前写的翻转条件「P1 >= 0.3(strength 3)一条就足以把 + 打成 -」原样兑现。[推断:机制;方向与幅度是事实] 2Y/10Y/DXY:§8.3 方向票三格全是「+ 一致」(主导 f_core_hot,10Y/DXY 加上 f_headline_div),但 §8.4 三格都是「无当日收盘,反应层待次交易日」,至今未回填。按 M-17,缺数据不得渲染为 0,也不得替程序另算一套 —— 利率端本次不可裁、不计命中率。⚠️ 这不是本卡独有:10/02 非农卡 §8.4 的 2Y/10Y/DXY 也是同样三格空着,说明 macro_reconcile --stage close 的「待次交易日」没有消费者去补,是管线缺陷而不是数据偶缺(见 ⑤)。 §8.3:SPX/NDX「- 对冲,agree 0.2,被压制 f_positioning_hot」。也就是程序认为有一股 strength 2 的力量在替股票托底(「热已 price in,残余流向风险偏好修复」),市场完全没有给它面子:股票不是小跌,是跌到 hot 情景量级。 它为什么被点着:activate 是 runup21d.2Y >= 20 and P1 >= 0.3。P1 = 0.3 是当日事实;而 runup21d.2Y = 50.0 的 base_asof.2Y 仍是 2026-09-15(§7.1 块原值)—— 覆盖的是 8/17–9/15、含 9/16 加息前抢跑的那 21 天,不是真正决定 10/14 定价的 9/16–10/13。本卡 §4 与 §7.2 清单第 0 条事前写死「10/13 收盘前必须重盖 run-up」;event_log 里 10/09 入队的 refresh 没有执行,10/16 被「事件已发生」作废。所以 f_positioning_hot=1 是用 4 周前的快照判的,这股力量本次是否真实在场,未经验证。[事实:时间戳与队列记录;推断:它不在场] 股票端的实际走法给了反证:如果前端真在发布前 21 天已经按「热」抢跑 ≥20bp,0.3 的核心环比应当「只是确认」,股票该像上一张卡(8 月 CPI,run-up +34bp,SPX/NDX 当天 +0.86%/+0.91%)那样收回。这次反过来跌到 hot 量级,最可能的解释是进场时热并没有被 price in —— 9/16 加息之后到 10/13 的那段,前端很可能已经从加息前的抢跑回吐(中间夹着 10/02 非农,该卡 SPX +0.734% / NDX +1.004%,带内不裁)。我没有对这一段另算 run-up(遵守「不另算一套」),所以这条只能是 [推断]。 上一张卡的修法是否有效:拆成 hot/cool 两条让 f_positioning_hot 第一次可以被激活了 —— 修的是「符号写反」那个病;但它这次暴露了第二个病:activate 里引用的 runup21d.* 是建卡日盖章值,对账时没有被重算(§4 我事前写的是「对账时由程序重算」,块内 base_asof 证明并没有)。即同一股力量连续两张卡都在股票端判错,原因不同:8 月是符号反、永远点不着;9 月是快照旧、不该点着却点着了。 P3 shelter、P4 supercore 两格 §8.1 均为「缺口」(权重合计 0.25,f_shelter_lag / f_supercore 在 §8.3 为 None)。§7.2 第 4 条要求从 Table 1 手抓后 --actual P3=x --actual P4=y --write,这一步也没做。本节按要求不改程序区、不另算,所以 f_shelter_lag(市场是否看穿)与 f_supercore(粘性)这两股本次是「没测到」,不是「没出现」,§8.4 把它们列进「没出现」栏是缺口被渲染成了否定 —— 记录在此,不据此下结论。 反应函数:H-asym(冷被定价更多)本次只有热侧样本,且利率端无收盘,本次无法检验;regime tightening_bias 不改(M-12),但若 10/28 加息,它会延续而不是到期 —— 这一点留给 FOMC 卡,本卡不跨卡改数。 情景表的 hot move 本次在股票端量级准确,不改;要改的是力量合成:下一张卡 (a) 纳入 ③ 的 f_headline_passthrough(出现 1 次,先登记);(b) f_positioning_* 的 activate 在对账时必须用重算后的 runup21d,做不到就该判 None 而不是用建卡快照判 1。",
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
      },
      {
        "label": "Cleveland Fed · inflation-nowcasting",
        "url": "https://www.clevelandfed.org/indicators-and-data/inflation-nowcasting"
      },
      {
        "label": "BLS · cpi.nr0",
        "url": "https://www.bls.gov/news.release/cpi.nr0.htm"
      },
      {
        "label": "BLS · cpi.t01",
        "url": "https://www.bls.gov/news.release/cpi.t01.htm"
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
    "date": "2026-10-21T05:00:00-04:00",
    "dateEnd": "2026-10-21T07:00:00-04:00",
    "dateNote": "不进 SEC 备案,证据等级上限 B",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "product",
      "ASML",
      "SIE.DE"
    ],
    "thesis": "这场会对我意味着什么:这是一场到期前的最后一次公开露面——台账里目前仅有的两条 NVDA 承诺——也恰好都带 2026 年底期限(Rubin「2026 下半年经合作伙伴上市」、Mistral「2026 年扩展到多站点」)都在 12/31 到期,而 GTC Berlin 是它们到期前 NVDA 最后一场大型公开场合(下一场 GTC D.C. 在 11-30,已在 FQ3 财报之后)。这场会的信息量不在「发布什么」,在「还提不提」。 主办方(NVDA):会前不动。现价 $217.23(2026-10-15 收盘;10-16 盘中 bar 未收盘被程序丢弃)已在 NVDA 卡入场区 $208.09–214.60 上方 1.2%,相对压力调整底线 $221.54 的安全边际 +1.98%(09-16 建卡时 +3.57%)。期权把 keynote 当天定价成 约 ±2.4% 的单日波动(其中超出日常的纯事件部分只有约 ±1.2%),NVDA 的 ATR% 是 2.70% —— 事件日的定价仍低于日常波幅,不值得为它择时。要买就等回到入场区,理由写「回到入场区」,不要写「GTC 前布局」。",
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
        "reaction": "NVDA 盘前正向但量级受限于期权定价的约 ±2.4%;SIE.DE 与 VRT 的订单含义大于 NVDA 的估值含义"
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
        "reaction": "NVDA 盘前负向且幅度可超过期权定价的约 ±2.4%(这一档没被定价);传导标的跟跌但基本面未变"
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
    "actual": [
      {
        "name": "Rubin 从「满产」走到「欧洲有人在跑」",
        "actual": "黄仁勋只说 Vera Rubin in full production(复述 CES 2026),没有给欧洲已上线机柜数或算力数。同日 Google Cloud 博客点名伦敦公司 Ineffable Intelligence 是 A5X(Vera Rubin NVL72)首个客户,但没有给规模,而且该客户 2026-07 已见报;Europe 区只是 planned expansion。欧洲云厂(Nscale 五国、Verda、Crusoe)都写 plans to deploy。唯一带日期的欧洲 Rubin 部署是 Mistral 的 planned for delivery in 2027。具名客户有了,规模读数没有,未达 bull_if",
        "consensus": "重申 in full production 与 2H26 口径,但不给任何已上线的欧洲客户或算力读数",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "欧洲主权算力的口径是否可比(会不会漂移到第三把尺子)",
        "actual": "全场与官方材料都没有给任何欧洲算力进度数字:既没有 3,000 exaflops,也没有 800 AI exaflops,也没有 GW 或 AI factories 数量。唯一的欧洲总量数字是 NVIDIA 自己对欧洲生态的投资 nearly $10 billion(资金口径,不是算力口径,没有期限)。只给了新增云厂名单。没有回连旧口径,也没有换成第三个算力口径。本条 expect 写在悲观侧,裁 0 的意思是「口径不可比」这件担心的事被确认,不是中性",
        "consensus": "只给新增国家/电信/云名单,不把 800 AI exaflops 与 3000 exaflops 放到同一口径下",
        "prior": "",
        "surprise": "中性",
        "dir": "flat"
      },
      {
        "name": "Mistral 多站点扩展(上次承诺过,这次不提就是坏消息)",
        "actual": "keynote 里 Mistral 只被当作欧洲生态的例子一笔带过。NCP 博客写 Mistral 扩建 NVIDIA 基础设施,但没有给站点数量,也没有给 2026 年投运时点;新写进去的 Vera Rubin 一档是 planned for delivery in 2027。原承诺「2026 年扩展到多个站点」没有被重申,按 bear_if「改用更模糊的措辞」裁 -1。口径警告:新稿的 3,800 GPUs 是训练 Mistral Large 4 用的卡数,旧稿的 18,000 是一期平台的 systems,两个单位不可比,不能读成规模缩水。新稿 data centers 用复数,可能说明多站点已经存在,但没有明说。承诺 12-31 才到期,不判静默删除",
        "consensus": "重申多站点扩展,口径不变",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      },
      {
        "name": "Rubin 2H26 上市承诺(到期前最后一次公开场合)",
        "actual": "黄仁勋重申 in full production;同日 Google Cloud 与 NVIDIA 宣布 A5X(Vera Rubin NVL72)GA:General availability ... coming next month,首个客户 Ineffable Intelligence 已在用,WPP 已在 A5X 上做过演示。这是 2H26「经合作伙伴上市」的已发货证据,符合 bull_if「已发货证据」。时点没有提前,仍在 2H26 内",
        "consensus": "重申 2026 下半年经合作伙伴上市,口径不变",
        "prior": "",
        "surprise": "利好",
        "dir": "up"
      },
      {
        "name": "德国工业 AI 落地是否给出可验证读数",
        "actual": "2025-06 的德国工业 AI 云(10,000 GPU)在 keynote、工业博客、德国博客里都没有被提到,字面命中 bear_if「德国工业 AI 云整体不提」。但 Siemens 这条不只是 logo:FOX 智能体集成进 Intelligence Center X,估计省成本 20%;Erlangen 工厂检测校准时间降 40%(10-19 Siemens 稿另有虚拟爬坡降低工程量最多 85%)。这些是百分比,不是 bull_if 要的客户数、产线数或工厂数。按事前写死的规则裁 -1,实质偏中性,见 §13",
        "consensus": "西门子等伙伴出现在名单里,但不给客户数或产线数",
        "prior": "",
        "surprise": "利空",
        "dir": "down"
      }
    ],
    "reaction": [
      {
        "asset": "NVDA",
        "d0": "-0.29%",
        "d1": "+2.54%"
      },
      {
        "asset": "ASML",
        "d0": "-0.99%",
        "d1": "+2.81%"
      },
      {
        "asset": "SIE.DE",
        "d0": "-2.24%",
        "d1": "+2.50%"
      },
      {
        "asset": "QQQ",
        "d0": "-0.10%",
        "d1": "+1.05%"
      }
    ],
    "verdict": "判定:没有改变什么,略偏负,但市场没有为这场会单独定价。 英伟达在柏林讲的重点是 AI 工厂怎么建得更快、供应链怎么扩产,而不是欧洲的需求到底有多大。会前我最关心的两件事都没有答案:欧洲到底有多少新一代 Rubin 芯片已经跑起来,欧洲主权算力的进度现在是多少。 凭哪几个数: ① 欧洲算力进度这次一个数都没给。2025 年说的是「3,000 exaflops」,今年 6 月说的是「800 exaflops」,这次两个都没出现,只剩「英伟达对欧洲投资近 100 亿美元」。这是英伟达自己出的钱,不是欧洲建了多少算力。② 新一代 Rubin 芯片的硬证据来自 Google Cloud:相关云服务下个月正式开放,伦敦一家公司已经在用,符合「2026 下半年由合作伙伴上市」的旧承诺。③ 法国 AI 公司 Mistral 去年说「2026 年扩到多个站点」,这次没有重申,只说 Rubin 那一批「计划 2027 年交付」。④ 当天美东 13:15 的盘中价:英伟达比前一天收盘涨 2.45%,半导体 ETF(SMH)涨 2.28%,两者只差 0.18 个百分点。 对市场什么意思: 英伟达当天的上涨基本就是整个半导体板块在涨,看不出这场会的独立影响。会上最硬的新数字其实落在供应链上:封装基板三年扩到 2.5 倍,Amkor 的中介层产能到 2028 年底增加 300% 以上,测试产能明年翻倍,共封装光学(CPO)光引擎产能到 2027 年中扩到 15 倍。黄仁勋的原话是「需求非同寻常,产能才是约束」。当天 Amkor 跑赢板块 2.4 个百分点,是传导链上唯一能对上具体内容的反应。 可信度边界: 所有内容来自英伟达官方博客和新闻稿(证据等级 B,不进 SEC 备案)。黄仁勋的原话来自第三方文字稿,没有官方逐字稿。价格是当天盘中快照,不是收盘价,收盘后可能变。",
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
        "value": "新(无本地卡) · 偏多,传导里最实的一条 · 台上点名西门子软件栈跑在 NVIDIA 工业 AI 云 / Omniverse 上,且给出可验证的客户或产线数量。只出现 logo = 零信息量。现价 €270.65(2026-10-16 收盘),RSI 43.0,SMA200 258.33,距 52 周高 -7.2% —— 09-16 时的低位(RSI 25.62)已修复,赔率不再明显不对称。西门子在官方站赞助商 logo 墙上(10-16 实查),logo 不算触发"
      },
      {
        "name": "ASML",
        "value": "新(无本地卡) · ≈ 无传导。这是我对主数据的异议 · 光刻订单由 TSMC/三星/英特尔的 capex 决定,不由一场区域性 GTC 决定;GTC Berlin 议程里没有任何一条涉及制程设备。除非台上出现「欧洲本地先进制程产能」这类新增内容(概率极低),否则本卡判定 ASML 传导为弱,不据此动 ASML。现价 $1,657.44(2026-10-15 收盘),RSI 39.7,距 52 周高 -17.0% —— 便宜是别的原因造成的,不要把它记到这场会头上"
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
        "value": "欧洲主权 AI 合作方名单再扩容(国家/电信/云)(DCPI 结构性需求) · 偏多 · 欧洲新增 AI factory 的电与热是 Vertiv 的直接口径。台上给欧洲新增 GW/MW 数才算触发。现价 $214.75(2026-10-15 收盘),距 52 周高 -43.5%,RSI 23.1(超卖)、跌破布林下轨、量比 2.62 —— 下跌与本场会无关,会后若反弹不许记到 GTC 头上。Vertiv 也在官方站 logo 墙上,同样零信息量"
      },
      {
        "name": "NVDA(主办方)",
        "value": "欧洲主权 AI 合作方名单再扩容(国家/电信/云)(需求/capex)· Rubin 在欧洲的首批上线读数(份额) · 受影响最小 · NVDA 的估值本来就已经计入「它会赢」;欧洲占其营收比重不足以移动 欧洲主权 AI 合作方名单再扩容(国家/电信/云)。主办方是这张表里最不该动的那个"
      }
    ]
  },
  {
    "id": "meta-fy26q3",
    "kind": "earnings",
    "ticker": "META",
    "company": "META",
    "title": "META FY26Q3 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-21T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q3"
    ],
    "thesis": "隐含波动:±6.28%(去时值)/ ±7.39%(raw),盈亏平衡 $642.94 / $745.56(2026-10-23 到期 ATM 695 跨式中价 51.32,表 ⑤,yfinance 2026-10-21 取数,报价为 10-20 收盘后快照) 反应函数一句:近 20 季 beat 率 70%、beat 却跌 5 次,surprise 与次日涨跌 r=0.17(EPS 不定价);次日绝对波动中位 9.5%(近 8 季 8.2%),近 8 季有 -11.3% / +11.2% / +10.4% / -8.6% / -8.0% —— 大动全部出在费用/capex 口径与收入指引上。",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "5.465",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "5.899",
        "prior": "",
        "range": "vs 卖方一致 +7.9%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "7.64",
        "prior": "",
        "range": "vs 卖方一致 +39.8%",
        "note": ""
      },
      {
        "name": "下季(FY26Q4) 收入指引中值(十亿美元)",
        "consensus": "73.0",
        "prior": "",
        "range": "利好 74.5 / 利空 71.5",
        "note": "core · 权重 35%"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "Q4 收入指引中值 ≥74.5B 且 FY26 营业利润高于 2025 口径保留;Q3 收入 ≥64.3B;2027 capex 无「显著更大」口径;EPS 不论",
        "reaction": "+10.89% · ≈ $770"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "Q4 指引中值 72–74.5B;Q3 收入 63.0–64.3B;FY26 营业利润口径保留或含糊;EPS 不论",
        "reaction": "-1.22% · ≈ $686"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "Q4 指引中值 ≤71.5B 或 撤回 FY26 营业利润高于 2025 或 2027 capex 显著更大且无对价 —— 即使 EPS 与收入 beat",
        "reaction": "-10.39% · ≈ $622"
      }
    ],
    "watch": [
      "「FY26 营业利润高于 2025」口径是否保留 — 利好: CFO Outlook 段原句「expect to deliver operating income this year that is above 2025 operating income」保留(计入约 100 亿美元法律费用后仍保留) — 利空: 该句被删除, 或改成剔除法律费用的口径(如 excluding legal charges), 或改为「approximately in line」等弱化表述",
      "2027 capex 口径 — 利好: 给出 2027 capex 口径, 且同段把增量与可量化对价挂钩(Meta Compute 外租收入确认、或明确 2027 capex 美元增幅小于 2026), 同时 2027 费用增速不快于收入 — 利空: 2027 capex 口径为「significantly larger / notably larger」的美元增长且无对价;或 2027 费用增速明确快于收入;或仍拒绝给任何 2027 口径(论点卡 Pillar 2 证伪信号)",
      "Q4 收入指引中值 · 预期 $73.0B · 利好 ≥ $74.5B · 利空 ≤ $71.5B",
      "「FY26 营业利润高于 2025」口径(定性) · 预期 保留 · 利好 原句保留 · 利空 删除/改措辞",
      "本季收入 · 预期 $63.6B · 利好 ≥ $64.3B · 利空 ≤ $63.0B",
      "平均广告单价同比 · 预期 +10% · 利好 ≥ +13% · 利空 ≤ +7%",
      "2027 capex 口径(定性) · 预期 — · 利好 见块 P5 · 利空 见块 P5"
    ],
    "actual": [
      {
        "name": "下季(FY26Q4) 收入指引中值(十亿美元)",
        "actual": "74.5",
        "consensus": "73",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "本季收入(十亿美元)",
        "actual": "64.6",
        "consensus": "63.6",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "平均广告单价同比(%)",
        "actual": "14",
        "consensus": "10",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      }
    ],
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
    "links": [
      {
        "label": "META IR",
        "url": "https://investor.atmeta.com/"
      },
      {
        "label": "触发本次对账的 SEC 备案",
        "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=META&type=8-K&dateb=&owner=include&count=10"
      },
      {
        "label": "s21.q4cdn.com",
        "url": "https://s21.q4cdn.com/399680738/files/doc_news/Meta-to-Announce-Third-Quarter-2026-Results-2026.pdf"
      },
      {
        "label": "tipranks.com",
        "url": "https://www.tipranks.com/news/meta-q3-earnings-preview-what-bernstein-expects-from-meta-stock"
      },
      {
        "label": "benzinga.com",
        "url": "https://www.benzinga.com/markets/earnings/26/10/62463513/meta-q3-earnings-preview-wall-street-eyes-muse-ai-monetization-as-mark-zuckerbergs-ai-bet-faces-its-next-test"
      }
    ],
    "consensus": {
      "eps": "$5.465",
      "rev": "$63.41B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $5.899"
    },
    "segments": [
      {
        "name": "本季收入(十亿美元)",
        "consensus": "63.6",
        "prior": "利好 64.3 / 利空 63.0",
        "note": "权重 15%"
      },
      {
        "name": "平均广告单价同比(%)",
        "consensus": "10.0",
        "prior": "利好 13.0 / 利空 7.0",
        "note": "权重 10%"
      }
    ],
    "guidance": {
      "company": "EPS ⏳ 待法说会",
      "street": "下季 EPS 一致 $8.276",
      "note": "vs 卖方一致 8.28（—）"
    },
    "options": {
      "iv": "",
      "impliedMove": "±6.28%",
      "note": "盈亏平衡 $642.94 / $745.56"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$697.52"
      },
      {
        "name": "概率加权目标价",
        "value": "$620.51"
      },
      {
        "name": "压力调整底线",
        "value": "$532.40"
      },
      {
        "name": "安全边际",
        "value": "-23.67%"
      }
    ],
    "targets": {
      "low": "$380",
      "avg": "$621",
      "high": "$875",
      "n": "本站三情景加权 · 卖方一致 $833.13"
    },
    "afterHours": {
      "move": "-6.50%",
      "note": "- 实际次日反应 -6.50%(基准收盘 697.52 → 652.18) - 隐含区间 ±6.3%(642.94 / 745.56) → 实际 落在区间外 → 🔴 事件定价失败,必须追问是哪个变量没被 price in - 卡片内插预期 +10.89% vs 实际 -6.50%,误差 -17.39% → 方向判错"
    }
  },
  {
    "id": "tsla-fy26q3",
    "kind": "earnings",
    "ticker": "TSLA",
    "company": "TSLA",
    "title": "TSLA FY26Q3 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-21T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q3"
    ],
    "thesis": "隐含波动:事件跳空 ±6.3%(期限结构反解,区间 6.1–6.8%)/ ±7.62%(10-23 跨式 raw,表 ⑤); 反应函数一句:近 20 季 beat 率只有 50%、beat 却跌 5 次、|r|=0.34 —— EPS 只解释一部分; 门槛配置:公司结构性不给数字指引(Outlook 段只有定性措辞;唯一的数字是电话会口头的 2026 capex「超过 250 亿美元」); 动作(四选一): 期望值 = Σ(概率 × 涨跌) = 0.30×(+9.98%) + 0.40×(-1.22%) + 0.30×(-11.41%) = -0.92% vs 隐含 ±6.3% → 赔率略负(块算,earnings_claims.py 硬对账)",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "0.452",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "0.7",
        "prior": "",
        "range": "vs 卖方一致 +54.9%",
        "note": ""
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "robotaxi 三条满足任两条(车队 >100 / 付费里程环比 >+30% / 首次披露收入)且 Outlook 保留全部 2026 产能承诺; 剔积分汽车毛利 ≥ 17.3%; EPS 不论",
        "reaction": "+9.98% · ≈$398.6"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "robotaxi 仍只有里程图、无收入; Outlook 措辞不变; 剔积分汽车毛利 15.3-17.3%; EPS 在 0.40-0.50",
        "reaction": "-1.22% · ≈$358.0"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "第 6 季零 robotaxi 财务披露且里程增长停滞, 或任一 2026 产能承诺推到 2027, 或剔积分汽车毛利 ≤ 15.3% —— 即使 EPS 与收入 beat(上季正是收入 beat、FCF beat 仍 -14.5%)",
        "reaction": "-11.41% · ≈$321.1"
      }
    ],
    "watch": [
      "Outlook 指引段: 2026 产能承诺与 capex 措辞 — 利好: Outlook 原样保留「Tesla Semi 且 Megapack 3 remain on schedule for production starting in 2026」与「Optimus … production in 2026」, 并新增可核对的投放/量产节点(如 Cybercab 进入付费车队的时间、Optimus 产量); 2026 capex 维持「超过 250 亿美元」不上调 — 利空: Semi / Megapack 3 / Optimus 任一项的 2026 年份被改成 2027 或被删去; 或 Outlook 再出现未宣布的措辞降级(参照 Q2 删去 volume 一词); 或 2026 capex 上调而无对应收入指引",
      "robotaxi 硬数字(车队 / 付费里程环比 / 收入) — 利好: 以下三条满足任意两条(即 thesis v3 写死的证伪撤销条件): ①任一城车队 >100 台 ②付费 robotaxi 里程环比 >+30% ③首次披露 robotaxi 收入 — 利空: 连续第 6 个季度零 robotaxi 财务披露, 且累计付费里程图的本季增量不高于 Q2 增量(无加速), 车队数仍不披露",
      "Outlook 段:2026 产能承诺与 capex 措辞(第一条,恒为第一;特斯拉无数字指引) · 预期 原样保留 · 利好 保留并给出投放节点 / capex 不上调 · 利空 任一项推到 2027 或删年份 / capex 上调且无对应收入",
      "robotaxi 硬数字(车队 / 付费里程环比 / 收入) · 预期 只有里程图 · 利好 三条满足任两条 · 利空 第 6 季零财务披露 + 里程停滞",
      "剔积分汽车毛利率 · 预期 16.3% · 利好 ≥17.3% · 利空 ≤15.3%",
      "GAAP 营业利润率 · 预期 3.0% · 利好 ≥4.5% · 利空 ≤1.5%",
      "自由现金流 · 预期 -$3.5B · 利好 ≥ -$2.0B · 利空 ≤ -$5.0B"
    ],
    "actual": [
      {
        "name": "剔积分汽车毛利率(%)",
        "actual": "18.1",
        "consensus": "16.3",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      },
      {
        "name": "自由现金流(十亿美元)",
        "actual": "1.5",
        "consensus": "-3.5",
        "prior": "",
        "surprise": "证实(触及利好阈值)",
        "dir": "up"
      }
    ],
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
    "links": [
      {
        "label": "TSLA IR",
        "url": "https://ir.tesla.com"
      },
      {
        "label": "触发本次对账的 SEC 备案",
        "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=TSLA&type=8-K&dateb=&owner=include&count=10"
      },
      {
        "label": "tradingview.com",
        "url": "https://www.tradingview.com/news/zacks:e653bcedb094b:0-tesla-to-post-q3-earnings-will-automotive-margins-play-a-spoilsport/"
      },
      {
        "label": "marketbeat.com · 2026-10-21-tesla-inc-stock",
        "url": "https://www.marketbeat.com/earnings/reports/2026-10-21-tesla-inc-stock/"
      },
      {
        "label": "notateslaapp.com",
        "url": "https://www.notateslaapp.com/news/4751/tesla-shares-q3-2026-analyst-delivery-consensus"
      }
    ],
    "consensus": {
      "eps": "$0.452",
      "rev": "$28.11B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": ""
    },
    "segments": [
      {
        "name": "剔积分汽车毛利率(%)",
        "consensus": "16.3",
        "prior": "利好 17.3 / 利空 15.3",
        "note": "权重 20%"
      },
      {
        "name": "GAAP 营业利润率(%)",
        "consensus": "3.0",
        "prior": "利好 4.5 / 利空 1.5",
        "note": "权重 15%"
      },
      {
        "name": "自由现金流(十亿美元)",
        "consensus": "-3.5",
        "prior": "利好 -2.0 / 利空 -5.0",
        "note": "权重 15%"
      }
    ],
    "guidance": {
      "company": "EPS ⏳ 待法说会",
      "street": "下季 EPS 一致 $0.486",
      "note": "vs 卖方一致 0.49（—）"
    },
    "options": {
      "iv": "",
      "impliedMove": "±6.30%",
      "note": "盈亏平衡 $327.82 / $381.9"
    },
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$386.47"
      },
      {
        "name": "概率加权目标价",
        "value": "$241.69"
      },
      {
        "name": "压力调整底线",
        "value": "$196.55"
      },
      {
        "name": "安全边际",
        "value": "-49.14%"
      }
    ],
    "targets": {
      "low": "$115",
      "avg": "$242",
      "high": "$484",
      "n": "本站三情景加权 · 卖方一致 $397.83"
    },
    "afterHours": {
      "move": "-0.01%",
      "note": "- 实际次日反应 -0.01%(基准收盘 386.47 → 386.43) - 隐含区间 ±6.3%(327.82 / 381.9) → 实际 落在区间内 - 卡片内插预期 +9.98% vs 实际 -0.01%,误差 -9.99% → 方向判错"
    }
  },
  {
    "id": "gev-fy26q3",
    "kind": "earnings",
    "ticker": "GEV",
    "company": "GEV",
    "title": "GEV FY26Q3 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2026-10-28T07:00:00-04:00",
    "dateNote": "盘前 07:00 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q3"
    ],
    "thesis": "隐含波动:事件跳空 ±5.5%(期限结构反解,区间 5.3–5.7%)/ ±9.50%(10-30 跨式 raw); 反应函数一句:GEV 的 GAAP EPS 被一次性项淹没(Q1'26 含 $4.5B 并购净收益,beat 率只有 50%), 门槛配置:季度 EPS 指引结构性不存在(GEV 只给全年收入/FCF/EBITDA 利润率指引); 动作(四选一): 期望值 = Σ(概率 × 涨跌) = 0.30×(+10.60%) + 0.40×(-1.07%) + 0.30×(-8.19%) = +0.29% vs 隐含 ±5.5% → 赔率近零(块算,earnings_claims.py 硬对账)",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "4.022",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "4.89",
        "prior": "",
        "range": "vs 卖方一致 +21.6%",
        "note": ""
      },
      {
        "name": "2026 全年收入指引中值(十亿美元)",
        "consensus": "46.5",
        "prior": "",
        "range": "利好 47.0 / 利空 46.0",
        "note": "core · 权重 25%"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "调整后 EBITDA 利润率 ≥ 14.5% 且全年收入指引中值 ≥ 47.0B(或 EBITDA 利润率指引收窄到上半区); 订单 ≥ 23B; EPS 不论",
        "reaction": "+10.60% · ≈$1,024.6"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "EBITDA 利润率 12.5-14.5%, 全年收入指引小幅上调(中值 46.0-47.0), 订单 17-23B",
        "reaction": "-1.07% · ≈$916.5"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "EBITDA 利润率 < 12.5% 或全年指引未上调 / 风电新增亏损 —— 即使 GAAP EPS 与收入 beat(上季正是收入 beat + 上调收入指引仍 -8.69%)",
        "reaction": "-8.19% · ≈$850.6"
      }
    ],
    "watch": [
      "风电亏损与 2027 前瞻措辞 — 利好: 风电全年约 $400M EBITDA 亏损指引维持或收窄且无新增海上风电项目费用; 并且 CEO/CFO 书面引语对 2027 给出正面量化或「定价/利润率继续改善」类表述(或上调多年框架目标) — 利空: 风电亏损指引扩大到 $400M 以上, 或出现新的海上风电项目费用/减值; 或引语首次出现燃气订单「客户推迟 / 定价正常化 / 签约放缓」类措辞",
      "2026 全年收入指引中值(第一条,恒为第一) · 预期 $46.5B · 利好 ≥$47.0B · 利空 ≤$46.0B(维持)",
      "全年调整后 EBITDA 利润率指引下沿 · 预期 12.25%(现 12%) · 利好 ≥13.0% · 利空 ≤11.5%",
      "Q3 订单 · 预期 $20.0B · 利好 ≥$23.0B · 利空 ≤$17.0B",
      "Q3 调整后 EBITDA 利润率 · 预期 13.5% · 利好 ≥14.5% · 利空 ≤12.5%",
      "燃气积压 + 预留 GW · 预期 122 · 利好 ≥125 · 利空 ≤119"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "GEV IR",
        "url": "https://www.gevernova.com/investors"
      },
      {
        "label": "gevernova.com",
        "url": "https://www.gevernova.com/news/press-releases/ge-vernova-announce-third-quarter-2026-financial-results-october-28"
      },
      {
        "label": "finance.yahoo.com · heres-expect-ge-vernovas-next-141413937",
        "url": "https://finance.yahoo.com/energy/articles/heres-expect-ge-vernovas-next-141413937.html"
      },
      {
        "label": "finance.yahoo.com · ge-vernova-stock-more-50-161406724",
        "url": "https://finance.yahoo.com/markets/stocks/articles/ge-vernova-stock-more-50-161406724.html"
      },
      {
        "label": "marketbeat.com",
        "url": "https://www.marketbeat.com/instant-alerts/price-ge-vernova-nyse-gev-stock-price-down-14-following-analyst-downgrade-2026-10-15/"
      }
    ],
    "consensus": {
      "eps": "$4.022",
      "rev": "$12.00B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": ""
    },
    "segments": [
      {
        "name": "2026 全年调整后 EBITDA 利润率指引下沿(%)",
        "consensus": "12.25",
        "prior": "利好 13.0 / 利空 11.5",
        "note": "权重 10%"
      },
      {
        "name": "Q3 订单(十亿美元)",
        "consensus": "20.0",
        "prior": "利好 23.0 / 利空 17.0",
        "note": "权重 20%"
      },
      {
        "name": "Q3 调整后 EBITDA 利润率(%)",
        "consensus": "13.5",
        "prior": "利好 14.5 / 利空 12.5",
        "note": "core · 权重 25%"
      },
      {
        "name": "燃气设备积压 + 预留协议(GW)",
        "consensus": "122.0",
        "prior": "利好 125.0 / 利空 119.0",
        "note": "权重 10%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "",
      "note": "比较期间 FY26"
    },
    "options": {
      "iv": "",
      "impliedMove": "±5.50%",
      "note": "盈亏平衡 $837.25 / $1012.75"
    },
    "valuation": [],
    "targets": {},
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
        "value": "+4bp",
        "note": "ZQ 自算 · 2026-10-21"
      },
      {
        "name": "P(加息 25bp)",
        "value": "16%",
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
    "id": "googl-fy26q3",
    "kind": "earnings",
    "ticker": "GOOGL",
    "company": "GOOGL",
    "title": "GOOGL FY26Q3 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-28T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q3"
    ],
    "thesis": "隐含波动:±5.37%(去时值)/ ±6.32%(raw),盈亏平衡 $313.76 / $356.10(2026-10-30 到期 ATM 335 跨式中价 21.17,表 ⑤,yfinance 2026-10-21 13:45 ET 盘中取数,现价 334.93;刷新记录见「更新日志」) 反应函数一句:近 20 季 beat 率 80%、beat 却跌 7 次,surprise 与次日涨跌 r=0.012(EPS 不定价);近 8 季次日绝对波动中位只有 2.7%,但其中有 -7.3%、+10.0%、-7.1% 三次大动 —— 大动都出在 capex 口径和 Cloud 上,不在 EPS 上。 EPS 口径陷阱(本标的最重要的一条):Alphabet 只报 GAAP EPS,里面含权益证券公允价值变动。上季 GAAP EPS $9.11 里有 $6.26 来自 $990 亿权益证券收益(EX-99.1 OI&E 表脚注原文)。近 4 季 surprise 214% / 92% 主要是这个,不是经营超预期。卖方一致 2.998 大体是不含收益的口径 → 本季 EPS 对一致的「beat/miss」须先扣掉 F2(收益每股影响)再判。",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "2.998",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "3.212",
        "prior": "",
        "range": "vs 卖方一致 +7.1%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "3.63",
        "prior": "",
        "range": "vs 卖方一致 +21.1%",
        "note": ""
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "Cloud 收入 ≥ $29.5B 且 2027 capex 给出量化区间中值 ≤ $265B(或更高但同段给出 backlog 覆盖口径);Search ≥ +16%;EPS 不论",
        "reaction": "+9.84% · ≈ $374"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "Cloud $26.5–29.5B;2027 capex 中值 $250–290B 或只说「meaningful step-up」;Search +14–18%",
        "reaction": "-1.04% · ≈ $337"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "2027 capex 中值 ≥ $290B 而 Cloud ≤ $26.5B, 或 Search ≤ +14%, 或新一轮股权融资 / FCF 继续转负扩大 —— 即使 EPS 与收入 beat",
        "reaction": "-8.41% · ≈ $312"
      }
    ],
    "watch": [
      "资本侧口径(FCF / 回购 / 股权融资) — 利好: 本季 FCF 转正(对账表本季列 > 0), 或恢复回购(现金流量表「Repurchases of stock」本季不为 0), 且无新的普通股/优先股发行 — 利空: 本季 FCF 比 Q2 的 -$5,855M 更负, 或 ATM 已动用 / 新发普通股或优先股, 或电话会上给出 2027 capex 时同时提到新的外部融资",
      "2027 capex 指引(区间中值,$B) · 预期 265 · 利好 ≤250 · 利空 ≥290",
      "本季 Google Cloud 收入($M) · 预期 28,000(约 +85%) · 利好 ≥29,500 · 利空 ≤26,500",
      "本季 Google Search & other 收入($M) · 预期 65,600(约 +16%) · 利好 ≥66,800 · 利空 ≤64,500",
      "本季 Google Cloud 营业利润($M) · 预期 9,000 · 利好 ≥10,000 · 利空 ≤7,800",
      "资本侧:FCF / 回购 / 融资(定性) · 预期 — · 利好 见块 P5 · 利空 见块 P5"
    ],
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
    "links": [
      {
        "label": "GOOGL IR",
        "url": "https://abc.xyz/investor/"
      }
    ],
    "consensus": {
      "eps": "$2.998",
      "rev": "$127.85B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $3.212"
    },
    "segments": [
      {
        "name": "2027 capex 首次量化指引(区间中值, 十亿美元)",
        "consensus": "265.0",
        "prior": "利好 250.0 / 利空 290.0",
        "note": "core · 权重 30%"
      },
      {
        "name": "本季 Google Cloud 收入(百万美元)",
        "consensus": "28000.0",
        "prior": "利好 29500.0 / 利空 26500.0",
        "note": "core · 权重 30%"
      },
      {
        "name": "本季 Google Search & other 收入(百万美元)",
        "consensus": "65600.0",
        "prior": "利好 66800.0 / 利空 64500.0",
        "note": "权重 20%"
      },
      {
        "name": "本季 Google Cloud 营业利润(百万美元)",
        "consensus": "9000.0",
        "prior": "利好 10000.0 / 利空 7800.0",
        "note": "权重 10%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "下季 EPS 一致 $3.342",
      "note": "比较期间"
    },
    "options": {
      "iv": "",
      "impliedMove": "±5.37%",
      "note": "盈亏平衡 $313.76 / $356.1"
    },
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
    "id": "msft-fy27q1",
    "kind": "earnings",
    "ticker": "MSFT",
    "company": "MSFT",
    "title": "MSFT FY27Q1 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-10-28T16:05:00-04:00",
    "dateNote": "盘后 16:05 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY27Q1"
    ],
    "thesis": "隐含波动:±4.79%(去时值)/ ±5.63%(raw),盈亏平衡 $503.48 / $563.56(2026-10-30 到期跨式,表 ⑤,2026-10-20 取数) 反应函数一句:近 20 季 beat 率 95%、beat 却跌 10 次,surprise 与次日涨跌 r=0.27;近 8 季 beat 率 100% 却只涨 3/8、次日中位 -3.43% —— EPS beat 是入场费,定价权在 Azure 增速与指引。 门槛配置:MSFT 结构性不给 EPS 指引 → 四条 bar 只有三条。买方 bar(近 8 季校准)$5.04 高于最乐观卖方 $4.86 —— 市场实际交易的 EPS 门槛在卖方区间之外。真正的「打满指引」看 Azure:公司指引约 45%(cc),具名券商上行情景 46–47%(二手)。 动作(四选一):财报前不动(持有者) 期望值 = 0.30×(+10.19%) + 0.40×(-0.93%) + 0.30×(-6.46%) = +0.75% vs 隐含 ±4.79% → 赔率接近零(期望值远小于单边波动),方向性下注无优势 持有者 vs 空仓者:",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "4.718",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "5.038",
        "prior": "",
        "range": "vs 卖方一致 +6.8%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "4.86",
        "prior": "",
        "range": "vs 卖方一致 +3.0%",
        "note": ""
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "30%",
        "trigger": "本季 Azure ≥47% 且 下季 Azure 指引 ≥48%;收入 ≥$90.95B(指引上沿);EPS 不论",
        "reaction": "+10.19% · ≈ $588"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "本季 Azure 45–46%, 下季指引 45–47%;收入 $90.4–90.95B;EPS 在 4.72–5.04",
        "reaction": "-0.93% · ≈ $529"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "本季 Azure ≤44% 或 下季指引 ≤44% 或 FCF ≤$5B 且 capex 再上修 —— 即使 EPS 与收入 beat",
        "reaction": "-6.46% · ≈ $499"
      }
    ],
    "watch": [
      "capex 与 ROI 口径 — 利好: 下季 capex 指引增长时, 同段明确把它与可量化的需求/供给缺口挂钩(如 Azure 仍受供给约束、RPO 覆盖), 且 FY27 营业利润率「下降不到 1 个点」的口径维持不变 — 利空: FY27 capex 口径上修, 而 Azure 指引不加速;或撤回/下调「FY27 营业利润率下降不到 1 个点」与「FY27 自由现金流为正」任一口径",
      "下季(FY27Q2)Azure 增速指引 · 预期 46% · 利好 ≥48% · 利空 ≤44%",
      "本季 Azure 增速(报告口径) · 预期 45% · 利好 ≥47% · 利空 ≤44%",
      "商业 RPO 余额 · 预期 $710B · 利好 ≥$740B · 利空 ≤$685B",
      "本季 Intelligent Cloud 收入 · 预期 $41.4B · 利好 ≥$41.8B · 利空 ≤$41.0B",
      "本季自由现金流 · 预期 $12B · 利好 ≥$18B · 利空 ≤$5B",
      "capex / ROI 口径(定性) · 预期 — · 利好 见块 P6 · 利空 见块 P6"
    ],
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
    "links": [
      {
        "label": "MSFT IR",
        "url": "https://www.microsoft.com/en-us/investor/earnings/FY-2027-Q1/press-release-webcast"
      }
    ],
    "consensus": {
      "eps": "$4.718",
      "rev": "$90.72B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $5.038"
    },
    "segments": [
      {
        "name": "下季(FY27Q2) Azure 增速指引",
        "consensus": "46.0",
        "prior": "利好 48.0 / 利空 44.0",
        "note": "core · 权重 30%"
      },
      {
        "name": "本季 Azure 增速(报告口径)",
        "consensus": "45.0",
        "prior": "利好 47.0 / 利空 44.0",
        "note": "core · 权重 25%"
      },
      {
        "name": "商业 RPO 余额(十亿美元)",
        "consensus": "710.0",
        "prior": "利好 740.0 / 利空 685.0",
        "note": "权重 15%"
      },
      {
        "name": "本季 Intelligent Cloud 收入(十亿美元)",
        "consensus": "41.4",
        "prior": "利好 41.8 / 利空 41.0",
        "note": "权重 10%"
      },
      {
        "name": "本季自由现金流(十亿美元)",
        "consensus": "12.0",
        "prior": "利好 18.0 / 利空 5.0",
        "note": "权重 10%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "下季 EPS 一致 $4.821",
      "note": "比较期间 FY27Q2"
    },
    "options": {
      "iv": "",
      "impliedMove": "±4.79%",
      "note": "盈亏平衡 $503.48 / $563.56"
    },
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
    "id": "lly-fy26q3",
    "kind": "earnings",
    "ticker": "LLY",
    "company": "LLY",
    "title": "LLY FY26Q3 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2026-10-29T07:00:00-04:00",
    "dateNote": "盘前 07:00 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q3"
    ],
    "thesis": "隐含波动:事件跳空 ±6.4%(期限结构反解:10-30 到期 ±6.37% / 11-06 到期 ±6.42%,两档交叉印证; 反应函数一句:近 8 季 beat 率 75%、绝对波动中位 8.0%(全样本 4.5%,制度已抬升), 门槛配置:LLY 不给季度指引,季度 EPS 的四条 bar 只剩两条(卖方一致 6.668 / 买方 bar 7.403), 动作(四选一):等财报后再定(空仓者)。 期望值 = 0.35×(+12.88%) + 0.35×(-1.24%) + 0.30×(-9.12%) = +1.34% vs 隐含 ±6.4% → 赔率略正但远小于噪声, 持有者 vs 空仓者动作分列:",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "6.668",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "7.403",
        "prior": "",
        "range": "vs 卖方一致 +11.0%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "10.675",
        "prior": "",
        "range": "vs 卖方一致 +60.1%",
        "note": ""
      },
      {
        "name": "2026 全年收入指引中值(十亿美元)",
        "consensus": "88.5",
        "prior": "",
        "range": "利好 89.5 / 利空 87.25",
        "note": "core · 权重 35%"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "35%",
        "trigger": "全年收入指引中值 ≥ 89.5B, 且 Q3 收入 ≥ 23.4B、Mounjaro/Zepbound 环比增长; EPS 不论",
        "reaction": "+12.88% · ≈ $1,434"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "35%",
        "trigger": "收入指引中值 87.25-89.5B, Q3 收入 22.0-23.4B",
        "reaction": "-1.24% · ≈ $1,255"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "30%",
        "trigger": "收入指引中值 ≤ 87.25B 或 Mounjaro/Zepbound 环比下滑 —— 即使 EPS beat 卖方一致(2025-08-07 beat 12.9% 却 -14.1%)",
        "reaction": "-9.12% · ≈ $1,155"
      }
    ],
    "watch": [
      "美国价格与 2027 前瞻措辞 — 利好: 美国实现价格降幅(剔除返利估计调整后)较 Q2 的约 -9% 收窄; 且 CEO 引语或电话会对 2027 给出正面量化表述(收入增长 / 产能 / retatrutide 2027Q1 递交 BLA 维持) — 利空: 美国实现价格降幅(剔除调整后)扩大到两位数且量增速放缓; 或 retatrutide 递交时间推迟 / Foundayo 放量低于管理层此前表述; 或首次出现「价格压力超预期 / 库存去化」类措辞",
      "全年收入指引中值 · 预期 $88.5B · 利好 ≥ $89.5B · 利空 ≤ $87.25B",
      "Q3 总收入(百万美元) · 预期 22,615 · 利好 ≥ 23,400 · 利空 ≤ 22,000",
      "Mounjaro 收入(百万美元) · 预期 10,500 · 利好 ≥ 11,200 · 利空 ≤ 9,900",
      "Zepbound 收入(百万美元) · 预期 5,300 · 利好 ≥ 5,800 · 利空 ≤ 4,900",
      "价格与 2027 措辞(定性) · 预期 — · 利好 见 P5.bull_if · 利空 见 P5.bear_if"
    ],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "links": [
      {
        "label": "LLY IR",
        "url": "https://investor.lilly.com/financial-information/quarterly-results"
      },
      {
        "label": "finviz.com",
        "url": "https://finviz.com/news/403165/lilly-confirms-date-and-conference-call-for-third-quarter-2026-financial-results-announcement"
      }
    ],
    "consensus": {
      "eps": "$6.668",
      "rev": "$22.61B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $7.403"
    },
    "segments": [
      {
        "name": "Q3 总收入(百万美元)",
        "consensus": "22615.0",
        "prior": "利好 23400.0 / 利空 22000.0",
        "note": "权重 15%"
      },
      {
        "name": "Mounjaro 全球收入(百万美元)",
        "consensus": "10500.0",
        "prior": "利好 11200.0 / 利空 9900.0",
        "note": "core · 权重 15%"
      },
      {
        "name": "Zepbound 美国收入(百万美元)",
        "consensus": "5300.0",
        "prior": "利好 5800.0 / 利空 4900.0",
        "note": "权重 15%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "",
      "note": "比较期间 FY26"
    },
    "options": {
      "iv": "",
      "impliedMove": "±6.40%",
      "note": "盈亏平衡 $1178.37 / $1363.13"
    },
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
    "importance": 3,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。方向不固定 —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ 不许默认「季末=买盘」,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,写「未取到」,不许编"
    ],
    "expectations": [],
    "pricing": [
      {
        "name": "本月至今 · 标普 500 ETF(含息)",
        "value": "+1.37%",
        "note": "2026-09-30 → 2026-10-21 收盘"
      },
      {
        "name": "本月至今 · 美国综合债 ETF",
        "value": "+1.16%",
        "note": "2026-09-30 → 2026-10-21 收盘"
      },
      {
        "name": "60/40 组合股票超配",
        "value": "+0.05pp",
        "note": "期初调回 60/40 的示意口径 → 偏「卖股买债」"
      }
    ],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "n=275",
        "what": "全部的月末",
        "outcome": "月末前 3 日:标普 +0.18%(上涨 57%)· 股减债 +0.01pp(t 0.11)· 月初 3 日标普 +0.28%"
      },
      {
        "when": "n=170",
        "what": "股票超配(应卖股)的月末",
        "outcome": "月末前 3 日:标普 -0.08%(上涨 50%)· 股减债 -0.23pp(t -2.39)· 月初 3 日标普 +0.35%"
      },
      {
        "when": "n=103",
        "what": "股票低配(应买股)的月末",
        "outcome": "月末前 3 日:标普 +0.65%(上涨 70%)· 股减债 +0.45pp(t 2.11)· 月初 3 日标普 +0.19%"
      },
      {
        "when": "n=46",
        "what": "大幅超配 ≥1.0pp的月末",
        "outcome": "月末前 3 日:标普 -0.05%(上涨 48%)· 股减债 -0.25pp(t -1.38)· 月初 3 日标普 +0.62%"
      },
      {
        "when": "n=30",
        "what": "大幅低配 ≤-1.0pp的月末",
        "outcome": "月末前 3 日:标普 +1.49%(上涨 73%)· 股减债 +1.29pp(t 2.62)· 月初 3 日标普 -0.15%"
      },
      {
        "when": "2026-09-30",
        "what": "股票超配 +0.68pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 -1.13% · 股减债 -0.52pp · 月初 3 日标普 +1.60%"
      },
      {
        "when": "2026-08-31",
        "what": "股票超配 +0.40pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.13% · 股减债 +0.59pp · 月初 3 日标普 +0.80%"
      },
      {
        "when": "2026-07-31",
        "what": "股票超配 -0.01pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.83% · 股减债 +1.40pp · 月初 3 日标普 +3.05%"
      },
      {
        "when": "2026-06-30",
        "what": "股票超配 -0.78pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +1.70% · 股减债 +1.97pp · 月初 3 日标普 +0.60%"
      },
      {
        "when": "2026-05-29",
        "what": "股票超配 +1.05pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.79% · 股减债 +0.44pp · 月初 3 日标普 -0.30%"
      },
      {
        "when": "2026-04-30",
        "what": "股票超配 +2.14pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.49% · 股减债 +0.83pp · 月初 3 日标普 +0.71%"
      },
      {
        "when": "2026-03-31",
        "what": "股票超配 -0.80pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.81% · 股减债 +0.08pp · 月初 3 日标普 +1.32%"
      },
      {
        "when": "2026-02-27",
        "what": "股票超配 -0.47pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 -0.20% · 股减债 -0.51pp · 月初 3 日标普 -0.12%"
      }
    ],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "pricing": "程序数字 · 本月漂移(每日收盘后更新)",
      "history": "03 — 历史同类回看 · 月末(程序算;|t|<2 视为与零无区别;价格现象,不是资金流测量)",
      "actCols": {
        "a": "项目",
        "b": "实际",
        "c": "事前方向判断",
        "d": "—",
        "e": "方向对不对"
      }
    }
  },
  {
    "id": "aapl-fy26q4",
    "kind": "earnings",
    "ticker": "AAPL",
    "company": "AAPL",
    "title": "AAPL FY26Q4 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2026-11-02T16:05:00-05:00",
    "dateNote": "盘后 16:05 ET",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "FY26Q4"
    ],
    "thesis": "隐含波动:事件跳空 ±3.45%(期限结构反解,calc/aapl_event_move_term_structure.py),对应事件区间 $332.12 / $355.86。表 ⑤ 的 ±4.99% raw / ±4.24% 去时值不能用:财报后首个到期 11-06 是 15 DTE、含 12 个交易日,×0.85 削不掉 11 天时间价值(memory:事件 IV 不能用 ×0.85)。11-06 到期 ATM 345 跨式中价 17.18 的盈亏平衡 $326.82 / $361.16(yfinance,10-21 收盘后快照) 反应函数一句:近 20 季 beat 率 95%、beat 却跌 11 次,surprise 与次日涨跌 r=-0.10(EPS 不定价);近 8 季 beat 率 100% 却只涨 2/8、次日均值 -1.53% —— beat 是入场费,定价权在下季指引与毛利率指引。上季(7/30)三项全 beat、收入指引 +9~11% 低于一致约 +12%,次日 -7.3%",
    "expectations": [
      {
        "name": "卖方一致",
        "consensus": "1.978",
        "prior": "",
        "range": "vs 卖方一致 +0.0%",
        "note": ""
      },
      {
        "name": "买方 bar(历史 beat 分布校准)",
        "consensus": "2.057",
        "prior": "",
        "range": "vs 卖方一致 +4.0%",
        "note": ""
      },
      {
        "name": "卖方最高值",
        "consensus": "2.06",
        "prior": "",
        "range": "vs 卖方一致 +4.1%",
        "note": ""
      },
      {
        "name": "下季(FY27Q1) 收入指引中值(十亿美元)",
        "consensus": "152.0",
        "prior": "",
        "range": "利好 154.5 / 利空 149.0",
        "note": "core · 权重 30%"
      }
    ],
    "pricing": [],
    "scenarios": [
      {
        "tag": "超预期",
        "tone": "dove",
        "prob": "25%",
        "trigger": "FY27Q1 收入指引中值 ≥154.5B 且 毛利率指引(剔退款)≥47.5%;Services ≥31.9B;EPS 不论",
        "reaction": "+6.25% · ≈ $365"
      },
      {
        "tag": "符合预期",
        "tone": "base",
        "prob": "40%",
        "trigger": "收入指引中值 149–154.5B;毛利率指引 45.5–47.5%;Services +8~11%;EPS 不论",
        "reaction": "-0.67% · ≈ $342"
      },
      {
        "tag": "低于预期",
        "tone": "hawk",
        "prob": "35%",
        "trigger": "收入指引中值 ≤149.0B 或 毛利率指引(剔退款)≤45.5% 或 Services <+8% —— 即使 EPS 与收入 beat",
        "reaction": "-5.47% · ≈ $325"
      }
    ],
    "watch": [
      "内存成本 / 毛利率走向口径 — 利好: 管理层明确内存成本对毛利率的拖累已见顶或将在 FY27 上半年缓和(给出时间点), 或称已通过长约/定价完全对冲 — 利空: 重复或加重「trends to intensify」口径, 称内存成本压力延续至 FY27 下半年或更久, 或首次量化出更大的毛利率拖累",
      "FY27Q1 收入指引中值($B) · 预期 152.0(+5.7%) · 利好 ≥ 154.5 · 利空 ≤ 149.0",
      "FY27Q1 毛利率指引中值(剔除关税退款,%) · 预期 46.5 · 利好 ≥ 47.5 · 利空 ≤ 45.5",
      "本季 Services 收入($M) · 预期 31,500(+9.6%) · 利好 ≥ 31,900 · 利空 ≤ 31,050",
      "本季 iPhone 收入($M) · 预期 56,400(+15.0%) · 利好 ≥ 57,600 · 利空 ≤ 55,100",
      "内存成本 / 毛利率走向口径(定性) · 预期 — · 利好 见块 P5 · 利空 见块 P5"
    ],
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
    "links": [
      {
        "label": "AAPL IR",
        "url": "https://investor.apple.com/"
      }
    ],
    "consensus": {
      "eps": "$1.978",
      "rev": "$113.36B",
      "epsPrior": "",
      "revPrior": "",
      "revYoY": "",
      "note": "买方 bar $2.057"
    },
    "segments": [
      {
        "name": "下季(FY27Q1) 毛利率指引中值(剔除关税退款等公司点明的一次性项, %)",
        "consensus": "46.5",
        "prior": "利好 47.5 / 利空 45.5",
        "note": "core · 权重 25%"
      },
      {
        "name": "本季 Services 收入(百万美元)",
        "consensus": "31500.0",
        "prior": "利好 31900.0 / 利空 31050.0",
        "note": "权重 20%"
      },
      {
        "name": "本季 iPhone 收入(百万美元)",
        "consensus": "56400.0",
        "prior": "利好 57600.0 / 利空 55100.0",
        "note": "权重 15%"
      }
    ],
    "guidance": {
      "company": "待公布",
      "street": "下季 EPS 一致 $2.898",
      "note": "比较期间 FY27Q1"
    },
    "options": {
      "iv": "",
      "impliedMove": "±3.45%",
      "note": "盈亏平衡 $332.12 / $355.86"
    },
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
        "outcome": "SPX +0.73% · 2Y +5bp"
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
        "outcome": "SPX -1.11%"
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
    "dateEnd": null,
    "dateNote": "keynote 时间未公布,暂按开幕日 09:00 ET 显示 · 不进 SEC 备案,证据等级上限 B",
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
    "id": "conf-aws-reinvent-2026-11-30",
    "kind": "event",
    "title": "AWS re:Invent",
    "subtitle": "Trainium/Graviton 自研进度与客户、容量与区域扩张、自研 vs 外购口径",
    "org": "AMZN",
    "ticker": "AMZN",
    "company": "",
    "date": "2026-11-30T09:00:00-05:00",
    "dateEnd": null,
    "dateNote": "keynote 时间未公布,暂按开幕日 09:00 ET 显示 · 不进 SEC 备案,证据等级上限 B",
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
    "importance": 3,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。方向不固定 —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ 不许默认「季末=买盘」,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,写「未取到」,不许编"
    ],
    "expectations": [],
    "pricing": [
      {
        "name": "本月漂移",
        "value": "—",
        "note": "这一月还没开始,上一个月末收盘后才起算"
      }
    ],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "n=275",
        "what": "全部的月末",
        "outcome": "月末前 3 日:标普 +0.18%(上涨 57%)· 股减债 +0.01pp(t 0.11)· 月初 3 日标普 +0.28%"
      },
      {
        "when": "n=170",
        "what": "股票超配(应卖股)的月末",
        "outcome": "月末前 3 日:标普 -0.08%(上涨 50%)· 股减债 -0.23pp(t -2.39)· 月初 3 日标普 +0.35%"
      },
      {
        "when": "n=103",
        "what": "股票低配(应买股)的月末",
        "outcome": "月末前 3 日:标普 +0.65%(上涨 70%)· 股减债 +0.45pp(t 2.11)· 月初 3 日标普 +0.19%"
      },
      {
        "when": "n=46",
        "what": "大幅超配 ≥1.0pp的月末",
        "outcome": "月末前 3 日:标普 -0.05%(上涨 48%)· 股减债 -0.25pp(t -1.38)· 月初 3 日标普 +0.62%"
      },
      {
        "when": "n=30",
        "what": "大幅低配 ≤-1.0pp的月末",
        "outcome": "月末前 3 日:标普 +1.49%(上涨 73%)· 股减债 +1.29pp(t 2.62)· 月初 3 日标普 -0.15%"
      },
      {
        "when": "2026-09-30",
        "what": "股票超配 +0.68pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 -1.13% · 股减债 -0.52pp · 月初 3 日标普 +1.60%"
      },
      {
        "when": "2026-08-31",
        "what": "股票超配 +0.40pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.13% · 股减债 +0.59pp · 月初 3 日标普 +0.80%"
      },
      {
        "when": "2026-07-31",
        "what": "股票超配 -0.01pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.83% · 股减债 +1.40pp · 月初 3 日标普 +3.05%"
      },
      {
        "when": "2026-06-30",
        "what": "股票超配 -0.78pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +1.70% · 股减债 +1.97pp · 月初 3 日标普 +0.60%"
      },
      {
        "when": "2026-05-29",
        "what": "股票超配 +1.05pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.79% · 股减债 +0.44pp · 月初 3 日标普 -0.30%"
      },
      {
        "when": "2026-04-30",
        "what": "股票超配 +2.14pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.49% · 股减债 +0.83pp · 月初 3 日标普 +0.71%"
      },
      {
        "when": "2026-03-31",
        "what": "股票超配 -0.80pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.81% · 股减债 +0.08pp · 月初 3 日标普 +1.32%"
      },
      {
        "when": "2026-02-27",
        "what": "股票超配 -0.47pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 -0.20% · 股减债 -0.51pp · 月初 3 日标普 -0.12%"
      }
    ],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "pricing": "程序数字 · 本月漂移(每日收盘后更新)",
      "history": "03 — 历史同类回看 · 月末(程序算;|t|<2 视为与零无区别;价格现象,不是资金流测量)",
      "actCols": {
        "a": "项目",
        "b": "实际",
        "c": "事前方向判断",
        "d": "—",
        "e": "方向对不对"
      }
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
    "date": "2026-12-01T14:00:00-05:00",
    "dateEnd": "2026-12-01T16:00:00-05:00",
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
        "outcome": "SPX +0.73% · 2Y +5bp"
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
    "thesis": "名单在盘后公布,被纳入的票当晚就跳;但被动基金还没进场,这一跳是主动资金抢跑。",
    "watch": [
      "纳入/剔除名单(盘后,S&P DJI 官网)",
      "⚠️ 冲击发生在公告当晚盘后:12 例实测拉升中位 +8.21%,11/12 为正",
      "⚠️ 次日开盘几乎从不超过盘后最高(10/12 低于) —— 以盘后最高为基准,一周收益中位仅 +0.01%、5/11 为负。影响力 ≠ 可获取收益",
      "⚠️ 成分变更不止这一天:并购/破产引发的增删是临时公告,约提前 5 个交易日"
    ],
    "expectations": [
      {
        "name": "NOK",
        "consensus": "外国发行人",
        "prior": "—",
        "range": "",
        "note": "外国发行人:标普 500 注册地规则多半不符,不再往下算(ADR 市值口径与美国公司不同)"
      },
      {
        "name": "TSM",
        "consensus": "外国发行人",
        "prior": "—",
        "range": "",
        "note": "外国发行人:标普 500 注册地规则多半不符,不再往下算(ADR 市值口径与美国公司不同)"
      },
      {
        "name": "SKHY",
        "consensus": "外国发行人",
        "prior": "—",
        "range": "",
        "note": "外国发行人:标普 500 注册地规则多半不符,不再往下算(ADR 市值口径与美国公司不同)"
      },
      {
        "name": "FIG",
        "consensus": "不够格",
        "prior": "$12.2B",
        "range": "自由流通 $6.1B · 流动性 15.49",
        "note": "已核门槛不过:公司市值 ≥ $22.7B、自由流通市值 ≥ $11.35B"
      },
      {
        "name": "ASX",
        "consensus": "外国发行人",
        "prior": "—",
        "range": "",
        "note": "外国发行人:标普 500 注册地规则多半不符,不再往下算(ADR 市值口径与美国公司不同)"
      },
      {
        "name": "AMKR",
        "consensus": "不够格",
        "prior": "$10.9B",
        "range": "自由流通 $5.0B · 流动性 12.74",
        "note": "已核门槛不过:公司市值 ≥ $22.7B、自由流通市值 ≥ $11.35B"
      },
      {
        "name": "NBIS",
        "consensus": "外国发行人",
        "prior": "—",
        "range": "",
        "note": "外国发行人:标普 500 注册地规则多半不符,不再往下算(ADR 市值口径与美国公司不同)"
      },
      {
        "name": "DUOL",
        "consensus": "不够格",
        "prior": "$6.4B",
        "range": "自由流通 $4.5B · 流动性 14.21",
        "note": "已核门槛不过:公司市值 ≥ $22.7B、自由流通市值 ≥ $11.35B"
      },
      {
        "name": "BABA",
        "consensus": "外国发行人",
        "prior": "—",
        "range": "",
        "note": "外国发行人:标普 500 注册地规则多半不符,不再往下算(ADR 市值口径与美国公司不同)"
      }
    ],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "expectations": "标普 500 纳入门槛 · 关注名单里的非成分股(sp500_screen.py;满足门槛 ≠ 会被纳入)",
      "expCols": {
        "a": "代码",
        "b": "结论",
        "c": "公司市值",
        "d": "依据(门槛 $22.7B / 自由流通 $11.35B / 流动性 0.75)"
      }
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
    "dateEnd": null,
    "dateNote": "日期按历年惯例推算,公司未官宣 · keynote 时间未公布,暂按开幕日 09:00 ET 显示 · 不进 SEC 备案,证据等级上限 B",
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
    "id": "avgo-catalyst-2026-12-09",
    "kind": "earnings",
    "ticker": "AVGO",
    "company": "AVGO",
    "title": "AVGO 财报",
    "subtitle": "FQ4 FY26 财报 + FY2027 首次正式指引",
    "org": "",
    "date": "2026-12-09T16:05:00-05:00",
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
        "outcome": "SPX -1.11%"
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
    "thesis": "生效前第 6 个交易日盘后公布名单与新权重。12 月那次最要紧:沿用一年的旧压权系数整体重置,升降集中在前 15 名;被动资金的买卖落在交易日收盘。",
    "watch": [
      "名单与新权重:Nasdaq 盘后公告(GlobeNewswire / Nasdaq 官网)",
      "⚠️ 标普那 12 例纳入样本不适用于纳指:纳指新进的多是本来就很大的公司,公告当晚未必跳",
      "⚠️ 下方模拟用今天的价格,真参考日是 11 月最后一个交易日 —— 看扫描区间,别看单点"
    ],
    "expectations": [
      {
        "name": "MU · Micron Technology Inc",
        "consensus": "3.48%",
        "prior": "4.41%",
        "range": "-0.93pp · 被动 -$4.6B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -1.80 ~ -0.05pp · 方向不稳,不下结论"
      },
      {
        "name": "NVDA · NVIDIA Corp",
        "consensus": "7.49%",
        "prior": "8.28%",
        "range": "-0.79pp · 被动 -$3.9B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -1.84 ~ +3.65pp · 方向不稳,不下结论"
      },
      {
        "name": "AAPL · Apple Inc",
        "consensus": "7.03%",
        "prior": "7.77%",
        "range": "-0.74pp · 被动 -$3.6B ≈ 0.29 天成交",
        "note": "价格 ±20% 扫描 -1.73 ~ +3.43pp · 方向不稳,不下结论"
      },
      {
        "name": "MSFT · Microsoft Corp",
        "consensus": "5.54%",
        "prior": "6.13%",
        "range": "-0.59pp · 被动 -$2.9B ≈ 0.26 天成交",
        "note": "价格 ±20% 扫描 -1.36 ~ +2.70pp · 方向不稳,不下结论"
      },
      {
        "name": "AMZN · Amazon.com Inc",
        "consensus": "3.96%",
        "prior": "4.38%",
        "range": "-0.42pp · 被动 -$2.0B ≈ 0.23 天成交",
        "note": "价格 ±20% 扫描 -0.97 ~ +1.93pp · 方向不稳,不下结论"
      },
      {
        "name": "AMD · Advanced Micro Devices Inc",
        "consensus": "3.48%",
        "prior": "3.86%",
        "range": "-0.38pp · 被动 -$1.9B ≈ 0.16 天成交",
        "note": "价格 ±20% 扫描 -1.33 ~ +0.06pp · 方向不稳,不下结论"
      },
      {
        "name": "GOOGL · Alphabet Inc Class A",
        "consensus": "2.75%",
        "prior": "3.04%",
        "range": "-0.29pp · 被动 -$1.4B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -0.68 ~ +1.45pp · 方向不稳,不下结论"
      },
      {
        "name": "NBIS · Nebius Group NV",
        "consensus": "0.18%",
        "prior": "0.17%",
        "range": "+0.00pp · 被动 +$0.0B ≈ 0.00 天成交",
        "note": "价格 ±20% 扫描 -0.06 ~ +0.01pp · 方向不稳,不下结论"
      },
      {
        "name": "ABNB · Airbnb Inc",
        "consensus": "0.32%",
        "prior": "0.31%",
        "range": "+0.01pp · 被动 +$0.0B ≈ 0.05 天成交",
        "note": "价格 ±20% 扫描 -0.11 ~ +0.03pp · 方向不稳,不下结论"
      },
      {
        "name": "MRVL · Marvell Technology Inc",
        "consensus": "0.94%",
        "prior": "0.92%",
        "range": "+0.02pp · 被动 +$0.1B ≈ 0.02 天成交",
        "note": "价格 ±20% 扫描 -0.32 ~ +0.08pp · 方向不稳,不下结论"
      },
      {
        "name": "AMAT · Applied Materials Inc",
        "consensus": "1.42%",
        "prior": "1.39%",
        "range": "+0.03pp · 被动 +$0.2B ≈ 0.05 天成交",
        "note": "价格 ±20% 扫描 -0.48 ~ +0.12pp · 方向不稳,不下结论"
      },
      {
        "name": "INTC · Intel Corp",
        "consensus": "2.13%",
        "prior": "2.09%",
        "range": "+0.05pp · 被动 +$0.2B ≈ 0.02 天成交",
        "note": "价格 ±20% 扫描 -0.72 ~ +0.17pp · 方向不稳,不下结论"
      },
      {
        "name": "META · Meta Platforms Inc",
        "consensus": "3.50%",
        "prior": "3.21%",
        "range": "+0.29pp · 被动 +$1.4B ≈ 0.10 天成交",
        "note": "价格 ±20% 扫描 -0.59 ~ +1.28pp · 方向不稳,不下结论"
      },
      {
        "name": "TSLA · Tesla Inc",
        "consensus": "3.48%",
        "prior": "3.14%",
        "range": "+0.33pp · 被动 +$1.6B ≈ 0.13 天成交",
        "note": "价格 ±20% 扫描 -0.53 ~ +1.36pp · 方向不稳,不下结论"
      },
      {
        "name": "SPCX · Space Exploration Technologies Corp",
        "consensus": "3.48%",
        "prior": "2.92%",
        "range": "+0.56pp · 被动 +$2.7B ≈ 0.19 天成交",
        "note": "不在关注名单,未做扫描"
      },
      {
        "name": "WMT · Walmart Inc",
        "consensus": "3.48%",
        "prior": "2.45%",
        "range": "+1.03pp · 被动 +$5.0B ≈ 2.15 天成交",
        "note": "不在关注名单,未做扫描"
      },
      {
        "name": "AVGO · Broadcom Inc",
        "consensus": "3.67%",
        "prior": "2.49%",
        "range": "+1.19pp · 被动 +$5.8B ≈ 0.77 天成交",
        "note": "价格 ±20% 扫描 +0.41 ~ +1.88pp · 方向稳定"
      }
    ],
    "pricing": [
      {
        "name": "特别再平衡触线距离",
        "value": "28.1% / 48%",
        "note": ">4.5% 的公司合计;最大 8.3%(线 24%)"
      },
      {
        "name": "跟踪资金(下限)",
        "value": "$489B",
        "note": "只算 QQQ + QQQM(QQQM 本轮取不到)"
      },
      {
        "name": "算法回放自检",
        "value": "9 只 · 最大误差 2.4%",
        "note": "复现 2025-11-28 重构的压权系数"
      }
    ],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "expectations": "12 月重构压权模拟 · 若参考日是今天(2026-11-30 才是真参考日;ndx_screen.py)",
      "expCols": {
        "a": "代码",
        "b": "12 月模拟",
        "c": "现权重",
        "d": "变化 · 被动资金 · 稳健性"
      },
      "pricing": "程序数字 · 纳指 100(每日收盘后更新)"
    }
  },
  {
    "id": "mu-catalyst-2026-12-17",
    "kind": "earnings",
    "ticker": "MU",
    "company": "MU",
    "title": "MU 财报",
    "subtitle": "FQ1-27 财报 + FQ2 指引(v4 裁决日)",
    "org": "",
    "date": "2026-12-17T16:05:00-05:00",
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
    "links": [],
    "consensus": {},
    "segments": [],
    "guidance": {},
    "options": {},
    "valuation": [
      {
        "name": "基准收盘价",
        "value": "$1,097.39"
      },
      {
        "name": "概率加权目标价",
        "value": "$1,077.59"
      },
      {
        "name": "压力调整底线",
        "value": "$880.69"
      },
      {
        "name": "安全边际",
        "value": "-19.75%"
      }
    ],
    "targets": {
      "low": "$763",
      "avg": "$1,078",
      "high": "$1,471",
      "n": "本站三情景加权 · 卖方一致 $1,545.00"
    },
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
    "thesis": "指数基金在收盘集合竞价一次性成交 —— 这才是被动买盘真正落地的那一刻,全年成交量最大的几个收盘之一。",
    "watch": [
      "收盘集合竞价成交量(量比中位 7.14x)",
      "⚠️ 纳指100:3/6/9 月这天只做股本更新与增删,压权只在现权重触线时才重做;12 月这天是年度重构,从头重算、重新压权",
      "⚠️ 标普与纳指100 是两套规则,不许混着说"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true
    }
  },
  {
    "id": "rebal-index-trade-2026-12-18-ndx",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "纳指100·年度重构交易日",
    "subtitle": "被动盘落地·2026 年度",
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
    "thesis": "指数基金在收盘集合竞价一次性成交 —— 这才是被动买盘真正落地的那一刻,全年成交量最大的几个收盘之一。",
    "watch": [
      "收盘集合竞价成交量(量比中位 7.14x)",
      "⚠️ 纳指100:3/6/9 月这天只做股本更新与增删,压权只在现权重触线时才重做;12 月这天是年度重构,从头重算、重新压权",
      "⚠️ 标普与纳指100 是两套规则,不许混着说"
    ],
    "expectations": [
      {
        "name": "MU · Micron Technology Inc",
        "consensus": "3.48%",
        "prior": "4.41%",
        "range": "-0.93pp · 被动 -$4.6B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -1.80 ~ -0.05pp · 方向不稳,不下结论"
      },
      {
        "name": "NVDA · NVIDIA Corp",
        "consensus": "7.49%",
        "prior": "8.28%",
        "range": "-0.79pp · 被动 -$3.9B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -1.84 ~ +3.65pp · 方向不稳,不下结论"
      },
      {
        "name": "AAPL · Apple Inc",
        "consensus": "7.03%",
        "prior": "7.77%",
        "range": "-0.74pp · 被动 -$3.6B ≈ 0.29 天成交",
        "note": "价格 ±20% 扫描 -1.73 ~ +3.43pp · 方向不稳,不下结论"
      },
      {
        "name": "MSFT · Microsoft Corp",
        "consensus": "5.54%",
        "prior": "6.13%",
        "range": "-0.59pp · 被动 -$2.9B ≈ 0.26 天成交",
        "note": "价格 ±20% 扫描 -1.36 ~ +2.70pp · 方向不稳,不下结论"
      },
      {
        "name": "AMZN · Amazon.com Inc",
        "consensus": "3.96%",
        "prior": "4.38%",
        "range": "-0.42pp · 被动 -$2.0B ≈ 0.23 天成交",
        "note": "价格 ±20% 扫描 -0.97 ~ +1.93pp · 方向不稳,不下结论"
      },
      {
        "name": "AMD · Advanced Micro Devices Inc",
        "consensus": "3.48%",
        "prior": "3.86%",
        "range": "-0.38pp · 被动 -$1.9B ≈ 0.16 天成交",
        "note": "价格 ±20% 扫描 -1.33 ~ +0.06pp · 方向不稳,不下结论"
      },
      {
        "name": "GOOGL · Alphabet Inc Class A",
        "consensus": "2.75%",
        "prior": "3.04%",
        "range": "-0.29pp · 被动 -$1.4B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -0.68 ~ +1.45pp · 方向不稳,不下结论"
      },
      {
        "name": "NBIS · Nebius Group NV",
        "consensus": "0.18%",
        "prior": "0.17%",
        "range": "+0.00pp · 被动 +$0.0B ≈ 0.00 天成交",
        "note": "价格 ±20% 扫描 -0.06 ~ +0.01pp · 方向不稳,不下结论"
      },
      {
        "name": "ABNB · Airbnb Inc",
        "consensus": "0.32%",
        "prior": "0.31%",
        "range": "+0.01pp · 被动 +$0.0B ≈ 0.05 天成交",
        "note": "价格 ±20% 扫描 -0.11 ~ +0.03pp · 方向不稳,不下结论"
      },
      {
        "name": "MRVL · Marvell Technology Inc",
        "consensus": "0.94%",
        "prior": "0.92%",
        "range": "+0.02pp · 被动 +$0.1B ≈ 0.02 天成交",
        "note": "价格 ±20% 扫描 -0.32 ~ +0.08pp · 方向不稳,不下结论"
      },
      {
        "name": "AMAT · Applied Materials Inc",
        "consensus": "1.42%",
        "prior": "1.39%",
        "range": "+0.03pp · 被动 +$0.2B ≈ 0.05 天成交",
        "note": "价格 ±20% 扫描 -0.48 ~ +0.12pp · 方向不稳,不下结论"
      },
      {
        "name": "INTC · Intel Corp",
        "consensus": "2.13%",
        "prior": "2.09%",
        "range": "+0.05pp · 被动 +$0.2B ≈ 0.02 天成交",
        "note": "价格 ±20% 扫描 -0.72 ~ +0.17pp · 方向不稳,不下结论"
      },
      {
        "name": "META · Meta Platforms Inc",
        "consensus": "3.50%",
        "prior": "3.21%",
        "range": "+0.29pp · 被动 +$1.4B ≈ 0.10 天成交",
        "note": "价格 ±20% 扫描 -0.59 ~ +1.28pp · 方向不稳,不下结论"
      },
      {
        "name": "TSLA · Tesla Inc",
        "consensus": "3.48%",
        "prior": "3.14%",
        "range": "+0.33pp · 被动 +$1.6B ≈ 0.13 天成交",
        "note": "价格 ±20% 扫描 -0.53 ~ +1.36pp · 方向不稳,不下结论"
      },
      {
        "name": "SPCX · Space Exploration Technologies Corp",
        "consensus": "3.48%",
        "prior": "2.92%",
        "range": "+0.56pp · 被动 +$2.7B ≈ 0.19 天成交",
        "note": "不在关注名单,未做扫描"
      },
      {
        "name": "WMT · Walmart Inc",
        "consensus": "3.48%",
        "prior": "2.45%",
        "range": "+1.03pp · 被动 +$5.0B ≈ 2.15 天成交",
        "note": "不在关注名单,未做扫描"
      },
      {
        "name": "AVGO · Broadcom Inc",
        "consensus": "3.67%",
        "prior": "2.49%",
        "range": "+1.19pp · 被动 +$5.8B ≈ 0.77 天成交",
        "note": "价格 ±20% 扫描 +0.41 ~ +1.88pp · 方向稳定"
      }
    ],
    "pricing": [
      {
        "name": "特别再平衡触线距离",
        "value": "28.1% / 48%",
        "note": ">4.5% 的公司合计;最大 8.3%(线 24%)"
      },
      {
        "name": "跟踪资金(下限)",
        "value": "$489B",
        "note": "只算 QQQ + QQQM(QQQM 本轮取不到)"
      },
      {
        "name": "算法回放自检",
        "value": "9 只 · 最大误差 2.4%",
        "note": "复现 2025-11-28 重构的压权系数"
      }
    ],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "expectations": "12 月重构压权模拟 · 若参考日是今天(2026-11-30 才是真参考日;ndx_screen.py)",
      "expCols": {
        "a": "代码",
        "b": "12 月模拟",
        "c": "现权重",
        "d": "变化 · 被动资金 · 稳健性"
      },
      "pricing": "程序数字 · 纳指 100(每日收盘后更新)"
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
    "thesis": "开盘前生效,但被动买盘在上一个收盘就已完成。历史上这天之后常见反向 —— 不许把「被纳入」当成这天的买入理由。",
    "watch": [
      "生效日超额:12 例中位 -0.44%,仅 42% 为正",
      "⚠️ 反向不在生效日当天,在其后那一周:生效后 5 日超额中位 -0.99%、只有 33% 为正,最差 -10.31%"
    ],
    "expectations": [],
    "pricing": [],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true
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
    "thesis": "开盘前生效,被动盘已在上一个收盘完成。",
    "watch": [
      "⚠️ 标普纳入样本的「生效后一周反向」统计不适用于纳指的权重调整;没有自有样本前不下结论"
    ],
    "expectations": [
      {
        "name": "MU · Micron Technology Inc",
        "consensus": "3.48%",
        "prior": "4.41%",
        "range": "-0.93pp · 被动 -$4.6B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -1.80 ~ -0.05pp · 方向不稳,不下结论"
      },
      {
        "name": "NVDA · NVIDIA Corp",
        "consensus": "7.49%",
        "prior": "8.28%",
        "range": "-0.79pp · 被动 -$3.9B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -1.84 ~ +3.65pp · 方向不稳,不下结论"
      },
      {
        "name": "AAPL · Apple Inc",
        "consensus": "7.03%",
        "prior": "7.77%",
        "range": "-0.74pp · 被动 -$3.6B ≈ 0.29 天成交",
        "note": "价格 ±20% 扫描 -1.73 ~ +3.43pp · 方向不稳,不下结论"
      },
      {
        "name": "MSFT · Microsoft Corp",
        "consensus": "5.54%",
        "prior": "6.13%",
        "range": "-0.59pp · 被动 -$2.9B ≈ 0.26 天成交",
        "note": "价格 ±20% 扫描 -1.36 ~ +2.70pp · 方向不稳,不下结论"
      },
      {
        "name": "AMZN · Amazon.com Inc",
        "consensus": "3.96%",
        "prior": "4.38%",
        "range": "-0.42pp · 被动 -$2.0B ≈ 0.23 天成交",
        "note": "价格 ±20% 扫描 -0.97 ~ +1.93pp · 方向不稳,不下结论"
      },
      {
        "name": "AMD · Advanced Micro Devices Inc",
        "consensus": "3.48%",
        "prior": "3.86%",
        "range": "-0.38pp · 被动 -$1.9B ≈ 0.16 天成交",
        "note": "价格 ±20% 扫描 -1.33 ~ +0.06pp · 方向不稳,不下结论"
      },
      {
        "name": "GOOGL · Alphabet Inc Class A",
        "consensus": "2.75%",
        "prior": "3.04%",
        "range": "-0.29pp · 被动 -$1.4B ≈ 0.17 天成交",
        "note": "价格 ±20% 扫描 -0.68 ~ +1.45pp · 方向不稳,不下结论"
      },
      {
        "name": "NBIS · Nebius Group NV",
        "consensus": "0.18%",
        "prior": "0.17%",
        "range": "+0.00pp · 被动 +$0.0B ≈ 0.00 天成交",
        "note": "价格 ±20% 扫描 -0.06 ~ +0.01pp · 方向不稳,不下结论"
      },
      {
        "name": "ABNB · Airbnb Inc",
        "consensus": "0.32%",
        "prior": "0.31%",
        "range": "+0.01pp · 被动 +$0.0B ≈ 0.05 天成交",
        "note": "价格 ±20% 扫描 -0.11 ~ +0.03pp · 方向不稳,不下结论"
      },
      {
        "name": "MRVL · Marvell Technology Inc",
        "consensus": "0.94%",
        "prior": "0.92%",
        "range": "+0.02pp · 被动 +$0.1B ≈ 0.02 天成交",
        "note": "价格 ±20% 扫描 -0.32 ~ +0.08pp · 方向不稳,不下结论"
      },
      {
        "name": "AMAT · Applied Materials Inc",
        "consensus": "1.42%",
        "prior": "1.39%",
        "range": "+0.03pp · 被动 +$0.2B ≈ 0.05 天成交",
        "note": "价格 ±20% 扫描 -0.48 ~ +0.12pp · 方向不稳,不下结论"
      },
      {
        "name": "INTC · Intel Corp",
        "consensus": "2.13%",
        "prior": "2.09%",
        "range": "+0.05pp · 被动 +$0.2B ≈ 0.02 天成交",
        "note": "价格 ±20% 扫描 -0.72 ~ +0.17pp · 方向不稳,不下结论"
      },
      {
        "name": "META · Meta Platforms Inc",
        "consensus": "3.50%",
        "prior": "3.21%",
        "range": "+0.29pp · 被动 +$1.4B ≈ 0.10 天成交",
        "note": "价格 ±20% 扫描 -0.59 ~ +1.28pp · 方向不稳,不下结论"
      },
      {
        "name": "TSLA · Tesla Inc",
        "consensus": "3.48%",
        "prior": "3.14%",
        "range": "+0.33pp · 被动 +$1.6B ≈ 0.13 天成交",
        "note": "价格 ±20% 扫描 -0.53 ~ +1.36pp · 方向不稳,不下结论"
      },
      {
        "name": "SPCX · Space Exploration Technologies Corp",
        "consensus": "3.48%",
        "prior": "2.92%",
        "range": "+0.56pp · 被动 +$2.7B ≈ 0.19 天成交",
        "note": "不在关注名单,未做扫描"
      },
      {
        "name": "WMT · Walmart Inc",
        "consensus": "3.48%",
        "prior": "2.45%",
        "range": "+1.03pp · 被动 +$5.0B ≈ 2.15 天成交",
        "note": "不在关注名单,未做扫描"
      },
      {
        "name": "AVGO · Broadcom Inc",
        "consensus": "3.67%",
        "prior": "2.49%",
        "range": "+1.19pp · 被动 +$5.8B ≈ 0.77 天成交",
        "note": "价格 ±20% 扫描 +0.41 ~ +1.88pp · 方向稳定"
      }
    ],
    "pricing": [
      {
        "name": "特别再平衡触线距离",
        "value": "28.1% / 48%",
        "note": ">4.5% 的公司合计;最大 8.3%(线 24%)"
      },
      {
        "name": "跟踪资金(下限)",
        "value": "$489B",
        "note": "只算 QQQ + QQQM(QQQM 本轮取不到)"
      },
      {
        "name": "算法回放自检",
        "value": "9 只 · 最大误差 2.4%",
        "note": "复现 2025-11-28 重构的压权系数"
      }
    ],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "expectations": "12 月重构压权模拟 · 若参考日是今天(2026-11-30 才是真参考日;ndx_screen.py)",
      "expCols": {
        "a": "代码",
        "b": "12 月模拟",
        "c": "现权重",
        "d": "变化 · 被动资金 · 稳健性"
      },
      "pricing": "程序数字 · 纳指 100(每日收盘后更新)"
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
    "importance": 3,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。方向不固定 —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ 不许默认「季末=买盘」,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,写「未取到」,不许编"
    ],
    "expectations": [],
    "pricing": [
      {
        "name": "本季至今 · 标普 500 ETF(含息)",
        "value": "+1.37%",
        "note": "2026-09-30 → 2026-10-21 收盘"
      },
      {
        "name": "本季至今 · 美国综合债 ETF",
        "value": "+1.16%",
        "note": "2026-09-30 → 2026-10-21 收盘"
      },
      {
        "name": "60/40 组合股票超配",
        "value": "+0.05pp",
        "note": "期初调回 60/40 的示意口径 → 偏「卖股买债」"
      }
    ],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "n=91",
        "what": "全部的季末",
        "outcome": "季末前 3 日:标普 +0.03%(上涨 54%)· 股减债 -0.14pp(t -0.79)· 季初 3 日标普 +0.38%"
      },
      {
        "when": "n=62",
        "what": "股票超配(应卖股)的季末",
        "outcome": "季末前 3 日:标普 +0.02%(上涨 50%)· 股减债 -0.11pp(t -0.72)· 季初 3 日标普 +0.29%"
      },
      {
        "when": "n=29",
        "what": "股票低配(应买股)的季末",
        "outcome": "季末前 3 日:标普 +0.06%(上涨 62%)· 股减债 -0.22pp(t -0.46)· 季初 3 日标普 +0.56%"
      },
      {
        "when": "n=17",
        "what": "大幅超配 ≥2.0pp的季末",
        "outcome": "季末前 3 日:标普 +0.18%(上涨 53%)· 股减债 -0.02pp(t -0.09)· 季初 3 日标普 +0.32%"
      },
      {
        "when": "n=7",
        "what": "大幅低配 ≤-2.0pp的季末",
        "outcome": "季末前 3 日:标普 -1.17%(上涨 29%)· 股减债 -1.72pp(t -1.65)· 季初 3 日标普 +1.01%"
      },
      {
        "when": "2026-09-30",
        "what": "股票超配 +1.53pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -1.13% · 股减债 -0.52pp · 季初 3 日标普 +1.60%"
      },
      {
        "when": "2026-06-30",
        "what": "股票超配 +2.70pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +1.70% · 股减债 +1.97pp · 季初 3 日标普 +0.60%"
      },
      {
        "when": "2026-03-31",
        "what": "股票超配 -1.10pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +0.81% · 股减债 +0.08pp · 季初 3 日标普 +1.32%"
      },
      {
        "when": "2025-12-31",
        "what": "股票超配 +0.66pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -1.22% · 股减债 -1.05pp · 季初 3 日标普 +1.45%"
      },
      {
        "when": "2025-09-30",
        "what": "股票超配 +1.14pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +1.24% · 股减债 +0.98pp · 季初 3 日标普 +0.46%"
      },
      {
        "when": "2025-06-30",
        "what": "股票超配 +1.81pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 +1.77% · 股减债 +1.37pp · 季初 3 日标普 +1.21%"
      },
      {
        "when": "2025-03-31",
        "what": "股票超配 -1.14pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -1.62% · 股减债 -2.34pp · 季初 3 日标普 -4.06%"
      },
      {
        "when": "2024-12-31",
        "what": "股票超配 +1.96pp(季末前 3 日量)",
        "outcome": "季末前 3 日标普 -2.54% · 股减债 -2.60pp · 季初 3 日标普 +1.58%"
      }
    ],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "pricing": "程序数字 · 本季漂移(每日收盘后更新)",
      "history": "03 — 历史同类回看 · 季末(程序算;|t|<2 视为与零无区别;价格现象,不是资金流测量)",
      "actCols": {
        "a": "项目",
        "b": "实际",
        "c": "事前方向判断",
        "d": "—",
        "e": "方向对不对"
      }
    }
  },
  {
    "id": "cpi-2026-12-rel2027-01-13",
    "kind": "macro",
    "title": "2026-12 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2027-01-13T08:30:00-05:00",
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
        "when": "2026-12-10",
        "what": "CPI（2026-11）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-11-10",
        "what": "CPI（2026-10）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-10-14",
        "what": "CPI（2026-09）",
        "outcome": "SPX -1.11%"
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
    "id": "tsm-earnings-2027-01-14",
    "kind": "earnings",
    "ticker": "TSM",
    "company": "TSM",
    "title": "TSM 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2027-01-14T07:00:00-05:00",
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
        "value": "$412.61"
      },
      {
        "name": "概率加权目标价",
        "value": "$491.87"
      },
      {
        "name": "压力调整底线",
        "value": "$430.71"
      },
      {
        "name": "安全边际",
        "value": "+4.39%"
      }
    ],
    "targets": {
      "low": "$299",
      "avg": "$492",
      "high": "$630",
      "n": "本站三情景加权 · 卖方一致 $557.50"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "gev-earnings-2027-01-27",
    "kind": "earnings",
    "ticker": "GEV",
    "company": "GEV",
    "title": "GEV 财报",
    "subtitle": "盘前",
    "org": "",
    "date": "2027-01-27T07:00:00-05:00",
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
    "id": "meta-catalyst-2027-01-27",
    "kind": "earnings",
    "ticker": "META",
    "company": "META",
    "title": "META 财报",
    "subtitle": "Q4 财报+2027 capex/费用指引",
    "org": "",
    "date": "2027-01-27T16:05:00-05:00",
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
        "value": "$697.52"
      },
      {
        "name": "概率加权目标价",
        "value": "$620.51"
      },
      {
        "name": "压力调整底线",
        "value": "$532.40"
      },
      {
        "name": "安全边际",
        "value": "-23.67%"
      }
    ],
    "targets": {
      "low": "$380",
      "avg": "$621",
      "high": "$875",
      "n": "本站三情景加权 · 卖方一致 $833.13"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "tsla-earnings-2027-01-27",
    "kind": "earnings",
    "ticker": "TSLA",
    "company": "TSLA",
    "title": "TSLA 财报",
    "subtitle": "盘后",
    "org": "",
    "date": "2027-01-27T16:05:00-05:00",
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
        "value": "$386.47"
      },
      {
        "name": "概率加权目标价",
        "value": "$241.69"
      },
      {
        "name": "压力调整底线",
        "value": "$196.55"
      },
      {
        "name": "安全边际",
        "value": "-49.14%"
      }
    ],
    "targets": {
      "low": "$115",
      "avg": "$242",
      "high": "$484",
      "n": "本站三情景加权 · 卖方一致 $397.83"
    },
    "afterHours": {
      "move": "",
      "note": ""
    }
  },
  {
    "id": "rebal-flow-window-2027-01-29-all",
    "kind": "macro",
    "ticker": "",
    "company": "",
    "title": "月末再平衡窗口",
    "subtitle": "资金流窗口·2027-01",
    "org": "全市场",
    "date": "2027-01-29T16:00:00-05:00",
    "dateNote": "规则算出的日期,非估计值",
    "dateConfirmed": true,
    "importance": 3,
    "tags": [
      "index",
      "flow_window"
    ],
    "thesis": "养老金/目标日期基金按目标权重回补。方向不固定 —— 取决于本季股债相对表现,股票跑赢越多越要卖股买债。",
    "watch": [
      "⚠️ 不许默认「季末=买盘」,先看本季股债相对表现",
      "⚠️ 资金流规模若无一手来源,写「未取到」,不许编"
    ],
    "expectations": [],
    "pricing": [
      {
        "name": "本月漂移",
        "value": "—",
        "note": "这一月还没开始,上一个月末收盘后才起算"
      }
    ],
    "scenarios": [],
    "actual": [],
    "reaction": [],
    "verdict": "",
    "history": [
      {
        "when": "n=275",
        "what": "全部的月末",
        "outcome": "月末前 3 日:标普 +0.18%(上涨 57%)· 股减债 +0.01pp(t 0.11)· 月初 3 日标普 +0.28%"
      },
      {
        "when": "n=170",
        "what": "股票超配(应卖股)的月末",
        "outcome": "月末前 3 日:标普 -0.08%(上涨 50%)· 股减债 -0.23pp(t -2.39)· 月初 3 日标普 +0.35%"
      },
      {
        "when": "n=103",
        "what": "股票低配(应买股)的月末",
        "outcome": "月末前 3 日:标普 +0.65%(上涨 70%)· 股减债 +0.45pp(t 2.11)· 月初 3 日标普 +0.19%"
      },
      {
        "when": "n=46",
        "what": "大幅超配 ≥1.0pp的月末",
        "outcome": "月末前 3 日:标普 -0.05%(上涨 48%)· 股减债 -0.25pp(t -1.38)· 月初 3 日标普 +0.62%"
      },
      {
        "when": "n=30",
        "what": "大幅低配 ≤-1.0pp的月末",
        "outcome": "月末前 3 日:标普 +1.49%(上涨 73%)· 股减债 +1.29pp(t 2.62)· 月初 3 日标普 -0.15%"
      },
      {
        "when": "2026-09-30",
        "what": "股票超配 +0.68pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 -1.13% · 股减债 -0.52pp · 月初 3 日标普 +1.60%"
      },
      {
        "when": "2026-08-31",
        "what": "股票超配 +0.40pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.13% · 股减债 +0.59pp · 月初 3 日标普 +0.80%"
      },
      {
        "when": "2026-07-31",
        "what": "股票超配 -0.01pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.83% · 股减债 +1.40pp · 月初 3 日标普 +3.05%"
      },
      {
        "when": "2026-06-30",
        "what": "股票超配 -0.78pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +1.70% · 股减债 +1.97pp · 月初 3 日标普 +0.60%"
      },
      {
        "when": "2026-05-29",
        "what": "股票超配 +1.05pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.79% · 股减债 +0.44pp · 月初 3 日标普 -0.30%"
      },
      {
        "when": "2026-04-30",
        "what": "股票超配 +2.14pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.49% · 股减债 +0.83pp · 月初 3 日标普 +0.71%"
      },
      {
        "when": "2026-03-31",
        "what": "股票超配 -0.80pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 +0.81% · 股减债 +0.08pp · 月初 3 日标普 +1.32%"
      },
      {
        "when": "2026-02-27",
        "what": "股票超配 -0.47pp(月末前 3 日量)",
        "outcome": "月末前 3 日标普 -0.20% · 股减债 -0.51pp · 月初 3 日标普 -0.12%"
      }
    ],
    "readThrough": [],
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
    },
    "labels": {
      "noScenarios": true,
      "programFilled": true,
      "pricing": "程序数字 · 本月漂移(每日收盘后更新)",
      "history": "03 — 历史同类回看 · 月末(程序算;|t|<2 视为与零无区别;价格现象,不是资金流测量)",
      "actCols": {
        "a": "项目",
        "b": "实际",
        "c": "事前方向判断",
        "d": "—",
        "e": "方向对不对"
      }
    }
  },
  {
    "id": "cpi-2027-01-rel2027-02-11",
    "kind": "macro",
    "title": "2027-01 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2027-02-11T08:30:00-05:00",
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
        "when": "2026-12-10",
        "what": "CPI（2026-11）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-11-10",
        "what": "CPI（2026-10）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-10-14",
        "what": "CPI（2026-09）",
        "outcome": "SPX -1.11%"
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
    "id": "cpi-2027-02-rel2027-03-10",
    "kind": "macro",
    "title": "2027-02 CPI",
    "subtitle": "",
    "org": "BLS",
    "ticker": "",
    "company": "",
    "date": "2027-03-10T08:30:00-05:00",
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
        "when": "2026-12-10",
        "what": "CPI（2026-11）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-11-10",
        "what": "CPI（2026-10）",
        "outcome": "当日行情数据缺失"
      },
      {
        "when": "2026-10-14",
        "what": "CPI（2026-09）",
        "outcome": "SPX -1.11%"
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
    "id": "conf-gtc-sj-2027-03-15",
    "kind": "event",
    "title": "NVIDIA GTC (San Jose 主场)",
    "subtitle": "下一代架构与量产时间、NVLink/机架形态、CoWoS 与 HBM 用量、客户站台名单",
    "org": "NVDA",
    "ticker": "NVDA",
    "company": "",
    "date": "2027-03-15T09:00:00-04:00",
    "dateEnd": null,
    "dateNote": "keynote 时间未公布,暂按开幕日 09:00 ET 显示 · 不进 SEC 备案,证据等级上限 B",
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
  },
  {
    "id": "fomc-2027-03-17",
    "kind": "macro",
    "title": "FOMC 议息决议",
    "subtitle": "含 SEP 与点阵图",
    "org": "Federal Reserve",
    "ticker": "",
    "company": "",
    "date": "2027-03-17T14:00:00-04:00",
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
  }
];
