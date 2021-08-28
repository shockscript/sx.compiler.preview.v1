import { Double as Decimal } from 'double.js';

const Double = Number;

export const AnyRangeNumbers = {
    toType(value, type) {
        if (typeof value == 'number') {
            switch (type) {
                case Double:
                    return value;
                case Byte:
                    return new Byte(value);
                case Short:
                    return new Short(value);
                case Integer:
                    return new Integer(value);
                case Long:
                    return new Long(value);
                case BigInt:
                    return BigInt(value);
                case Decimal:
                    return new Decimal(value);
                case Single:
                    return new Single(value);
                case Char:
                    return new Char(value);
            }
            return 0;
        } else if (value instanceof Byte) {
            switch (type) {
                case Double:
                    return value.valueOf();
                case Byte:
                    return value;
                case Short:
                    return new Short(value.valueOf());
                case Integer:
                    return new Integer(value.valueOf());
                case Long:
                    return new Long(value.valueOf());
                case BigInt:
                    return BigInt(value.valueOf());
                case Decimal:
                    return new Decimal(value.valueOf());
                case Single:
                    return new Single(value.valueOf());
                case Char:
                    return new Char(value.valueOf());
            }
            return 0;
        } else if (value instanceof Short) {
            switch (type) {
                case Double:
                    return value.valueOf();
                case Byte:
                    return new Byte(value.valueOf());
                case Short:
                    return new Short(value.valueOf());
                case Integer:
                    return new Integer(value.valueOf());
                case Long:
                    return new Long(value.valueOf());
                case BigInt:
                    return BigInt(value.valueOf());
                case Decimal:
                    return new Decimal(value.valueOf());
                case Single:
                    return new Single(value.valueOf());
                case Char:
                    return new Char(value.valueOf());
            }
            return 0;
        } else if (value instanceof Integer) {
            switch (type) {
                case Double:
                    return value.valueOf();
                case Byte:
                    return new Byte(value.valueOf());
                case Short:
                    return new Short(value.valueOf());
                case Integer:
                    return value;
                case Long:
                    return new Long(value.valueOf());
                case BigInt:
                    return BigInt(value.valueOf());
                case Decimal:
                    return new Decimal(value.valueOf());
                case Single:
                    return new Single(value.valueOf());
                case Char:
                    return new Char(value.valueOf());
            }
            return 0;
        } else if (value instanceof Long) {
            switch (type) {
                case Double:
                    return Number(value.valueOf());
                case Byte:
                    return new Byte(Number(value.valueOf()));
                case Short:
                    return new Short(Number(value.valueOf()));
                case Integer:
                    return new Integer(Number(value.valueOf()));
                case Long:
                    return value;
                case BigInt:
                    return BigInt(value.valueOf());
                case Decimal:
                    return new Decimal(Number(value.valueOf()));
                case Single:
                    return new Single(Number(value.valueOf()));
                case Char:
                    return new Char(Number(value.valueOf()));
            }
            return 0;
        } else if (typeof value == 'bigint') {
            switch (type) {
                case Double:
                    return Number(value);
                case Byte:
                    return new Byte(Number(value));
                case Short:
                    return new Short(Number(value));
                case Integer:
                    return new Integer(Number(value));
                case Long:
                    return new Long(value);
                case BigInt:
                    return value;
                case Decimal:
                    return new Decimal(Number(value));
                case Single:
                    return new Single(Number(value));
                case Char:
                    return new Char(Number(value));
            }
            return 0;
        } else if (value instanceof Decimal) {
            switch (type) {
                case Double:
                    return value.toNumber();
                case Byte:
                    return new Byte(value.toNumber());
                case Short:
                    return new Short(value.toNumber());
                case Integer:
                    return new Integer(value.toNumber());
                case Long:
                    return new Long(value.toNumber());
                case BigInt:
                    return BigInt(value.toNumber());
                case Decimal:
                    return value;
                case Single:
                    return new Single(value.toNumber());
                case Char:
                    return new Char(value.toNumber());
            }
            return 0;
        } else if (value instanceof Single) {
            switch (type) {
                case Double:
                    return value.valueOf();
                case Byte:
                    return new Byte(value.valueOf());
                case Short:
                    return new Short(value.valueOf());
                case Integer:
                    return new Integer(value.valueOf());
                case Long:
                    return new Long(value.valueOf());
                case BigInt:
                    return BigInt(value.valueOf());
                case Decimal:
                    return new Decimal(value.valueOf());
                case Single:
                    return value;
                case Char:
                    return new Char(value.valueOf());
            }
            return 0;
        } else if (value instanceof Char) {
            switch (type) {
                case Double:
                    return value.valueOf();
                case Byte:
                    return new Byte(value.valueOf());
                case Short:
                    return new Short(value.valueOf());
                case Integer:
                    return new Integer(value.valueOf());
                case Long:
                    return new Long(value.valueOf());
                case BigInt:
                    return BigInt(value.valueOf());
                case Decimal:
                    return new Decimal(value.valueOf());
                case Single:
                    return new Single(value.valueOf());
                case Char:
                    return value;
            }
            return 0;
        }
        return 0;
    },

    float64AsType(value, type) {
        switch (type) {
            case Double:
                return value;
            case Byte:
                return new Byte(value);
            case Short:
                return new Short(value);
            case Integer:
                return new Integer(value);
            case Long:
                return new Long(value);
            case BigInt:
                return BigInt(value);
            case Decimal:
                return new Decimal(value);
            case Single:
                return new Single(value);
            case Char:
                return new Char(value);
        }
        return 0;
    },

    addFloat64(a, b) {
        if (typeof a == 'number') {
            return a + b;
        } else if (a instanceof Byte) {
            return a.add(b);
        } else if (a instanceof Short) {
            return a.add(b);
        } else if (a instanceof Integer) {
            return a.add(b);
        } else if (a instanceof Long) {
            return a.add(b);
        } else if (typeof a == 'bigint') {
            return a + BigInt(b);
        } else if (a instanceof Decimal) {
            return a.add(b);
        } else if (a instanceof Single) {
            return a.add(b);
        } else if (a instanceof Char) {
            return a.add(b);
        } else {
            throw new Error('Unsupported number type.');
        }
    },

    multiplyFloat64(a, b) {
        if (typeof a == 'number') {
            return a * b;
        } else if (a instanceof Byte) {
            return a.multiply(b);
        } else if (a instanceof Short) {
            return a.multiply(b);
        } else if (a instanceof Integer) {
            return a.multiply(b);
        } else if (a instanceof Long) {
            return a.multiply(b);
        } else if (typeof a == 'bigint') {
            return a * BigInt(b);
        } else if (a instanceof Decimal) {
            return a.mul(b);
        } else if (a instanceof Single) {
            return a.multiply(b);
        } else if (a instanceof Char) {
            return a.multiply(b);
        } else {
            throw new Error('Unsupported number type.');
        }
    },

    equal(a, b) {
        if (typeof a == 'number') {
            return a == b;
        } else if (a instanceof Byte) {
            return a.equals(b);
        } else if (a instanceof Short) {
            return a.equals(b);
        } else if (a instanceof Integer) {
            return a.equals(b);
        } else if (a instanceof Long) {
            return a.equals(b);
        } else if (typeof a == 'bigint') {
            return a == BigInt(b);
        } else if (a instanceof Decimal) {
            return a.eq(b);
        } else if (a instanceof Single) {
            return a.equals(b);
        } else if (a instanceof Char) {
            return a.equals(b);
        } else {
            throw new Error('Unsupported number type.');
        }
    },
};

