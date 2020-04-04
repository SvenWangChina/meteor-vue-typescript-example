/**
 * 基于AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *     xcatliu <xcatliu@gmail.com>
 *     heyli <lcxfs1991@gmail.com>
 *     Swan <noreply@github.com>
 *     DiamondYuan <admin@diamondyuan.com>
 *     Dash Chen <noreply@github.com>
 *     lzw <mingxin2014@gmail.com>
 *     ryoliu <sfesh@163.com>
 *     sunhui04 <sunhui04@meituan.com>
 *
 * 依赖版本：
 *     eslint ^6.7.1
 *     babel-eslint ^10.0.3
 *     eslint-plugin-react ^7.16.0
 *     vue-eslint-parser ^7.0.0
 *     eslint-plugin-vue ^6.1.1
 *     @typescript-eslint/parser ^2.13.0
 *     @typescript-eslint/eslint-plugin ^2.13.0
 *
 * @version 3.5.0
 */
module.exports = {
    extends: ['./.eslintAlloyBase.js', './.eslintAlloyTypeScript.js'],
    env: {
        meteor: true,
    },
    globals: {
        cordova: true,
        WebAppLocalServer: true,
        powermanagement: true,
        plugins: true,
        resolveLocalFileSystemURL: true,
        Camera: true,
    },
    plugins: [],
    rules: {
        /**
         * class new后可以不赋值，解决ValidatedMethod错误提示
         */
        'no-new': 'off',
        /**
         * 函数最多4个参数
         */
        'max-params': ['error', 4],
        'no-unused-expressions': 'off',
        /**
         * 所有变量都声明类型
         */
        '@typescript-eslint/no-inferrable-types': 'off',
        /**
         * 可以将 this 赋值给其他变量
         */
        '@typescript-eslint/no-this-alias': 'off',
        /**
         * 类的成员非public必须设置可访问性
         */
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
            },
        ],
    },
    overrides: [
        {
            /**
             * Vue template规则
             */
            files: ['*.vue'],
            extends: './.eslintAlloyVue.js',
            rules: {
                /**
                 * 组件中必须按照 <template>, <script>, <style> 排序
                 */
                'vue/component-tags-order': [
                    'error',
                    {
                        order: ['template', 'script', 'style'],
                    },
                ],
                /**
                 * 除了class和style，禁止出现重复的属性
                 */
                'vue/no-duplicate-attributes': [
                    'error',
                    {
                        allowCoexistClass: true,
                        allowCoexistStyle: true,
                    },
                ],
            },
        },
    ],
};
