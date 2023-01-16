export default {
    getRandomInt (min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    hexToByteArray (hex: string): Array<number> {
        const bytes: Array<number> = [];

        for (let c = 0; c < hex.length; c += 2) {
            bytes.push(parseInt(hex.substring(c, 2), 16));
        }

        return bytes;
    },
    hexToUint8Array (hex: string): Uint8Array {
        return new Uint8Array(hex.match(/[\da-f]{2}/gi)!.map(h => (parseInt(h, 16))));
    },
    padZero (value: string | number, length: number): string {
        return value.toString().padStart(length, '0');
    },
};
