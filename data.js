/**
 * 沖繩親子旅遊資料庫 (JSON 結構)
 * 版本：3.3 (完整同步版：包含行程、行前準備與注意事項)
 * 修正：移除 export 語法以相容於直接 script 載入
 */

const travelData = {
  metadata: {
    title: "2026 沖繩親子五日遊 (v3.3)",
    version: "3.3",
    travelers: { adults: 2, children: 1, childAge: "1Y4M" },
    stay: {
      name: "naha-de.asobu (Gree)",
      address: "80-7 Asato, Naha",
      mapCode: "33 158 445*55",
      nav: "naha-de.asobu"
    },
    logistics: [
      { icon: 'fa-plane-departure', text: 'JAL NU302 (去程)' },
      { icon: 'fa-car', text: '送機-呼叫小黃 (TDV-1965)' },
      { icon: 'fa-plane-arrival', text: 'AirAsia FD231 (回程)' },
      { icon: 'fa-car', text: '接機-寶寶車 (TAR-288)' },
      { icon: 'fa-car', text: 'SKY 租車' }, 
      { icon: 'fa-hotel', text: '民宿naha-de.asobu (Gree)' }
    ]
  },

  itinerary: [
    {
      day: 1,
      date: "3/28",
      title: "Day 1：抵達、取車與首日參拜",
      fullDate: "2026年3月28日 (六)",
      events: [
        { time: "07:00-08:00", poiId: "CAB_DEPARTURE", activity: "送機-呼叫小黃" },
        { time: "08:00-10:00", poiId: "TPE_CHECKIN", activity: "桃園機場報到 & 登機手續" },
        { time: "10:00-12:30", poiId: "JAL_FLIGHT", activity: "JAL 機上用餐與飛行" },
        { time: "12:30-13:45", poiId: "OKA_ARRIVAL", activity: "抵達那霸機場 & 入關" },
        { time: "14:00-14:40", poiId: "SKY_RENTAL", activity: "租車取車 (SKY)" },
        { time: "15:00-16:00", poiId: "NAMINOU_SHRINE", activity: "波上宮參拜" },
        { time: "16:30-17:30", poiId: "STAY_ASOBU", activity: "民宿 Check-in" },
        { time: "18:00-19:00", poiId: "MAIN_PLACE", activity: "San-A Main Place 補給"},
        { time: "19:00-20:00", poiId: "DINNER_DAY1", activity: "晚餐：賣場美食街(和風亭)", isMeal: true  }
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
    "CAB_DEPARTURE": {
      name: "送機-呼叫小黃",
      navName: "桃園國際機場第二航廈",
      category: "交通運輸",
      img: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&q=80&w=400",
      detailedStory: "",
      infoSections: [
        { label: "目的地", content: "桃機T2" },
        { label: "車程", content: "約40分" },
        { label: "費用", content: "NT1100" }
      ],
      parentTips: "預約車輛有後向座椅。",
    },
    "TPE_CHECKIN": {
      name: "桃園機場報到",
      navName: "桃園國際機場第二航廈",
      category: "行政流程",
      img: "https://images.unsplash.com/photo-1583330357508-1864f8e57785?auto=format&fit=crop&q=80&w=400",
      desc: "JAL 櫃台報到，辦理行李託運與嬰兒車掛牌。",
      detailedStory: "請於起飛前 2.5 小時抵達。JAL 櫃台通常在第二航廈。告知櫃台嬰兒車要「門口托運(Gate Check)」，他們會給予專用吊牌。過安檢前請確認隨身包內無超過 100ml 液體（寶寶飲用水/奶粉除外）。",
      website: "https://www.taoyuan-airport.com/",
      infoSections: [
        { label: "航廈", content: "T2" },
        { label: "嬰兒車", content: "Gate Check" },
        { label: "託運額度", content: "23kg*4" }
      ],
      parentTips: "二航廈 3 樓有 Hello Kitty 遊戲區，C5登機門附近有育兒區。登機前泡好奶、換尿布、準備食品與小玩具。",
      backupPlan: "若人潮過多，建議優先辦理自助報到機以節省排隊時間。"
    },
    "JAL_FLIGHT": {
      name: "搭機 JAL NU302",
      navName: "那霸機場",
      category: "交通運輸",
      img: "https://images.unsplash.com/photo-1569839333583-7375336cde4b?auto=format&fit=crop&q=80&w=400",
      detailedStory: "",
      infoSections: [
        { label: "航程", content: "約90分" },
        { label: "飛機餐", content: "香腸雞蛋沙拉麵包、蘋果汁" }
      ],
      parentTips: "起飛時餵食以減輕氣壓變化帶來的耳朵不適（耳鳴），小孩吵鬧時拿出小玩具分散注意力",
    },
    "OKA_ARRIVAL": {
      name: "那霸機場入關",
      navName: "那覇空港",
      category: "行政流程",
      img: "https://images.unsplash.com/photo-1703446207814-8097620d3069?auto=format&fit=crop&q=80&w=400",
      desc: "抵達與入關程序。請準備好 Visit Japan Web。",
      detailedStory: "下飛機後跟隨 'Arrival' 指標前往證照查驗。領完行李後通過稅關即可到達接機大廳。記得先連上機場 Wi-Fi 開啟 VJW。",
      website: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/",
      infoSections: [
        { label: "必備", content: "VJW QR Code" },
        { label: "順序", content: "查驗->行李->稅關" }
      ],
      parentTips: "領行李處旁有寬敞育嬰室，建議先換完尿布再排隊等租車接駁。",
      backupPlan: "若海關排隊超過 1 小時，聯繫租車公司告知會延後抵達。"
    },
    "SKY_RENTAL": {
      name: "SKY Rent-A-Car 那霸店",
      navName: "スカイレンタカー那覇空港店",
      category: "交通運輸",
      img: "https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?auto=format&fit=crop&q=80&w=400",
      desc: "機場接駁取車。請至 11-B 站牌搭乘。",
      detailedStory: "從出境大廳出航廈，過斑馬線就是「租車公司機場接駁巴士乘車處」。SKY 租車接駁車停靠在機場外第 11-B 號站牌。取車時會核對保險與汽座。辦理完畢後直接導航前往波上宮。",
      website: "https://www.skyrent.jp/okinawa/naha-airport/",
      infoSections: [
        { label: "預約", content: "14:00 取車" },
        { label: "站牌", content: "11-B 候車" },
        { label: "文件", content: "駕照+譯本" },
        { label: "車款", content: "YYaris Cross Hybrid" }
      ],
      parentTips: "車輛包含後向安全座椅。店內設有小遊戲區，辦理手續時可讓寶寶在地墊上活動。",
      backupPlan: "若接駁車等待過久，可改搭計程車直接前往店面。"
    },
    "NAMINOU_SHRINE": {
      name: "參拜波上宮",
      navName: "若狭海浜公園駐車場",
      category: "熱門景點",
      img: "https://images.unsplash.com/photo-1640052790613-717b927414e0?auto=format&fit=crop&q=80&w=400",
      desc: "建於懸崖之上的神社，可俯瞰蔚藍海景，是那霸最具代表性的能量景點。",
      detailedStory: "波上宮是沖繩八社之一，自琉球王國時代便是祈求航海平安的重要聖地。神社建在臨海峭壁之上，參拜後可步行前往波之上海灘，讓孩子在沙灘踏浪、玩沙，是市區少見可同時感受文化與自然的地點。",
      website: "https://www.san-a.co.jp/mainplace/",
      infoSections: [
        { label: "參拜時間", content: "09-17點" },
        { label: "建議停留", content: "1小時" }
      ],
      parentTips: "神社階梯較多，建議使用輕便型推車或背巾。海灘沙子細軟，記得攜帶替換衣物與毛巾。",
      backupPlan: "若遇下雨或海灘風浪較大，可改至附近的室內景點或商場稍作休息。"
    },
    "MAIN_PLACE": {
      name: "San-A 那霸 Main Place",
      navName: "サンエー那覇メインプレイス",
      category: "購物補給",
      img: "https://images.unsplash.com/photo-1522684462852-01b24e76b77d?auto=format&fit=crop&q=80&w=400",
      desc: "補給尿布及食物。在地最強購物中心，超市與服飾品牌極齊全。",
      detailedStory: "這是那霸市區最受當地人歡迎的商場。1 樓超市區非常大，可以買到最新鮮的沖繩水果、鮮乳與寶寶副食品素材。重點櫃位：3coins+、無印良品等。",
      website: "https://www.san-a.co.jp/mainplace/",
      infoSections: [
        { label: "超市", content: "1F (09-23點)" },
        { label: "推薦", content: "超市" },
        { label: "步行", content: "約12分" },
        { label: "停車", content: "室內停車場免費" }
      ],
      parentTips: "超市區有專屬的小孩推車（有方向盤那種），寶寶坐得很開心。",
      backupPlan: "若停車場排隊，可轉往對面的免稅店 DFS 停車場（需消費）。"
    },
    "STAY_ASOBU": {
      name: "naha-de.asobu 民宿",
      navName: "naha-de.asobu",
      category: "住宿休息",
      img: "https://images.unsplash.com/photo-1730787056513-66090abd076d?auto=format&fit=crop&q=80&w=400",
      desc: "自助 Check-in。",
      detailedStory: "民宿採自助式入住，輸入密碼後取得鑰匙卡。建築內有電梯，方便推車。投幣式停車場位於建築物一樓，可停放2、3、5、6。",
      website: "https://www.chillnn.com/177d40f34fb27a/room/17910feba7d2bb",
      infoSections: [
        { label: "入住", content: "15:00後自助入住" },
        { label: "停車", content: "1F 2、3、5、6號位" },
        { label: "設備", content: "廚房、微波爐、洗衣機、浴缸" },
        { label: "備品", content: "牙刷、毛巾、洗髮精、肥皂" }
      ],
      parentTips: "屋內備有微波爐可加熱副食品，地板為木地板需注意防滑。",
      backupPlan: "若1F車位被占用，可改停鄰近安里セントラルパーク。"
    },
    "DINNER_DAY1": {
      name: "和風亭",
      navName: "サンエー那覇メインプレイス 和風亭",
      category: "特色飲食",
      img: "https://images.unsplash.com/photo-1591814252471-068b545dff62?auto=format&fit=crop&q=80&w=400",
      desc: "主打日式定食與炸豬排，口味溫和、份量充足，適合全家用餐。",
      detailedStory: "和風亭是沖繩在地家庭常訪的日式定食餐廳。招牌炸豬排外酥內嫩，搭配高麗菜絲與味噌湯相當經典；也有壽喜燒、天婦羅、兒童餐等選擇。用餐空間寬敞舒適，適合帶小孩同行，逛街後直接用餐非常方便。",
      website: "https://www.san-a.co.jp/store/1036/",
      infoSections: [
        { label: "位置", content: "賣場4F" },
        { label: "推薦", content: "炸豬排定食／壽喜燒／兒童餐" },
        { label: "預算", content: "約¥1,200-¥2,000/人" }
      ],
      parentTips: "提供兒童餐與兒童座椅，餐點口味不會過重。可請店員將炸物剪小塊方便孩子食用。",
      backupPlan: "若尖峰時段需候位，可改至同樓層其他餐廳或至地下樓美食區選擇更快速的餐點。"
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
}
