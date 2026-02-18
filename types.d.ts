// eslint-disable-next-line spaced-comment
/// <reference types="@testing-library/jest-dom" />

declare module '*.svg' {
  const content: string;
  export default content;
}
