# Accessibility Audit Notes

## Axe DevTools

I ran an accessibility audit of the Todo App using Axe DevTools.

Initially, Axe DevTools reported 3 serious color-contrast issues on the Complete button. The button background color was changed to improve the contrast between the green background and white text.

After fixing the color contrast, I ran the Axe DevTools scan again.

**Result: 0 Critical issues and 0 Serious issues.**

## Screen Reader Testing

I tested the Todo App using Windows Narrator, the built-in Windows screen reader. I navigated through the application using the keyboard and listened to how the screen reader announced the different elements.

The main heading, input fields, filter buttons, todo information, and action buttons were generally clear. Narrator announced the task title, description, created date, and buttons such as Edit, Delete, and Complete.

One confusing part was the theme toggle because it was originally a clickable SVG element instead of a semantic button. I fixed this by changing it to a button and adding an accessible label so the screen reader could identify its purpose.

The Delete button already had visible "Delete" text, and the Complete control was already a real button, so no unnecessary ARIA changes were made.

## Final Result

* Axe DevTools: **0 Critical issues**
* Axe DevTools: **0 Serious issues**
* Screen reader: **Tested with Windows Narrator**
* Theme toggle: **Changed to semantic button**
* Delete and Complete controls: **Keyboard-accessible semantic buttons**
