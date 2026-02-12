/**
 * 沖繩五天四夜親子遊 - 結構化資料庫
 * 修改此檔案即可更新網頁內容，不需動到 HTML 結構。
 */

const okinawaTripData = {
    // 航班與交通資訊
    logistics: {
        departure: {
            flight: "JAL NU302",
            route: "TPE 10:00 - OKA 12:30",
            car: "TDV-1965"
        },
        arrival: {
            flight: "AirAsia FD231",
            route: "OKA 16:55 - TPE 17:30",
            car: "TAR-288"
        }
    },
    
    // 每日詳細行程
    days: [
        {
            day: 1,
            title: "D1 水族館",
            date: "2026/3/28 (六)",
            fullDate: "2026年3月28日 (週六)",
            items: [
                 { 
                    time: "07:00 - 08:00",
                    title: "機場接送",
                    desc: "已預約呼叫小黃TDV-1965。司機將協助搬運大件行李與折疊推車，請提前確認兒童安全座椅已備妥。",
                    type: "standard",
                    detail: {
                        category: "交通運輸",
                        info: "由住家出發直達桃園機場第二航廈，司機將於出發前 5 分鐘電話聯繫。",
                        stats: { "車程": "約 40 分鐘", "目的地": "桃機T2", "車型": "五人座休旅" },
                        img: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&q=80&w=600"
                    }
                },
                { 
                    time: "08:00 - 10:00",
                    title: "桃機 T2 搭機",
                    desc: "JAL NU302，包含飛機餐(無兒童餐)，小孩可先在機上用餐及補眠。登機前可先到育兒室釋放電力。",
                    type: "standard",
                    detail: {
                        category: "交通運輸",
                            info: "桃園國際機場第二航廈1號櫃檯報到，7:30開櫃。C5登機門附近有育兒區（含哺乳室、飲水機）。",
                            stats: { "航廈": "T2", "報到": "1號櫃臺", "航程": "約 90 分鐘", "餐點": "含飛機餐" },
                            parentTips: "起飛與降落時讓寶寶吸奶嘴或喝水，減緩耳壓不適。推車於機邊託運（需掛牌）。登機前完成泡奶與更換尿布。",
                            backup: "若遇班機延誤，取車後可直接前往飯店 Check-in，視情況取消 DMM 水族館行程。",
                            img: "https://images.unsplash.com/photo-1720518989092-1d07b068c1de?auto=format&fit=crop&q=80&w=600"
                        }
                },

                { 
                    time: "14:00 - 15:00", 
                    title: "那霸機場取車",
                    desc: "抵達那霸國際線航廈後，沿指標前往Sky租車接駁站搭乘接駁車。取車後直接前往豐崎地區（約 15 分鐘車程）。",
                    type: "standard",
                    detail: {
                        category: "交通運輸",
                        info: "抵達機場後，從出境大廳出航廈，過斑馬線就是「租車公司機場接駁巴士乘車處」。Sky租車的員工，將手持有Sky租車標誌手板，在11-B的導覽板附近等待。搭乘Sky租車公司接駁車前往附近營業所。辦理時需核對台灣駕照正本與日文譯本。",
                        stats: { "車型": "Yaris cross hybrid", "取車": "含接駁", "備註": "需查驗譯本" },
                        parentTips: "取車時請務必確認兒童安全座椅已安裝牢固，並詢問如何開啟後座車門兒童安全鎖。",
                        backup: "若機場接駁候車過久，可由一名大人先去排隊取車，另一名帶孩子在機場休息區（有冷氣）等待通知。",
                        img: "https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?auto=format&fit=crop&q=80&w=600"
                    }
                },
                { 
                    time: "15:15 - 17:00", 
                    title: "DMM Kariyushi 水族館", 
                    desc: "優先看魚！室內冷氣舒適，小孩可以自由走動看觸摸池，減緩搭機疲勞。", 
                    type: "attraction", 
                    location: "DMM Kariyushi Aquarium",
                    nav: "https://www.google.com/maps/search/DMM+Kariyushi+Aquarium",
                    detail: {
                        category: "熱門景點",
                        info: "2020年開幕的室內水族館，結合影像與聲光效果，位於 iias 購物中心旁。",
                        stats: { "停留": "2 小時", "門票": "2400円", "推車": "全程友善" },
                        parentTips: "觸摸池區可讓寶寶摸海星，旁邊有洗手台非常方便。",
                        backup: "室內景點不受天氣影響，若當天太累可縮短停留時間，直接逛隔壁商場。",
                        img: "https://images.unsplash.com/photo-1501333190117-bf584426b89a?auto=format&fit=crop&q=80&w=600",
                        website: "https://kariyushi-aquarium.com/tc/"
                    }
                },
                { 
                    time: "17:00 - 18:30", 
                    title: "iias 豐崎：快速採買 🍼", 
                    desc: "就在隔壁。直奔西松屋買「這兩天」必備的奶粉尿布，其餘大採購留給 D2 或 D4。", 
                    type: "standard",
                    detail: {
                        category: "購物中心",
                        info: "大型購物中心，內有西松屋、超市，是補齊嬰兒用品的首選地。",
                        stats: { "重點": "西松屋/超市", "退稅": "有", "停車": "免費" },
                        parentTips: "3 樓有設備完善的育兒室，包含哺乳室與熱水供應。",
                        backup: "若西松屋缺貨，可改前往新都心的玩具反斗城補貨。",
                        img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=600",
                        website: "https://toyosaki.iias.jp/zh-hant/"
                    }
                },
                { 
                    time: "19:00 - 20:30", 
                    title: "晚餐推薦：通堂拉麵", 
                    desc: "著名的男人麵與女人麵，小祿店附近好停車。", 
                    type: "meal",
                    location: "Ryukyu Shinmen Tondou",
                    detail: {
                        category: "美食餐飲",
                        info: "男人麵是濃厚豚骨，女人麵是清爽鹽味雞湯，適合小孩分享。",
                        stats: { "價位": "中低", "排隊": "視時段", "兒童椅": "有" },
                        parentTips: "店內有塌塌米區，對帶幼兒的家長來說非常輕鬆。",
                        backup: "若小祿店排隊太長，附近有 A&W 漢堡或便利商店作為快速晚餐備案。",
                        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
                        website: "http://www.ryukyu-shinmen.com/"
                    }
                },
                { 
                    time: "住宿", 
                    title: "住宿トラベルホステルnaha-de.asobu", 
                    desc: "小孩預計 21:00 前就寢。", 
                    type: "standard", 
                    nav: "https://www.google.com/maps/search/naha-de.asobu",
                    detail: {
                        category: "住宿地點",
                        info: "鄰近國際通與美榮橋站，空間適合小家庭，出入方便。",
                        stats: { "類型": "青年旅館/套房", "進房": "15:00", "車位": "需預約/另付" },
                        parentTips: "若有需要熱水泡奶，可使用交誼廳的飲水設備。",
                        backup: "若旅館車位已滿，可停至附近的「三井リパーク」停車場。",
                        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600"
                    }
                }
            ]
        },
        {
            day: 2,
            title: "D2 動物園",
            date: "2026/3/29 (日)",
            fullDate: "2026年3月29日 (週日)",
            items: [
                { 
                    time: "08:30 - 09:30", 
                    title: "晨間早餐與出發", 
                    desc: "享用名古屋式的點飲料送早餐服務，適合小孩吃厚片吐司。", 
                    type: "breakfast", 
                    tag: "甘味處 萬丸",
                    detail: {
                        category: "美食餐飲",
                        info: "名古屋風格早餐，買咖啡送吐司與紅豆泥，CP值極高。",
                        stats: { "價位": "低", "停車": "對面收費停車場", "推薦": "紅豆吐司" },
                        parentTips: "吐司可要求不要烤太焦，方便讓 1 歲多寶寶食用。",
                        backup: "若店內客滿，可改去對面的便利商店買飯糰，爭取時間前往普天滿宮。",
                        img: "https://images.unsplash.com/photo-1484723088339-fe7838eba639?auto=format&fit=crop&q=80&w=600",
                        website: "http://www.manmaru-okinawa.com/"
                    }
                },
                { 
                    time: "10:00 - 11:30", 
                    title: "普天滿宮參拜", 
                    desc: "鐘乳石洞內涼爽，帶小孩簡單參觀祈福。", 
                    type: "standard", 
                    nav: "https://www.google.com/maps/search/Futenma+Shrine",
                    detail: {
                        category: "宗教文化",
                        info: "宜野灣市最古老的神社，著名的洞穴神社需要現場登記進入。",
                        stats: { "停留": "45 分鐘", "門票": "免費", "特色": "鐘乳石洞" },
                        parentTips: "進入洞穴的路徑較窄且有階梯，建議暫時使用背巾或手抱。",
                        backup: "若當天洞穴維修不開放，可改至外部建築參拜並提早前往動物園。",
                        img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=600",
                        website: "http://futenmagu.or.jp/"
                    }
                },
                { 
                    time: "12:00 - 14:30", 
                    title: "沖繩兒童王國", 
                    desc: "重點：餵食大象長頸鹿。這裡比一般動物園更適合幼童走動。", 
                    type: "attraction", 
                    mealTag: "午餐：園區內簡單用餐", 
                    nav: "https://www.google.com/maps/search/Okinawa+Zoo+%26+Museum",
                    detail: {
                        category: "親子必去",
                        info: "結合動物園、美術館、遊樂園的綜合場域，適合小小孩近距離看動物。",
                        stats: { "停留": "3 小時", "門票": "500円", "體驗": "餵食體驗" },
                        parentTips: "Wonder Museum (室內區) 非常適合避暑或雨天備案，有許多感官互動設施。",
                        backup: "若遇下雨，可延長在 Wonder Museum 室內區的停留時間，取消戶外動物區。",
                        img: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=600",
                        website: "https://www.okzm.jp/"
                    }
                },
                { 
                    time: "15:00 - 18:30", 
                    title: "AEON Mall Rycom 永旺", 
                    desc: "1 樓大魚缸是剛睡醒小孩的最愛。", 
                    type: "standard", 
                    coffeeBreak: "大人時刻：小孩推車午睡。逛旗艦店。", 
                    nav: "https://www.google.com/maps/search/AEON+Mall+Okinawa+Rycom",
                    detail: {
                        category: "購物休閒",
                        info: "全沖繩最大百貨，擁有 200 多間店鋪。1 樓大水族箱非常壯觀。",
                        stats: { "重點": "玩具反斗城/GAP", "退稅": "有", "停車": "免費" },
                        parentTips: "推車可租借，4 樓美食廣場設有幼兒專屬用餐區與軟墊遊戲區。",
                        backup: "若時間不足，可縮短購物行程，優先前往 4 樓美食廣場解決晚餐。",
                        img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=600",
                        website: "https://okinawarycom-aeonmall.com/"
                    }
                },
                { 
                    time: "19:00 - 20:30", 
                    title: "晚餐：くら壽司 (永旺店)", 
                    desc: "迴轉壽司方便帶小孩，且有扭蛋可以玩。", 
                    type: "meal",
                    detail: {
                        category: "美食餐飲",
                        info: "平價迴轉壽司，透過螢幕點餐，每五盤可抽扭蛋一次。",
                        stats: { "價位": "中", "預約": "可用App預約", "兒童具": "有" },
                        parentTips: "有豆皮壽司、烏龍麵、茶碗蒸，非常適合給 1 歲多寶寶吃。",
                        backup: "若壽司店候位過久，永旺百貨美食街還有非常多適合親子的選擇。",
                        img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=600",
                        website: "https://www.kurasushi.co.jp/"
                    }
                },
                { 
                    time: "住宿", 
                    title: "住宿トラベルホステルnaha-de.asobu", 
                    desc: "小孩預計 21:00 前就寢。", 
                    type: "standard", 
                    nav: "https://www.google.com/maps/search/naha-de.asobu"
                }
            ]
        },
        {
            day: 3,
            title: "D3 美國村",
            date: "2026/3/30 (一)",
            fullDate: "2026年3月30日 (週一)",
            items: [
                { 
                    time: "09:00 - 10:30", 
                    title: "波上宮 & 海灘", 
                    desc: "海灘踩水，沙子很細。這時候水溫涼爽適合玩一下水。", 
                    type: "breakfast", 
                    tag: "豬肉蛋飯糰", 
                    nav: "https://www.google.com/maps/search/Naminoue+Beach",
                    detail: {
                        category: "熱門景點",
                        info: "唯一市區內的海灘，沙灘乾淨且海水淺，適合幼兒戲水。",
                        stats: { "停留": "60 分鐘", "門票": "免費", "淋浴": "有(付費)" },
                        parentTips: "海邊風大且曬，玩完後請記得補充水分，附近有著名的飯糰店可外帶。",
                        backup: "若浪大或氣候不佳不適合玩水，可直接改往浦添大公園。",
                        img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=600",
                        website: "http://naminouebeach.jp/"
                    }
                },
                { 
                    time: "11:00 - 13:00", 
                    title: "浦添大公園", 
                    desc: "專屬 1-3 歲幼兒遊樂場，放電絕佳場所。", 
                    type: "attraction", 
                    nav: "https://www.google.com/maps/search/Urasoe+Dai+Park",
                    detail: {
                        category: "親子公園",
                        info: "C 區遊具是專門為幼童設計的，地板皆有彈性防護墊。",
                        stats: { "停留": "90 分鐘", "停車": "免費", "難度": "初級" },
                        parentTips: "滾輪溜滑梯雖然好玩但寶寶太小不建議單獨玩，建議在 1-3 歲專區活動。",
                        backup: "下雨天公園無法遊玩，可改前往宜野灣的室內兒童遊樂場 (如 Round 1)。",
                        img: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=600",
                        website: "https://www.pref.okinawa.jp/site/doboku/toshimono/park/urasoedai.html"
                    }
                },
                { 
                    time: "13:30 - 15:30", 
                    title: "美濱地區午餐", 
                    desc: "琉球之牛北谷店，高質感燒肉體驗。", 
                    type: "meal", 
                    mealTag: "午餐：琉球之牛 (北谷店)",
                    detail: {
                        category: "美食餐飲",
                        info: "頂級黑毛和牛燒肉，肉質入口即化。午間套餐價格較實惠。",
                        stats: { "價位": "高", "預約": "強烈建議", "兒童椅": "有" },
                        parentTips: "雖然是燒肉店，但排煙系統好且環境舒適，對小孩很友善。",
                        backup: "若沒預約到琉球之牛，美國村內還有四季鐵板燒或漢堡店等眾多選擇。",
                        img: "https://images.unsplash.com/photo-1534790561517-40e1c61fad52?auto=format&fit=crop&q=80&w=600",
                        website: "https://www.u-shi.net/"
                    }
                },
                { 
                    time: "15:30 - 19:00", 
                    title: "美國村散策", 
                    desc: "傍晚點燈與夕陽非常浪漫。", 
                    type: "standard", 
                    coffeeBreak: "大人時刻：在 Zhyvago Coffee 看海。", 
                    nav: "https://www.google.com/maps/search/American+Village+Okinawa",
                    detail: {
                        category: "熱門景點",
                        info: "充滿美式風情的購物與步道區，傍晚在海岸步道散步非常舒服。",
                        stats: { "特色": "夕陽/夕照", "拍照": "極佳", "推車": "全程可推" },
                        parentTips: "步道寬廣，小孩可自由行走，但海邊柵欄需注意安全。",
                        backup: "若遇大雨，可改在美國村內的 AEON 百貨或 Depot Island 室內區域逛街。",
                        img: "https://images.unsplash.com/photo-1565011523534-70323a82862d?auto=format&fit=crop&q=80&w=600",
                        website: "https://www.okinawa-americanvillage.com/"
                    }
                },
                { 
                    time: "19:30 - 21:00", 
                    title: "晚餐：暖暮拉麵 (中城店)", 
                    desc: "回程途中用餐，避開市區人潮。", 
                    type: "meal",
                    detail: {
                        category: "美食餐飲",
                        info: "九州拉麵總票選第一名，細麵濃湯，可自選麵體硬度。",
                        stats: { "價位": "低", "停車": "附停車場", "推薦": "芝麻蔥拉麵" },
                        parentTips: "中城店相較國際通店排隊人潮較少，比較適合帶小孩快速用餐。",
                        backup: "若中城店也要排很久，附近還有其他拉麵店或家庭式連鎖餐廳。",
                        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600",
                        website: "http://danbo.jp/"
                    }
                },
                { 
                    time: "住宿", 
                    title: "住宿トラベルホステルnaha-de.asobu", 
                    desc: "小孩預計 21:00 前就寢。", 
                    type: "standard", 
                    nav: "https://www.google.com/maps/search/naha-de.asobu"
                }
            ]
        },
        {
            day: 4,
            title: "D4 南部",
            date: "2026/3/31 (二)",
            fullDate: "2026年3月31日 (週二)",
            items: [
                { 
                    time: "09:00 - 10:30", 
                    title: "美味吐司早餐", 
                    desc: "在那霸市區的高質感麵包早午餐店。", 
                    type: "breakfast", 
                    tag: "oHacorté Bakery",
                    detail: {
                        category: "美食餐飲",
                        info: "結合雜貨與烘焙的法式吐司店，法式吐司是必點項目。",
                        stats: { "價位": "中", "特色": "法式吐司", "停車": "附近付費" },
                        parentTips: "環境優雅，建議早點出發以免需要排隊。",
                        backup: "若候位太長，可改去附近的超商買早餐，提早前往公園佔位。",
                        img: "https://images.unsplash.com/photo-1506084868730-34ad5033887c?auto=format&fit=crop&q=80&w=600",
                        website: "http://ohacorte-bakery.com/"
                    }
                },
                { 
                    time: "11:00 - 13:30", 
                    title: "平和祈念公園", 
                    desc: "全沖繩最強幼兒公園，專屬遮陽與安全地板設施。", 
                    type: "attraction", 
                    nav: "https://www.google.com/maps/search/Okinawa+Peace+Memorial+Park+Playground",
                    detail: {
                        category: "親子公園",
                        info: "園區極大，「命之卵」遊戲區有無數適合 1-3 歲的遊具。",
                        stats: { "停留": "2 小時", "門票": "免費", "等級": "沖繩前三" },
                        parentTips: "這裡有大型噴霧設施與遮陽棚，是沖繩少數不怕大太陽的公園。",
                        backup: "雨天備案：改往附近的沖繩世界文化王國（玉泉洞），室內鐘乳石洞較不受影響。",
                        img: "https://images.unsplash.com/photo-1545624239-10bca210daee?auto=format&fit=crop&q=80&w=600",
                        website: "https://www.heiwa-irei-okinawa.jp/"
                    }
                },
                { 
                    time: "14:00 - 15:30", 
                    title: "奧武島看貓", 
                    desc: "體驗漁村風情，吃現炸天婦羅。", 
                    type: "meal", 
                    mealTag: "午餐：奧武島天婦羅",
                    detail: {
                        category: "特色景點",
                        info: "一過橋就有許多流浪貓迎接，天婦羅每份只要 100円 左右。",
                        stats: { "價位": "極低", "停留": "45 分鐘", "亮點": "貓咪/天婦羅" },
                        parentTips: "天婦羅攤位多為外帶，可拿在手邊在港口邊吃邊看海看貓。",
                        backup: "若奧武島人潮太多，可跳過此點，直接提早前往瀨長島搶鬆餅候位。",
                        img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600"
                    }
                },
                { 
                    time: "16:00 - 18:30", 
                    title: "瀨長島夕陽", 
                    desc: "看飛機起降，品嚐幸福鬆餅。", 
                    type: "standard", 
                    coffeeBreak: "大人時刻：品嚐幸福鬆餅。", 
                    nav: "https://www.google.com/maps/search/Umikaji+Terrace+Senagajima",
                    detail: {
                        category: "熱門景點",
                        info: "白色希臘風建築群，可近距離看那霸機場飛機起降。",
                        stats: { "亮點": "飛機/夕陽", "美食": "幸福鬆餅", "推車": "部分有階梯" },
                        parentTips: "幸福鬆餅需提前預約，現場排隊可能很久，露台區適合小孩看飛機。",
                        backup: "若鬆餅排不到，可改在露台區買其他小點心，坐在海邊同樣能享受夕陽。",
                        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
                        website: "https://www.umikajiterrace.com/"
                    }
                },
                { 
                    time: "19:00 - 20:30", 
                    title: "晚餐：瀨長島美食廣場", 
                    desc: "享受在海邊的最後一頓晚餐。", 
                    type: "meal",
                    detail: {
                        category: "美食餐飲",
                        info: "集結沖繩各地美食，塔可飯、漢堡、精釀啤酒一應俱全。",
                        stats: { "環境": "戶外露天", "景色": "星空海景", "價位": "中" },
                        parentTips: "晚上風大，請幫寶寶加一件輕便外套。",
                        backup: "若海邊風太大，可改回那霸市區享用晚餐（如 暖暮或通堂）。",
                        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600"
                    }
                },
                { 
                    time: "住宿", 
                    title: "トラベルホステルnaha-de.asobu", 
                    desc: "小孩預計 21:00 前就寢。", 
                    type: "standard", 
                    nav: "https://www.google.com/maps/search/naha-de.asobu"
                }
            ]
        },
        {
            day: 5,
            title: "D5 賦歸",
            date: "2026/4/01 (三)",
            fullDate: "2026年4月1日 (週三)",
            items: [
                { 
                    time: "09:00 - 11:00", 
                    title: "悠閒退房", 
                    desc: "最後整理行李，前往國際通。", 
                    type: "breakfast", 
                    tag: "市場早餐",
                    detail: {
                        category: "文化探索",
                        info: "牧志公設市場 2 樓可以吃到在地新鮮海鮮與道地家常菜。",
                        stats: { "停留": "2 小時", "重點": "伴手禮", "氣氛": "在地生活" },
                        parentTips: "新大樓環境乾淨且有電梯，帶推車也不擔心。",
                        backup: "若市場太擁擠，可改去國際通上的咖啡店享用簡易早餐。",
                        img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=600",
                        website: "https://kosetsu-ichiba.com/"
                    }
                },
                { 
                    time: "11:00 - 13:00", 
                    title: "國際通 / 牧志市場", 
                    desc: "最後的伴手禮衝刺（黑糖、藥妝）。", 
                    type: "attraction", 
                    nav: "https://www.google.com/maps/search/Kokusai+Dori",
                    detail: {
                        category: "購物區",
                        info: "沖繩最熱鬧的一條街，包含卡爾比現炸薯條、各式藥妝店與紀念品。",
                        stats: { "推車": "可推", "人潮": "多", "亮點": "最後補貨" },
                        parentTips: "主幹道兩側人行道寬敞，但進入分支市場巷弄建議改用背巾。",
                        backup: "若時間太趕，可放棄國際通，提早去機場免稅店進行最後採購。",
                        img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600"
                    }
                },
                { 
                    time: "13:30 - 14:30", 
                    title: "加油、還車、前往機場", 
                    desc: "14:55 前需抵達那霸機場，辦理 Air Asia 登機手續。", 
                    type: "standard",
                    detail: {
                        category: "交通運輸",
                        info: "還車前記得去加油站加滿油(滿油還車規則)。",
                        stats: { "步驟": "加油->還車->接駁", "提醒": "保留加油收據", "時間": "需預留30分" },
                        parentTips: "機場出境大廳 2 樓有許多免稅伴手禮，若還有遺漏可在這最後購買。",
                        backup: "若還車程序耽誤，應優先確保報到時效，免稅店採買可縮減。",
                        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600"
                    }
                },
                { 
                    time: "16:55 - 17:30", 
                    title: "返抵台灣", 
                    desc: "平安回家，期待下次旅行。", 
                    type: "standard",
                    detail: {
                        category: "交通運輸",
                        info: "返程航班順利結束，回憶滿滿。",
                        stats: { "航班": "AirAsia", "航程": "約 90 分鐘", "家": "Sweet Home" },
                        backup: "返台後若需接駁，可提早預約機場接送或停在機場停車場。",
                        img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=600"
                    }
                }
            ]
        }
    ],

    // 行前準備
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

    // 注意事項
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
