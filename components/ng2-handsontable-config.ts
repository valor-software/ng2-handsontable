export enum Ng2HandsontableTheme {BS3 = 1, BS4 = 2}

export class Ng2HandsontableConfig {
  private static _theme: Ng2HandsontableTheme;
  static get theme():Ng2HandsontableTheme {
    // hack as for now
    let w: any = window;
    if (w && w.__theme === 'bs4') {
      return Ng2HandsontableTheme.BS4;
    }
    return (this._theme || Ng2HandsontableTheme.BS3);
  }
  static set theme(v:Ng2HandsontableTheme){
    this._theme = v;
  }
}
