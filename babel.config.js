module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
            'nativewind/babel',
        ],

        plugins: [
            // Se NÃO estiver usando Expo Router, remova a linha abaixo
            // 'expo-router/babel',

            // Reanimated precisa sempre vir por último
            'react-native-reanimated/plugin',
        ],
    };
};
