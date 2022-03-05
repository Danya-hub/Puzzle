import {
  Render
} from 'config/types';
import {
  Complile
} from 'scripts/classes';

function createElement(args: Array < Render > ): string[] {
  return args.map(prop => `<${prop.tag} ${Complile._toAttrs(prop.options)}>${createElement(prop.component)}</${prop.tag}>`);
}
