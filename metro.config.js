const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Configuração padrão do Expo
const config = getDefaultConfig(__dirname);

// Injeta o transformer do NativeWind (e aponta para o CSS global)
module.exports = withNativeWind(config, {
    // Se mudar o nome ou local do seu arquivo de estilos, ajuste aqui
    input: './global.css',
});