export class Byte {
    constructor(value) {
        if (value instanceof Byte) {
            value = value[0];
        } else if (typeof value == 'string') {
            value = parseFloat(value);
        }
        this._array = new Int8Array([value]);
    }

    equals(value) {
        value = new Byte(value);
        return this._array[0] == value._array[0];
    }

    lessThan(value) {
        value = new Byte(value);
        return this._array[0] < value._array[0];
    }

    lessThanOrEquals(value) {
        value = new Byte(value);
        return this._array[0] <= value._array[0];
    }

    lessThanOrEqual(value) {
        return this.lessThanOrEquals(value);
    }

    greaterThan(value) {
        value = new Byte(value);
        return this._array[0] > value._array[0];
    }

    greaterThanOrEquals(value) {
        value = new Byte(value);
        return this._array[0] >= value._array[0];
    }

    greaterThanOrEqual(value) {
        return this.greaterThanOrEquals(value);
    }

    add(value) {
        value = new Byte(value);
        return new Byte(this._array[0] + value._array[0]);
    }

    subtract(value) {
        value = new Byte(value);
        return new Byte(this._array[0] - value._array[0]);
    }

    multiply(value) {
        value = new Byte(value);
        return new Byte(this._array[0] * value._array[0]);
    }

    divide(value) {
        value = new Byte(value);
        return new Byte(this._array[0] / value._array[0]);
    }

    modulo(value) {
        value = new Byte(value);
        return new Byte(this._array[0] % value._array[0]);
    }
    
