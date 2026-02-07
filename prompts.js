/**
 * AI 助手指令庫與輔助函式
 * 包含 Prompt 範本與地理位置獲取邏輯
 */

const AIPrompts = {
    // 獲取目前座標
    getGeoLocation: function() {
        return new Promise((resolve) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => resolve(`${pos.coords.latitude}, ${pos.coords.longitude}`),
                    () => resolve("未知座標 (使用者未授權或環境不支持)")
                );
            } else {
                resolve("環境不支援定位");
            }
        });
    },

    // 建立完整的 Prompt
    buildFullPrompt: async function(query, pageContent) {
        const locationStr = await this.getGeoLocation();
        const todayDate = new Date().toISOString().split('T')[0];
        
        return `
            當前系統日期：${todayDate}
            行程基礎日期：D1 為 2026-03-28 (以此類推 D2=3/29, D3=3/30...)
            使用者目前所在地點座標資訊：${locationStr}
            
            以下是當前頁面所有的行程與資訊：
            """
            ${pageContent}
            """

            使用者提問：
            ${query}

            【指令規範】
            1. (1) 如果問的是行程細節（如住宿、機票時間、某日幾點出門），請從上方文字內容提取並回答。
            2. (2) 如果使用者想調整行程（如改去某處），請根據該景點位置提供交通建議與親子適配性分析。
            3. (3) 如果問的是觀光/飲食/購物建議，請優先結合使用者目前的座標位置給出鄰近建議，並考慮到帶著 1Y4M 小孩的需求。
            4. 回答請親切、使用繁體中文。
        `;
    },

    systemInstruction: "你是一位資深沖繩親子旅遊導遊，協助使用者規劃旅遊。"
};
