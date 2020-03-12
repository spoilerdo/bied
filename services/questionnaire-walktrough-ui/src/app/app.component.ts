import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>
        Page Content <button nbButton>Hello World</button>

        <nb-reveal-card>
          <nb-card-front>
            <nb-card accent="success">
              <nb-card-header>Front Card Header</nb-card-header>
              <nb-card-body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula
                was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.
              </nb-card-body>
            </nb-card>
          </nb-card-front>
          <nb-card-back>
            <nb-card accent="primary">
              <nb-card-header>Back Card Header</nb-card-header>
              <nb-card-body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula
                was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.
              </nb-card-body>
            </nb-card>
          </nb-card-back>
        </nb-reveal-card>
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'questionnaire-walktrough-ui';
}
