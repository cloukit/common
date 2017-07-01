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


Of yourse you will need to import the `CommomToggleModule` and inject it into your main `NgModule`.


```typescript
// (1) Import the Module
import { CommomToggleModule } from '@cloukit/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // (2) Register it under 'imports'
    CommomToggleModule
  ],
  declarations: [ /* ... */ ],
  providers: [ /* ... */ ],
  bootstrap: [ /* ... */ ]
})
export class AppModule {}
```
