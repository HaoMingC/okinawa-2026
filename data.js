/**
 * 沖繩親子旅遊資料庫 (JSON 結構)
 * 版本：3.3 (完整同步版：包含行程、行前準備與注意事項)
 */

const travelData = {
  metadata: {
    title: "2026 沖繩親子五日遊 (v3.2)",
    version: "3.2",
    travelers: { adults: 2, children: 1, childAge: "1Y4M" },
    stay: {
      name: "naha-de.asobu (Gree)",
      address: "80-7 Asato, Naha",
      mapCode: "33 158 445*55",
      nav: "naha-de.asobu"
    },
    logistics: [
      { icon: 'fa-plane-departure', text: 'JAL NU302 (去程)' },
      { icon: 'fa-plane-arrival', text: 'AirAsia FD231 (回程)' },
      { icon: 'fa-car', text: 'SKY 租車 (TDV-1965)' },
      { icon: 'fa-hotel', text: '安里站民宿 (Gree)' }
    ]
  },

  itinerary: [
    {
      day: 1,
      date: "3/28",
      title: "Day 1：抵達、取車與首日參拜",
      fullDate: "2026年3月28日 (六)",
      events: [
        { time: "06:00-08:00", poiId: "TPE_CHECKIN", activity: "桃園機場報到 & 登機手續" },
        { time: "08:00-12:15", poiId: "JAL_FLIGHT", activity: "JAL 機上用餐與飛行" },
        { time: "12:15-13:30", poiId: "OKA_ARRIVAL", activity: "抵達那霸機場 & 入關" },
        { time: "13:30-14:30", poiId: "SKY_RENTAL", activity: "14:00 預約取車 (SKY)" },
        { time: "15:00-16:00", poiId: "NAMINOU_SHRINE", activity: "波上宮參拜" },
        { time: "16:30-17:00", poiId: "STAY_ASOBU", activity: "民宿 Check-in" },
        { time: "17:30-19:30", poiId: "MAIN_PLACE", activity: "San-A Main Place 補給" },
        { time: "19:30-21:00", poiId: "DINNER_ASATO", activity: "晚餐：民宿周邊熟食", isMeal: true }
      ]
    },
    {
      day: 2,
      date: "3/29",
      title: "Day 2：南部水族館、購物與日落",
      fullDate: "2026年3月29日 (日)",
      events: [
        { time: "08:30-09:30", poiId: "BK_HOME", activity: "早餐：民宿享用", isMeal: true },
        { time: "10:00-12:30", poiId: "DMM_AQUARIUM", activity: "DMM Kariyushi 水族館" },
        { time: "12:30-16:00", poiId: "IIAS_LUNCH_SHOP", activity: "iias 豐崎午餐與購物" },
        { time: "16:30-18:30", poiId: "SENAGAJIMA_SUNSET", activity: "瀨長島看夕陽" },
        { time: "19:30-21:00", poiId: "DINNER_BEEF", activity: "晚餐：那霸燒肉大餐", isMeal: true },
        { time: "21:30", poiId: "STAY_ASOBU", activity: "返回民宿休息" }
      ]
    },
    {
      day: 3,
      date: "3/30",
      title: "Day 3：中部叢林與購物聖地",
      fullDate: "2026年3月30日 (一)",
      events: [
        { time: "08:30-09:30", poiId: "BK_LOCAL", activity: "早餐：便利商店/熟食", isMeal: true },
        { time: "10:00-13:00", poiId: "OKINAWA_ZOO", activity: "沖繩兒童王國" },
        { time: "13:30-17:30", poiId: "AEON_RYCOM", activity: "AEON Mall Rycom 採買", isMeal: true },
        { time: "18:30-20:00", poiId: "DINNER_SHABU", activity: "晚餐：Agu 豬涮涮鍋", isMeal: true },
        { time: "21:00", poiId: "STAY_ASOBU", activity: "返回民宿休息" }
      ]
    },
    {
      day: 4,
      date: "3/31",
      title: "Day 4：公園放電與市區漫遊",
      fullDate: "2026年3月31日 (二)",
      events: [
        { time: "09:30-11:30", poiId: "URASOE_PARK", activity: "浦添大公園 (C區)" },
        { time: "12:00-13:30", poiId: "LUNCH_URASOE", activity: "午餐：通堂拉麵", isMeal: true },
        { time: "14:00-16:30", poiId: "NAP_TIME", activity: "回民宿午睡休息" },
        { time: "17:00-19:30", poiId: "KOKUSAI_STREET", activity: "國際通伴手禮採購" },
        { time: "19:30-21:00", poiId: "DINNER_LAST", activity: "晚餐：屋台村居酒屋", isMeal: true },
        { time: "21:30", poiId: "STAY_ASOBU", activity: "返回民宿休息" }
      ]
    },
    {
      day: 5,
      date: "4/1",
      title: "Day 5：最後採買與返程",
      fullDate: "2026年4月1日 (三)",
      events: [
        { time: "09:00-10:00", poiId: "CHECK_OUT", activity: "退房與行李整理" },
        { time: "10:30-13:30", poiId: "ASHIBINAA_LAST", activity: "Outlet 採買與午餐", isMeal: true },
        { time: "14:00-14:30", poiId: "RETURN_CAR", activity: "租車公司還車" },
        { time: "15:45-18:00", poiId: "FLIGHT_HOME", activity: "AirAsia 返回桃園" },
        { time: "18:10-19:30", poiId: "TPE_PICKUP", activity: "寶寶車接機 (TAR-288)" }
      ]
    }
  ],

  pois: {
    "TPE_CHECKIN": {
      name: "桃園機場報到",
      navName: "桃園國際機場第二航廈",
      category: "行政流程",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?auto=format&fit=crop&q=80&w=400",
      desc: "JAL 櫃台報到，辦理行李託運與嬰兒車掛牌。",
      detailedStory: "請於起飛前 2.5 小時抵達。JAL 櫃台通常在第二航廈。告知櫃台嬰兒車要「門口托運(Gate Check)」，他們會給予專用吊牌。過安檢前請確認隨身包內無超過 100ml 液體（寶寶飲用水/奶粉除外）。",
      website: "https://www.taoyuan-airport.com/",
      infoSections: [
        { label: "航廈", content: "T2" },
        { label: "嬰兒車", content: "Gate Check" },
        { label: "飲水", content: "保溫瓶可帶水" }
      ],
      parentTips: "二航廈 3 樓有 Hello Kitty 遊戲區，過完安檢後可以去殺時間。",
      backupPlan: "若人潮過多，建議優先辦理自助報到機以節省排隊時間。"
    },
    "MAIN_PLACE": {
      name: "San-A 那霸 Main Place",
      navName: "サンエー那覇メインプレイス",
      category: "購物補給",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      desc: "在地最強購物中心，超市與服飾品牌極齊全。",
      detailedStory: "這是那霸市區最受當地人歡迎的商場。1 樓超市區非常大，可以買到最新鮮的沖繩水果、鮮乳與寶寶副食品素材。重點櫃位：LOFT、Afternoon Tea、及大型服飾區。",
      website: "https://www.san-a.co.jp/mainplace/",
      infoSections: [
        { label: "超市", content: "1F (09-23點)" },
        { label: "推薦", content: "LOFT/生活用品" },
        { label: "停車", content: "室內停車場免費" }
      ],
      parentTips: "超市區有專屬的小孩推車（有方向盤那種），寶寶坐得很開心。",
      backupPlan: "若停車場排隊，可轉往對面的免稅店 DFS 停車場（需消費）。"
    },
    "STAY_ASOBU": {
      name: "naha-de.asobu 民宿",
      navName: "naha-de.asobu",
      category: "住宿休息",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400",
      desc: "位於安里站附近，自助 Check-in。",
      detailedStory: "民宿採自助式入住，大門密碼會於前一日提供。建築內有電梯，方便推車。停車場位於建築物一樓，位置為編號「5」，請確認無誤後再停放。",
      website: "https://www.airbnb.com.tw/rooms/21833503",
      infoSections: [
        { label: "方式", content: "電子鎖自助" },
        { label: "停車", content: "1F 5號位" },
        { label: "垃圾", content: "需自行分類" }
      ],
      parentTips: "屋內備有微波爐可加熱副食品，地板為木地板需注意防滑。",
      backupPlan: "若專屬車位被占用，請致電民宿主人，並暫停對面特約停車場。"
    },
    "OKA_ARRIVAL": {
      name: "那霸機場入關",
      navName: "那覇空港",
      category: "行政流程",
      img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=400",
      desc: "抵達與入關程序。請準備好 Visit Japan Web。",
      detailedStory: "下飛機後跟隨 'Arrival' 指標前往證照查驗。沖繩機場入關通常比成田快。領完行李後通過稅關即可到達接機大廳。記得先連上機場 Wi-Fi 開啟 VJW。",
      website: "https://www.naha-airport.co.jp/zh-hant/",
      infoSections: [
        { label: "必備", content: "VJW QR Code" },
        { label: "順序", content: "查驗->行李->稅關" },
        { label: "提醒", content: "肉製品禁入" }
      ],
      parentTips: "領行李處旁有寬敞育嬰室，建議先換完尿布再排隊等租車接駁。",
      backupPlan: "若海關排隊超過 1 小時，聯繫租車公司告知會延後抵達。"
    },
    "SKY_RENTAL": {
      name: "SKY Rent-A-Car 那霸店",
      navName: "スカイレンタカー那覇空港店",
      category: "交通運輸",
      img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400",
      desc: "機場接駁取車。請至 11-B 站牌搭乘。",
      detailedStory: "SKY 租車接駁車停靠在機場外第 11-B 號站牌。取車時會核對保險與汽座。辦理完畢後直接導航前往波上宮。",
      website: "https://www.skyrent.jp/okinawa/naha-airport/",
      infoSections: [
        { label: "預約", content: "14:00 取車" },
        { label: "站牌", content: "11-B 候車" },
        { label: "文件", content: "駕照+譯本" }
      ],
      parentTips: "店內設有小遊戲區，辦理手續時可讓寶寶在地墊上活動。",
      backupPlan: "若接駁車等待過久，可改搭計程車直接前往店面。"
    },
    "DMM_AQUARIUM": {
      name: "DMM Kariyushi 水族館",
      navName: "DMMかりゆし水族館",
      category: "熱門景點",
      img: "https://images.unsplash.com/photo-1501333190117-bf584426b89a?auto=format&fit=crop&q=80&w=400",
      desc: "數位藝術水族館，適合幼兒互動探索。",
      detailedStory: "結合聲光效果的現代化水族館。位於 iias 豐崎二樓。最受歡迎的是透明玻璃地板水槽，以及可以近距離觀察的樹懶。",
      website: "https://kariyushi-aquarium.com/tw/",
      infoSections: [
        { label: "票價", content: "2400円" },
        { label: "停留", content: "2.5 小時" },
        { label: "推車", content: "全程OK" }
      ],
      parentTips: "二樓有企鵝區，圍欄高度正好適合寶寶站立觀看。",
      backupPlan: "若人潮過多，可先到商場一樓戶外沙灘散步再進場。"
    },
    "AEON_RYCOM": {
      name: "AEON Mall Rycom",
      navName: "イオンモール沖縄ライカム",
      category: "購物聖地",
      img: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?auto=format&fit=crop&q=80&w=400",
      desc: "沖繩最大商場，親子友善設施天花板。",
      detailedStory: "擁有超強哺乳室與嬰兒推車。重點購物點：西松屋、玩具反斗城。一樓大水族箱非常壯觀。",
      website: "https://okinawarycom-aeonmall.com/static/detail/translation-zh-tw",
      infoSections: [
        { label: "必逛", content: "西松屋 (4F)" },
        { label: "設施", content: "豪華哺乳室" },
        { label: "亮點", content: "巨大水族箱" }
      ],
      parentTips: "4F 有專屬幼兒遊玩區，地板有軟墊非常安全。",
      backupPlan: "若週末人潮太擁擠，可改去北中城的在地超市。"
    },
    "SENAGAJIMA_SUNSET": {
      name: "瀨長島 Umikaji Terrace",
      navName: "瀬長島ウミカジテラス",
      category: "熱門景點",
      img: "https://images.unsplash.com/photo-1552554746-814144576326?auto=format&fit=crop&q=80&w=400",
      desc: "純白建築聚落，觀看夕陽與飛機最佳場所。",
      detailedStory: "有沖繩小希臘之稱。層層疊疊的白色店舖。傍晚時分，可以一邊享受微風，一邊看飛機降落。",
      website: "https://www.umikajiterrace.com/",
      infoSections: [
        { label: "夕陽", content: "18:00 前後" },
        { label: "美食", content: "幸福鬆餅" },
        { label: "注意", content: "海風較大" }
      ],
      parentTips: "階梯較多，推車建議停放在下層平地，改用背巾行動較方便。",
      backupPlan: "若天氣陰雨，可改在 iias 豐崎室內露台遠眺海景。"
    },
    "DINNER_BEEF": {
      name: "那霸燒肉大餐",
      navName: "焼肉きんぐ",
      category: "特色飲食",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
      desc: "沖繩必吃阿古豬與黑毛和牛吃到飽。",
      detailedStory: "推薦燒肉王（Yakiniku King），提供觸控平板點餐。阿古豬肉質甘甜，和牛油脂豐沛，建議選擇綜合吃到飽方案。",
      website: "https://www.yakiniku-king.jp/",
      infoSections: [
        { label: "必點", content: "阿古豬五花" },
        { label: "幼兒", content: "3歲以下免費" },
        { label: "預約", content: "EPARK預約" }
      ],
      parentTips: "平板點餐有專屬兒童餐點（如玉米粥、馬鈴薯泥），非常方便。",
      backupPlan: "若排隊過久，改吃附近的日式定食連鎖店「彌生軒」。"
    }
  },

  // 新增：行前準備 (Checklist)
  preparation: [
    {
      category: "🪪 重要證件與文件",
      style: "blue",
      badge: "不可遺忘",
      items: ["護照 (大人小孩共 3 本)", "台灣駕照正本 + 日文譯本 (開車者)", "Visit Japan Web 截圖 (登機用)", "日幣現金 + 信用卡 (雙系統)", "海外旅遊平安險證明"]
    },
    {
      category: "👶 寶寶用品 (1Y4M)",
      style: "pink",
      tip: "建議：尿布在日本買，行李箱留給戰利品",
      items: ["輕便推車 (建議可平躺/機門取車)", "奶粉分裝盒 / 奶瓶 x2 / 刷具", "副食品料理包 (3-5天量)", "食物剪 / 寶寶餐具 / 圍兜", "安撫玩具 / 被被 / 奶嘴", "常備藥 (退燒/感冒/腸胃/OK繃)", "泳衣 / 游泳尿布 (瀨長島玩水用)"]
    },
    {
      category: "👕 大人行李建議",
      style: "green",
      items: ["行動電源 / 充電線 / 轉接頭(日本不用)", "個人盥洗保養品 / 隱形眼鏡"]
    }
  ],

  // 新增：注意事項與攻略
  notes: [
    {
      title: "搭機注意事項",
      icon: "fa-plane-arrival",
      style: "blue",
      content: [
        "<strong>🛒 推車託運：</strong> 建議在櫃台報到時要求「機門取車 (Gate Check)」。",
        "<strong>🍼 降落安撫：</strong> 1歲多寶寶耳壓不適時，請在起飛與降落時讓寶寶「喝奶」或「吸奶嘴」。",
        "<strong>🍱 寶寶餐：</strong> JAL 通常需提前預約寶寶餐 (Baby Meal)。"
      ]
    },
    {
      title: "沖繩自駕安全",
      icon: "fa-car",
      style: "green",
      content: [
        "<strong>💺 兒童座椅：</strong> 日本法律規定 6 歲以下強制使用。",
        "<strong>🚦 交通守則：</strong> 「右駕」新手請記得：轉彎時「左小右大」。",
        "<strong>🅿️ 停車：</strong> 景點多有免費停車，但那霸市區飯店多需另付 1000-1500円/晚。"
      ]
    },
    {
      title: "飲食與補貨",
      icon: "fa-utensils",
      style: "orange",
      content: [
        "<strong>🍶 泡奶用水：</strong> 日本自來水可生飲 but 含礦物質，建議買「純水」。",
        "<strong>🤱 親子設施：</strong> 沖繩百貨公司哺乳室設備非常完善。"
      ]
    }
  ]
};

export default travelData;
