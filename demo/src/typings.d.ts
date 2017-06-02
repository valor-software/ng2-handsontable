// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
declare const chroma: any;

declare module jasmine {
  interface Matchers<T> {
    toHaveCssClass(expected: any): boolean;
  }
}
