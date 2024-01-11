# Structure

To use the `Stepper` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div>
  <div class="md-stepper__stepper-container">
    <div class="md-stepper__stepper-list">
      <!--  Start of step -->
      <div class="md-stepper__stepper-list-item">
        <div class="md-stepper__step-title">
          <div class="md-stepper__step-title-badge-outer-border">
            <div class="md-stepper__step-title-badge [completed, selected, disabled]">
              [<MdCheckIcon width="{18}" />, index+1]
              <!-- Icon for checkmark, or the current steps number -->
            </div>
          </div>
          <h4 class="md-stepper__completed">{step-title}</h4>
        </div>
        <div class="md-stepper__step-content-container">
          <div class="md-stepper__step-content-sideline"></div>
          <div class="md-stepper__step-content-children [completed, selected, disabled]">
            STEP CONTENT GOES HERE
            <!-- Choose what to show -->
          </div>
        </div>
      </div>
      <!--  End of step, add as many of these as you want -->
    </div>
  </div>
</div>
```