    remainder(value) {
        return this.modulo(value);
    }

    leftShift(value) {
        value = new Byte(value);
        return new Byte(this._array[0] << value._array[0]);
    }

    rightShift(value) {
        value = new Byte(value);
        return new Byte(this._array[0] >> value._array[0]);
    }

    unsignedRightShift(value) {
        value = new Byte(value);
        return new Byte(this._array[0] >>> value._array[0]);
    }

    and(value) {
        value = new Byte(value);
        return new Byte(this._array[0] & value._array[0]);
    }

    xor(value) {
        value = new Byte(value);
        return new Byte(this._array[0] ^ value._array[0]);
    }

    or(value) {
        value = new Byte(value);
        return new Byte(this._array[0] | value._array[0]);
    }

    eqv(value) {
        value = new Byte(value);
        return new Byte(~(this._array[0] ^ value._array[0]));
    }

    imp(value) {
        value = new Byte(value);
        return new Byte(~this._array[0] | value._array[0]);
    }

    toString() {
        return this._array[0].toString();
    }

    valueOf() {
        return this._array[0];
    }
}

Byte.MIN_VALUE = 0;
Byte.MAX_VALUE = 255;

export class Short {
    constructor(value) {
        if (value instanceof Short) {
            value = value[0];
        } else if (typeof value == 'string') {
            value = parseFloat(value);
        }
        this._array = new Int16Array([value]);
    }

    equals(value) {
        value = new Short(value);
        return this._array[0] == value._array[0];
    }

    lessThan(value) {
        value = new Short(value);
        return this._array[0] < value._array[0];
    }

    lessThanOrEquals(value) {
        value = new Short(value);
        return this._array[0] <= value._array[0];
    }

    lessThanOrEqual(value) {
        return this.lessThanOrEquals(value);
    }

    greaterThan(value) {
        value = new Short(value);
        return this._array[0] > value._array[0];
    }

    greaterThanOrEquals(value) {
        value = new Short(value);
        return this._array[0] >= value._array[0];
    }

    greaterThanOrEqual(value) {
        return this.greaterThanOrEquals(value);
    }

    add(value) {
        value = new Short(value);
        return new Short(this._array[0] + value._array[0]);
    }

    subtract(value) {
        value = new Short(value);
        return new Short(this._array[0] - value._array[0]);
    }

    multiply(value) {
        value = new Short(value);
        return new Short(this._array[0] * value._array[0]);
    }

    divide(value) {
        value = new Short(value);
        return new Short(this._array[0] / value._array[0]);
    }

    modulo(value) {
        value = new Short(value);
        return new Short(this._array[0] % value._array[0]);
    }
    
    remainder(value) {
        return this.modulo(value);
    }

    leftShift(value) {
        value = new Short(value);
        return new Short(this._array[0] << value._array[0]);
    }

    rightShift(value) {
        value = new Short(value);
        return new Short(this._array[0] >> value._array[0]);
    }

    unsignedRightShift(value) {
        value = new Short(value);
        return new Short(this._array[0] >>> value._array[0]);
    }

    and(value) {
        value = new Short(value);
        return new Short(this._array[0] & value._array[0]);
    }

    xor(value) {
        value = new Short(value);
        return new Short(this._array[0] ^ value._array[0]);
    }

    or(value) {
        value = new Short(value);
        return new Short(this._array[0] | value._array[0]);
    }

    eqv(value) {
        value = new Short(value);
        return new Short(~(this._array[0] ^ value._array[0]));
    }

    imp(value) {
        value = new Short(value);
        return new Short(~this._array[0] | value._array[0]);
    }

    toString() {
        return this._array[0].toString();
    }

    valueOf() {
        return this._array[0];
    }
}

Short.MIN_VALUE = -32768;
Short.MAX_VALUE = 32767;

export class Integer {
    constructor(value) {
        if (value instanceof Integer) {
            value = value[0];
        }
        this._v = value >> 0;
    }

    equals(value) {
        value = new Integer(value);
        return this._v == value._v;
    }

    lessThan(value) {
        value = new Integer(value);
        return this._v < value._v;
    }

    lessThanOrEquals(value) {
        value = new Integer(value);
        return this._v <= value._v;
    }

    lessThanOrEqual(value) {
        return this.lessThanOrEquals(value);
    }

    greaterThan(value) {
        value = new Integer(value);
        return this._v > value._v;
    }

    greaterThanOrEquals(value) {
        value = new Integer(value);
        return this._v >= value._v;
    }

    greaterThanOrEqual(value) {
        return this.greaterThanOrEquals(value);
    }

