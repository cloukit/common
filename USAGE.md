<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

Use the **\[cloukitHasFocus\]** directive on any input element like so.
Where `hasFocus1` is a `boolean`. Once the boolean value is true, the element
will be focused.

```html
<form>
  ...
  <input
   type="text"
   [cloukitHasFocus]="hasFocus1"
  />
  ...
</form>
```

Use the **(cloukitClickOutside)** directive on any dom element like so.
You can trigger a function once the outside of the element is clicked.

```html
<div
  (cloukitClickOutside)="doSomething()"
>
  foo
</div>
```


Please note that you have to import `CloukitCommonModule`.
