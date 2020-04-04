/**
 * 所有常量
 */

/**
 * 运行环境
 *
 * @export
 * @enum {number}
 */
export enum SettingsDebug {
    DEVELOPMENT = 0,
    TEST = 1,
    PRODUCTION = 2,
}

/**
 * 用户权限
 * user：普通用户
 * admin：后台管理员用户
 *
 * @export
 * @enum {string}
 */
export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

/**
 * 用户性别
 *
 * @export
 * @enum {string}
 */
export enum UserGender {
    MALE = 'male',
    FEMALE = 'female',
}

/**
 * 性别文本
 *
 * @export
 * @type {{ [gender: string]: string }}
 */
export const UserGenderStr: { [gender: string]: string } = {
    [UserGender.MALE]: '남자',
    [UserGender.FEMALE]: '여자',
};

/**
 * 用户资料完成状态
 *
 * @export
 * @enum {number}
 */
export enum UserCompleteStatus {
    SIGN_UP = 1,
    COMPLETED = 2,
    BANK = 3,
}

/**
 * 牌局状态
 *
 * @export
 * @enum {string}
 */
export enum TableStatus {
    STARTED = 'started',
    OVER = 'over',
}

/**
 * 玩家状态
 *
 * @export
 * @enum {string}
 */
export enum PlayerStatus {
    SIT_DOWN = 'sitDown',
    ONLOOKER = 'onlooker',
    AFK = 'afk',
    FORCE_STAND_UP = 'forceStandUp',
    QUIT = 'quit',
}

/**
 * 玩家位置名称
 *
 * @export
 * @enum {string}
 */
export enum TexasPosition {
    BT = 'BT',
    SB = 'SB',
    BB = 'BB',
    UG = 'UG',
    EP = 'EP',
    MP1 = 'MP1',
    MP2 = 'MP2',
    HJ = 'HJ',
    CO = 'CO',
}

/**
 * 牌型
 *
 * @export
 * @enum {string}
 */
export enum CardType {
    ROYAL_STRAIGHT_FLUSH = 'royalStraightFlush',
    STRAIGHT_FLUSH = 'traightFlush',
    FOUR_OF_A_KIND = 'fourOfAKind',
    FULL_HOUSE = 'fullHouse',
    FLUSH = 'flush',
    STRAIGHT = 'straight',
    THREE_OF_A_KIND = 'threeOfAKind',
    TWO_PAIR = 'twoPair',
    ONE_PAIR = 'onePair',
    HIGH_CARD = 'highCard',
    NULL = '',
    FOLD = 'fold',
}

/**
 * 牌型描述
 *
 * @export
 * @type {{ [type: string]: string }}
 */
export const CardTypeStr: { [type: string]: string } = {
    [CardType.ROYAL_STRAIGHT_FLUSH]: '로티플',
    [CardType.STRAIGHT_FLUSH]: '스티플',
    [CardType.FOUR_OF_A_KIND]: '포카드',
    [CardType.FULL_HOUSE]: '풀하우스',
    [CardType.FLUSH]: '플러쉬',
    [CardType.STRAIGHT]: '스트레이트',
    [CardType.THREE_OF_A_KIND]: '트리플',
    [CardType.TWO_PAIR]: '투페어',
    [CardType.ONE_PAIR]: '원페어',
    [CardType.HIGH_CARD]: '하이',
    [CardType.NULL]: '',
    [CardType.FOLD]: '폴드',
};

/**
 * 牌型编号
 *
 * @export
 * @type {{ [type: string]: number }}
 */
export const CardTypeNo: { [type: string]: number } = {
    [CardType.ROYAL_STRAIGHT_FLUSH]: 0,
    [CardType.STRAIGHT_FLUSH]: 1,
    [CardType.FOUR_OF_A_KIND]: 2,
    [CardType.FULL_HOUSE]: 3,
    [CardType.FLUSH]: 4,
    [CardType.STRAIGHT]: 5,
    [CardType.THREE_OF_A_KIND]: 6,
    [CardType.TWO_PAIR]: 7,
    [CardType.ONE_PAIR]: 8,
    [CardType.HIGH_CARD]: 9,
    [CardType.NULL]: 10,
    [CardType.FOLD]: 11,
};

/**
 * 阶段
 *
 * @export
 * @enum {string}
 */
export enum TexasRound {
    PRE_FLOP = 'preFlop',
    FLOP = 'flop',
    TURN = 'turn',
    RIVER = 'river',
    SHOW = 'show',
}

/**
 * 特殊手牌牌型
 *
 * @export
 * @type {string[]}
 */
export const SPECIAL_CARD_TYPE: string[] = [
    'AA',
    'KK',
    'AK',
    'QQ',
    'JJ',
    '1010',
    '99',
    '88',
    '77',
    '66',
    '55',
    '44',
    '33',
    '22',
];

