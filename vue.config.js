module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',   //@相当于src
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}


