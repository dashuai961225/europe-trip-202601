const deepFreeze = (value) => {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(deepFreeze);
    Object.freeze(value);
  }
  return value;
};

export const TRIP = deepFreeze({
  id: 'europe-autumn-2026',
  title: '欧洲秋日旅行',
  startDate: '2026-10-01',
  endDate: '2026-10-08',
  cities: ['阿姆斯特丹', '卢塞恩', '因特拉肯', '巴黎'],
});

export const PHOTO_SPOTS = deepFreeze([
  { id: 'damrak', city: '阿姆斯特丹', name: 'Damrak 运河屋', bestTime: '清晨或蓝调时刻', composition: '从水边低机位拍彩色“姜饼屋”和倒影，避开正午人流。', routeNote: '中央车站步行约 5 分钟，适合抵达夜或次日清晨。', mapQuery: 'Damrak Amsterdam' },
  { id: 'brouwersgracht', city: '阿姆斯特丹', name: 'Brouwersgracht 运河', bestTime: '上午柔光', composition: '把拱桥、停泊船和窄屋放进同一画面，用桥栏作前景。', routeNote: '从中央车站前往九街途中可顺路停留。', mapQuery: 'Brouwersgracht Amsterdam' },
  { id: 'seven-bridges', city: '阿姆斯特丹', name: 'Reguliersgracht 七桥景观', bestTime: '清晨或亮灯后', composition: '沿运河中轴取景，让连续桥洞形成纵深；夜间注意稳定手机。', routeNote: '运河带散步路线上的经典机位。', mapQuery: 'Seven Bridges View Amsterdam' },
  { id: 'museumplein', city: '阿姆斯特丹', name: '博物馆广场', bestTime: '上午 9 点前', composition: '利用水池倒影或建筑拱门框住国立博物馆正面。', routeNote: '第二天上午短游的最远点，之后及时回酒店取行李。', mapQuery: 'Museumplein Amsterdam' },
  { id: 'chapel-bridge', city: '卢塞恩', name: '卡佩尔廊桥', bestTime: '清晨或蓝调时刻', composition: '在 Rathaussteg 河岸拍廊桥、八角水塔和远山倒影；桥内拍木梁纵深。', routeNote: '老城核心，抵达当晚和次日上午都可拍。', mapQuery: 'Chapel Bridge Lucerne' },
  { id: 'jesuit-church', city: '卢塞恩', name: '耶稣会教堂河岸', bestTime: '日落后亮灯时', composition: '从罗伊斯河对岸纳入教堂双塔、河面和廊桥。', routeNote: '与卡佩尔廊桥相邻，适合夜间散步。', mapQuery: 'Jesuit Church Lucerne' },
  { id: 'musegg-wall', city: '卢塞恩', name: '穆塞格城墙', bestTime: '上午', composition: '登高俯拍红屋顶、卢塞恩湖和远山，广角保留城墙作引导线。', routeNote: '老城环线的高点，预留上坡时间。', mapQuery: 'Museggmauer Lucerne' },
  { id: 'hohematte', city: '因特拉肯', name: '何维克草坪', bestTime: '清晨或日落前', composition: '以草坪和滑翔伞作前景，把少女峰放在中央远景。', routeNote: '抵达后从因特拉肯东站步行可达。', mapQuery: 'Höhematte Park Interlaken' },
  { id: 'unterseen', city: '因特拉肯', name: 'Unterseen 老城与阿勒河', bestTime: '清晨', composition: '在教堂桥附近拍蓝绿色河水、老屋和山峰，桥栏可作前景。', routeNote: '适合第三天傍晚或第五天出发前补拍。', mapQuery: 'Unterseen Stadthausplatz' },
  { id: 'sphinx', city: '少女峰地区', name: '少女峰斯芬克斯观景台', bestTime: '晴天上午', composition: '用广角表现阿莱奇冰川；人物靠近画面三分线并注意雪地曝光。', routeNote: '到站后优先前往，天气变化快。', mapQuery: 'Sphinx Observatory Jungfraujoch' },
  { id: 'jungfrau-flag', city: '少女峰地区', name: '少女峰瑞士国旗平台', bestTime: '晴朗且风小的时候', composition: '低机位让国旗和雪山同框，连拍应对强风。', routeNote: '注意防滑、保暖并遵守现场开放提示。', mapQuery: 'Jungfraujoch Top of Europe' },
  { id: 'kleine-scheidegg', city: '少女峰地区', name: 'Kleine Scheidegg', bestTime: '下午顺光', composition: '等待红色列车进入弯道，以艾格峰、僧侣峰和少女峰为背景。', routeNote: '下山绕行劳特布伦嫩时顺路。', mapQuery: 'Kleine Scheidegg' },
  { id: 'lauterbrunnen', city: '少女峰地区', name: '劳特布伦嫩山谷', bestTime: '下午至日落前', composition: '从主街拍教堂、施陶河瀑布与峭壁同框，长焦可压缩层次。', routeNote: '少女峰下山环线路段，不必原路返回。', mapQuery: 'Lauterbrunnen Church Viewpoint' },
  { id: 'spiez-station', city: '施皮茨', name: '施皮茨车站湖景', bestTime: '白天换乘时', composition: '从站区高处拍城堡、葡萄园和图恩湖，只在时间充足时短暂停留。', routeNote: '不要为拍照错过后续列车。', mapQuery: 'Spiez Bahnhof Aussicht' },
  { id: 'trocadero', city: '巴黎', name: '特罗卡德罗广场', bestTime: '日出前后', composition: '在平台中轴拍铁塔全景，也可借台阶和喷泉制造对称。', routeNote: '第六天铁塔路线起点，越早人越少。', mapQuery: 'Trocadéro Gardens Paris' },
  { id: 'university-street', city: '巴黎', name: "Rue de l’Université", bestTime: '上午', composition: '用两侧建筑形成街巷框景，让埃菲尔铁塔出现在街尾。', routeNote: '从铁塔步行前往塞纳河路线时可顺路拍摄。', mapQuery: "Rue de l'Université Eiffel Tower View" },
  { id: 'bir-hakeim', city: '巴黎', name: '比尔哈克姆桥', bestTime: '上午或蓝调时刻', composition: '用桥柱重复线条营造电影感，侧面开口可框住铁塔。', routeNote: '从铁塔区域沿河步行可达。', mapQuery: 'Pont de Bir-Hakeim Paris' },
  { id: 'alexandre-iii', city: '巴黎', name: '亚历山大三世桥', bestTime: '傍晚', composition: '把金色雕塑、桥灯与荣军院穹顶叠在同一画面。', routeNote: '塞纳河与奥赛博物馆路线上的顺路打卡点。', mapQuery: 'Pont Alexandre III Paris' },
  { id: 'arc-triomphe', city: '巴黎', name: '凯旋门观景台', bestTime: '日落至蓝调时刻', composition: '俯拍香榭丽舍大街和城市放射轴线，提前入场等待天色变化。', routeNote: '第六天终点，建议预订合适时段。', mapQuery: 'Arc de Triomphe Paris' },
  { id: 'louvre', city: '巴黎', name: '卢浮宫金字塔', bestTime: '开馆前或蓝调时刻', composition: '用水池倒影与宫殿立面形成对称，广角注意控制边缘畸变。', routeNote: '第七天预约首场入馆；周二闭馆已避开。', mapQuery: 'Louvre Pyramid Paris' },
  { id: 'palais-royal', city: '巴黎', name: '皇家宫殿黑白柱', bestTime: '上午', composition: '利用柱体高低和黑白节奏拍人物，低机位强化几何感。', routeNote: '从卢浮宫步行可达。', mapQuery: 'Colonnes de Buren Paris' },
  { id: 'montmartre', city: '巴黎', name: '蒙马特与粉红小屋', bestTime: '日落前 1.5 小时', composition: '在 Rue de l’Abreuvoir 拍蜿蜒街道，再以绿植框住 La Maison Rose。', routeNote: '第七天下午前往；热门街角注意随身物品。', mapQuery: 'La Maison Rose Paris' },
  { id: 'sacre-coeur', city: '巴黎', name: '圣心堂台阶', bestTime: '日落', composition: '从台阶俯拍城市天际线，回望时用阶梯引导至白色穹顶。', routeNote: '蒙马特路线终点。', mapQuery: 'Sacré-Cœur Paris' },
]);