/**
 * 消息类型
 *
 * @export
 * @enum {string}
 */
export enum MessageType {
    TEXT = 'text',
    AUDIO = 'audio',
    EMOJI = 'emoji',
    ANIMATION = 'animation',
    SYSTEM = 'system',
}

/**
 * 充值、提现审核状态
 *
 * @export
 * @enum {number}
 */
export enum RechargeReview {
    UNPROCESSED = 0,
    DENY = 1,
    ALLOW = 2,
}

/**
 * 流水环境
 *
 * @export
 * @enum {string}
 */
export enum MoneyLogWhere {
    RECHARGE = 'recharge',
    CASH = 'cash',
    EXCHANGE = 'exchange',
    BUY_DIAMOND = 'buyDiamond',
    USE_DIAMOND = 'useDiamond',
    BUY_IN = 'buyIn',
    SETTLEMENT = 'settlement',
    TABLE_OVER = 'tableOver',
    ADMIN = 'admin',
}

/**
 * 货币类型
 *
 * @export
 * @enum {string}
 */
export enum MoneyType {
    CHIPS = 'chips',
    DIAMOND = 'diamond',
}

/**
 * 玩家说话状态
 *
 * @export
 * @enum {string}
 */
export enum TexasAction {
    NORMAL = '',
    SMALL_BLINDS = 'smallBlinds',
    BIG_BLINDS = 'bigBlinds',
    STRADDLE = 'straddle',
    NEW_BLINDS = 'newBlinds',
    BET = 'bet',
    CHECK = 'check',
    CALL = 'call',
    RAISE = 'raise',
    ALL_IN = 'allIn',
    FOLD = 'fold',
}

/**
 * 保险outs数量对应的赔率
 * index是outs的数量
 * value是对应的赔率
 *
 * @export
 * @type {number[]}
 */
export const INSURANCE_ODDS: number[] = [
    0,
    30,
    16,
    10,
    8,
    6,
    5,
    4,
    3.5,
    3,
    2.5,
    2.2,
    2,
    1.8,
    1.6,
    1.3,
    1.1,
    0.9,
    0.7,
    0.5,
    0.4,
];

/**
 * 表情列表
 * index是表情编号
 *
 * @export
 * @type {{ text: string, step: number }[]}
 */
export const EMOJIS: { text: string; step: number }[] = [
    { text: '[流汗]', step: 10 },
    { text: '[大哭]', step: 10 },
    { text: '[惊]', step: 10 },
    { text: '[抠鼻]', step: 10 },
    { text: '[晕]', step: 10 },
    { text: '[右哼哼]', step: 10 },
    { text: '[色]', step: 10 },
    { text: '[亲亲]', step: 10 },
    { text: '[可怜]', step: 10 },
    { text: '[愉快]', step: 10 },
    { text: '[坏笑]', step: 10 },
    { text: '[发呆]', step: 10 },
    { text: '[得意]', step: 10 },
    { text: '[鄙视]', step: 10 },
    { text: '[衰]', step: 10 },
    { text: '[委屈]', step: 24 },
    { text: '[冷漠]', step: 10 },
    { text: '[期盼]', step: 12 },
    { text: '[发怒]', step: 11 },
    { text: '[惊恐]', step: 10 },
];

/**
 * 游戏内动画的steps
 * index是动画编号
 *
 * @export
 * @type {number[]}
 */
export const ANIMATIONS_STEP: number[] = [13, 16, 19, 18, 25, 18, 15, 14];

/**
 * 钻石商品
 */
export interface DiamondProduct {
    count: number;
    chips: number;
    fee: number;
}
/**
 * 钻石商品列表
 *
 * @export
 * @type {DiamondProduct[]}
 */
export const DIAMOND_PRODUCTS: DiamondProduct[] = [
    { count: 60, chips: 1000, fee: 1000 },
    { count: 360, chips: 6000, fee: 5000 },
    { count: 840, chips: 14000, fee: 10000 },
    { count: 2780, chips: 46400, fee: 30000 },
    { count: 5560, chips: 92600, fee: 50000 },
];

/**
 * 延长说话时间费用
 *
 * @export
 * @type {{[smallBlinds: number]: number}}
 */
export const EXTEND_ACTION_FEE: { [smallBlinds: number]: number } = {
    100: 2,
    200: 5,
    500: 7,
    1000: 10,
    2000: 20,
    5000: 20,
    10000: 20,
};

/**
 * 每日数据类型
 *
 * @export
 * @enum {number}
 */
export enum DailyDataType {
    SIGN_UP_USERS = 'signInUsers',
    TABLE = 'table',
    ALL_IN = 'allIn',
    BUY_IN = 'buyIn',
    RAKE = 'rake',
    USE_DIAMOND = 'userDiamond',
}
