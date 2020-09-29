import * as dayjs from 'dayjs';

import { Transformer } from './Transformer';

export class SubtractDateComponentTransformer extends Transformer {
  static get title() {
    return 'Subtract Date Component';
  }

  static get name() {
    return 'subtractDateComponent';
  }

  static get arguments() {
    return [
      {
        name: 'Value To Subtract',
        key: 'valueToSubtract',
        required: true,
      },
      {
        name: 'Unit',
        key: 'unit',
        required: true,
      },
    ];
  }

  transform(value, args) {
    const {
      valueToSubtract,
      unit,
    } = args;

    return dayjs(value).subtract(valueToSubtract, unit);
  }
}
