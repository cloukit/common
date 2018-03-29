<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

Import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// (1) Package Imports
import { CloukitCommonModule } from '@cloukit/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // (2) Register Imports
    CloukitCommonModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```

&nbsp;

### Use the directives

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

For more complex examples see the source code of the Demo Stories above.

&nbsp;

### Version Compatibilty

You can read the [release comments](https://github.com/cloukit/common/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=5.0.0         | 1.6.1 - current           |
| >=4.0.0         | 1.1.0 - 1.6.0             |

To install a specific version use:

```
yarn add @cloukit/common@1.6.0
```