    add(value) {
        value = new Integer(value);
        return new Integer(this._v + value._v);
    }

    subtract(value) {
        value = new Integer(value);
        return new Integer(this._v - value._v);
    }

    multiply(value) {
        value = new Integer(value);
        return new Integer(this._v * value._v);
    }

    divide(value) {
        value = new Integer(value);
        return new Integer(this._v / value._v);
    }

    modulo(value) {
        value = new Integer(value);
        return new Integer(this._v % value._v);
    }
    
    remainder(value) {
        return this.modulo(value);
    }

    leftShift(value) {
        value = new Integer(value);
        return new Integer(this._v << value._v);
    }

    rightShift(value) {
        value = new Integer(value);
        return new Integer(this._v >> value._v);
    }

    unsignedRightShift(value) {
        value = new Integer(value);
        return new Integer(this._v >>> value._v);
    }

    and(value) {
        value = new Integer(value);
        return new Integer(this._v & value._v);
    }

    xor(value) {
        value = new Integer(value);
        return new Integer(this._v ^ value._v);
    }

    or(value) {
        value = new Integer(value);
        return new Integer(this._v | value._v);
    }

    eqv(value) {
        value = new Integer(value);
        return new Integer(~(this._v ^ value._v));
    }

    imp(value) {
        value = new Integer(value);
        return new Integer(~this._v | value._v);
    }

    toString() {
        return this._v.toString();
    }

    valueOf() {
        return this._v;
    }
}

Integer.MIN_VALUE = -0x80000000;
Integer.MAX_VALUE = 0x7FFFFFFF;

const Long_MIN_VALUE = -(BigInt(2) ** BigInt(63));
const Long_MAX_VALUE = (BigInt(2) ** BigInt(63)) - 1n;

export class Long {
    constructor(value) {
        if (value instanceof Long) {
            value = value.valueOf();
        }
        value = BigInt(value);
        value = value < Long_MIN_VALUE ? Long_MIN_VALUE : value > Long_MAX_VALUE ? Long_MAX_VALUE : value;
        this._v = value;
    }

    equals(value) {
        value = new Long(value);
        return this._v == value._v;
    }

    lessThan(value) {
        value = new Long(value);
        return this._v < value._v;
    }

    lessThanOrEquals(value) {
        value = new Long(value);
        return this._v <= value._v;
    }

    lessThanOrEqual(value) {
        return this.lessThanOrEquals(value);
    }

    greaterThan(value) {
        value = new Long(value);
        return this._v > value._v;
    }

    greaterThanOrEquals(value) {
        value = new Long(value);
        return this._v >= value._v;
    }

    greaterThanOrEqual(value) {
        return this.greaterThanOrEquals(value);
    }

    add(value) {
        value = new Long(value);
        return new Long(this._v + value._v);
    }

    subtract(value) {
        value = new Long(value);
        return new Long(this._v - value._v);
    }

    multiply(value) {
        value = new Long(value);
        return new Long(this._v * value._v);
    }

    divide(value) {
        value = new Long(value);
        return new Long(this._v / value._v);
    }

    modulo(value) {
        value = new Long(value);
        return new Long(this._v % value._v);
    }
    
    remainder(value) {
        return this.modulo(value);
    }

    leftShift(value) {
        value = new Long(value);
        return new Long(this._v << value._v);
    }

    rightShift(value) {
        value = new Long(value);
        return new Long(this._v >> value._v);
    }

    unsignedRightShift(value) {
        value = new Long(value);
        return new Long(this._v >>> value._v);
    }

    and(value) {
        value = new Long(value);
        return new Long(this._v & value._v);
    }

    xor(value) {
        value = new Long(value);
        return new Long(this._v ^ value._v);
    }

    or(value) {
        value = new Long(value);
        return new Long(this._v | value._v);
    }

    eqv(value) {
        value = new Long(value);
        return new Long(~(this._v ^ value._v));
    }

    imp(value) {
        value = new Long(value);
        return new Long(~this._v | value._v);
    }

    toString() {
        return this._v.toString();
    }

    valueOf() {
        return this._v;
    }
}

Long.MIN_VALUE = Long_MIN_VALUE;
Long.MAX_VALUE = Long_MAX_VALUE;

export class Single {
    constructor(value) {
        if (value instanceof Single) {
            value = value[0];
        } else if (typeof value == 'string') {
            value = parseFloat(value);
        }
        this._array = new SingleArray(value);
    }

    equals(value) {
        value = new Single(value);
        return this._array[0] == value._array[0];
    }

