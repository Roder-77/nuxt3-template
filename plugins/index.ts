import common from '@/utils/common';
import date from '@/utils/date';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            common,
            date,
        },
    };
});