export const DAYS = deepFreeze([
  {
    id: 'day-1', date: '2026-10-01', dayNumber: 1, title: '抵达阿姆斯特丹', city: '阿姆斯特丹',
    summary: '傍晚抵达后轻松进城，以运河夜景和休息为主。',
    events: [
      { time: '18:40', title: '航班抵达阿姆斯特丹', detail: '预留入境、取行李和交通时间，预计 20:00 后进入市区。', kind: 'transport', leadMinutes: 0 },
      { time: '20:30', title: '入住并夜游运河带', detail: '体力允许时走中央车站—Damrak—水坝广场—九街；天气差则直接休息。', kind: 'activity', leadMinutes: 0 },
    ],
    tips: ['当晚不要安排必须预约的室内景点。', '夜间拍摄留意自行车道和随身物品。'],
    photoSpotIds: ['damrak', 'seven-bridges'],
  },
  {
    id: 'day-2', date: '2026-10-02', dayNumber: 2, title: '阿姆斯特丹，经苏黎世前往卢塞恩', city: '阿姆斯特丹 → 苏黎世 → 卢塞恩',
    summary: '上午短游运河与博物馆广场，下午前往机场，经苏黎世转车抵达卢塞恩。',
    events: [
      { time: '07:30', title: '阿姆斯特丹清晨散步', detail: 'Damrak—Brouwersgracht—九街—七桥景观，利用清晨人少的时段拍照。', kind: 'activity', leadMinutes: 0 },
      { time: '10:00', title: '博物馆广场外围', detail: '只看广场与国立博物馆外观，不安排耗时较长的馆内参观。', kind: 'activity', leadMinutes: 0 },
      { time: '12:20', title: '取行李并前往机场', detail: '前往史基浦机场，核对登机口和行李规定。', kind: 'transport', leadMinutes: 30 },
      { time: '15:20', title: '航班飞往苏黎世', detail: '计划 16:45 抵达苏黎世机场，航班信息以航司通知为准。', kind: 'transport', leadMinutes: 180 },
      { time: '18:30', title: '苏黎世机场转乘火车', detail: '按车票前往卢塞恩，换乘时先确认站台，避免在机场停留过久。', kind: 'transport', leadMinutes: 20 },
      { time: '21:00', title: '卢塞恩入住与河岸夜景', detail: '若抵达时间和体力允许，散步至卡佩尔廊桥和耶稣会教堂。', kind: 'activity', leadMinutes: 0 },
    ],
    tips: ['随身保留护照、机票与当天铁路票。', '上午路线必须为取行李和去机场留足余量。'],
    photoSpotIds: ['damrak', 'brouwersgracht', 'seven-bridges', 'museumplein', 'chapel-bridge', 'jesuit-church'],
  },
  {
    id: 'day-3', date: '2026-10-03', dayNumber: 3, title: '卢塞恩前往因特拉肯', city: '卢塞恩 → 因特拉肯',
    summary: '上午游览卢塞恩老城，随后乘景观列车前往因特拉肯，傍晚看少女峰。',
    events: [
      { time: '08:00', title: '卢塞恩老城环线', detail: '卡佩尔廊桥—耶稣会教堂—彩绘老城—穆塞格城墙—垂死狮子像，约 3 小时。', kind: 'activity', leadMinutes: 0 },
      { time: '13:00', title: '乘车前往因特拉肯', detail: '搭乘卢塞恩—因特拉肯景观线；建议选择行进方向右侧，欣赏湖泊与山谷。', kind: 'transport', leadMinutes: 20 },
      { time: '15:30', title: '入住因特拉肯', detail: '安置行李后前往何维克草坪。', kind: 'activity', leadMinutes: 0 },
      { time: '17:00', title: '何维克草坪与 Unterseen', detail: '先看少女峰，时间充裕再沿阿勒河散步至 Unterseen 老城。', kind: 'activity', leadMinutes: 0 },
    ],
    tips: ['景观列车上把常用物品放在随身包，避免频繁开大件行李。'],
    photoSpotIds: ['chapel-bridge', 'jesuit-church', 'musegg-wall', 'hohematte', 'unterseen'],
  },
  {
    id: 'day-4', date: '2026-10-04', dayNumber: 4, title: '少女峰环线', city: '因特拉肯与少女峰地区',
    summary: '经格林德瓦登少女峰，从 Kleine Scheidegg 与劳特布伦嫩方向下山。',
    events: [
      { time: '06:30', title: '检查天气与实时摄像头', detail: '先查看少女峰实时天气、云层和设施开放情况；若山顶完全被云盖，改玩格林德瓦 First 或劳特布伦嫩—米伦。', kind: 'reminder', leadMinutes: 0 },
      { time: '07:00', title: '从因特拉肯东站出发', detail: '路线：因特拉肯东—格林德瓦总站—艾格峰站—少女峰，按票面班次提前到站。', kind: 'transport', leadMinutes: 20 },
      { time: '09:30', title: '少女峰游览', detail: '依次游览斯芬克斯观景台、瑞士国旗平台和冰宫，约 3 小时。', kind: 'activity', leadMinutes: 0 },
      { time: '13:00', title: '经 Kleine Scheidegg 下山', detail: '拍铁路弯道与三峰景观，再前往劳特布伦嫩。', kind: 'transport', leadMinutes: 15 },
      { time: '15:30', title: '劳特布伦嫩山谷', detail: '主街、教堂与施陶河瀑布同框，随后返回因特拉肯。', kind: 'activity', leadMinutes: 0 },
    ],
    tips: ['山顶温度低且紫外线强，携带保暖层、墨镜和防晒。', '天气优先于固定路线，以现场铁路与缆车信息为准。'],
    photoSpotIds: ['sphinx', 'jungfrau-flag', 'kleine-scheidegg', 'lauterbrunnen'],
  },
  {
    id: 'day-5', date: '2026-10-05', dayNumber: 5, title: '经施皮茨、日内瓦前往巴黎', city: '因特拉肯 → 施皮茨 → 日内瓦 → 巴黎',
    summary: '交通密集日，以顺利换乘为最高优先级；日内瓦换乘只有约 49 分钟。',
    events: [
      { time: '07:30', title: '因特拉肯晨间补拍', detail: '根据住宿位置选择阿勒河、Unterseen 或何维克草坪，不要影响退房。', kind: 'activity', leadMinutes: 0 },
      { time: '09:00', title: '因特拉肯出发', detail: '带齐行李前往车站，按车票经施皮茨换乘。', kind: 'transport', leadMinutes: 30 },
      { time: '09:30', title: '施皮茨换乘', detail: '时间充足时仅在站区拍城堡、葡萄园和图恩湖，不要为拍照错过列车。', kind: 'transport', leadMinutes: 15 },
      { time: '14:00', title: '日内瓦换乘巴黎列车', detail: '换乘约 49 分钟，不适合离站游览；先确认站台并准备好车票和证件。', kind: 'transport', leadMinutes: 20 },
      { time: '19:30', title: '抵达巴黎并入住', detail: '抵达后以办理入住和附近用餐为主。', kind: 'activity', leadMinutes: 0 },
    ],
    tips: ['不适合离站游览：日内瓦的 49 分钟用于换乘、找站台和应对延误。', '贵重物品随身携带，上下车前清点行李。'],
    photoSpotIds: ['unterseen', 'hohematte', 'spiez-station'],
  },
  {
    id: 'day-6', date: '2026-10-06', dayNumber: 6, title: '塞纳河与埃菲尔铁塔路线', city: '巴黎',
    summary: '利用卢浮宫周二闭馆日游览铁塔、塞纳河、奥赛与凯旋门。',
    events: [
      { time: '07:15', title: '特罗卡德罗日出', detail: '早到避开人流，拍埃菲尔铁塔全景。', kind: 'activity', leadMinutes: 0 },
      { time: '09:00', title: '铁塔街区漫步', detail: '埃菲尔铁塔—大学街—比尔哈克姆桥，约 2.5 小时。', kind: 'activity', leadMinutes: 0 },
      { time: '12:30', title: '亚历山大三世桥与奥赛博物馆', detail: '沿塞纳河前行，按预约时间参观奥赛博物馆。', kind: 'activity', leadMinutes: 30 },
      { time: '18:00', title: '凯旋门日落', detail: '提前入场登顶，拍香榭丽舍和城市轴线。', kind: 'activity', leadMinutes: 30 },
    ],
    tips: ['卢浮宫周二闭馆，已安排到次日。', '热门观景台与博物馆建议提前预约。'],
    photoSpotIds: ['trocadero', 'university-street', 'bir-hakeim', 'alexandre-iii', 'arc-triomphe'],
  },
  {
    id: 'day-7', date: '2026-10-07', dayNumber: 7, title: '卢浮宫与蒙马特路线', city: '巴黎',
    summary: '上午卢浮宫和皇家宫殿，下午经市中心前往蒙马特看日落。',
    events: [
      { time: '09:00', title: '卢浮宫首场入馆', detail: '提前到预约入口安检；重点展品按兴趣取舍，建议参观 3 小时。', kind: 'activity', leadMinutes: 30 },
      { time: '12:30', title: '皇家宫殿与杜乐丽花园', detail: '拍黑白柱，随后沿花园步行至协和广场。', kind: 'activity', leadMinutes: 0 },
      { time: '16:30', title: '蒙马特街区', detail: '日落前约 1.5 小时到达，走 Rue de l’Abreuvoir—粉红小屋—圣心堂。', kind: 'activity', leadMinutes: 0 },
      { time: '18:30', title: '圣心堂日落', detail: '从台阶看城市全景，入夜后尽早返回。', kind: 'activity', leadMinutes: 0 },
    ],
    tips: ['蒙马特人流密集，手机、钱包和相机不要离身。', '馆内参观不要贪多，为下午路线保留体力。'],
    photoSpotIds: ['louvre', 'palais-royal', 'montmartre', 'sacre-coeur'],
  },
  {
    id: 'day-8', date: '2026-10-08', dayNumber: 8, title: '前往戴高乐机场返程', city: '巴黎 → 戴高乐机场',
    summary: '按国际航班标准预留充足时间，经市区轨道交通前往机场。',
    events: [
      { time: '07:00', title: '退房前检查', detail: '核对护照、登机牌、行李和退税材料，检查房间与保险箱。', kind: 'reminder', leadMinutes: 0 },
      { time: '08:00', title: '前往戴高乐机场', detail: '计划乘地铁 M1 至 Châtelet–Les Halles，再换乘 RER B；预留故障、停运和步行换乘缓冲。', kind: 'transport', leadMinutes: 30 },
      { time: '09:30', title: '抵达机场办理手续', detail: '国际航班建议至少提前 3 小时抵达机场，以票面航站楼和航司通知为准。', kind: 'transport', leadMinutes: 0 },
    ],
    tips: ['提前 3 小时抵达机场，并为 RER B 异常另留缓冲。', '页面提醒不是系统闹钟，请同时关注航司和交通运营方通知。'],
    photoSpotIds: [],
  },
]);

