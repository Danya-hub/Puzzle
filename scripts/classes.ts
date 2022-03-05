export class Helper {}

export class Complile {
  static _toAttrs(obj: object): string {
    let rez: string = '';

    for (const key in obj)
      rez += `${key}="${(obj as any)[key]}" `;

    return rez;
  }
}