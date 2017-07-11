import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { TextareaFormLineComponent } from './widgets/textarea.formline';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .der('table_line', EntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .ptr('form_line', '*', 'description', null, TextareaFormLineComponent, { rows: '8', cols: '50' })
        .ptr('form_line', '*', 'summary', null, TextareaFormLineComponent, { rows: '5', cols: '50' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
