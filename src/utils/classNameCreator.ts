export const classNameCreator = (classes: any[]) => {
  let className = '';
  for (const c of classes) {
    if (c) {
      if (className) {
        className += ' ';
      }
      className += c;
    }
  }
  return className;
};
