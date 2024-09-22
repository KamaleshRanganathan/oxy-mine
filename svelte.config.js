import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter(),
        paths: {
            base: process.argv.includes('dev') ? '' : '/oxy-mine' // No trailing slash
        },
    },
};