export const CHECKLIST_GROUPS = deepFreeze([
  {
    id: 'documents', title: '证件与票据', items: [
      { id: 'passport', label: '护照与有效签证' },
      { id: 'insurance', label: '旅行保险凭证' },
      { id: 'transport-tickets', label: '机票、跨城火车票与少女峰车票' },
      { id: 'reservations', label: '酒店及博物馆预约确认' },
      { id: 'copies', label: '证件电子备份与紧急联系信息' },
    ],
  },
  {
    id: 'connectivity', title: '通信与支付', items: [
      { id: 'esim', label: '欧洲流量卡或 eSIM 已激活' },
      { id: 'offline-maps', label: '下载离线地图与铁路 App' },
      { id: 'cards-cash', label: '银行卡、少量欧元与瑞郎' },
      { id: 'power-bank', label: '充电宝与充电线' },
      { id: 'adapter', label: '欧标转换插头' },
    ],
  },
  {
    id: 'clothing', title: '衣物装备', items: [
      { id: 'waterproof-jacket', label: '防水外套或雨具' },
      { id: 'warm-layers', label: '少女峰保暖层、帽子和手套' },
      { id: 'walking-shoes', label: '防滑且适合长距离步行的鞋' },
      { id: 'sunglasses', label: '墨镜与防晒用品' },
      { id: 'daypack', label: '轻便随身背包与水杯' },
    ],
  },
  {
    id: 'camera', title: '摄影用品', items: [
      { id: 'camera-phone', label: '手机或相机' },
      { id: 'camera-battery', label: '备用电池与充电器' },
      { id: 'memory-card', label: '存储卡与照片备份空间' },
      { id: 'lens-cloth', label: '镜头布与防雨袋' },
      { id: 'mini-tripod', label: '合规轻便小脚架或稳定握持配件' },
    ],
  },
]);
