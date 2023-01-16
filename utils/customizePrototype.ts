
/* eslint-disable no-extend-native */

import dateHelper from '@/utils/date';

declare global {
  interface Date {
    format(fmt: string): string;
    addDays(days: number): Date;
    addHours(hours: number): Date;
    addMinutes(minutes: number): Date;
  }
}

function initDate () {
    Date.prototype.format = function (fmt = 'yyyy/MM/dd HH:mm:ss') {
        return dateHelper.formatDate(this, fmt);
    };

    Date.prototype.addDays = function (days: number) {
        this.setDate(this.getDate() + days);
        return this;
    };

    Date.prototype.addHours = function (hours: number) {
        this.setHours(this.getHours() + hours);
        return this;
    };

    Date.prototype.addMinutes = function (minutes: number) {
        this.setMinutes(this.getMinutes() + minutes);
        return this;
    };
}

export default {
    install () {
        initDate();
    },
};
