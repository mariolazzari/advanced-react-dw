export function withTheme(Component: HTMLElement) {
  // in reality that will come from something like context
  const isDark = true;
  const theme = isDark ? "dark" : "light";

  // making sure that we pass all props to the component back
  // and also inject the new one: theme
  return (props: typeof Component) => <Component {...props} theme={theme} />;
}
