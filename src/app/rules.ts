import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { DiogoListingTableComponent } from './componentes/diogo.listing.table.component';
import { DiogoEntityLineComponent } from './componentes/diogo.entityline';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .etr('list_entities', 'bug', DiogoListingTableComponent)
        .etr('list_entities', 'issue', DiogoListingTableComponent)
        .etr('list_entities', 'product', DiogoListingTableComponent)
        .etr('list_entities', 'project', DiogoListingTableComponent)
        .der('table_line', EntityLineComponent)
        .er('table_line', 'bug', DiogoEntityLineComponent)
        .er('table_line', 'issue', DiogoEntityLineComponent)
        .er('table_line', 'product', DiogoEntityLineComponent)
        .er('table_line', 'project', DiogoEntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