    lessThan(value) {
        value = new Single(value);
        return this._array[0] < value._array[0];
    }

    lessThanOrEquals(value) {
        value = new Single(value);
        return this._array[0] <= value._array[0];
    }

    lessThanOrEqual(value) {
        return this.lessThanOrEquals(value);
    }

    greaterThan(value) {
        value = new Single(value);
        return this._array[0] > value._array[0];
    }

    greaterThanOrEquals(value) {
        value = new Single(value);
        return this._array[0] >= value._array[0];
    }

    greaterThanOrEqual(value) {
        return this.greaterThanOrEquals(value);
    }

    add(value) {
        value = new Single(value);
        return new Single(this._array[0] + value._array[0]);
    }

    subtract(value) {
        value = new Single(value);
        return new Single(this._array[0] - value._array[0]);
    }

    multiply(value) {
        value = new Single(value);
        return new Single(this._array[0] * value._array[0]);
    }

    divide(value) {
        value = new Single(value);
        return new Single(this._array[0] / value._array[0]);
    }

    modulo(value) {
        value = new Single(value);
        return new Single(this._array[0] % value._array[0]);
    }
    
    remainder(value) {
        return this.modulo(value);
    }

    leftShift(value) {
        value = new Single(value);
        return new Single(this._array[0] << value._array[0]);
    }

    rightShift(value) {
        value = new Single(value);
        return new Single(this._array[0] >> value._array[0]);
    }

    unsignedRightShift(value) {
        value = new Single(value);
        return new Single(this._array[0] >>> value._array[0]);
    }

    and(value) {
        value = new Single(value);
        return new Single(this._array[0] & value._array[0]);
    }

    xor(value) {
        value = new Single(value);
        return new Single(this._array[0] ^ value._array[0]);
    }

    or(value) {
        value = new Single(value);
        return new Single(this._array[0] | value._array[0]);
    }

    eqv(value) {
        value = new Single(value);
        return new Single(~(this._array[0] ^ value._array[0]));
    }

    imp(value) {
        value = new Single(value);
        return new Single(~this._array[0] | value._array[0]);
    }

    toString() {
        return this._array[0].toString();
    }

    valueOf() {
        return this._array[0];
    }
}

export class Char {
    constructor(value) {
        if (value instanceof Char) {
            value = value[0];
        }
        this._v = value >>> 0;
        this._v = this._v <= 0x10FFFF ? this._v : 0x10FFFF;
    }

    equals(value) {
        value = new Char(value);
        return this._v == value._v;
    }

    lessThan(value) {
        value = new Char(value);
        return this._v < value._v;
    }

    lessThanOrEquals(value) {
        value = new Char(value);
        return this._v <= value._v;
    }

    lessThanOrEqual(value) {
        return this.lessThanOrEquals(value);
    }

    greaterThan(value) {
        value = new Char(value);
        return this._v > value._v;
    }

    greaterThanOrEquals(value) {
        value = new Char(value);
        return this._v >= value._v;
    }

    greaterThanOrEqual(value) {
        return this.greaterThanOrEquals(value);
    }

    add(value) {
        value = new Char(value);
        return new Char(this._v + value._v);
    }

    subtract(value) {
        value = new Char(value);
        return new Char(this._v - value._v);
    }

    multiply(value) {
        value = new Char(value);
        return new Char(this._v * value._v);
    }

    divide(value) {
        value = new Char(value);
        return new Char(this._v / value._v);
    }

    modulo(value) {
        value = new Char(value);
        return new Char(this._v % value._v);
    }
    
    remainder(value) {
        return this.modulo(value);
    }

    leftShift(value) {
        value = new Char(value);
        return new Char(this._v << value._v);
    }

    rightShift(value) {
        value = new Char(value);
        return new Char(this._v >> value._v);
    }

    unsignedRightShift(value) {
        value = new Char(value);
        return new Char(this._v >>> value._v);
    }

    and(value) {
        value = new Char(value);
        return new Char(this._v & value._v);
    }

    xor(value) {
        value = new Char(value);
        return new Char(this._v ^ value._v);
    }

    or(value) {
        value = new Char(value);
        return new Char(this._v | value._v);
    }

    eqv(value) {
        value = new Char(value);
        return new Char(~(this._v ^ value._v));
    }

    imp(value) {
        value = new Char(value);
        return new Char(~this._v | value._v);
    }

    toString() {
        return this._v.toString();
    }

    valueOf() {
        return this._v;
    }
}

Char.MIN_VALUE = 0;
Char.MAX_VALUE = 0x10FFFF;