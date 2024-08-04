export default defineAppConfig({
  ui: {
    primary: "main",
    gray: "grayscale",
    toggle: {
      default: {
        color: "main",
        variant: "main"
      }
    },
    icons: {
      dynamic: true
    },
    notifications: {
      position: "bottom-0 trasnlate-x-center",
      enterActiveClass: "transform ease-out duration-300 transition",
      enterFromClass:
        "translate-y-6 opacity-0 sm:translate-y-0 sm:translate-x-64",
      enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
      leaveActiveClass: "transition ease-in duration-100",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0"
    }
  }
});
